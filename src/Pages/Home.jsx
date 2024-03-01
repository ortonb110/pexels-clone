import { Helmet } from "react-helmet";
import { Fragment, useEffect, useState } from "react";
import { Header } from "../Components/Header";
import ImageLoader from "../Components/imageLoader";
import NavBar from "../Components/NavBar";

const Home = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
<<<<<<< HEAD
      if(window.scrollY > (550)) {
        //Add display show class to Navigation bar
        setShow(true);
=======
      if(window.scrollY > (525)) {
        //
>>>>>>> 09b7041e1c7e94d10683f104ae5b55b4abd771ad
      }
       else {
        //Remove display show class from Navigation bar
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
        <Header/>
        <NavBar
          searchBar={true}
          backgroundColor={"white"}
          borderBottom={true}
          textColor={"text-black"}
          show={show}
          fixToTop={true}
        />
        <section className="px-[10rem] pt-[5rem] pb-[2rem]">
          <ImageLoader />
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
