import { Link } from "react-router";


const HomePage = ({ cats, filter, setFilter, limit, setLimit, loading, error }) => {
  if (loading) return <h2 className="status-message">Cargando michis... 🐾</h2>;
  if (error) return <h2 className="status-message error">Error: {error} 😿</h2>;


  return (
    <main className="home-container">
      <h1>¡Explora los Gatitos! ✨</h1>


      <div className="top-controls">
        <div className="filter">
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        
        <div className="controls">
          <label>Michis a mostrar:</label>
          <select value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
            <option value={5}>5</option>
            <option value={12}>12</option>
            <option value={24}>24</option>
          </select>
        </div>
      </div>



      {/* Reemplazamos el coin-card por cat-card */}
      <div className="grid">
        {cats.map((cat, index) => {
          const catId = cat._id || cat.id || `michi-${index}`;

          return (
            <div key={catId} className="cat-card">
              <img
                src={`https://cataas.com/cat/${catId}`}
                alt="Michi hermoso"
                className="cat-image"
              />
              <div className="cat-header">
                {/* Convertimos a texto por si acaso y luego cortamos */}
                <h3>Michi #{String(catId).slice(0, 4)}</h3>
              </div>
              <Link to={`/gato/${catId}`} className="btn-kawaii">Ver detalles 🎀</Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};


export default HomePage;