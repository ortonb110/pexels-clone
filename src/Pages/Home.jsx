import { Helmet } from "react-helmet";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Free Stock Photos, Royalty Free Stock Images & Copyright Free Pictures · Pexels</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <main>
        <h1>
          Hello world!
        </h1>
      </main>
    </Fragment>
  );
};

export default Home;
