import { combineReducers } from 'redux';
import { getPhotosReducer } from './getPhotosReducer';
import { modalReducer } from './modalReducer'

export const rootReducer = combineReducers({
  photos: getPhotosReducer,
  modal: modalReducer
})