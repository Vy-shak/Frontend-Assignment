import { StaticImageData } from "next/image";

export enum serviceTypes {
    all= "All",
    call = "1:1 Call",
    dm = "Priority DM",
    package = "Package",
    webinar = "Webinar",
    product = "Digital Product",
}
export interface ServiceDetail {
    id:string
    type: string;
    icon: StaticImageData 
    text:string
}

export interface Servicecardtype {
    id:number
    profileImg?:StaticImageData
    type: serviceTypes;
    serviceHead: string;
    description: string;
    details: ServiceDetail[];
  }
