import React from "react";
import { Carousel, Typography } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
import "swiper/css";
import { Typewriter } from "react-simple-typewriter";
const Slider = () => {
  let img1 =
    "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600";
  let img2 =
    "https://images.pexels.com/photos/1258865/pexels-photo-1258865.jpeg?auto=compress&cs=tinysrgb&w=600";
  let img3 =
    "https://images.pexels.com/photos/1796736/pexels-photo-1796736.jpeg?auto=compress&cs=tinysrgb&w=600";
  let img4 =
    "https://images.pexels.com/photos/967292/pexels-photo-967292.jpeg?auto=compress&cs=tinysrgb&w=600";
  return (
    <div className="-z-10">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        className="-z-10"
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
       
      >
        <SwiperSlide>
          <Typography variant="h4" className="hidden lg:flex">
            <Typewriter
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={["Where  ", "  will your next ", " adventure take you?"]}
            ></Typewriter>
          </Typography>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Typography variant="h4" className="hidden lg:flex">
            <Typewriter
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={[" Discover the world", "  one hidden gem at a time "]}
            ></Typewriter>
          </Typography>

          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Typography variant="h4" className="hidden lg:flex">
            <Typewriter
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={[
                " Unleash your wanderlust.",
                "      Explore the globe with us",
              ]}
            ></Typewriter>
          </Typography>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Typography variant="h4" className="hidden lg:flex">
            <Typewriter
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={["  Travel creates memories", "    that last a lifetime"]}
            ></Typewriter>
          </Typography>

          <img src={img4} alt="" />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Slider;

