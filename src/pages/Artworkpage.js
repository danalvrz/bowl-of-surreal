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
    <div className="h-full">
      <section
        style={{ backgroundColor: bgColor }}
        className="home-card mx-auto w-3/4 flex justify-center py-20 rounded-b-3xl mix-blend-screen"
      >
        <h1
          className={`flex self-centerfont-Lato mx-10 px-10 text-center lg:text-3xl font-bold leading-loose border-b w-fit pb-6 ${currentArtwork.title.length < 120 ? 'text-3xl' : 'text-2xl'} ${
            currentArtwork.color.l > 80 ? 'text-neutral-500' : 'text-black'
          }`}
        >
          {currentArtwork.title}
        </h1>
      </section>

      <main className="lg:w-full lg:px-0 mx-auto details pb-10 font-normal text-white flex justify-center">
        <div className="w-full bg-white/10 rounded-r-3xl mr-6 my-8">
          <img
            className="my-20 max-h-[60rem] mx-auto"
            src={`https://www.artic.edu/iiif/2/${currentArtwork.image_id}/full/843,/0/default.jpg`}
            alt={currentArtwork.title}
          />
        </div>
        <section style={{ backgroundColor: bgColor }} className=" w-1/3 px-8 pt-10 pb-20 flex flex-col justify-start h-fit  mt-20 rounded-l-3xl">
          <h2 className="border-b border-slate-700 pb-12 font-Work my-10 h-10 text-slate-800 text-2xl lg:text-3xl w-fit text-left mix-blend-darken">
            Artwork Details
          </h2>

          <p className="font-Lato text-xl font-semibold text-black">
            <span className="mr-3 text-xl font-normal text-slate-800">
              Artist:
            </span>
            {currentArtwork.artist_title
              ? currentArtwork.artist_title
              : 'Unknown'}
          </p>
          <p className="font-Lato my-4 text-xl font-semibold text-black">
            <span className="mr-3 text-xl font-normal text-slate-800">
              Date:
            </span>
            {currentArtwork.date_display
              ? currentArtwork.date_display
              : 'Unknown'}
          </p>
          <p className="font-Work mb-4 text-xl font-semibold text-black">
            <span className="mr-1 text-xl font-normal text-slate-800">
              Place of origin:
            </span>
            {' '}
            {currentArtwork.place_of_origin
              ? currentArtwork.place_of_origin
              : 'Unknown'}
          </p>
          <p className="font-Lato text-xl font-bold text-black">
            <span className="mr-2 text-xl font-normal text-slate-800">
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
