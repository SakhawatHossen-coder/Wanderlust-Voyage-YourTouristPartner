import React from "react";
import { Carousel } from "@material-tailwind/react";

const Slider = () => {
  return (
    <div>
      <Carousel
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src="https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.pexels.com/photos/4913464/pexels-photo-4913464.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="image 4"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="image 5"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.pexels.com/photos/7556483/pexels-photo-7556483.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="image 6"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
};

 export default Slider;
