import { create } from "zustand";
import { StaticImageData } from "next/image";
import { Jhony } from "@/public";

interface Chatbox {
  Profile: StaticImageData;
  Name: string;
  role: string;
  verified: boolean;
  notifications: number;
  Lastmessage: string;
}

interface ChatboxStore {
  chatbox: Chatbox;
  updateChatbox: (updates: Partial<Chatbox>) => void;
}

const useChatboxStore = create<ChatboxStore>((set) => ({
  chatbox: {
    Profile: Jhony,
    Name: "Jonny Rose",
    role: "Sr. Software Engineer at Google",
    verified: true,
    notifications: 2,
    Lastmessage: "Hey, let's schedule our next session!",
  },

  updateChatbox: (updates) =>
    set((state) => ({
      chatbox: { ...state.chatbox, ...updates },
    })),
}));

export default useChatboxStore;