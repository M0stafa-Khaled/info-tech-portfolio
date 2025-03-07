import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { imageVariants, textVariants } from "../../animations";
import BgImage from "../../components/BgImage";
import ServicesList from "../../components/services/ServicesList";

const Services: React.FC = () => {
  const introRef = useRef(null);

  const isIntroInView = useInView(introRef, { once: true, amount: 0.2 });

  return (
    <>
      <BgImage />
      <div className="container pt-10 lg:pt-14">
        {/* Intro Section */}
        <motion.div
          ref={introRef}
          className="flex flex-col-reverse lg:flex-row items-center mb-10 bg-background-gradient rounded-2xl lg:rounded-3xl py-4 px-8 lg:py-4"
        >
          {/* Text */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isIntroInView ? "visible" : "hidden"}
            className="w-full"
          >
            <h2 className="text-3xl text-center lg:text-start font-bold mb-2 text-white">
              خدماتنا
            </h2>
            <p className="text-muted text-lg leading-relaxed text-center lg:text-start">
              في عالم يتغير بسرعة الضوء، نحن في إنفو تك نُحيل الأحلام الرقمية
              إلى حقائق مُبهرة. نحن مهندسو المستحيل، نرسم مستقبل الأعمال بلغة
              الإبداع والتكنولوجيا. كل بكسل، كل سطر كود، كل تصميم هو قصة إلهام
              تنتظر أن تُروى. نمضي أبعد من مجرد تقديم الخدمات - نحن نخلق عوالم
              رقمية تتنفس الابتكار وتنبض بالحياة. من رؤية خاطفة إلى إنجاز مُذهل،
              نحولك من مجرد عميل إلى شريك في رحلة التحول الرقمي الأكثر إثارة.
              دعنا نكتب معًا فصل النجاح التالي في عالم التكنولوجيا.
            </p>
          </motion.div>
          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isIntroInView ? "visible" : "hidden"}
            className="w-full flex justify-center"
          >
            <img
              src="/service.webp"
              alt="خدمات إنفو تك"
              className="w-full h-full max-w-md"
            />
          </motion.div>
        </motion.div>
        {/* Services List */}
        <ServicesList />
      </div>
    </>
  );
};

export default Services;
