import { ServiceDetail } from "./Service";
import { VideoIcon,BlueClock,RupeeIcon } from "../../../public/index";


export interface guidance {
    id:number
    serviceType:string,
    subHeading:string,
    bulletpoints:string[],
    details:ServiceDetail[]
}