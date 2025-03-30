import { MentorIcon,JobIcon,BookingIcon,PriorityIcon, ClockIcon } from "../../../public/index";


const sidebarData = [
  {
    id: 1,
    text: "Mentor",
    startIcon: MentorIcon,
    route: "/Mentor",
    active: true,
  },
  {
    id: 2,
    text: "job",
    startIcon: JobIcon,
    route: "/job",
    active: false,
  },
  {
    id: 3,
    text: "Booking",
    startIcon: ClockIcon,
    route: "/Booking",
    active: false,
  },
  {
    id: 4,
    text: "Priority DM",
    startIcon: PriorityIcon,
    route: "/PriorityDM",
    active: false,
  },
];

export { sidebarData };