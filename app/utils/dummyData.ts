import { StaticImageData } from "next/image";
import {WebinarIcon,Block,VideoIcon,MessageIcon, RupeeIcon, Product, BlueClock,} from "../../public/index"

enum serviceTypes {
    call = "1:1 Call",
    dm = "Priority DM",
    package = "Package",
    webinae = "Webinar",
    product = "Digital Product",
  }

  interface ServiceDetail {
    id:string
    type: string;
    icon: StaticImageData 
    text:string
  }
  
  interface ServiceCard {
    id:number
    type: serviceTypes;
    serviceHead: string;
    description: string;
    details: ServiceDetail[];
  }

  const dummyServices: ServiceCard[] = [
    {
      id: 1,
      type: serviceTypes.call,
      serviceHead: "Career Guidance",
      description: "I'll give you advice to help with your career decisions.",
      details: [
        { id: "d1-1", type: "Service type", icon: VideoIcon, text: "1:1 Call" },
        { id: "d1-2", type: "Duration", icon: BlueClock, text: "30 min" },
        { id: "d1-3", type: "Amount", icon: RupeeIcon, text: "₹300" },
      ],
    },
    {
      id: 2,
      type: serviceTypes.dm,
      serviceHead: "Resume Review",
      description: "I'll refine your resume to land better opportunities.",
      details: [
        { id: "d2-1", type: "Service type", icon: MessageIcon, text: "Priority DM" },
        { id: "d2-2", type: "Replies", icon: BlueClock, text: "In 1 day" },
        { id: "d2-3", type: "Amount", icon: RupeeIcon, text: "₹100" },
      ],
    },
    {
      id: 3,
      type: serviceTypes.package,
      serviceHead: "1 month career guidance full confidence",
      description: "2 x 1:1 call - Career guidance\n1x Priority DM - Resume review...",
      details: [
        { id: "d3-1", type: "Service type", icon: Block, text: "Package" },
        { id: "d3-2", type: "Duration", icon: BlueClock, text: "1 month" },
        { id: "d3-3", type: "Amount", icon: RupeeIcon, text: "₹1000" },
      ],
    },
    {
      id: 4,
      type: serviceTypes.webinae,
      serviceHead: "Interview tips and tricks advice",
      description: "Practical strategies to boost your interview confidence.",
      details: [
        { id: "d4-1", type: "Service type", icon: WebinarIcon, text: "Webinar" },
        { id: "d4-2", type: "Date", icon: BlueClock, text: "On 28th Oct" },
        { id: "d4-3", type: "Amount", icon: RupeeIcon, text: "₹1000" },
      ],
    },
    {
      id: 5,
      type: serviceTypes.product,
      serviceHead: "SQL Basics Course",
      description: "To strengthen your SQL and data skills",
      details: [
        { id: "d5-1", type: "Service type", icon: Product, text: "Digital product" },
        { id: "d5-2", type: "Amount", icon: RupeeIcon, text: "₹500" },
      ],
    },
  ];

  export {dummyServices}