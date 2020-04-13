import ILocation from './ILocation';

interface ITitle {
  id: string;
  picture: string;
  name: string;
  locations: ILocation[];
}

export default ITitle;
