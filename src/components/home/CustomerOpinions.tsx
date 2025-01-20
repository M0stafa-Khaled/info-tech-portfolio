import SectionTitle from "../SectionTitle";
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
        "كانت تجربتي مع إنفو تك رائعة للغاية. لقد قدموا حلولًا مبتكرة وفعالة ساعدت شركتي على التحول الرقمي بسلاسة وكفاءة عالية.",
      name: "محمد الحسني",
      job: "المدير التنفيذي",
    },
    {
      img: avatar,
      rating: 5,
      description:
        "فريق إنفو تك متميز في التصميم والتطوير. تجاوزوا توقعاتي بتصميم جذاب وتطبيق سريع الاستجابة يعكس هوية علامتي التجارية بشكل مثالي.",
      name: "سارة العتيبي",
      job: "مديرة التسويق",
    },
    {
      img: avatar,
      rating: 5,
      description:
        "الدعم الفني المقدم من إنفو تك استثنائي. سرعة الاستجابة والحلول المبتكرة جعلتني أثق بهم كشريك استراتيجي لأعمالي الرقمية.",
      name: "أحمد الفارس",
      job: "رائد أعمال",
    },
    {
      img: avatar,
      rating: 5,
      description:
        "تعاملت مع العديد من شركات التكنولوجيا، لكن إنفو تك تميزت بجودة العمل والابتكار. أوصي بهم بشدة لكل من يبحث عن حلول رقمية متكاملة.",
      name: "ليلى السلمان",
      job: "مستشارة إدارية",
    },
    {
      img: avatar,
      rating: 5,
      description:
        "نجاح مشروعنا يعود بشكل كبير إلى الدعم المتميز من فريق إنفو تك. لقد حولوا رؤيتنا إلى واقع ملموس بإبداع وإتقان.",
      name: "عبدالله الراشد",
      job: "مؤسس الشركة",
    },
  ];

  return (
    <section className="customer-opinions-section">
      <div className="container">
        <SectionTitle
          title="آراء العملاء"
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
