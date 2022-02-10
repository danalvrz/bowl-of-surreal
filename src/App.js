import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Homepage from './components/Homepage';
import Header from './components/Header';
import ArtworkPage from './components/Artworkpage';
import colorNormalizer from './colorNormalizer';

function App() {
  const dispatch = useDispatch();
  const artworksList = useSelector((state) => state.artworks);
  const baseURL = `https://api.artic.edu/api/v1/artworks?limit=20&fields=id,title,artist_title,alt_text,image_id,color,date_display,place_of_origin,medium_display,main_reference_number&page=${Math.floor(Math.random() * 500)}`;
  const fectchOptions = { method: 'GET' };
  document.body.classList.add('bg-gray-900');

  useEffect(() => {
    dispatch({ type: 'LOADING' });
    const initialFetch = (url = baseURL, options = fectchOptions) => fetch(url, options)
      .then((response) => {
        if (response.ok) {
          dispatch({ type: 'OK' });
          response.json().then((data) => dispatch({ type: 'FETCH_ARTWORKS', payload: colorNormalizer(data.data) }));
        }
        if (!response.ok && response.status === 500) {
          dispatch({ type: 'ERROR' });
        }
        throw new Error(response.status);
      })
      .catch((error) => console.error(error.message));
    initialFetch();
  }, []);

  useEffect(() => {
    dispatch({ type: 'ALL', artworks: artworksList });
  });

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/artwork/:artworkId" element={<ArtworkPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
