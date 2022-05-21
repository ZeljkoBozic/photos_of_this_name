/**
 * @format
 */

import 'react-native';

import imagesReducer, {
  getImages,
} from '../thunks/imagesSlice';

describe('imagesSlice', () => {
  describe('imagesReducer', () => {
    const initialState = {status: 'idle', photos: []};

    it('sets status as pending when getImages is pending', () => {
      const action = {type: getImages.pending.type};
      const state = imagesReducer(initialState, action);
      expect(state).toEqual({status: 'loading', photos: []});
    });

    it('sets the status and photos when getImages is fulfilled', () => {
      const action = {
        type: getImages.fulfilled.type,
        payload: {photos: [{}, {}]},
      };
      const state = imagesReducer(initialState, action);
      expect(state).toEqual({status: 'idle', photos: {photos: [{}, {}]}});
    });

    it('sets status idle when getImages is rejected', () => {
      const action = {
        type: getImages.rejected.type,
        payload: {error: 'some error'},
      };
      const state = imagesReducer(initialState, action);
      expect(state).toEqual({status: 'idle', photos: []});
    });
  });
});
