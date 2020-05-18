import ITitle from 'api/models/ITitle';

export interface IUtellyFilterResponse {
  results: ITitle[];
  updated: string;
  term: string;
  statusCode: number;
  variant: string;
}
