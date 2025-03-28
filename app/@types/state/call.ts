import { ServiceDetail } from "./Service";


export interface guidance {
    id:number
    serviceType:string,
    subHeading:string,
    bulletpoints:string[],
    details:ServiceDetail[]
}