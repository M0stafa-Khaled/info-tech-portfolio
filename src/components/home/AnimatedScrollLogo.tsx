import { useEffect, useRef } from "react";
import reactIcon from "../../assets/tech-reactjs.png";
import nextjs from "../../assets/tech-nextjs.png";
import expressjs from "../../assets/tech-express.png";
import clerk from "../../assets/tech-clerk.png";
import javascript from "../../assets/tech-javascript.png";
import typescript from "../../assets/tech-typescript.png";
import tailwindcss from "../../assets/tech-tailwindcss.png";
import nodejs from "../../assets/tech-nodejs.png";
import postgresql from "../../assets/tech-potgresql.png";
import reactRouter from "../../assets/tech-react-router.png";
import mongodb from "../../assets/tech-mongodb.png";

const logos = [
  reactIcon,
  nextjs,
  expressjs,
  clerk,
  javascript,
  typescript,
  tailwindcss,
  nodejs,
  postgresql,
  reactRouter,
  mongodb,
];

const AnimatedScrollLogo = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement: HTMLDivElement | null = scrollRef.current;
    if (!scrollElement) return;
    let animationFrameId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5; // Reduced speed for smoother animation
      if (scrollPosition >= scrollElement.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollElement.style.transform = `translateX(-${scrollPosition}px)`;
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="w-full py-4 md:py-8 lg:py-12 overflow-hidden bg-background-gradient border-t border-b border-t-dark-blue border-b-dark-blue">
      <div className="mx-auto w-full px-4 md:px-6 lg:px-8">
        <div className="relative">
          <div
            className="flex gap-7 lg:gap-14"
            ref={scrollRef}
            style={{
              width: `${logos.length * 200}px`,
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`${logo}logo`}
                  className="h-6 md:h-8 lg:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedScrollLogo;
