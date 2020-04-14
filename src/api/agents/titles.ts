import { IFilterResponse } from '../models/IFilterResponse';
import { IFindResponse } from '../models/IFindResponse';
import http from 'api/http';
import ITitle from 'api/models/ITitle';
import { AxiosResponse } from 'axios';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => http.get(url).then(responseBody),
};

const Titles = {
  filter: async (searchTerm?: string, countryCode: string = 'es'): Promise<ITitle[]> => {
    const response: IFilterResponse = await requests.get(`/lookup?term=${searchTerm}&country=${countryCode}`);
    return response.results;
  },
  find: async (sourceId: string, source: string = 'imdb', countryCode: string = 'es'): Promise<ITitle> => {
    const response: IFindResponse = await requests.get(`/idlookup?source_id=${sourceId}&source=${source}&country=${countryCode}`);
    return response.collection;
  },
};

export default Titles;
