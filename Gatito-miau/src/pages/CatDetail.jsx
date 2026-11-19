import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function CatDetail() {
  const { id } = useParams();
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://cataas.com/cat/${id}?json=true`)
      .then((res) => res.json())
      .then((data) => {
        setCat(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Cargando michi... 🐾</p>;
  }

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>✨ Detalles del Michi ✨</h2>
      
      <img
        src={`https://cataas.com/cat/${id}`}
        alt="Gatito kawaii"
        style={{
          maxWidth: '400px',
          width: '100%',
          borderRadius: '20px',
          boxShadow: '0 8px 20px rgba(255, 182, 193, 0.5)',
          margin: '1rem 0'
        }}
      />

      <div style={{ marginBottom: '1.5rem' }}>
        <p><strong>ID del michi:</strong> {id}</p>
        {cat?.tags?.length > 0 && (
          <p>
            <strong>Etiquetas:</strong>{' '}
            {cat.tags.map((tag) => `#${tag} `)}
          </p>
        )}
      </div>

      <Link to="/" className="btn-kawaii">⬅ Volver al inicio 🏠</Link>
    </div>
  );
}

export default CatDetail;