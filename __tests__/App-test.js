/**
 * @format
 */

import 'react-native';

import counterReducer, {
  getImages,
} from '../components/counter/counterSlice';

describe('counterSlice', () => {
  describe('counterReducer', () => {
    const initialState = {status: 'idle', photos: []};

    it('sets status as pending when getImages is pending', () => {
      const action = {type: getImages.pending.type};
      const state = counterReducer(initialState, action);
      expect(state).toEqual({status: 'loading', photos: []});
    });

    it('sets the status and photos when getImages is fulfilled', () => {
      const action = {
        type: getImages.fulfilled.type,
        payload: {photos: [{}, {}]},
      };
      const state = counterReducer(initialState, action);
      expect(state).toEqual({status: 'idle', photos: {photos: [{}, {}]}});
    });

    it('sets status idle when getImages is rejected', () => {
      const action = {
        type: getImages.rejected.type,
        payload: {error: 'some error'},
      };
      const state = counterReducer(initialState, action);
      expect(state).toEqual({status: 'idle', photos: []});
    });
  });
});
