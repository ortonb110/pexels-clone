import { Helmet } from "react-helmet";
import { Fragment, useEffect } from "react";
import { Header } from "../Components/Header";
import ImageLoader from "../Components/imageLoader";
import NavBar from "../Components/NavBar";

const Home = () => {
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > (525)) {
        //Add display class to Navigation bar
      }
       else {
        //Remove the added class from the navigation bar
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
        <Header/>
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
