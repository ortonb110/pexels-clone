import { Helmet } from "react-helmet";
import { Fragment } from "react";
import { useEffect } from "react";
import NavBar from "../Components/NavBar";
import SearchComponent from "../Components/SearchComponent";

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Free Stock Photos, Royalty Free Stock Images & Copyright Free Pictures
          · Pexels
        </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <main className="bg-[url('https://images.pexels.com/photos/18267830/pexels-photo-18267830/free-photo-of-close-up-of-red-roses-with-water-drops-on-the-petals.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-[56.4vh] bg-no-repeat bg-cover bg-left bg-black bg-blend-overlay bg-opacity-[0.6]">
        <NavBar
          borderBottom={false}
          textColor={"text-white"}
          backgroundColor={"transparent"}
        />
        <header className="flex flex-col justify-center items-center text-white gap-9 mt-[7rem] px-[2rem] md:px-0">
          <h1 className="text-[2.8rem] font-[600] w-full md:w-[63rem]">
            The best free stock photos, royalty free images & videos shared by
            creators.
          </h1>
          <SearchComponent formWidth={true}/>
        </header>
      </main>
    </Fragment>
  );
};

export default Home;
