
import axios from 'axios';

// the middleware watches for action types that have async effects then calls dispatch on those effects
// If an action does not have an async type, dispatch is called on the action
export default dispatch =>  async action => {
  switch (action.type) {
      case 'GET_GIPHY':
          const result = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${action.q}&api_key=5fmGkZqf1Nt7uYGyJdnQZuVYtEhDgeO7&limit=1`);
          return(dispatch({
              type: action.type,
              payload: result.data.data[0].images.downsized_large.url,
          }));
      default:
      return dispatch(action);
  }
};
