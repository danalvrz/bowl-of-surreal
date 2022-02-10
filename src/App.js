import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import ArtworkPage from './pages/Artworkpage';
import fetchArtwork from './utils/fetchArtworks';

function App() {
  const dispatch = useDispatch();
  const artworksList = useSelector((state) => state.artworks);
  document.body.classList.add('bg-gray-900');

  useEffect(() => {
    fetchArtwork();
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
