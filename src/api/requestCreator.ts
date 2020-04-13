import axios, { AxiosResponse, CancelTokenSource } from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_RAPIDAPI_HOST;
axios.defaults.headers.common['x-rapidapi-host'] = process.env.REACT_APP_RAPIDAPI_HOST;
axios.defaults.headers.common['x-rapidapi-key'] = process.env.REACT_APP_RAPIDAPI_KEY;

const cache = new Map<string, AxiosResponse<any>>();

const makeRequestCreator = () => {
  let cancelTokenSource: CancelTokenSource;

  return async (url: string) => {
    // Check if we made a request
    if (cancelTokenSource) {
      // Cancel the previous request before making a new request
      console.log('request cancelled');
      cancelTokenSource.cancel();
    }

    // Create a new CancelToken
    cancelTokenSource = axios.CancelToken.source();

    try {
      if (cache.has(url)) {
        return cache.get(url);
      }

      cache.set(url, await axios(url, { cancelToken: cancelTokenSource.token }));
      console.log(cache.get(url));
      return cache.get(url);
    } catch (error) {
      if (axios.isCancel(error)) {
        // Handle if request was cancelled
        console.log('Request canceled', error.message);
      } else {
        // Handle usual errors
        console.log('Something went wrong: ', error.message);
      }

      return error;
    }
  };
};

export default makeRequestCreator();
