import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ArtworkPage = () => {
  const { artworkId } = useParams();
  const artworks = useSelector((state) => state.artworks);
  const currentArtwork = artworks.filter((artwork) => artwork.id === parseInt(artworkId, 10))[0];
  const bgColor = `hsl(${currentArtwork.color.h}, ${currentArtwork.color.s}%, ${currentArtwork.color.l}%)`;
  return (
    <div>
      <section style={{ backgroundColor: bgColor }} className="home-card flex h-96 pt-8">
        <span className={`mx-auto my-auto text-center font-Lato text-3xl font-bold px-3 ${currentArtwork.color.l > 80 ? 'text-neutral-400' : 'text-white'}`}>
          {currentArtwork.title}
        </span>
      </section>

      <section className="details mb-20 text-white font-normal p-5">
        <img className="my-5 mx-auto" src={`https://www.artic.edu/iiif/2/${currentArtwork.image_id}/full/843,/0/default.jpg`} alt={currentArtwork.title} />
        <div className="h-8 bg-gray-800 px-4 pt-1 font-Work text-white my-3">
          Artwork Details
        </div>
        <div className="ml-4">
          <p className="text-xl font-Lato font-semibold">
            <span className="font-normal text-xl text-gray-400 mr-3">Artist:</span>
            {currentArtwork.artist_title ? currentArtwork.artist_title : 'Unknown'}
          </p>
          <p className="text-xl font-Lato font-semibold my-5">
            <span className="font-normal text-xl text-gray-400 mr-3">Date:</span>
            {currentArtwork.date_display ? currentArtwork.date_display : 'Unknown'}
          </p>
          <p className="text-xl font-Work my-5 font-semibold">
            <span className="font-normal text-xl text-gray-400 mr-1">Place of origin:</span>
            {' '}
            {currentArtwork.place_of_origin ? currentArtwork.place_of_origin : 'Unknown'}

          </p>
          <p className="font-bold text-xl font-Lato">
            <span className="font-normal text-xl text-gray-400 mr-2">Medium:</span>
            {' '}
            {currentArtwork.medium_display ? currentArtwork.medium_display : 'Unknown'}

          </p>
        </div>
      </section>
    </div>
  );
};

export default ArtworkPage;
