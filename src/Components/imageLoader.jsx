import { useEffect, useState } from "react";
import axios from "axios";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Loader from "./Loader";
import { useAppContext } from "../Context/AppProvider";

// eslint-disable-next-line react/prop-types
const ImageLoader = () => {
  const { search } = useAppContext();
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [failedToLoad, setFailedToLoad] = useState(false);

  const fetchImages = async () => {
    setIsLoading(true);
    setFailedToLoad(false);
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
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
      setFailedToLoad(true);
    }
  };

  useEffect(() => {
    fetchImages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

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
                </div>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      )}
      {failedToLoad && (
        <div className="w-full flex justify-center items-center mt-[2rem] flex-col">
          <h2 className="text-[2rem]">No Internet Connection</h2>
          <p className="text-[1.7rem]">Try:</p>
          <ul className="text-[1.5rem] text-center">
            <li>Checking the network cables, modem and router</li>
            <li>Reconnecting to Wi-Fi</li>
          </ul>
        </div>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full flex justify-center items-center mt-[2rem]">
          <button
            onClick={fetchImages}
            className="bg-black rounded-lg text-white px-[1.7rem] py-[0.9rem] text-[1.6rem] hover:bg-opacity-[0.7] capitalize transition-all ease-in-out duration-150"
          >
            {failedToLoad ? "Try Again" : "more"}
          </button>
        </div>
      )}
    </section>
  );
};

export default ImageLoader;
