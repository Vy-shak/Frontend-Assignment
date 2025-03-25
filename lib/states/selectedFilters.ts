import { create } from "zustand";

type Store = {
  selectedFilter: string[];
  addFilter: (newValue: string) => void;
  removeFilter: (value: string) => void;
  clearFilters: () => void;
};

const useFilterSelection = create<Store>((set) => ({
  selectedFilter: [],

  addFilter: (newValue) =>
    set((state) => ({
      selectedFilter: [...state.selectedFilter, newValue],
    })),

  removeFilter: (value) =>
    set((state) => ({
      selectedFilter: state.selectedFilter.filter((item) => item !== value),
    })),

  clearFilters: () => set(() => ({ selectedFilter: [] })),
}));

export default useFilterSelection;
