const artworksInitialState = [];

const artworks = (state = artworksInitialState, action) => {
  switch (action.type) {
    case 'FETCH_ARTWORKS':
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default artworks;
