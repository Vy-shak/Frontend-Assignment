import { MentorIcon,JobIcon,BookingIcon,PriorityIcon, ClockIcon } from "../../../public/index";


const sidebarData = [
  {
    id: 1,
    text: "Mentor",
    startIcon: MentorIcon,
    route: "/",
    active: true,
  },
  {
    id: 2,
    text: "Job",
    startIcon: JobIcon,
    route: "/job",
    active: false,
  },
  {
    id: 3,
    text: "Booking",
    startIcon: ClockIcon,
    route: "/booking",
    active: false,
  },
  {
    id: 4,
    text: "Priority DM",
    startIcon: PriorityIcon,
    route: "/Priority",
    active: false,
  },
];

export { sidebarData };