import gsap from "gsap";
import { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    gsap.to(".loader", {
      duration: 1.5,
      ease: "slow(0.7,0.7,false)",
      x: 2000,
      stagger: 0.1,
      repeat: Infinity,
    });
  }, []);

  return (
    <div className="flex  space-x-5 w-full ">
      <span className="loader block w-[1.4rem] h-[1.4rem] md:w-[2rem] md:h-[2rem] bg-gray-500 rounded-full translate-x-[-300px]"></span>
      <span className="loader block w-[1.4rem] h-[1.4rem] md:w-[2rem] md:h-[2rem] bg-gray-500 rounded-full translate-x-[-300px]"></span>
      <span className="loader block w-[1.4rem] h-[1.4rem] md:w-[2rem] md:h-[2rem] bg-gray-500 rounded-full translate-x-[-300px]"></span>
      <span className="loader block w-[1.4rem] h-[1.4rem] md:w-[2rem] md:h-[2rem] bg-gray-500 rounded-full translate-x-[-300px]"></span>
    </div>
  );
};

export default Loader;
