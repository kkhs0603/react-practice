import { SET_TEXT } from '../actions'
const initialState = {
  inputValue: "",
};
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_TEXT:
      return state
    default:
      return state
  }
}

export default reducer