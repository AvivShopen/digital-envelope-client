import create from "zustand";
import { Event } from "../types/event";
import initEvent from '../utils/init-event-props.util';

interface EventState {
  event: Event;
  setEvent: (event: Event) => void;
}


const useStore = create<EventState>((set) => ({
  //Define initail event values
  event: initEvent,

  //Set the global event
  setEvent: (event) => set((state) => ({ event })),

}));

export { useStore as useEventStore };
