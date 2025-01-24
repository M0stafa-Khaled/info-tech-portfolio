import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SERVICES } from "../../constant";
import ServiceCard from "./ServiceCard";
import { cardVariants } from "../../animations";

const ServicesList = () => {
  const cardsRef = useRef(null);
  const isCardsInView = useInView(cardsRef, {
    once: true,
    amount: 0.2,
    margin: "350px 0px 450px 0px",
  });

  return (
    <>
      <motion.div
        ref={cardsRef}
        initial="visible"
        animate={isCardsInView ? "visible" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-9"
      >
        {SERVICES.map((service, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            custom={idx}
            initial="hidden"
            className="flex flex-col lg:flex-row gap-2 bg-background-gradient p-4 rounded-2xl lg:rounded-2xl shadow-lg"
            animate={"visible"}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default ServicesList;
