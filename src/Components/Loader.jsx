import { motion, stagger } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{
        x: -150,
        opacity: 0.2
      }}

      animate={{
        opacity: 1,
        x: 900,
      }}
      transition={{
        staggerChildren: 2
      }}

      

      className="flex space-x-5 absolute bottom-8"
    >
      <span className="block w-[2rem] h-[2rem] bg-gray-500 rounded-full"></span>
      <span className="block w-[2rem] h-[2rem] bg-gray-500 rounded-full"></span>
      <span className="block w-[2rem] h-[2rem] bg-gray-500 rounded-full"></span>
      <span className="block w-[2rem] h-[2rem] bg-gray-500 rounded-full"></span>
    </motion.div>
  );
};

export default Loader;
