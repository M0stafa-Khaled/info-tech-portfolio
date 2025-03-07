import { FiArrowLeftCircle } from "react-icons/fi";
import { SlArrowDown } from "react-icons/sl";
import Button from "../ui/Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  bottomVariants,
  containerVariants,
  imageVariants,
  textVariants,
} from "../../animations";
import { HiOutlineDownload } from "react-icons/hi";
import { Link } from "react-router-dom";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      className="container flex flex-col items-center justify-center gap-y-6 min-h-[calc(100vh-70px)] lg:min-h-[calc(100vh-78px)]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col-reverse lg:flex-row items-center justify-between gap-x-16 w-full"
        variants={containerVariants}
      >
        <motion.div
          className="w-full lg:w-1/2 max-w-[500px] space-y-4"
          variants={textVariants}
        >
          <motion.h1
            className="text-center text-[#ED6867] lg:text-start font-normal lg:leading-[143px] text-5xl lg:text-8xl"
            variants={textVariants}
          >
            مرحبا بك
          </motion.h1>
          <motion.h3
            className="text-white text-center leading-relaxed lg:text-start text-xl lg:text-2xl font-normal"
            variants={textVariants}
          >
            نحن شركاؤك الاستراتيجيون في عالم التكنولوجيا، نحول رؤيتك الرقمية إلى
            واقع ملموس، ونبني{" "}
            <span className="text-[#ED6867] leading-relaxed">
              حلول برمجية متكاملة ومبتكرة
            </span>{" "}
            تتجاوز التوقعات، مع التزامنا بالإبداع والتميز التكنولوجي!
          </motion.h3>
        </motion.div>
        <motion.div className="flex justify-center" variants={imageVariants}>
          <img src="/hero.webp" className="w-full max-w-sm h-full" />
        </motion.div>
      </motion.div>
      <motion.div
        variants={bottomVariants}
        className="w-full flex flex-col items-center"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            style={{
              background: "linear-gradient(96deg, #142D6C 43%, #0F1523 )",
            }}
            className="w-full sm:w-fit text-white border border-muted rounded-full normal-case font-medium"
          >
            <Link
              to={""}
              target="_blank"
              className="px-4 py-3 flex items-center gap-x-2"
            >
              تحميل التطبيق
              <HiOutlineDownload size={20} />
            </Link>
          </Button>
          <Button
            style={{
              background: "linear-gradient(96deg, #0F1523 0%, #142D6C 43%)",
            }}
            className="w-full sm:w-fit text-white border border-muted rounded-full normal-case font-medium"
          >
            <Link
              to={"https://api.whatsapp.com/send?phone=201016440812"}
              target="_blank"
              className="flex items-center gap-x-2 px-4 py-3"
            >
              ابدأ الآن معنا <FiArrowLeftCircle size={20} />
            </Link>
          </Button>
        </div>
        <motion.div
          className="w-full flex flex-col justify-center items-center mt-6"
          variants={bottomVariants}
        >
          <SlArrowDown size={40} className="text-[#C9C9CF] arrowOne" />
          <SlArrowDown size={40} className="-mt-6 text-[#C9C9CF] arrowTwo" />
          <SlArrowDown size={40} className="-mt-6 text-[#C9C9CF] arrowThree" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
