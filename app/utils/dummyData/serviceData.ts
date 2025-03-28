
import {WebinarIcon,Block,VideoIcon,MessageIcon, RupeeIcon, Product, BlueClock, Tumbnail2} from "../../../public/index"
import { Servicecardtype,serviceTypes } from "../../@types/state/Service";

  const dummyServices: Servicecardtype[] = [
    {
      id: 1,
      type: serviceTypes.call,
      serviceHead: "Career Guidance",
      description: "I'll give you advice to help with your career decisions. I'll guide you on career paths, skill development, and job opportunities to help you make informed choices.",
      details: [
        { id: "1-service", type: "Service type", icon: VideoIcon, text: "1:1 Call" },
        { id: "1-duration", type: "Duration", icon: BlueClock, text: "30 min" },
        { id: "1-amount", type: "Amount", icon: RupeeIcon, text: "300" }
      ],
    },
    {
      id: 2,
      type: serviceTypes.dm,
      serviceHead: "Resume Review",
      description: "I'll refine your resume to land better opportunities. I'll ensure it's well-structured, optimized for ATS, and highlights your strengths effectively.",
      details: [
        { id: "2-service", type: "Service type", icon: MessageIcon, text: "Priority DM" },
        { id: "2-replies", type: "Replies", icon: BlueClock, text: "In 1 day" },
        { id: "2-amount", type: "Amount", icon: RupeeIcon, text: "100" }
      ],
    },
    {
      id: 3,
      type: serviceTypes.package,
      serviceHead: "1 month career guidance full confidence",
      description: "2 x 1:1 Call - Career guidance, 1x Priority DM - Resume review, and personalized career roadmap to boost your professional journey.",
      details: [
        { id: "3-service", type: "Service type", icon: Block, text: "Package" },
        { id: "3-duration", type: "Duration", icon: BlueClock, text: "1 month" },
        { id: "3-amount", type: "Amount", icon: RupeeIcon, text: "1,000" }
      ],
    },
    {
        id: 4,
        type: serviceTypes.webinar,
        serviceHead: "Interview Tips and Tricks Advice",
        description: "Practical strategies to boost your interview confidence. Learn how to tackle tough questions, structure responses, and leave a lasting impression.",
        details: [
          { id: "4-service", type: "Service type", icon: WebinarIcon, text: "Webinar" },
          { id: "4-date", type: "Date", icon: BlueClock, text: "On 28th Oct" },
          { id: "4-amount", type: "Amount", icon: RupeeIcon, text: "1,000" }
        ],
      },
    {
        id: 5,
        profileImg:Tumbnail2,
        type: serviceTypes.product,
        serviceHead: "SQL Basics Course",
        description: "To strengthen your SQL and data skills. Learn fundamental SQL queries, database management, and real-world applications for data-driven decision-making.",
        details: [
          { id: "5-service", type: "Service type", icon: Product, text: "Digital product" },
          { id: "5-amount", type: "Amount", icon: RupeeIcon, text: "500" }
        ],
      },
  ];

  export {dummyServices}