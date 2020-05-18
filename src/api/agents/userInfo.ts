import ipifyHttp from 'api/ipifyHttp';
import IIpGeolocationResponse from 'api/models/IIpGeolocationResponse';
import IPublicIpResponse from 'api/models/IPublicIpResponse';
import { AxiosResponse } from 'axios';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => ipifyHttp.get(url).then(responseBody),
};

const UserInfo = {
  async getCurrentUserIp() {
    try {
      const response: IPublicIpResponse = await requests.get(`${process.env.REACT_APP_CORS_ANYWHERE_URL}https://api.ipify.org?format=json`);

      if (response) { return response.ip; }
    } catch (error) {
      console.log(error);
    }
    return '';
  },
  async getCurrentUserCountryCode() {
    try {
      const userIp = await this.getCurrentUserIp();

      const response: IIpGeolocationResponse = await requests.get(`${process.env.REACT_APP_CORS_ANYWHERE_URL}https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}&ipAddress=${userIp}`);

      if (response) { return response.location?.country.toLowerCase(); }
    } catch (error) {
      console.log(error);
    }

    return 'us';
  },
};

export default UserInfo;
