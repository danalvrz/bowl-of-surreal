import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import ArtworkPage from './pages/Artworkpage';
import fetchArtwork from './utils/fetchArtworks';
import AboutPage from './pages/AboutPage';
import QuizPage from './pages/QuizPage';

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
    <div className="App bg-gradient-to-tl from-slate-800 via-slate-700  to-gray-900">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/artwork/:artworkId" element={<ArtworkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
