import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import TodaysBowl from '../components/TodaysBowl';

const mockArtworksReducer = () => [{
  id: 0, title: 'test', date_display: 'test', place_of_origin: 'test', image_id: 0, medium_display: 'test',
}];
const mockColorsReducer = () => [{
  id: 0, title: 'test', date_display: 'test', place_of_origin: 'test', image_id: 0, medium_display: 'test',
}];

const mockReducer = () => combineReducers({
  mockArtworksReducer,
  mockColorsReducer,
});
const store = createStore(mockReducer);

describe('Todays bowl section', () => {
  it('renders TodaysBowl correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <TodaysBowl visibleArtworkList={mockColorsReducer} />
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
