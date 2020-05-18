import ITitle from 'api/models/ITitle';

export interface IUtellyFindResponse {
  collection: ITitle;
  type: string;
  id: string;
  statusCode: number;
  variant: string;
}
