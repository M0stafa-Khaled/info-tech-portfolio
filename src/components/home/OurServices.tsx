import SectionTitle from "../SectionTitle";
import HomeServiceCard from "./HomeServiceCard";
import serviceCoding from "../../assets/service-coding.png";
import serviceDesign from "../../assets/service-designing.png";
import serviceSoftware from "../../assets/service-software-engineering.png";
import serviceHosting from "../../assets/service-hosting.png";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { CgArrowTopRightO } from "react-icons/cg";
import { IService } from "../../interfaces";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { buttonVariants, cardVariants, titleVariants } from "../../animations";

const OurServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "250px 0px 250px 0px",
  });

  const services: IService[] = [
    {
      title: "تطوير الويب",
      description:
        "نقدم خدمات تطوير الويب المتكاملة باستخدام أحدث التقنيات والأدوات. نصمم مواقع ويب متجاوبة وسريعة وآمنة تلبي احتياجات عملك بدقة عالية.",
      img: serviceCoding,
    },
    {
      title: "التصميم",
      description:
        "نوفر حلول تصميم إبداعية وعصرية تجذب انتباه العملاء. نركز على التصميم الجذاب والوظيفي الذي يعكس هوية علامتك التجارية.",
      img: serviceDesign,
    },
    {
      title: "هندسة البرمجيات",
      description:
        "نقدم استشارات وحلول هندسة برمجية متكاملة. نساعدك في تطوير تطبيقات مبتكرة وفعالة تلبي متطلبات عملك بكفاءة.",
      img: serviceSoftware,
    },
    {
      title: "الاستضافة",
      description:
        "نوفر خدمات استضافة موثوقة وآمنة مع أداء عالي. نضمن لك استضافة سريعة ومستقرة لمواقعك وتطبيقاتك.",
      img: serviceHosting,
    },
  ];

  return (
    <section className="container" ref={ref}>
      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <SectionTitle title="خدماتنا" />
      </motion.div>
      {/* Services Cards */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {services.map((service, idx) => (
          <motion.div key={idx} variants={cardVariants}>
            <HomeServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="flex justify-center mt-[18px] lg:mt-[36px]"
        variants={buttonVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Button className="lg:w-fit bg-btn-secondary hover:bg-btn-secondary-hover rounded-xl">
          <Link
            to={"/services"}
            className="px-8 sm:px-24 h-[56px] flex justify-center items-center gap-x-3 text-white text-lg font-medium normal-case"
          >
            عرض المزيد
            <span>
              <CgArrowTopRightO className="h-5 w-5 text-white" size={20} />
            </span>
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default OurServices;
