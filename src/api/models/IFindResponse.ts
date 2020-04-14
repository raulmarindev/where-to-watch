import ITitle from 'api/models/ITitle';

export interface IFindResponse {
  collection: ITitle;
  type: string;
  id: string;
  statusCode: number;
  variant: string;
}
