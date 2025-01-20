import servicesImage from "../../assets/service.png";
import designingImage from "../../assets/service-designing.png";
import codingImage from "../../assets/service-coding.png";
import hostingImage from "../../assets/service-hosting.png";
import softwareImage from "../../assets/service-software-engineering.png";
import socialImage from "../../assets/service-social-media.png";
import responsiveImage from "../../assets/service-responsive-design.png";
import coloringImage from "../../assets/service-coloring.png";
import contentImage from "../../assets/service-content-creation.png";
import BgImage from "../../components/BgImage";
import Button from "../../components/ui/Button";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ICard {
  image: string;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const introRef = useRef(null);
  const cardsRef = useRef(null);

  const isIntroInView = useInView(introRef, { once: true, amount: 0.2 });
  const isCardsInView = useInView(cardsRef, {
    once: true,
    amount: 0.2,
    margin: "350px 0px 450px 0px",
  });

  const textVariants = {
    hidden: {
      opacity: 0,
      x: 100, // Animate from right
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: -100, // Animate from left
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.4,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const services: ICard[] = [
    {
      image: designingImage,
      title: "التصميم الرقمي",
      description:
        "نصمم هويات بصرية متميزة وواجهات مستخدم جذابة تعكس جوهر علامتك التجارية وتجذب انتباه العملاء.",
    },
    {
      image: codingImage,
      title: "البرمجة",
      description:
        "نطور حلولًا برمجية متكاملة باستخدام أحدث التقنيات، مع التركيز على الأداء العالي والموثوقية.",
    },
    {
      image: hostingImage,
      title: "الاستضافة",
      description:
        "خدمات استضافة آمنة وموثوقة مع أداء عالي وتوفر مستمر لمواقعك وتطبيقاتك الرقمية.",
    },
    {
      image: softwareImage,
      title: "هندسة البرمجيات",
      description:
        "نقدم حلولًا برمجية معقدة باستخدام أفضل الممارسات الهندسية لتلبية احتياجات عملك المتطورة.",
    },
    {
      image: socialImage,
      title: "التسويق الرقمي",
      description:
        "استراتيجيات تسويق متكاملة تساعدك على الوصول إلى جمهورك المستهدف عبر منصات متعددة.",
    },
    {
      image: coloringImage,
      title: "تصميم الهوية البصرية",
      description:
        "نبتكر تصميمات لهوية بصرية متميزة تعكس شخصية علامتك التجارية وتميزها في السوق.",
    },
    {
      image: contentImage,
      title: "إنتاج المحتوى",
      description:
        "محتوى رقمي جذاب ومؤثر يروي قصة علامتك التجارية ويجذب جمهورك المستهدف.",
    },
    {
      image: responsiveImage,
      title: "التصميم سريع الاستجابة",
      description:
        "تصميمات متجاوبة تعمل بكفاءة على جميع الأجهزة والشاشات، مع تجربة مستخدم سلسة.",
    },
  ];

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
              loading="lazy"
              src={servicesImage}
              alt="خدمات إنفو تك"
              className="w-full h-full max-w-md"
            />
          </motion.div>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          ref={cardsRef}
          initial="hidden"
          animate={isCardsInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-9"
        >
          {services.map((service, idx) => (
            <motion.div
              variants={cardVariants}
              custom={idx}
              key={idx}
              className="flex flex-col lg:flex-row gap-2 bg-background-gradient p-4 rounded-2xl lg:rounded-2xl shadow-lg"
            >
              {/* Image */}
              <div className="w-full flex flex-col justify-center items-center">
                <img
                  loading="lazy"
                  src={service.image}
                  alt={service.title}
                  className="w-72 h-52 object-contain"
                />
                <h3 className="text-xl text-white text-center font-medium">
                  {service.title}
                </h3>
              </div>
              {/* Text */}
              <div className="w-full flex flex-col lg:justify-evenly gap-y-4 text-center lg:text-right rounded-">
                <p className="text-white/80 leading-relaxed">
                  {service.description}
                </p>
                <Button
                  primary
                  className="capitalize w-fit mx-auto lg:mx-0 bg-btn-primary hover:bg-btn-primary-hover text-white font-normal text-lg px-3 py-2 rounded-xl"
                >
                  طلب الخدمة
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Services;
