import { Helmet } from "react-helmet";
import { Fragment, useEffect, useState } from "react";
import { Header } from "../Components/Header";
import ImageLoader from "../Components/imageLoader";
import NavBar from "../Components/NavBar";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        //Add display show class to Navigation bar when window scroll is greater than 560px
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

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
      <main>
        <Header />
        <NavBar
          searchBar={true}
          backgroundColor={"white"}
          borderBottom={true}
          textColor={"text-black"}
          show={show}
          fixToTop={true}
        />
        <section className="px-[10rem] pt-[5rem] pb-[2rem]">
          <div>
            <NavLink to={"/home"}>home</NavLink>
            <NavLink to={"/videos"}>video</NavLink>
            <NavLink to={"/home"}>leaderboard</NavLink>
            <NavLink to={"/home"}>challenges</NavLink>
          </div>
          <ImageLoader />
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
