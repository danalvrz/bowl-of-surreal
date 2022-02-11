const initialVisibleArtwork = { array: [], selectedColor: '' };
const colorsFilter = (artworks = initialVisibleArtwork, action) => {
  switch (action.type) {
    case 'ALL':
      return { ...artworks, array: action.artworks, selectedColor: action.type };
    case 'BLUE':
      return {
        ...artworks,
        array: action.artworks.filter(
          (artwork) => artwork.color.h >= 180 && artwork.color.h <= 220,
        ),
        selectedColor: action.type,
      };
    case 'RED':
      return {
        ...artworks,
        array: action.artworks.filter((artwork) => artwork.color.h >= 300 || artwork.color.h <= 10),
        selectedColor: action.type,
      };
    case 'YELLOW':
      return {
        ...artworks,
        array: action.artworks.filter((artwork) => artwork.color.h > 40 && artwork.color.h <= 55),
        selectedColor: action.type,
      };
    case 'GREEN':
      return {
        ...artworks,
        array: action.artworks.filter((artwork) => artwork.color.h > 55 && artwork.color.h < 180),
        selectedColor: action.type,
      };
    case 'ORANGE':
      return {
        ...artworks,
        array: action.artworks.filter((artwork) => artwork.color.h > 10 && artwork.color.h <= 40),
        selectedColor: action.type,
      };
    case 'PURPLE':
      return {
        ...artworks,
        array: action.artworks.filter((artwork) => artwork.color.h > 220 && artwork.color.h < 300),
        selectedColor: action.type,
      };
    default:
      return artworks;
  }
};

export default colorsFilter;
