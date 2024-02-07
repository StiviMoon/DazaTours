import { Carousel } from "@material-tailwind/react";

import casasC from "../../Img/casasC.jpg"
import guatapeLago from "../../Img/guatapeLgo.jpg"
import cartagena from "../../Img/cartagena.jpg"
import wayu from "../../Img/wayu.jpg"
import frutas from "../../Img/frutas.jpg"
 
export default function CarouselCustomNavigation() {
  return (
    <Carousel
      
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 rounded-full p-10">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`xl:block xl:first-line:h-1 cursor-pointer  rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={casasC}
        alt="image 1"
        className="h-full w-full object-cover "
      />
      <img
        src={guatapeLago}
        alt="image 2"
        className="h-full w-full object-cover "
      />

      <img
        src={wayu}
        alt="image 3"
        className="h-full w-full object-cover "
      />

      <img
        src={frutas}
        alt="image 3"
        className="h-full w-full object-cover "
      />
      <img
        src={cartagena}
        alt="image 3"
        className="h-full w-full object-cover "
      />

      
    </Carousel>
  );
}