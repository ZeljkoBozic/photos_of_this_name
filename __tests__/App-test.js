/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import counterReducer, {
  increment,
  // decrement,
  // incrementByAmount,
} from '../components/counter/counterSlice';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

const initialState = {
  value: 3,
  status: 'idle',
};

it('should handle increment', () => {
  const actual = counterReducer(initialState, increment());
  expect(actual.value).toEqual(4);
});
