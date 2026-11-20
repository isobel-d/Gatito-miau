import {useState, useEffect} from "react"
import {Routes, Route} from 'react-router'
const API_URL = 'https://cataas.com/api/cats'

import HomePage from "./pages/home";
import GalleryPage from "./pages/Gallery";
import NotFoundPage from "./pages/NotFound";
import CatDetailsPage from "./pages/CatDetail";
import Header from "./components/Header";


const App = () => {
    const [cats, setCats] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [limit, setLimit] = useState(10);
    const [filter, setFilter] = useState('');


    useEffect(() => {
    setLoading(true);
    fetch(`https://cataas.com/api/cats?limit=${limit}`)
      .then((res) => {
        if(!res.ok) throw new Error('No hay Gatitos por mostrar (╥﹏╥) ');
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