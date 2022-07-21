import create from "zustand";
import { Event, EventTypes } from "../types/event";

interface EventState {
  event: Event;
  setEvent: (event: Event) => void;
}

const initDate = new Date();

const useStore = create<EventState>((set) => ({
  //Define initail event values
  event: {
    id: 0,
    createdAt: initDate,
    estimatedGuests: 0,
    lastUpdatedAt: initDate,
    name: "",
    type: EventTypes.Other,
  },

  //Set the global event
  setEvent: (event) => set((state) => ({ event })),
}));

export { useStore as useEventStore };
