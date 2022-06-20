import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Arrow from '../imgs/arrow.png';
import Dots from '../imgs/dots.png';
import Options from './Options';
import Cereals from '../imgs/cereals.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();
  return (
    <div className="fixed z-40 w-full">
      <header className="sticky flex h-fit justify-between bg-gray-800 lg:bg-transparent px-5 lg:p-10 lg:pt-6">
        <div className="">
          <button
            className="m-0 p-0 saturate-150"
            type="button"
            id="go-back"
            onClick={() => navigate('/')}
          >
            <img src={Cereals} alt="ceral bowl" width="75" />
          </button>
          <button
            type="button"
            id="go-back"
            onClick={() => {
              navigate('/');
              dispatch({ type: 'HIDE' });
            }}
            className={`lg:hidden ${
              pathname === '/' ? 'hidden' : 'block'
            }`}
          >
            <img
              alt="arrow-back"
              src={Arrow}
              width="25"
              className=""
            />
          </button>
        </div>
        <h1 className="font-Work text-2xl text-white lg:hidden ">bowl-of-surreal</h1>
        <button
          type="button"
          className="ml-auto max-w-fit"
          onClick={() => dispatch({ type: 'SHOW' })}
        >
          <img alt="options" src={Dots} width="35" className="invert lg:min-w-[50px]" />
        </button>
      </header>
      <Options />
    </div>
  );
};

export default Header;
