import axios from "axios";

export const getPhotos = (rover, sol, camera) => async (dispatch) => {
  try {
    dispatch({
      type: 'PHOTOS_LIST_REQUEST'
    })
    const { data } = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=DEMO_KEY`);
    dispatch({
      type: 'PHOTOS_LIST_SUCCESS',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'PHOTOS_LIST_FAIL',
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const modalIsOpen = () => async (dispatch) => {
  dispatch({
    type: 'MODAL_IS_OPEN',
    payload: true
  })
}

export const modalIsClosed = () => async (dispatch) => {
  dispatch({
    type: 'MODAL_IS_CLOSED',
    payload: false
  })
}
