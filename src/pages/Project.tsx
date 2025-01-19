import { Swiper, SwiperSlide } from "swiper/react";
import BgImage from "../components/BgImage";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import projectImg from "../assets/project-img.png";
import reactIcon from "../assets/tech-reactjs.png";
import expressjs from "../assets/tech-express.png";
import typescript from "../assets/tech-typescript.png";
import tailwindcss from "../assets/tech-tailwindcss.png";
import nodejs from "../assets/tech-nodejs.png";
import mongodb from "../assets/tech-mongodb.png";
import { Link } from "react-router-dom";
import avatar from "../assets/about-avatar.png";
import { CgArrowTopRightO } from "react-icons/cg";
import { Rating } from "@material-tailwind/react";

const Project = () => {
  interface IProjectDetails {
    title: string;
    description: string;
    images: string[];
    technologies: { name: string; icon: string }[];
    rating: number;
    developers: {
      name: string;
      avatar: string;
      job: string;
    }[];
  }

  const projectDetails: IProjectDetails = {
    title: "منصة التعلم الإلكتروني",
    description:
      "منصة تعليمية ذكية تجمع بين أحدث تقنيات التعلم عن بعد وتصميم تفاعلي متميز.",
    images: [projectImg, projectImg, projectImg, projectImg],
    technologies: [
      { name: "react", icon: reactIcon },
      { name: "typescript", icon: typescript },
      { name: "express", icon: expressjs },
      { name: "node", icon: nodejs },
      { name: "mongodb", icon: mongodb },
      { name: "tailwind", icon: tailwindcss },
    ],
    rating: 4,
    developers: [
      {
        name: "محمد الحسني",
        avatar: avatar,
        job: "مطور واجهة أمامية",
      },
      {
        name: "أحمد الفارس",
        avatar: avatar,
        job: "مطور الخوادم",
      },
      {
        name: "سارة العتيبي",
        avatar: avatar,
        job: "مصممة واجهة المستخدم",
      },
      {
        name: "عبدالله الراشد",
        avatar: avatar,
        job: "مطور خوادم",
      },
      {
        name: "ليلى السلمان",
        avatar: avatar,
        job: "مطورة برمجيات",
      },
      {
        name: "خالد المطيري",
        avatar: avatar,
        job: "مهندس DevOps",
      },
    ],
  };

  const handleRatingChange = (value: number) => {
    console.log(value);
    // Send Request by user rating
  };

  return (
    <div>
      <BgImage />
      <div className="container mt-9">
        {/* Image Slider */}
        <div className="bg-background-gradient rounded-2xl lg:rounded-3xl overflow-hidden">
          <div className="relative group">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              speed={1000}
              loop={true}
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
              {projectDetails.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`عرض المشروع ${index + 1}`}
                    className="max-w-full max-h-[550px] object-contain w-full h-full"
                  />
                </SwiperSlide>
              ))}
              {/* Custom Navigation Arrows */}
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
            </Swiper>
          </div>
        </div>

        {/* Project Details */}
        <div className="py-6 px-4 lg:px-4 mt-6 lg:mt-9 space-y-4 bg-background-gradient rounded-2xl lg:rounded-3xl">
          {/* Title */}
          <div className="flex items-center flex-col lg:flex-row gap-x-9 gap-y-4">
            <h1 className="text-center lg:text-right text-xl md:text-[28px] lg:text-4xl font-medium text-white">
              {projectDetails.title}
            </h1>
            <Link
              to={""}
              className="text-lg lg:text-xl text-yellow flex items-center gap-x-2 px-2 min-w-48 justify-center"
            >
              معاينة مباشرة{" "}
              <span>
                <CgArrowTopRightO className="h-5 w-5 text-yellow" size={20} />
              </span>
            </Link>
          </div>
          {/* Rating */}
          <div className="flex flex-wrap gap-2 items-center justify-center lg:justify-start">
            <Rating
              value={projectDetails.rating}
              ratedColor="amber"
              unratedColor="amber"
              className="h-8 lg:h-12"
              onChange={handleRatingChange}
            />
            <span className="text-muted">(٤/٥)</span>
          </div>
          {/* Description */}
          <p className="text-center lg:text-right text-muted leading-relaxed lg:text-lg">
            {projectDetails.description}
          </p>
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {projectDetails.technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center justify-center p-3 w-14 h-14 rounded-full border border-[#66699C]/50"
                style={{
                  background:
                    "linear-gradient(103.4deg, rgba(37, 37, 37, 0.5) 16.66%, rgba(43, 45, 66, 0.5) 81.61%)",
                }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
          {/* Developers */}
          <div className="flex flex-col justify-center items-center lg:items-start gap-y-4">
            <h2 className="text-white text-2xl lg:text-3xl">طُوِّر بواسطة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
              {projectDetails.developers.map(({ avatar, name, job }, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-x-4 bg-dark-blue px-4 py-2 rounded-2xl w-full shadow-md"
                >
                  <img
                    src={avatar}
                    alt={name}
                    className="h-14 w-14 rounded-full"
                  />
                  <div className="flex flex-col gap-y-2">
                    <h3 className="text-white font-medium text-lg lg:text-xl">
                      {name}
                    </h3>
                    <span className="text-muted text-sm">{job}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
