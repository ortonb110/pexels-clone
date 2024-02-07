import { CiImageOn } from "react-icons/ci";
import { BiSolidVideos } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";

const SearchComponent = () => {
  return (
    <form className="w-[75%] md:w-[60%]">
      <div className="flex items-center border-2 rounded-lg py-[0.3rem] gap-3 px-[1rem]">
        <button className=" text-[2rem] capitalize flex justify-between items-center border-r-2">
          <span className="flex items-center gap-2 font-[500]">
            <CiImageOn />
            <span className="hidden md:block">photos</span>
          </span>
          <RiArrowDropDownLine className="text-[2.5rem]"/>
        </button>
        <input type="text" className="outline-none w-full py-[0.5rem] rounded-lg text-[1.6rem]  font-[500]" placeholder={`Search for free photos`}/>
        <IoSearchSharp className="text-[2.5rem] text-gray-400"/>
      </div>
    </form>
  );
};

export default SearchComponent;
