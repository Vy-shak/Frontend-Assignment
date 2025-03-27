import { Dispatch } from "react";



const selectImg = async (Ref:any,setImgUrl:any) => {
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

const uploadFromdevice = (Ref:any) => {
    Ref.current?.click();
};

export {selectImg,uploadFromdevice}

