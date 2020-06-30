//import { ADD_WORDS, CREATE_IDEA ,INPUT_WORD} from '../Actions'
const initialState = {
  inputValue: "",
};
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case '':
      return []
    default:
      return state
  }
}

export default reducer