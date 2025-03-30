import { MentorIcon,JobIcon,BookingIcon,PriorityIcon } from "../../../public/index";


const sidebarData = [
  {
    id: 1,
    text: "Home",
    startIcon: MentorIcon,
    route: "/home",
    active: true,
  },
  {
    id: 2,
    text: "Mentor",
    startIcon: JobIcon,
    route: "/mentor",
    active: false,
  },
  {
    id: 3,
    text: "Job",
    startIcon: BookingIcon,
    route: "/job",
    active: false,
  },
  {
    id: 4,
    text: "Messages",
    startIcon: PriorityIcon,
    route: "/messages",
    active: false,
  },
];

export { sidebarData };