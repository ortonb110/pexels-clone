import { Fragment } from "react"
import { BiSolidVideos } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";

const VideosBtn = () => {
  return (
    <Fragment>
        <span className="flex items-center gap-2 font-[500]">
        <BiSolidVideos />
        <span className="hidden md:block">Videos</span>
      </span>
      <RiArrowDropDownLine className="text-[2.5rem]" />
    </Fragment>
  )
}

export default VideosBtn