import React from 'react';
import Cereal from '../imgs/cereal.png';

const AboutPage = () => (
  <section className="text-4XL mx-auto mt-auto h-52 w-full p-20 pt-20 text-center text-white">
    <p className="font-Work pt-10 text-4xl font-bold"> About this app</p>
    <p className="font-Lato py-10 text-xl leading-10">
      Bowl-of-surreal is a fun little treat to enjoy while having a bowl of
      cereal in the morning. It was possible thanks to the
      {' '}
      <a
        href="https://api.artic.edu/docs/"
        className="text-gray-400"
        target="_blank"
        rel="noreferrer"
      >
        Art Institute of Chicago API
      </a>
      , and will pour you a colorful bowl of artworks to explore.
      <br />
      <br />
      {' '}
      Each item had a
      {' '}
      <a
        href="https://www.w3schools.com/colors/colors_hsl.asp"
        className="text-gray-400"
        target="_blank"
        rel="noreferrer"
      >
        HSL color code
      </a>
      {' '}
      assigned by the institute as part the piece&apos;s details, which was used
      to add color to the this UI.
      <br />
      <br />
      Happy surreal-bowling!
    </p>
    <div className="flex justify-center invert">
      <img src={Cereal} alt="ceral bowl" width="120" />
    </div>
  </section>
);

export default AboutPage;
