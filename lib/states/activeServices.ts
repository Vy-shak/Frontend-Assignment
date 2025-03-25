import { create } from "zustand";
import { serviceTypes } from "@/app/@types/state/Service";

interface ActiveServicesState {
    activeService: serviceTypes | "all";
    setActiveService: (service: serviceTypes) => void;
}
const useActiveServicesStore = create<ActiveServicesState>((set) => ({
    activeService: "all",
    setActiveService: (service) => set({ activeService: service }),
}));

export { useActiveServicesStore }