import create from "zustand";
import { Blessing, CreateBlessing } from "../types/blessing";

interface BlessingState {
  blessing: CreateBlessing;
  setBlessing: (blessing: CreateBlessing) => void;
}
const initState: CreateBlessing = {
  createdBy: "",
  eventId: 0,
  paymentAmount: 0,
  text: "",
};
const useStore = create<BlessingState>((set) => ({
  blessing: initState,
  setBlessing: (blessing: CreateBlessing) => set((state) => ({ blessing })),
}));

export { useStore as useBlessingStore };
