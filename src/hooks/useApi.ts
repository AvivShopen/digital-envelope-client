import axios from "axios";
import Axios, { AxiosResponse } from "axios";
import { Blessing } from "../types/blessing";
import { Event, ICreateEvent } from "../types/event";
import { User } from "../types/user";

export const serverUrl = "http://localhost:3001";

axios.defaults.withCredentials = true;

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
      getByUser(): Promise<AxiosResponse<Event[]>> {
        return Axios.get(`${serverUrl}/event/user`);
      },
      create(event: ICreateEvent): Promise<AxiosResponse<Event>> {
        return Axios.post(`${serverUrl}/event`, event);
      },
      update(event: Event): Promise<AxiosResponse<Event>> {
        const { id, ...attrs } = { ...event };
        return Axios.put(`${serverUrl}/event/${id}`, attrs);
      },
      delete(eventId: number): Promise<AxiosResponse<any>> {
        return Axios.delete(`${serverUrl}/event/${eventId}`);
      },
      reverseOpeningState(
        eventId: number,
        state: boolean
      ): Promise<AxiosResponse<Event>> {
        return Axios.put(`${serverUrl}/event/${eventId}`, { closed: state });
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
  auth() {
    return {
      getUser(): Promise<AxiosResponse<User>> {
        return Axios.get(`${serverUrl}/auth/currentuser`);
      },
       login(): void {
        window.location.href = serverUrl + "/auth/google";
      },
      logout() {
        return Axios.post(`${serverUrl}/auth/logout`);
      }
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
