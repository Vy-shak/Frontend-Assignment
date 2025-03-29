import { create } from "zustand";

interface Store {
    currentPage: number;
    increase: () => void;
    decrease: () => void;
    move: (newValue: number) => void;
}

const usePagination = create<Store>((set) => ({
  currentPage: 1, 
  increase: () => set((state) => ({ currentPage: state.currentPage + 1 })),  
  decrease: () => set((state) => ({ currentPage: state.currentPage - 1 })),  
  move: (newValue) => set(() => ({ currentPage: newValue })), 
}));

export default usePagination;
