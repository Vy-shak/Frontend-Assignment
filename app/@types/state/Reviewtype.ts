import { StaticImageData } from "next/image"

export interface ReviewType {
    id:number
    rating:number,
    review:string,
    profile:StaticImageData,
    author:string
}