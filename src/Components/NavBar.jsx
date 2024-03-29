import { NavLink, Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import SearchComponent from './SearchComponent';

// eslint-disable-next-line react/prop-types
const NavBar = ({searchBar, backgroundColor, borderBottom, textColor, show, fixToTop}) => {
  return (
    <nav className={`${fixToTop? "z-50 fixed top-0": "static"} ${show? "visible":"hidden"} w-full px-[2rem] md:px-[5rem] py-[2rem] bg-${backgroundColor} flex justify-between items-center ${borderBottom && 'border-b-[1.5px]'} ${textColor}`}>
      <Link
        to={"/"}
        className={`flex gap-5 items-center hover:opacity-[0.7] transition-all ease-in-out duration-150`}
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[4.5rem] rounded-lg bg-white overflow-hidden"
        >
          <path d="m1.5 0a1.5 1.5 0 0 0 -1.5 1.5v21a1.5 1.5 0 0 0 1.5 1.5h21a1.5 1.5 0 0 0 1.5-1.5v-21a1.5 1.5 0 0 0 -1.5-1.5zm6.75 6.75h5.2715a3.843 3.843 0 0 1 .627 7.6348v2.8652h-5.8985zm1.5 1.5v7.5h2.8984v-2.8145h.873a2.343 2.343 0 1 0 0-4.6855z" />
        </svg>
        <h1 className="hidden lg:block capitalize text-[2.5rem] font-[600]">
          pexels
        </h1>
      </Link>
      {
        searchBar && <SearchComponent/>
      }
      <div className="capitalize text-[2.3rem] gap-7 flex font-[500] items-center ">
        <NavLink to={"/explore"} className={`hidden lg:block`}>
          explore
        </NavLink>
        <NavLink to={"/license"} className={`hidden lg:block`}>
          license
        </NavLink>
        <Link
          className={`bg-black rounded-lg text-white px-[1.7rem] py-[0.9rem] text-[1.6rem] hover:opacity-[0.7] hidden md:block transition-all ease-in-out duration-150`}
        >
          join
        </Link>
        <IoIosMenu className="lg:hidden text-[3rem]" />
      </div>
    </nav>
  );
};

export default NavBar;
