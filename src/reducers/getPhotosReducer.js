export const getPhotosReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PHOTOS_LIST_REQUEST':
      return { loading: true }
    case 'PHOTOS_LIST_SUCCESS':
      return { loading: false, ...action.payload }
    case 'PHOTOS_LIST_FAIL':
      return { loading: false, error: action.payload }
    default: return state
  }
}

