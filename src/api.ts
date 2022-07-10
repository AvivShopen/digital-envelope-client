import Axios, { AxiosResponse } from "axios";
import { Blessing } from "./types/blessing";

const serverUrl = "http://localhost:3001";

export default {
  blessing() {
    return {
      async getByEvent(eventId: number): Promise<AxiosResponse<Blessing[]>> {
        return await Axios.get(`${serverUrl}/blessing/${eventId}`);
      },
    };
  },
  events() {
    return {
      async getEventsByUser(userId: number): Promise<AxiosResponse<Event[]>> {
        return await Axios.get(`${serverUrl}/events/${userId}`);
      }
    }
  }
};
