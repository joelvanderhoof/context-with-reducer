export const initialState = {
  firstName: '',
  lastName: '',
  giphyUrl: '',
};

export const actions = {
  setFirstName: firstName => ({ type: 'SET_FIRST_NAME', firstName }),
  setLastName: lastName => ({ type: 'SET_LAST_NAME', lastName }),
  getGiphy: queryString => ({ type: 'GET_GIPHY', q: queryString.replace(/ /g, '+') })
};

export default  (state = initialState, action) => {
    
  switch (action.type) {
      case 'GET_GIPHY':
          return {
              ...state,
              giphyUrl: action.payload,
          };
      case 'SET_FIRST_NAME':
          return {
              ...state,
              firstName: action.firstName
          };
      case 'SET_LAST_NAME':
          return {
              ...state,
              lastName: action.lastName
          };
      default:
          return state;
  }
}