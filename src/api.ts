import Axios, { AxiosResponse } from "axios";
import { Blessing } from "./types/blessing";
import { Event, ICreateEvent } from "./types/event";

const serverUrl = "http://localhost:3001";

export default {
  blessing() {
    return {
      getByEvent(eventId: number): Promise<AxiosResponse<Blessing[]>> {
        return Axios.get(`${serverUrl}/blessing/${eventId}`);
      },
    };
  },
  events() {
    return {
      getByUser(userId: number): Promise<AxiosResponse<Event[]>> {
        return Axios.get(`${serverUrl}/events/${userId}`);
      },
      create(event: ICreateEvent): Promise<AxiosResponse<Event>> {
        return Axios.post(`${serverUrl}/events`);
      },
    };
  },
};
