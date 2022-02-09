const initialVisibleArtwork = [];
const colorsFilter = (artworks = initialVisibleArtwork, action) => {
  switch (action.type) {
    case 'ALL':
      return action.artworks;
    case 'BLUE':
      return action.artworks.filter((artwork) => artwork.color.h >= 180 && artwork.color.h <= 220);
    case 'RED':
      return action.artworks.filter((artwork) => artwork.color.h >= 300 || artwork.color.h <= 10);
    case 'YELLOW':
      return action.artworks.filter((artwork) => artwork.color.h > 40 && artwork.color.h <= 55);
    case 'GREEN':
      return action.artworks.filter((artwork) => artwork.color.h > 55 && artwork.color.h < 180);
    case 'ORANGE':
      return action.artworks.filter((artwork) => artwork.color.h > 10 && artwork.color.h <= 40);
    case 'PURPLE':
      return action.artworks.filter((artwork) => artwork.color.h > 220 && artwork.color.h < 300);
    default:
      return artworks;
  }
};

export default colorsFilter;
