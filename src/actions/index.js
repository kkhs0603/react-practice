export const SET_TEXT = 'SET_TEXT'

export  const setText = (value) => {
  return {
    type: SET_TEXT,
    value,
  }
}