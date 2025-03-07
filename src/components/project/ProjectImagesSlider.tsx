import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { cardVariants } from "../../animations";
import { IImage } from "../../interfaces";

interface IProps {
  images: IImage[];
  name: string;
}

const ProjectImagesSlider = ({ images, name }: IProps) => {
  if (!images) return;
  return (
    <>
      <motion.div
        variants={cardVariants}
        className="rounded-2xl lg:rounded-3xl overflow-hidden"
      >
        <div className="relative group">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            speed={1000}
            loop={images && images.length > 1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".custom-prev-button",
              nextEl: ".custom-next-button",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="relative [&>.swiper-wrapper]:items-center"
          >
            {images?.map((image) => (
              <SwiperSlide key={image?.id}>
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={`${import.meta.env.VITE_API_URL}/storage/${
                    image?.image
                  }`}
                  alt={name}
                  className="max-w-full lg:max-h-[550px] w-full h-full"
                />
              </SwiperSlide>
            ))}
            {/* Conditionally render navigation buttons only if more than one image */}
            {images && images.length > 1 && (
              <>
                <div
                  className="custom-prev-button absolute top-1/2 right-4 z-10 transform -translate-y-1/2 
                    opacity-0 group-hover:opacity-100 transition-all duration-300 
                    bg-white/20 hover:bg-white/40 rounded-full p-2 
                    shadow-md hover:shadow-lg cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 lg:w-8 h-4 lg:h-8 text-white transition-transform duration-200 hover:scale-110"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>

                <div
                  className="custom-next-button absolute top-1/2 left-4 z-10 transform -translate-y-1/2 
                    opacity-0 group-hover:opacity-100 transition-all duration-300 
                    bg-white/20 hover:bg-white/40 rounded-full p-2 
                    shadow-md hover:shadow-lg cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 lg:w-8 h-4 lg:h-8 text-muted transition-transform duration-200 hover:scale-110"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </div>
              </>
            )}
          </Swiper>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectImagesSlider;
