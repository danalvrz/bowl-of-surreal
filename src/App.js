import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Homepage from './components/Homepage';
import Header from './components/Header';
import ArtworkPage from './components/Artworkpage';
import testy from './testo';
// import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  document.body.classList.add('bg-gray-900');
  const colorNormalizedArtwork = () => testy.data.forEach((element) => {
    if (element.color === null) {
      // eslint-disable-next-line no-param-reassign
      element.color = {
        h: 40, l: 21, s: 2, percentage: 0.002020851142084023, population: 10,
      };
    }
  });
  colorNormalizedArtwork();

  useEffect(() => {
    dispatch({ type: 'FETCH_ARTWORKS', payload: testy.data });
  });

  useEffect(() => {
    dispatch({ type: 'ALL', artworks: testy.data });
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
