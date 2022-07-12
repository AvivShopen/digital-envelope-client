import create from "zustand";

interface EventState {
  eventId: number;
  setEvent: (id: number) => void;
}

const useStore = create<EventState>((set) => ({
  eventId: 0,
  setEvent: (id) => set((state) => ({ eventId: id })),
}));

export { useStore as useEventStore };
