import { create } from "zustand";

interface SetterProp {
  type: "date" | "time";
  val: Date | string;
}

interface StateVal {
  date: Date;
  time: string;
}

interface Store {
  events: StateVal;
  updatetime: (data: SetterProp) => void;
}

const useSelectedDate = create<Store>((set) => ({
  events: { date: new Date(), time: "" },
  updatetime: ({ type, val }) =>
    set((state) => ({
      events: { ...state.events, [type]: val },
    })),
}));

export {useSelectedDate}

