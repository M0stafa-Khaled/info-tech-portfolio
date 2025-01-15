import reactIcon from "../../assets/tech-reactjs.png";
import nextjs from "../../assets/tech-nextjs.png";
import expressjs from "../../assets/tech-express.png";
import clerk from "../../assets/tech-clerk.png";
import javascript from "../../assets/tech-javascript.png";
import typescript from "../../assets/tech-typescript.png";
import tailwindcss from "../../assets/tech-tailwindcss.png";
import nodejs from "../../assets/tech-nodejs.png";
import postgresql from "../../assets/tech-potgresql.png";
import reactRouter from "../../assets/tech-react-router.png";
import mongodb from "../../assets/tech-mongodb.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";

const logos = [
  reactIcon,
  nextjs,
  expressjs,
  clerk,
  javascript,
  typescript,
  tailwindcss,
  nodejs,
  postgresql,
  reactRouter,
  mongodb,
];

const AnimatedScrollLogo = () => {
  return (
    <div className="w-full py-4 md:py-8 lg:py-12 overflow-hidden bg-background-gradient border-t border-b border-t-dark-blue border-b-dark-blue">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={4}
        slidesPerView={6}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={800}
        breakpoints={{
          320: { slidesPerView: 4, spaceBetween: 3 },
          640: { slidesPerView: 6, spaceBetween: 6 },
          768: { slidesPerView: 6, spaceBetween: 12 },
          1024: { slidesPerView: 8, spaceBetween: 24 },
        }}
      >
        {logos.map((logo, idx) => (
          <SwiperSlide key={idx} className="flex justify-center items-center">
            <img
              src={logo}
              alt={`Tech logo ${idx + 1}`}
              className="h-6 md:h-8 lg:h-12 object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AnimatedScrollLogo;
