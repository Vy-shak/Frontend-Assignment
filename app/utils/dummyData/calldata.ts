import { VideoIcon,BlueClock,RupeeIcon,MessageIcon } from "../../../public/index"


const guidanceData = {
    id: 1,
    serviceType: "Career Guidance",
    subHeading: "I'll give you advice to help with your career decisions. I'll give you advice to help with your career decisions.",
    bulletpoints: [
        "I can help you figure out your next steps.",
        "I can guide you through career transitions and help you explore new fields.",
        "Need advice on software engineering roles? I’ll help you navigate your options."
    ],
    details:[
        {
            id:"service type",
            type:"Service type",
            icon:VideoIcon,
            text:"1:1 Call"
        },
        {
            id:"duration",
            type:"Duration",
            icon:BlueClock,
            text:"30 min"
        },
        {
            id:"amount",
            type:"Amount",
            icon:RupeeIcon,
            text:"300"
        },
    ]
}

const ResumeData = {
    id: 2,
    serviceType: "Resume Review",
    subHeading: "I'll refine your resume to land better opportunities.",
    bulletpoints: [
        "I will identify the mistakes in your copy.",
        "I will refine and improve your copy for better clarity and impact."
    ],
    details: [
        {
            id: "serviceType",
            type: "Service type",
            icon: MessageIcon, 
            text: "Priority DM"
        },
        {
            id: "replies",
            type: "Replies",
            icon: BlueClock, 
            text: "In 1 day"
        },
        {
            id: "amount",
            type: "Amount",
            icon: RupeeIcon, 
            text: "₹100"
        }
    ]
}

export {guidanceData,ResumeData}