import { CiImageOn } from "react-icons/ci";
import { BiSolidVideos } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";

const SearchComponent = () => {
  const [enter, setEnter] = useState(false);
  const [category, setCategory] = useState('');

  const mouseEnter = () => {
    setEnter(!enter);
  }


  const submit = (e) => {
    e.preventDefault();
  }

  return (
    <form className="w-[75%] md:w-[60%]" onSubmit={submit}>
      <div className="flex items-center border-2 rounded-lg py-[0.3rem] gap-3 px-[1rem]">
        <button className=" text-[2rem] capitalize flex justify-between items-center border-r-2"  type="button" onClick={mouseEnter}>
          <span className="flex items-center gap-2 font-[500]">
            <CiImageOn />
            <span className="hidden md:block">photos</span>
          </span>
          <RiArrowDropDownLine className="text-[2.5rem]" />
        </button>
        {enter && (
          <div
            className={`absolute top-[6.9rem] left-[17.8%] py-[1rem] px-[2.2rem] border-[1px] rounded-lg bg-white text-[2rem] space-y-3`} 
          >
            <button className="  capitalize flex justify-between items-center">
              <span className="flex items-center gap-2 font-[500]">
                <CiImageOn />
                <span className="">photos</span>
              </span>
            </button>
            <button className="  capitalize flex justify-between items-center">
              <span className="flex items-center gap-2 font-[500]">
                <BiSolidVideos />
                <span className="">videos</span>
              </span>
            </button>
          </div>
        )}
        <input
          type="text"
          className="outline-none w-full py-[0.5rem] rounded-lg text-[1.6rem]  font-[500]"
          placeholder={`Search for free photos`}
        />
        <IoSearchSharp className="text-[2.5rem] text-gray-400" />
      </div>
    </form>
  );
};

export default SearchComponent;
