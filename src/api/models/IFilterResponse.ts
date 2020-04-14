import ITitle from 'api/models/ITitle';

export interface IFilterResponse {
  results: ITitle[];
  updated: string;
  term: string;
  statusCode: number;
  variant: string;
}
