import React from 'react';

const Loading = () => (
  <section className="w-full h-52 text-4XL p-20 text-white mt-auto mx-auto flex-row justify-start items-center">
    <div className="flex justify-center items-center">
      <div className="spinner-border animate-spin inline-block w-10 h-10 border-4 border-dotted rounded-full" role="status" />
    </div>
    <span className="flex justify-center items-center m-5 font-bold text-3xl">L O A D I N G</span>
  </section>
);

export default Loading;
