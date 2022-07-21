import Axios, { AxiosResponse } from "axios";
import { Blessing } from "../types/blessing";
import { Event, ICreateEvent } from "../types/event";

const serverUrl = "http://localhost:3001";

const useApi = {
  blessing() {
    return {
      getByEvent(eventId: number): Promise<AxiosResponse<Blessing[]>> {
        return Axios.get(`${serverUrl}/blessing/${eventId}`);
      },
    };
  },
  events() {
    return {
      getById(id: number): Promise<AxiosResponse<Event>> {
        return Axios.get(`${serverUrl}/event/${id}`);
      },
      getByUser(userId: number): Promise<AxiosResponse<Event[]>> {
        return Axios.get(`${serverUrl}/event/${userId}`);
      },
      create(event: ICreateEvent): Promise<AxiosResponse<Event>> {
        return Axios.post(`${serverUrl}/event`, event);
      },
    };
  },
  qr() {
    return {
      generate(redirectUrl: string) {
        return `https://api.qrserver.com/v1/create-qr-code/?data=${redirectUrl}&amp;size=80x80`;
      },
    };
  },
  dashboard() {
    return {
      getData(eventId: number): Promise<AxiosResponse<any>> {
        return Axios.get(`${serverUrl}/dashboard/${eventId}`);
      },
    };
  },
};

export default useApi;
