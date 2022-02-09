import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Arrow from '../imgs/arrow.png';
import Dots from '../imgs/dots.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="w-full fixed z-50">
      <header className="flex sticky h-16 justify-between bg-gray-800 py-4 px-3">
        <button type="button" onClick={() => navigate(-1)}>
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
        <span className="pr-3">
          <img alt="arrow-back" src={Dots} width="25" className="pt-1 invert" />
        </span>
      </header>
    </div>
  );
};

export default Header;
