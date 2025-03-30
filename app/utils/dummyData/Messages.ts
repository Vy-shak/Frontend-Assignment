import { Dev, Rishi, Mistry, Jhony } from "../../../public/index";
import { StaticImageData } from "next/image";

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

export { mentorsList };

