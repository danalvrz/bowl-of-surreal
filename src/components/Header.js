import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Arrow from '../imgs/arrow.png';
import Dots from '../imgs/dots.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();
  return (
    <div className="fixed z-40 w-full">
      <header className="sticky flex h-16 justify-between bg-gray-800 py-4 px-3">
        <button
          type="button"
          onClick={() => {
            navigate('/');
            dispatch({ type: 'HIDE' });
          }}
        >
          <img
            alt="arrow-back"
            src={Arrow}
            width="25"
            className={`invert ${
              pathname === '/' ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </button>
        <span className="font-Work text-2xl text-white">bowl-of-surreal</span>
        <button
          type="button"
          className="pr-3"
          onClick={() => dispatch({ type: 'SHOW' })}
        >
          <img alt="dots" src={Dots} width="25" className="pt-1 invert" />
        </button>
      </header>
    </div>
  );
};

export default Header;
