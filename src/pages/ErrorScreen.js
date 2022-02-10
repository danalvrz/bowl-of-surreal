import React from 'react';
import fetchArtwork from '../utils/fetchArtworks';

const tryAgain = () => fetchArtwork();
const ErrorScreen = () => (
  <section className="w-full h-52 text-4XL p-20 pt-10 text-white mt-auto mx-auto text-center">
    <p className="font-Work font-bold text-3xl"> Oops! Something went wrong!</p>
    <p className="font-Work text-gray-300 italic my-5">500: Internal Server Error</p>
    <p className="font-Lato font-semibold text-xl my-8">Seems like, as I do, it could use a cup of coffee...</p>
    <span className="w-full container flex"><button type="button" onClick={tryAgain} className="bg-gray-700 font-Work text-gray-300 italic font-bold border w-2/3 mx-auto p-3 rounded text-xl">Try Again</button></span>

  </section>
);

export default ErrorScreen;
