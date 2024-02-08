import { Fragment } from "react";
import { CiImageOn } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";


const PhotosBtn = () => {
  return (
    <Fragment>
      <span className="flex items-center gap-2 font-[500] text-black">
        <CiImageOn />
        <span className="hidden md:block">photos</span>
      </span>
      <RiArrowDropDownLine className="text-[2.5rem] text-black" />
    </Fragment>
  );
};

export default PhotosBtn;
