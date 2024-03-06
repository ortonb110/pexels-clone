import { useEffect, useState } from "react";
import Image from "./Image";
import axios from "axios";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const ImageLoader = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  const fetchImages = async () => {
    try {
      const {data}  = await axios.get(
        `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=40`,
        {
          headers: {
            Authorization:
              "BpcIrcNPB6GY1jcLDdlPYgAmhEE7E4Xhz9hm86g830nuKTLk39GHqurs",
          },
        }
      );
       const {photos} = data;
       console.log(photos[0]);
       setImages(prevImages => {
        return [
          ...prevImages,
          ...photos
        ]
       })
       console.log(images);
      setCurrentPage(currentPage+1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
    
  }, []);

  return (
    <section className="">
      {
        images && <ResponsiveMasonry
        columnsCountBreakPoints={{350: 2, 750: 2, 900: 3}}
    >
        <Masonry gutter="15px">
            {images.map((image, i) => (
                <img
                    key={i}
                    src={image.src.original}
                    style={{width: "100%", display: "block"}}
                    alt=""
                />
            ))}
        </Masonry>
    </ResponsiveMasonry>
      }
    </section>
  );
};

export default ImageLoader;
