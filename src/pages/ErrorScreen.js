import React from 'react';
import fetchArtwork from '../utils/fetchArtworks';

const tryAgain = () => fetchArtwork();
const ErrorScreen = () => (
  <section className="text-4XL mx-auto mt-auto h-52 w-full p-20 pt-10 text-center text-white">
    <p className="font-Work text-3xl font-bold"> Oops! Something went wrong!</p>
    <p className="font-Work my-5 italic text-gray-300">
      500: Internal Server Error
    </p>
    <p className="font-Lato my-8 text-xl font-semibold">
      Seems like, as I do, it could use a cup of coffee...
    </p>
    <span className="container flex w-full">
      <button
        type="button"
        onClick={tryAgain}
        className="font-Work mx-auto w-2/3 rounded border bg-gray-700 p-3 text-xl font-bold italic text-gray-300"
      >
        Try Again
      </button>
    </span>
  </section>
);

export default ErrorScreen;
