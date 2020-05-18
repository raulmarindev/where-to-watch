import axios, { AxiosInstance } from 'axios';
import { cacheAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions';
import history from 'index';
import { toast } from 'react-toastify';

const createAxiosInstance = (baseUrl?: string, headers?: any) => axios.create({
  adapter: throttleAdapterEnhancer(
    cacheAdapterEnhancer(
        axios.defaults.adapter!,
    ), { threshold: 1200 },
  ),
  baseURL: baseUrl,
  headers,
});

const addAxiosInterceptors = (http: AxiosInstance) => {
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
};

const createHttp = (baseUrl?: string, headers?: any) => {
  const http = createAxiosInstance(baseUrl, headers);
  addAxiosInterceptors(http);
  return http;
};

export default createHttp;
