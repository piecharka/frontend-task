import classes from "./Carousel.module.css";
import { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
const Carousel = ({ data }) => {
  const [page, setPage] = useState(1);
  const imageList = data.slice((page - 1) * 3, page * 3);
  const maxPage = Math.ceil(data.length / 3);

  const pageDecrementationHandler = () => {
    setPage((page) => {
      if (page === 1) return maxPage;

      return page - 1;
    });
  };
  const pageIncrementationHandler = () => {
    setPage((page) => {
      if (page === maxPage) return 1;
      return page + 1;
    });
  };

  return (
    <div className={classes.carouselBox}>
      <div className={classes.imageBox}>
        <AiOutlineArrowLeft
          size={40}
          className={classes.carouselIcon}
          onClick={pageDecrementationHandler}
        />
        {imageList.map((item, key) => {
          return (
            <img
              key={key}
              src={item.download_url}
              alt={item.author}
              className={classes.carouselImage}
            />
          );
        })}
        <AiOutlineArrowRight
          size={40}
          className={classes.carouselIcon}
          onClick={pageIncrementationHandler}
        />
      </div>
    </div>
  );
};

export default Carousel;
