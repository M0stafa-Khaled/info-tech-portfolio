import SectionTitle from "../SectionTitle";
import OpinionCard from "./OpinionCard";
import { IOpinion } from "../../interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { swiperVariants, titleVariants } from "../../animations";

const CustomerOpinions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  const Opinions: IOpinion[] = [
    {
      img: "/about-avatar.webp",
      rating: 5,
      description:
        "كانت تجربتي مع إنفو تك رائعة للغاية. لقد قدموا حلولًا مبتكرة وفعالة ساعدت شركتي على التحول الرقمي بسلاسة وكفاءة عالية.",
      name: "احمد محمود",
      job: "المدير التنفيذي",
    },
    {
      img: "/about-avatar.webp",
      rating: 5,
      description:
        "فريق إنفو تك متميز في التصميم والتطوير. تجاوزوا توقعاتي بتصميم جذاب وتطبيق سريع الاستجابة يعكس هوية علامتي التجارية بشكل مثالي.",
      name: "مريم حسن",
      job: "مديرة التسويق",
    },
    {
      img: "/about-avatar.webp",
      rating: 5,
      description:
        "الدعم الفني المقدم من إنفو تك استثنائي. سرعة الاستجابة والحلول المبتكرة جعلتني أثق بهم كشريك استراتيجي لأعمالي الرقمية.",
      name: "أحمد عبدالله",
      job: "رائد أعمال",
    },
    {
      img: "/about-avatar.webp",
      rating: 5,
      description:
        "فريق إنفو تك متميز في التصميم والتطوير. تجاوزوا توقعاتي بتصميم جذاب وتطبيق سريع الاستجابة يعكس هوية علامتي التجارية بشكل مثالي.",
      name: "مريم حسن",
      job: "مديرة التسويق",
    },
  ];

  return (
    <section className="customer-opinions-section" ref={ref}>
      <div className="container">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SectionTitle
            title="آراء العملاء"
            titleFontSize="text-[24px] md:text-[36px] lg:text-[54px]"
            titleBackFontSizeBack="text-[26px] md:text-[48px] lg:text-[64px]"
          />
        </motion.div>
      </div>
      {/* Cards */}
      <motion.div
        variants={swiperVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
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
      </motion.div>
    </section>
  );
};

export default CustomerOpinions;
