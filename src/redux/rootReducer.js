// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from 'redux';
import artworks from './artworks/artworks';
import colorsFilter from './colors/colorsFilter';

const rootReducer = combineReducers({
  artworks,
  colorsFilter,
});

export default rootReducer;
