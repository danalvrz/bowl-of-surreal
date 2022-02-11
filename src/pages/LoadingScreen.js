import React from 'react';

const Loading = () => (
  <section className="text-4XL mx-auto mt-auto h-52 w-full flex-row items-center justify-start p-20 text-white">
    <div className="flex items-center justify-center">
      <div
        className="spinner-border inline-block h-10 w-10 animate-spin rounded-full border-4 border-dotted"
        role="status"
      />
    </div>
    <span className="m-5 flex items-center justify-center text-3xl font-bold">
      L O A D I N G
    </span>
  </section>
);

export default Loading;
