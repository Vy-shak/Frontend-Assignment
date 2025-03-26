import { VideoIcon,BlueClock,RupeeIcon } from "../../../public/index"


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
            text:"1:1call"
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

export {guidanceData}