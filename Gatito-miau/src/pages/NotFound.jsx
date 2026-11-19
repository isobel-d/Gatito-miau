import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h1 style={{ fontSize: '4rem', margin: 0 }}>😿 404</h1>
      <h2>¡Ups! Este michi se perdió</h2>
      <p style={{ marginBottom: '2rem' }}>
        La página que buscas no existe o se fue a dormir una siesta.
      </p>
      <Link to="/" className="btn-kawaii">Regresar a casa 🐾</Link>
    </div>
  );
}

export default NotFound;