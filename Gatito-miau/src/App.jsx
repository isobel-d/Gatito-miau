import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";


// API que trae una lista de gatitos en formato JSON
const API_URL = 'https://cataas.com/api/cats';


import HomePage from "./pages/Home";
import GalleryPage from "./pages/Gallery";
import NotFoundPage from "./pages/NotFound";
import CatDetailsPage from "./pages/CatDetail";
import Header from "./components/Header";


const App = () => {
    // Los mismos estados que usó el profe
    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [limit, setLimit] = useState(10);
    const [filter, setFilter] = useState('');


    // Al montar la app o cambiar el límite, pedimos los michis
    useEffect(() => {
        setLoading(true);
        fetch(`${API_URL}?limit=${limit}`)
          .then((res) => {
            if(!res.ok) throw new Error('¡Fallo al obtener los michis!');
            return res.json();
          })
          .then((data) => {
            setCats(data);
            setLoading(false);
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          });
    }, [limit]);


    return (
      <>
        <Header />
        <Routes>
          <Route path='/' element={ 
            <HomePage
              cats={cats}
              filter={filter}
              setFilter={setFilter}
              limit={limit}
              setLimit={setLimit}
              loading={loading}
              error={error}
            />
          }/>
          <Route path='/galeria' element={<GalleryPage />} />
          <Route path="/gato/:id" element={<CatDetailsPage />}/>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </>
    );
}


export default App;