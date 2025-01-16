import SectionTitle from "./SectionTitle";
import avatar from "../../assets/about-avatar.png";
import OpinionCard from "./OpinionCard";
import { IOpinion } from "../../interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const CustomerOpinions = () => {
  const Opinions: IOpinion[] = [
    {
      img: avatar,
      rating: 5,
      description:
        "lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor sit amet orm ipsuma dolor",
      name: "Name",
      job: "Job title",
    },
    {
      img: avatar,
      rating: 5,
      description:
        " lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor sit amet orm ipsuma dolor",
      name: "Name",
      job: "Job title",
    },
    {
      img: avatar,
      rating: 5,
      description:
        "lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor sit amet orm ipsuma dolor",
      name: "Name",
      job: "Job title",
    },
    {
      img: avatar,
      rating: 5,
      description:
        "lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor sit amet orm ipsuma dolor",
      name: "Name",
      job: "Job title",
    },
    {
      img: avatar,
      rating: 5,
      description:
        "lorem ipsum dolor sit amet orm ipsuma dolor amet sitorem ipsum lorem ipsum dolor sit amet orm ipsuma dolor",
      name: "Name",
      job: "Job title",
    },
  ];

  return (
    <section className="customer-opinions-section">
      <div className="container">
        <SectionTitle
          title="Customer Opinions"
          titleFontSize="text-[24px] md:text-[36px] lg:text-[54px]"
          titleBackFontSizeBack="text-[26px] md:text-[48px] lg:text-[64px]"
        />
      </div>
      {/* Cards */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1.6,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 1.6,
            spaceBetween: 36,
          },
          960: {
            slidesPerView: 1.6,
            spaceBetween: 36,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1000}
        className="[&>.swiper-wrapper]:items-center"
      >
        {Opinions.map((opinion, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center h-full"
          >
            <OpinionCard opinion={opinion} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CustomerOpinions;
