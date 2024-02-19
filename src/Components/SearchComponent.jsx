import { CiImageOn } from "react-icons/ci";
import { BiSolidVideos } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import PhotosBtn from "./PhotosBtn";
import VideosBtn from "./VideosBtn";

const SearchComponent = ({ formWidth }) => {
  const [enter, setEnter] = useState(false);
  const [category, setCategory] = useState("photos");

  const mouseEnter = () => {
    setEnter(!enter);
  };

  const searchType = (value) => {
    setCategory(value);
    mouseEnter();
  };

  const submit = (e) => {
    e.preventDefault();
  };

  //Give form width of 50% when form is in the nav bar

  return (
    <form
      className={`relative  ${
        formWidth ? "md:w-[63rem] w-full" : "md:w-[50%] w-[75%]"
      }`}
      onSubmit={submit}
    >
      <div className="  flex items-center border-0 rounded-xl py-[0.3rem] gap-3 px-[1rem] bg-gray-100">
        <button
          className=" text-[2rem] capitalize flex justify-between items-center border-r-2"
          type="button"
          onClick={mouseEnter}
        >
          {category === "photos" ? <PhotosBtn /> : <VideosBtn />}
        </button>
        {enter && (
          <div
            className={`absolute left-[-0.1rem] top-[4.7rem]  py-[1rem] px-[2.2rem] border-[1px] rounded-xl bg-white text-[2rem] space-y-3`}
          >
            <button
              className={`capitalize flex justify-between items-center  ${
                category === "photos" ? "text-[#2DA081]" : "text-black"
              }`}
              onClick={() => searchType("photos")}
            >
              <span className="flex items-center gap-2 font-[500]">
                <CiImageOn />
                <span className="">photos</span>
              </span>
            </button>
            <button
              className={`capitalize flex justify-between items-center  ${
                category === "videos" ? "text-[#2DA081]" : "text-black"
              }`}
              onClick={() => searchType("videos")}
            >
              <span className="flex items-center gap-2 font-[500]">
                <BiSolidVideos />
                <span className="">videos</span>
              </span>
            </button>
          </div>
        )}
        <input
          type="text"
          className="bg-gray-100 outline-none w-full py-[0.5rem] rounded-xl text-[1.6rem]  font-[500] text-black border-0 "
          placeholder={`Search for free ${
            category === "photos" ? "photos" : "videos"
          }`}
        />
        <IoSearchSharp className="text-[2.5rem] text-gray-400" />
      </div>
    </form>
  );
};

export default SearchComponent;
