const Ips = {
  getCurrentUserCountryCode: async () => {
    try {
      const response = await fetch('http://ip-api.com/json/', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      const jsonResponse = await response.json();

      if (jsonResponse) { return jsonResponse.countryCode.toLowerCase(); }
    } catch (err) {
      console.log(err);
    }

    return 'us';
  },
};

export default Ips;
