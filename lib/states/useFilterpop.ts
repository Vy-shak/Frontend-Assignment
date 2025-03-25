import { create } from "zustand";

type Store = {
  filterType: string;
  setFilter: (newValue: string) => void;
};

const useFilterStore = create<Store>((set) => ({
  filterType: "",
  setFilter: (newValue) => set(() => ({ filterType: newValue })),
}));

export default useFilterStore;
