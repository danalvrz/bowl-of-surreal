import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cereal from '../imgs/cereal.png';
import TodaysBowl from '../components/TodaysBowl';
import Options from '../components/Options';

const Homepage = () => {
  let colorInput = '';
  const dispatch = useDispatch();
  const visibleArtworkList = useSelector((state) => state.colorsFilter);
  const allArtworks = useSelector((state) => state.artworks);
  return (
    <div>
      <Options />
      <section className="home-card flex h-60 w-full bg-gray-900 pt-20">
        <span className="font-Lato mx-auto w-1/2 py-6  text-right text-2xl font-bold text-white">
          The single best way to kick-art your day!
        </span>
        <span className="mx-auto pr-8 invert">
          <img src={Cereal} alt="ceral bowl" width="120" />
        </span>
      </section>
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
          <TodaysBowl visibleArtworkList={visibleArtworkList} />
        </section>
      </div>
    </div>
  );
};

export default Homepage;
