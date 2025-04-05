import  { Dispatch, SetStateAction } from "react";
import { RefObject } from "react";



const selectImg = async (Ref:RefObject<HTMLInputElement | null>,setImgUrl:Dispatch<SetStateAction<string>>) => {
    const files = Ref.current?.files;
    if (!files) {
        console.log("files is not present");
        return
    }
    const file = files[0];
    if (!file) {
        console.log("file is not present")
    }
    const ImageUrl = URL.createObjectURL(file);
    if (!ImageUrl) {
        console.log("url is not present")
    }

    setImgUrl(ImageUrl)
}

const uploadFromdevice = (Ref:RefObject<HTMLInputElement | null>) => {
    Ref.current?.click();
};

export {selectImg,uploadFromdevice}

