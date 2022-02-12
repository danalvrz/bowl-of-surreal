import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cereal from '../imgs/cereal.png';
import TodaysBowl from '../components/TodaysBowl';

const Homepage = () => {
  let colorInput = '';
  const dispatch = useDispatch();
  const visibleArtworkList = useSelector((state) => state.colorsFilter);
  const allArtworks = useSelector((state) => state.artworks);
  return (
    <div>
      <section id="welcome" role="note" className="home-card flex-col h-64 w-full bg-gray-900 pt-20 mb-5">
        <h1 className="not-italic font-Work text-2xl  text-center font-bold text-white">Welcome!</h1>
        <div className="flex mb-5">
          <p className="italic font-Lato mx-auto w-2/5 text-base text-right font-normal text-white">
            <br />
            Everytime you visit this site, it will display a random bowl of 20 artworks.
            <br />
            Explore and enjoy!
          </p>
          <span className="mx-auto px-8 saturate-150">
            <img src={Cereal} alt="ceral bowl" width="150" />
          </span>
        </div>
      </section>
      <main>
        <div className="font-Work flex h-14 justify-between bg-gray-800 py-3 px-4 text-white">
          <span className="text-xl font-semibold">Today&apos;s bowl</span>
          <span>
            <select
              name="categories"
              onChange={(e) => {
                dispatch({
                  type: colorInput.value.toUpperCase(),
                  artworks: allArtworks,
                });
                e.target.blur();
              }}
              id="categories"
              ref={(node) => {
                colorInput = node;
              }}
              className="ml-10 h-8 rounded border bg-gray-900 px-1 text-white"
            >
              <option selected="selected">Select a color</option>
              <option value="all">All colors</option>
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="orange">Orange</option>
              <option value="purple">Prurple</option>
            </select>
          </span>
        </div>
        <div className="mb-auto">
          <section className="flex flex-wrap bg-gray-900">
            <TodaysBowl visibleArtworkList={visibleArtworkList.array} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
