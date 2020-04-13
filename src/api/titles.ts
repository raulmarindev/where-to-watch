import http from 'api/http';
import ITitle from 'api/models/ITitle';
import { AxiosResponse } from 'axios';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => http.get(url).then(responseBody),
};

const Titles = {
  filter: (searchTerm?: string, countryCode: string = 'es'): Promise<ITitle[]> => requests.get(`/lookup?term=${searchTerm}&country=${countryCode}`),
  find: (sourceId: string, source: string = 'imdb', countryCode: string = 'es'): Promise<ITitle> => requests.get(`/idlookup?source_id=${sourceId}&source=${source}&country=${countryCode}`),
};

export default Titles;
