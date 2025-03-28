import { create } from "zustand";
import { persist } from "zustand/middleware";
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
  clearMentor: () => void;
};

const useMentorStore = create<MentorStore>()(
  persist(
    (set) => ({
      mentor: null,
      setMentor: (mentor) => set({ mentor }),
      clearMentor: () => set({ mentor: null }),
    }),
    {
      name: "mentor-storage", 
    }
  )
);

export default useMentorStore;
