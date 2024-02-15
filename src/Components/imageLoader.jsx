import { Fragment, useEffect, useState } from "react";
import Masonry from "masonry-layout";
import Image from "./Image";

const ImageLoader = () => {
    const [images, setImages] = useState()




  return (
    <Fragment>
      <div>
        <h2>free stock photos</h2>
      </div>
      <section>
        <Image/>
      </section>
    </Fragment>
  );
};

export default ImageLoader;
