import { Link } from "react-router-dom";
import BgImage from "../../components/BgImage";
import SectionTitle from "../../components/SectionTitle";
import Button from "../../components/ui/Button";
import { CgArrowTopRightO } from "react-icons/cg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  buttonVariants,
  imageVariants,
  textVariants,
  titleVariants,
} from "../../animations";
import MembersList from "../../components/about/MembersList";

const About = () => {
  const aboutSectionRef = useRef(null);
  const teamSectionRef = useRef(null);
  const titleRef = useRef(null);
  const isAboutInView = useInView(aboutSectionRef, {
    once: true,
    amount: 0.2,
    margin: "450px 0px 0px 0px",
  });
  const isTitleInView = useInView(titleRef, {
    once: true,
    amount: 0.2,
  });

  const isTeamInView = useInView(teamSectionRef, {
    once: true,
    amount: 0.2,
    margin: "0px 0px 0px 0px",
  });

  const lineVariants = {
    hidden: {
      opacity: 0,
      y: 50,
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
    <div className="container">
      <BgImage />
      <section className="bg-background-gradient py-7 lg:py-14 px-6 lg:px-24 rounded-2xl lg:rounded-[36px] mt-9 lg:mt-[72px]">
        <div className="flex flex-col justify-center items-center gap-y-4 lg:gap-y-8">
          <div className="flex flex-col-reverse xl:flex-row gap-x-9 gap-y-6">
            {/* Text */}
            <motion.div
              ref={aboutSectionRef}
              variants={textVariants}
              initial="hidden"
              animate={isAboutInView ? "visible" : "hidden"}
              className="w-full flex flex-col items-center xl:items-start justify-center gap-y-2 lg:gap-y-4 text-right"
            >
              <h2 className="text-white capitalize text-2xl lg:text-[42px]">
                Info Tech
              </h2>
              <p className="text-muted text-center xl:text-start text-base lg:text-lg leading-relaxed">
                نحن فريق من المبدعين التقنيين الذين يحولون التحديات التكنولوجية
                إلى فرص استثنائية. كل عضو في فريقنا يمتلك شغفًا فريدًا للابتكار،
                حيث نجمع بين الخبرة العميقة والإبداع الجريء لصناعة حلول رقمية
                متميزة. نؤمن بأن التكنولوجيا ليست مجرد أكواد، بل هي لغة التغيير
                والإلهام. نسعى باستمرار لتجاوز الحدود التقليدية، مستكشفين آفاقًا
                جديدة في عالم التقنية. فريقنا يمثل مزيجًا فريدًا من العقول
                المبتكرة والمتحمسة، حيث نحول الأفكار الجريئة إلى واقع ملموس.
                نؤمن بقوة التعاون والتفكير خارج الصندوق، ونسعى دائمًا لإحداث
                تأثير إيجابي من خلال الحلول التكنولوجية المبتكرة التي نقدمها.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={isAboutInView ? "visible" : "hidden"}
              className="flex justify-center items-center"
              variants={lineVariants}
            >
              <hr className="h-[1px] w-2/3 xl:h-2/3 xl:w-[1px] bg-muted rounded-2xl" />
            </motion.div>
            {/* Image */}
            <motion.div
              ref={aboutSectionRef}
              initial="hidden"
              animate={isAboutInView ? "visible" : "hidden"}
              variants={imageVariants}
              className="w-full flex justify-center items-center"
            >
              <img src="/about.webp" className="w-full max-w-sm lg:max-w-sm" />
            </motion.div>
          </div>
          {/* Button */}
          <motion.div
            initial="hidden"
            animate={isAboutInView ? "visible" : "hidden"}
            variants={buttonVariants}
          >
            <Button
              primary
              className="rounded-xl w-[200px] md:w-[350px] bg-btn-primary hover:bg-btn-primary-hover"
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
      </section>
      {/* Title */}
      <motion.div
        ref={titleRef}
        variants={titleVariants}
        initial="hidden"
        animate={isTitleInView ? "visible" : "hidden"}
      >
        <SectionTitle
          title="فريق العمل"
          titleBackFontSizeBack="text-[36px] md:text-[72px] lg:text-[96px]"
        />
      </motion.div>
      {/* Team Cards */}
      <motion.section
        ref={teamSectionRef}
        initial="hidden"
        animate={isTeamInView ? "visible" : "hidden"}
      >
        <MembersList />
      </motion.section>
    </div>
  );
};

export default About;
