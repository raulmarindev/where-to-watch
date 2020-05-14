const Ips = {
  getCurrentUserIp: async () => {
    try {
      const response = await fetch('https://api.ipdata.co?api-key=test');
      return response.json();
    } catch (err) {
      console.log(err);
    }

    return undefined;
  },
};

export default Ips;
