import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Close from '../imgs/close.png';

const Options = () => {
  const dispatch = useDispatch();
  const showMenu = useSelector((state) => state.optionsStatus);
  const navigate = useNavigate();
  return (
    <div
      className={`fixed z-50 h-screen w-full bg-gray-800 opacity-95 ${
        showMenu.show ? 'block' : 'hidden'
      }`}
    >
      <ul className="mx-auto mt-20 h-full w-2/3 flex-col text-center text-4xl font-bold text-white">
        <li className="py-6">
          <button type="button" onClick={() => navigate('/about')}>
            About
          </button>
        </li>
        <li className="py-6">
          <button type="button" onClick={() => navigate('/quiz')}>
            Take a Quiz
          </button>
        </li>
        <li className="py-6 font-normal">
          <a
            href="https://github.com/danalvrz/bowl-of-surreal"
            target="_blank"
            rel="noreferrer"
          >
            See source code
          </a>
        </li>
        <li className="flex justify-center py-20 invert">
          <button type="button" onClick={() => dispatch({ type: 'HIDE' })}>
            <img src={Close} alt="close icon" width={40} />
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Options;
