import { create } from "zustand";
import { StaticImageData } from "next/image";

interface MentorCard {
  profileImg: StaticImageData;
  rating: number;
  reviews: number;
  Name: string;
  role: string;
  verified: boolean;
  description: string;
}

type MentorStore = {
  mentor: MentorCard | null;
  setMentor: (mentor: MentorCard) => void;
};

const useMentorStore = create<MentorStore>((set) => ({
  mentor: null,
  
  setMentor: (mentor) => set({ mentor }),

  clearMentor: () => set({ mentor: null }),
}));

export default useMentorStore;