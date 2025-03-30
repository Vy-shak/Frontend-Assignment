import { Dev, Rishi, Mistry, Jhony } from "../../../public/index";
import { StaticImageData } from "next/image";

interface Chatbox {
  Profile: StaticImageData;
  Name: string;
  role: string;
  verified: boolean;
  notifications: number;
}

const mentorsList: Chatbox[] = [
  {
    Profile: Jhony,
    Name: "Jonny Rose",
    role: "Sr. Software Engineer at Google",
    verified: true,
    notifications: 2,
  },
  {
    Profile: Dev,
    Name: "Dev Jain",
    role: "Sr. Software Engineer at Microsoft",
    verified: true,
    notifications: 5,
  },
  {
    Profile: Rishi,
    Name: "Rishi Mehta",
    role: "Sr. Software Engineer at JP Morgan",
    verified: true,
    notifications: 1,
  },
  {
    Profile: Mistry,
    Name: "Heet Mistry",
    role: "Sr. Software Engineer at Zomato",
    verified: false,
    notifications: 3,
  },
];

export { mentorsList };
