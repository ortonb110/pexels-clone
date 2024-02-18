import NavBar from "./NavBar";
import SearchComponent from "./SearchComponent";
import axios from "axios";
import { useEffect, useState } from "react";

export const Header = () => {
  const [result, setResult] = useState('');
  const [name, setName] = useState('undefined');
  const fetchWallpaper = async () => {
    try {
      const {data} = await axios.get("https://api.pexels.com/v1/curated", {
        headers: {
          Authorization:
            "BpcIrcNPB6GY1jcLDdlPYgAmhEE7E4Xhz9hm86g830nuKTLk39GHqurs",
        },
      });
      setResult(data?.photos[0]?.src?.landscape);
      console.log(data?.photos[0]?.src?.landscape);
      setName(data?.photos[7]?.photographer);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchWallpaper();
  }, []);

  return (
    <header className={`relative bg-[url('${result}')] min-h-[56.4vh] bg-no-repeat bg-cover bg-left bg-black bg-blend-overlay bg-opacity-[0.6]`}>
      <NavBar
        borderBottom={false}
        textColor={"text-white"}
        backgroundColor={"transparent"}
      />
      <section className="flex flex-col justify-center items-center text-white gap-9 mt-[7rem] px-[2rem] md:px-0">
        <h1 className=" text-[2.8rem] md:text-[3.2rem] font-[600] w-full md:w-[63rem]">
          The best free stock photos, royalty free images & videos shared by
          creators.
        </h1>
        <SearchComponent formWidth={true} />
      </section>
      <a
        href="#"
        className="absolute right-[2rem] bottom-[2.5rem] text-[1.5rem] md:text-[2rem] space-x-2 font-[600] flex"
      >
        <p className="text-gray-500">Photo by</p>
        <p className="text-gray-300 capitalize">{name}</p>
      </a>
    </header>
  );
};
