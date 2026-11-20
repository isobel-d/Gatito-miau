import { useEffect, useState } from 'react';
import { Link } from 'react-router';

function Gallery() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://cataas.com/api/cats?limit=12')
      .then((res) => res.json())
      .then((data) => {
        setCats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Buscando gatitos... 🐱</p>;
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🌸 Galería de Gatitos 🌸</h1>
      
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}
      >
        {cats.map((cat) => (
          <div
            key={cat._id}
            style={{
              background: '#fff0f5',
              padding: '1rem',
              borderRadius: '16px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.08)'
            }}
          >
            <img
              src={`https://cataas.com/cat/${cat._id}`}
              alt="Gatito"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '12px',
                marginBottom: '0.8rem'
              }}
            />
            <Link to={`/gato/${cat._id}`} className="btn-kawaii">
              Ver detalles 🎀
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;