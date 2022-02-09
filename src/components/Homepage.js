import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cereal from '../imgs/cereal.png';
import TodaysBowl from './TodaysBowl';

const Homepage = () => {
  let colorInput = '';
  const dispatch = useDispatch();
  const visibleArtworkList = useSelector((state) => state.colorsFilter);
  const allArtworks = useSelector((state) => state.artworks);
  return (
    <div>
      <section className="home-card pt-20 w-full bg-gray-900 h-60 flex border-t border-b">
        <span className="w-1/2 text-white font-bold py-8  font-Lato mx-auto text-2xl text-right">
          The single best way to kick-art your day!
        </span>
        <span className="mx-auto pr-8 invert">
          <img src={Cereal} alt="ceral bowl" width="120" />
        </span>
      </section>
      <div className="bg-gray-800 text-white h-14 py-3 px-4 font-Work flex justify-between">
        <span className="text-xl font-semibold">Today&apos;s bowl</span>
        <span>
          <select
            name="categories"
            onChange={(e) => {
              dispatch({
                type: colorInput.value.toUpperCase(),
                artworks: allArtworks,
              }); e.target.blur();
            }}
            id="categories"
            ref={(node) => {
              colorInput = node;
            }}
            className="ml-10 h-8 rounded px-1 text-white bg-gray-900 border"
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
