import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ArtworkPage = () => {
  const { artworkId } = useParams();
  const artworks = useSelector((state) => state.artworks);
  window.scrollTo(0, 0);
  const currentArtwork = artworks.filter(
    (artwork) => artwork.id === parseInt(artworkId, 10),
  )[0];
  const bgColor = `hsl(${currentArtwork.color.h}, ${currentArtwork.color.s}%, ${currentArtwork.color.l}%)`;
  return (
    <div>
      <section
        style={{ backgroundColor: bgColor }}
        className="home-card flex h-96 pt-8"
      >
        <h1
          className={`font-Lato mx-auto my-auto px-10 text-center  font-bold ${currentArtwork.title.length < 120 ? 'text-3xl' : 'text-2xl'} ${
            currentArtwork.color.l > 80 ? 'text-neutral-400' : 'text-white'
          }`}
        >
          {currentArtwork.title}
        </h1>
      </section>

      <main className="details mb-20 font-normal text-white">
        <img
          className="my-5 mx-auto p-5"
          src={`https://www.artic.edu/iiif/2/${currentArtwork.image_id}/full/843,/0/default.jpg`}
          alt={currentArtwork.title}
        />
        <h2 className="font-Work my-3 h-10 bg-gray-800 px-4 pt-1 text-white text-2xl w-full">
          Artwork Details
        </h2>
        <section className="p-5">
          <p className="font-Lato text-xl font-semibold">
            <span className="mr-3 text-xl font-normal text-gray-400">
              Artist:
            </span>
            {currentArtwork.artist_title
              ? currentArtwork.artist_title
              : 'Unknown'}
          </p>
          <p className="font-Lato my-5 text-xl font-semibold">
            <span className="mr-3 text-xl font-normal text-gray-400">
              Date:
            </span>
            {currentArtwork.date_display
              ? currentArtwork.date_display
              : 'Unknown'}
          </p>
          <p className="font-Work my-5 text-xl font-semibold">
            <span className="mr-1 text-xl font-normal text-gray-400">
              Place of origin:
            </span>
            {' '}
            {currentArtwork.place_of_origin
              ? currentArtwork.place_of_origin
              : 'Unknown'}
          </p>
          <p className="font-Lato text-xl font-bold">
            <span className="mr-2 text-xl font-normal text-gray-400">
              Medium:
            </span>
            {' '}
            {currentArtwork.medium_display
              ? currentArtwork.medium_display
              : 'Unknown'}
          </p>
        </section>
      </main>
    </div>
  );
};

export default ArtworkPage;
