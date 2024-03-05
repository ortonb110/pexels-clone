import gsap from "gsap";
import { useEffect } from "react";

const Loader = () => {
//   useEffect(() => {
//     gsap.to(".loader", {
//       duration: 2,
//       ease: "slow(0.7,0.7,false)",
//       x: 1000,
//       stagger: 0.2,
//       repeat: Infinity
//     });
//   }, []);

  return (
    <div className="flex  space-x-5 absolute bottom-8 ">
      <span className="loader block w-[2rem] h-[2rem] bg-gray-500 rounded-full translate-x-[-300px]"></span>
      <span className="loader block w-[2rem] h-[2rem] bg-gray-500 rounded-full translate-x-[-300px]"></span>
      <span className="loader block w-[2rem] h-[2rem] bg-gray-500 rounded-full translate-x-[-300px]"></span>
      <span className="loader block w-[2rem] h-[2rem] bg-gray-500 rounded-full translate-x-[-300px]"></span>
    </div>
  );
};

export default Loader;
