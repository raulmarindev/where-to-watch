import ipifyHttp from 'api/ipifyHttp';
import IIpInfoResponse from 'api/models/IIpInfoResponse';
import { AxiosResponse } from 'axios';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => ipifyHttp.get(url).then(responseBody),
};

const UserInfo = {
  async getCurrentUserCountryCode() {
    try {
      const userIpInfo: IIpInfoResponse = await requests.get('https://geo.risk3sixty.com/me');

      if (userIpInfo) { return userIpInfo.country.toLowerCase(); }
    } catch (error) {
      console.log(error);
    }

    return 'us';
  },
};

export default UserInfo;
