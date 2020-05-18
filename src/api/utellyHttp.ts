import createHttp from 'api/common';

const utellyHttp = createHttp(process.env.REACT_APP_RAPIDAPI_ENDPOINT, {
  'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
  'Cache-Control': 'no-cache',
});

export default utellyHttp;
