import axios from 'axios';
import { cacheAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions';

const http = axios.create({
  adapter: throttleAdapterEnhancer(
    cacheAdapterEnhancer(
      axios.defaults.adapter!,
    ), { threshold: 2500 },
  ),
  baseURL: process.env.REACT_APP_RAPIDAPI_ENDPOINT,
  headers: {
    'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
    'Cache-Control': 'no-cache',
  },
});

export default http;
