import Axios from "axios";

const serverUrl = "http://localhost:3001";

export default {
  blessing() {
    return {
      async getByEvent(eventId: number) {
        return await Axios.get(`${serverUrl}/blessings/${eventId}/`);
      },
    };
  },
};
