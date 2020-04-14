import axios from 'axios';
import { cacheAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions';
import history from 'index';
import { toast } from 'react-toastify';

const http = axios.create({
  adapter: throttleAdapterEnhancer(
    cacheAdapterEnhancer(
      axios.defaults.adapter!,
    ), { threshold: 1200 },
  ),
  baseURL: process.env.REACT_APP_RAPIDAPI_ENDPOINT,
  headers: {
    'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
    'Cache-Control': 'no-cache',
  },
});

http.interceptors.response.use(undefined, (error) => {
  if (error.response) {
    const { status } = error.response;

    switch (status) {
      case 400:
      case 404:
        history.push('/notfound');
        break;
      case 500:
        toast.error('Server error - check the terminal for more info!');
        break;
      default:
        toast.error('Unknown error - check the terminal for more info!');
    }

    throw error.response;
  } else if (error.message === 'Network Error') {
    toast.error('Network error - make sure the API is running!');
    throw error;
  }
});

export default http;
