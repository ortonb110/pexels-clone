import { useEffect, useState } from "react";
import Masonry from "masonry-layout";
import Image from "./Image";

const ImageLoader = () => {
  const [images, setImages] = useState();

  return (
    <section>
      <Image />
    </section>
  );
};

export default ImageLoader;
