import { create } from "zustand";

type Store = {
  isOpen: boolean;
  toggle: () => void;
  setOpen: () => void;
  setClose: () => void;
};

const useFilterModal = create<Store>((set) => ({
  isOpen: false,

  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  
  setOpen: () => set(() => ({ isOpen: true })),
  
  setClose: () => set(() => ({ isOpen: false })),
}));

export default useFilterModal;