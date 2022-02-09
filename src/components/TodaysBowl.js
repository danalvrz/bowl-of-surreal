import React from 'react';
import { Link } from 'react-router-dom';

const TodaysBowl = (payload) => {
  const artArray = [];
  let bgColor = '';
  const { visibleArtworkList } = payload;
  if (payload !== undefined && visibleArtworkList.length > 0) {
    // console.log(payload);
    visibleArtworkList.forEach((artwork) => {
      // if (artwork.color !== null) {
      bgColor = `hsl(${artwork.color.h}, ${artwork.color.s}%, ${artwork.color.l}%)`;
      // } else { bgColor = 'hsl(100, 50%, 50%)'; }
      artArray.push(
        <Link
          to={`/artwork/${artwork.id}`}
          key={artwork.id}
          style={{ backgroundColor: bgColor }}
          className="
      era-card h-48 w-1/2
      text-white flex"
        >
          <div className="flex-row p-5 h-full w-full">
            <p className="font-Work text-xl mb-auto text-right">{artwork.title}</p>
            <p className="font-Lato text-sm font-bold mt-1 text-right">{artwork.artist_title ? artwork.artist_title : 'Unknown'}</p>
          </div>
        </Link>,

      );
    });
    return artArray;
  }
  return (
    <div className="text-white font-Lato text-3xl font-bold mx-auto p-20 h-screen text-center">
      Oops! Seems like
      today&lsquo;s bowl doesn&lsquo;t have that color!
      {' '}
      <br />
      {' '}
      {' '}
      <br />
      {' '}
      Try a different one..
    </div>
  );
};
export default TodaysBowl;
