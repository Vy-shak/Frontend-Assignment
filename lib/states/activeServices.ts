import { create } from "zustand";
import { serviceTypes } from "@/app/@types/state/Service";

interface ActiveServicesState {
    activeService: serviceTypes | "All";
    setActiveService: (service: serviceTypes) => void;
}
const useActiveServicesStore = create<ActiveServicesState>((set) => ({
    activeService: "All",
    setActiveService: (service) => set({ activeService: service }),
}));

export { useActiveServicesStore }