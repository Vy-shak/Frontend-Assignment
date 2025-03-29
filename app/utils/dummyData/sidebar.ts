import { MentorIcon,JobIcon,BookingIcon,PriorityIcon } from "../../../public/index";


const sidebarData = [
    {
      id: 1,
      text: "Mentor",
      startIcon: MentorIcon,
      active:true
    },
    {
      id: 2,
      text: "Job",
      startIcon: JobIcon,
      active:false
    },
    {
      id: 3,
      text: "Booking",
      startIcon: BookingIcon,
      active:false
    },
    {
      id: 4,
      text: "Priority",
      startIcon: PriorityIcon,
      active:false
    },
  ];

export{sidebarData}