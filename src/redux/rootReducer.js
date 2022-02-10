// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from 'redux';
import artworks from './artworks/artworks';
import colorsFilter from './colors/colorsFilter';
import responseStatus from './status/status';

const rootReducer = combineReducers({
  artworks,
  colorsFilter,
  responseStatus,
});

export default rootReducer;
