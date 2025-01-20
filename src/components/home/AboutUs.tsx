import SectionTitle from "../SectionTitle";
import aboutImage from "../../assets/home-about.png";
import { CgArrowTopRightO } from "react-icons/cg";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const textVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const buttonsVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="container" ref={ref}>
      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <SectionTitle title="معلومات عنا" />
      </motion.div>
      <div className="bg-background-gradient py-7 lg:py-14 px-6 lg:px-24 rounded-2xl lg:rounded-[36px]">
        <div className="flex flex-col justify-center items-center gap-y-4 lg:gap-y-8">
          <div className="flex flex-col-reverse xl:flex-row gap-x-9 gap-y-6">
            {/* Text */}
            <motion.div
              className="w-full flex flex-col items-center lg:items-start justify-center gap-y-2 lg:gap-y-4 text-right"
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h2 className="text-white capitalize text-2xl lg:text-[42px]">
                Info Tech
              </h2>
              <p className="text-muted text-center lg:text-start text-base lg:text-lg leading-relaxed">
                نحن فريق من المبدعين التقنيين الذين يحولون التحديات التكنولوجية
                إلى فرص استثنائية. كل عضو في فريقنا يمتلك شغفًا فريدًا للابتكار،
                حيث نجمع بين الخبرة العميقة والإبداع الجريء لصناعة حلول رقمية
                متميزة. نؤمن بأن التكنولوجيا ليست مجرد أكواد، بل هي لغة التغيير
                والإلهام.
              </p>
            </motion.div>
            <div className="flex justify-center items-center">
              <hr className="h-[1px] w-2/3 xl:h-2/3 xl:w-[1px] bg-muted rounded-2xl" />
            </div>
            {/* Image */}
            <motion.div
              className="w-full flex justify-center items-center"
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <img
                src={aboutImage}
                loading="lazy"
                className="w-full max-w-sm lg:max-w-md"
              />
            </motion.div>
          </div>
          {/* Buttons */}
          <motion.div
            className="flex flex-col lg:flex-row justify-between gap-y-4 gap-x-[72px] max-w-xs lg:max-w-full"
            variants={buttonsVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Button className="rounded-xl lg:w-[350px] bg-btn-secondary hover:bg-btn-secondary-hover">
              <Link
                to={"/about"}
                className="px-3 sm:px-6 py-4 flex justify-center items-center gap-x-3 text-white text-sm xl:text-lg font-medium normal-case"
              >
                المزيد من التفاصيل عن الفريق
                <span>
                  <CgArrowTopRightO className="h-5 w-5 text-white" size={20} />
                </span>
              </Link>
            </Button>
            <Button
              primary
              className="rounded-xl lg:w-[350px] bg-btn-primary hover:bg-btn-primary-hover"
            >
              <Link
                to={"/contact"}
                className="px-3 sm:px-6 py-4 flex justify-center items-center gap-x-3 text-white text-sm xl:text-lg font-medium normal-case"
              >
                اتصل بنا
                <span>
                  <CgArrowTopRightO className="h-5 w-5 text-white" size={20} />
                </span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
