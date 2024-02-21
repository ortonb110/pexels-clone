import { Helmet } from "react-helmet";
import { Fragment, useEffect, useState } from "react";
import { Header } from "../Components/Header";
import ImageLoader from "../Components/imageLoader";
import NavBar from "../Components/NavBar";

const Home = () => {
  const [headerHeight, setHeaderHeight] = useState();
  const [offSetTop, setOffSetTop] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // if(window.scrollY > (headerHeight + offSetTop)) {
      //   alert('Passed Header component');
      // }
      console.log(`ScrollY: ${window.scrollY}, Height: ${headerHeight}, OffSetTop: ${offSetTop}`);
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
        <Header setHeaderHeight={setHeaderHeight} setOffSetTop={setOffSetTop}/>
        <NavBar
          searchBar={true}
          backgroundColor={"white"}
          borderBottom={true}
          textColor={"text-black"}
        />
        <section className="px-[10rem] pt-[5rem] pb-[2rem]">
          <ImageLoader />
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
