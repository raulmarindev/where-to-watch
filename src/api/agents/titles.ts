import http from 'api/http';
import { IFilterResponse } from 'api/models/IFilterResponse';
import { IFindResponse } from 'api/models/IFindResponse';
import ITitle from 'api/models/ITitle';
import { AxiosResponse } from 'axios';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => http.get(url).then(responseBody),
};

function getParsedTitles(response: any) {
  const parsedResponse: IFilterResponse = response;
  const { results: parsedResults } = parsedResponse;
  const { results } = response;

  for (let i = 0; i < parsedResults.length; i += 1) {
    for (let j = 0; j < parsedResults[i].locations.length; j += 1) {
      parsedResults[i].locations[j].displayName = results[i].locations[j].display_name;
    }
  }

  return parsedResults;
}

const Titles = {
  getFiltered: async (searchTerm?: string, countryCode: string = 'us'): Promise<ITitle[]> => {
    const response = await requests.get(`/lookup?term=${searchTerm}&country=${countryCode}`);

    if (response) {
      const titles = getParsedTitles(response);

      if (searchTerm) {
        // eslint-disable-next-line max-len
        return titles.filter((title) => title.name.toLowerCase().includes(searchTerm.toLowerCase()));
      }

      return titles;
    }

    return [];
  },
  find: async (titleId: string, source: string = 'imdb', countryCode: string = 'us'): Promise<ITitle> => {
    const response: IFindResponse = await requests.get(`/idlookup?source_id=${titleId}&source=${source}&country=${countryCode}`);
    return response.collection;
  },
};

export default Titles;
