import { useEffect, useState } from "react";
import Image from "./Image";
import axios from "axios";

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
        images && images.map((image, key)=>{
          return <p key={key}>image</p>
        })
      }
    </section>
  );
};

export default ImageLoader;
