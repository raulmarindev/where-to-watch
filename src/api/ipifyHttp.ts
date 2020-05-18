import createHttp from 'api/common';

const ipifyHttp = createHttp(process.env.REACT_APP_IPIFY_ENDPOINT, {
  'Cache-Control': 'no-cache',
});

export default ipifyHttp;
