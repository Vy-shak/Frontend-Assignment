import { Dev, Rishi, Mistry, Jhony } from "../../../public/index";
import { StaticImageData } from "next/image";
import Yshak from "../../../public/Images/Navbar/Profile.png";

interface Chatbox {
    Profile: StaticImageData;
    Name: string;
    role: string;
    verified: boolean;
    notifications: number; 
    lastMessage: string;
}

const mentorsList: Chatbox[] = [
    {
        Profile: Jhony,
        Name: "Jonny Rose",
        role: "Sr. Software Engineer at Google",
        verified: true,
        notifications: 2,
        lastMessage: "Hey, let's schedule our next session!",
    },
    {
        Profile: Dev,
        Name: "Dev Jain",
        role: "Sr. Software Engineer at Microsoft",
        verified: true,
        notifications: 0,
        lastMessage: "I'll review your code and get back to you.",
    },
    {
        Profile: Rishi,
        Name: "Rishi Mehta",
        role: "Sr. Software Engineer at JP Morgan",
        verified: true,
        notifications: 1,
        lastMessage: "Looking forward to our next discussion!",
    },
    {
        Profile: Mistry,
        Name: "Heet Mistry",
        role: "Sr. Software Engineer at Zomato",
        verified: false,
        notifications: 0,
        lastMessage: "Thanks for your feedback, appreciate it!",
    },
];
interface Message {
    sender: "Mentor" | "You";
    content: string;
    Dp?:StaticImageData
  }
  
  interface Chat {
    mentor: string;
    messages: Message[];
  }


  const Chatdata: Chat[] = [
    {
      mentor: "Jonny Rose",
      messages: [
        { sender: "Mentor", content: "Hey, let's schedule our next session!" },
        { sender: "You", Dp: Yshak, content: "Sure! What time works for you?" },
        { sender: "Mentor", content: "How about tomorrow at 5 PM?" },
      ],
    },
    {
      mentor: "Dev Jain",
      messages: [
        { sender: "Mentor", content: "Are you ready for the next module?" },
        { sender: "You", Dp: Yshak, content: "Yes! I just finished the last one." },
        { sender: "Mentor", content: "Great! I'll send you the next steps." },
      ],
    },
    {
      mentor: "Rishi Mehta",
      messages: [
        { sender: "Mentor", content: "I noticed your progress in DSA. Keep it up!" },
        { sender: "You", Dp: Yshak, content: "Thanks, Rishi! I'm focusing on dynamic programming now." },
        { sender: "Mentor", content: "Nice! Try solving some LeetCode hard problems." },
      ],
    },
    {
      mentor: "Heet Mistry",
      messages: [
        { sender: "Mentor", content: "How was your last coding interview?" },
        { sender: "You", Dp: Yshak, content: "It went well! The system design round was tricky." },
        { sender: "Mentor", content: "Glad to hear that! Let's discuss system design next." },
      ],
    },
  ];
  
  export { mentorsList, Chatdata };

