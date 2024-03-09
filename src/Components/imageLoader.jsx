import { useEffect, useState } from "react";
import axios from "axios";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ImageLoader = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchImages = async () => {
    try {
      const { data } = await axios.get(
        `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=15`,
        {
          headers: {
            Authorization:
              "BpcIrcNPB6GY1jcLDdlPYgAmhEE7E4Xhz9hm86g830nuKTLk39GHqurs",
          },
        }
      );
      const { photos } = data;
      setImages((prevImages) => {
        return [...prevImages, ...photos];
      });
      setCurrentPage(currentPage + 1);
      console.log(currentPage);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
    // setLastCheckedIndex(numOfImages)
  }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
      
  //   });
  //   if (window.scrollY >= (Math.floor( document.body.getBoundingClientRect().height / 2))) {
  //     console.log("calling");
  //     console.log(document.body.getBoundingClientRect().height);
  //     // fetchImages();
  //   } else {
  //     console.log(document.body.getBoundingClientRect().height);
  //     console.log(window.scrollY);
  //   }
  // }, [window.scrollY]);

  return (
    <section className="">
      {images && (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 900: 3 }}>
          <Masonry gutter="15px">
            {images.map((image, i) => {
              return (
                <div key={i} className="">
                  <img
                    src={image.src.original}
                    style={{ width: "100%", display: "block" }}
                    alt=""
                    className="cursor-pointer"
                  />
                  {/* <section className="h-full absolute top-0 w-full">
                    <div className="relative">
                      <div className="right-0 absolute">
                        <span>hi</span>
                        <span>hello</span>
                      </div>
                      <div className="absolute bottom-[5rem]">
                        <span>profile</span>
                        <span>button</span>
                      </div>
                    </div>
                  </section> */}
                </div>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </section>
  );
};

export default ImageLoader;
