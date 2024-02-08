import { CiImageOn } from "react-icons/ci";
import { BiSolidVideos } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import PhotosBtn from "./PhotosBtn";
import VideosBtn from "./VideosBtn";

const SearchComponent = () => {
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

  return (
    <form className=" relative w-[75%] md:w-[50%] " onSubmit={submit}>
      <div className=" flex items-center border-2 rounded-xl py-[0.3rem] gap-3 px-[1rem] bg-white">
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
              className="  capitalize flex justify-between items-center text-black"
              onClick={() => searchType("photos")}
            >
              <span className="flex items-center gap-2 font-[500]">
                <CiImageOn />
                <span className="">photos</span>
              </span>
            </button>
            <button
              className="  capitalize flex justify-between items-center text-black"
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
          className="outline-none w-full py-[0.5rem] rounded-xl text-[1.6rem]  font-[500] text-black"
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
