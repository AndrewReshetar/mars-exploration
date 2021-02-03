export const modalReducer = (state = false, action) => {
  switch (action.type) {
    case 'MODAL_IS_OPEN':
      return action.payload
    case 'MODAL_IS_CLOSED':
      return action.payload
    default: return state
  }
}

