import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from '../pages/LoadingScreen';
import ErrorScreen from '../pages/ErrorScreen';

const TodaysBowl = (payload) => {
  const responseStatus = useSelector((state) => state.responseStatus);
  const artArray = [];
  let bgColor = '';
  const { visibleArtworkList } = payload;
  if (payload !== undefined && visibleArtworkList.length > 0) {
    visibleArtworkList.forEach((artwork) => {
      if (artwork.color !== null) {
        bgColor = `hsl(${artwork.color.h}, ${artwork.color.s}%, ${artwork.color.l}%)`;
      } else {
        bgColor = 'hsl(40, 2%, 21%)';
      }
      artArray.push(
        <Link
          to={`/artwork/${artwork.id}`}
          key={artwork.id}
          style={{ backgroundColor: bgColor }}
          className="
      era-card flex h-48
      w-1/2 lg:w-1/4 text-white"
        >
          <div className="h-full w-full flex-row p-5">
            <p
              className={`font-Work mb-auto text-right text-lg font-bold ${
                artwork.color.l > 80 ? 'text-neutral-400' : 'text-white'
              }`}
            >
              {artwork.title.length > 60
                ? artwork.title.substr(0, 60).concat('...')
                : artwork.title}
            </p>
            <p
              className={`font-Lato mt-1 text-right text-sm font-bold ${
                artwork.color.l > 80 ? 'text-neutral-400' : 'text-white'
              }`}
            >
              {artwork.artist_title ? artwork.artist_title : 'Unknown'}
            </p>
          </div>
        </Link>,
      );
    });
    return artArray;
  }
  if (responseStatus === 'LOADING') {
    return <Loading />;
  }
  if (responseStatus === 'ERROR') {
    return <ErrorScreen />;
  }
  return (
    <div className="font-Lato mx-auto h-screen p-20 text-center text-3xl font-bold text-white">
      Oops! Seems like today&lsquo;s bowl doesn&lsquo;t have that color!
      {' '}
      <br />
      {' '}
      <br />
      {' '}
      Try a different one..
    </div>
  );
};
export default TodaysBowl;
