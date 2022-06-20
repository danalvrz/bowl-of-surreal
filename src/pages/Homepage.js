import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodaysBowl from '../components/TodaysBowl';
// import cerealB from '../imgs/cerealB.png';

const Homepage = () => {
  const welcome = document.getElementById('welcome');
  let colorInput = '';
  if (welcome) {
    welcome.style.backgroundSize = '25%';
  }

  const handleScroll = () => {
    if (welcome) {
      welcome.style.opacity = `${100 - (window.pageYOffset / 5)}%`;
      welcome.style.backgroundSize = `${25 + (window.pageYOffset / 40)}%`;
    }
  };
  window.addEventListener('scroll', handleScroll);

  const dispatch = useDispatch();
  const visibleArtworkList = useSelector((state) => state.colorsFilter);
  const allArtworks = useSelector((state) => state.artworks);

  return (
    <div
      id="main-page"
    >
      <section
        id="welcome"
        role="note"
        className="home-card h-full w-full flex-col py-12"
        style={{
          // eslint-disable-next-line global-require
          backgroundImage: `url(${require('../imgs/cerealB.png')})`, backgroundRepeat: 'no-repeat', backgroundPosition: '95% 100%',
        }}
      >
        <div className="mt-40">
          <h1 className="font-Work text-center text-2xl font-extrabold not-italic text-white lg:px-12 lg:text-left lg:text-8xl lg:font-semibold">
            Welcome to
            <br />
            bowl-of-surreal.
          </h1>
          <div className="mb-5 lg:p-0 flex flex-col lg:w-1/2">
            <p className="font-Lato text-right text-base font-normal leading-loose text-slate-300 lg:pt-8 lg:px-12 lg:text-left lg:text-xl">
              Every time you visit this site, it will display a random bowl of 20
              artworks from the
              {' '}
              <a
                href="https://www.artic.edu"
                className="mr-1 text-white font-semibold"
                target="_blank"
                rel="noreferrer"
              >
                Art Institute of Chicago
              </a>
              .
            </p>
            <p className="font-Lato text-right text-base font-normal leading-loose text-slate-300 lg:py-2 lg:px-12 lg:text-left lg:text-xl">
              Explore, enjoy, and test your knowledge with our daily quiz.
            </p>
          </div>
        </div>

      </section>
      <main>

        <div className="font-Work flex flex-col justify-center py-3 px-4 text-white my-20">
          <h2 className="text-6xl font-normal text-center py-5 border-b w-fit mx-auto">Today&apos;s bowl</h2>
          <div className="w-full">
            <div className="w-full flex my-10">
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
                className="mx-auto rounded-xl border bg-transparent p-4 px-10 text-white"
              >
                <option selected="selected">Select a color</option>
                <option value="all">All colors</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="orange">Orange</option>
                <option value="purple">Purple</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mb-auto">
          <section className="flex flex-wrap justify-around w-full px-5">
            <TodaysBowl visibleArtworkList={visibleArtworkList.array} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
