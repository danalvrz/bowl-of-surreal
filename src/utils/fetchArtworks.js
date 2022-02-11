import store from '../redux/configureStore';
import colorNormalizer from './colorNormalizer';

const fetchOptions = { method: 'GET' };

const fetchArtwork = async (options = fetchOptions) => {
  const baseURL = `https://api.artic.edu/api/v1/artworks?limit=20&fields=id,title,artist_title,alt_text,image_id,color,date_display,place_of_origin,medium_display,main_reference_number&page=${Math.floor(Math.random() * 500)}`;
  store.dispatch({ type: 'LOADING' });
  try {
    const response = await fetch(baseURL, options);
    if (response.ok) {
      store.dispatch({ type: 'OK' });
      response.json().then((data) => store.dispatch({ type: 'FETCH_ARTWORKS', payload: colorNormalizer(data.data) }));
    }
    if (!response.ok && response.status === 500) {
      store.dispatch({ type: 'ERROR' });
    }
    throw new Error(response.status);
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(error.message);
  }
};

export default fetchArtwork;
