import ILocation from 'api/models/ILocation';

interface ITitle {
  id: string;
  picture: string;
  name: string;
  locations: ILocation[];
}

export default ITitle;
