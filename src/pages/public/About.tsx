import { Link } from "react-router-dom";
import BgImage from "../../components/BgImage";
import SectionTitle from "../../components/SectionTitle";
import Button from "../../components/ui/Button";
import { CgArrowTopRightO } from "react-icons/cg";
import aboutImage from "../../assets/about.png";
import avatar from "../../assets/about-avatar.png";
import SocialLinkIcon from "../../components/SocialLinkIcon";
import { FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import reactIcon from "../../assets/tech-reactjs.png";
import nextjs from "../../assets/tech-nextjs.png";
import javascript from "../../assets/tech-javascript.png";
import typescript from "../../assets/tech-typescript.png";
import tailwindcss from "../../assets/tech-tailwindcss.png";
import nodejs from "../../assets/tech-nodejs.png";
import postgresql from "../../assets/tech-potgresql.png";
import mongodb from "../../assets/tech-mongodb.png";

interface ITeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  technologies: {
    name: string;
    icon: string;
  }[];
  links: {
    icon: React.ReactNode;
    link: string;
  }[];
  cv: string;
}

const About = () => {
  const teamMembers: ITeamMember[] = [
    {
      name: "مصطفى خالد",
      role: "مطور واجهات أمامية",
      description:
        "مهندس برمجيات متخصص في تطوير واجهات المستخدم، يمتلك شغفًا عميقًا بتصميم تجارب رقمية مبتكرة وسلسة. يجمع بين المهارة التقنية والإبداع لخلق حلول تكنولوجية متميزة.",
      image: avatar,
      technologies: [
        { name: "React", icon: reactIcon },
        { name: "Next.js", icon: nextjs },
        { name: "Javascript", icon: javascript },
        { name: "Nodejs", icon: nodejs },
        { name: "Tailwindcss", icon: tailwindcss },
      ],
      links: [
        {
          icon: <FiInstagram className="text-white" size={20} />,
          link: "/",
        },
        {
          icon: <FiFacebook className="text-white" size={20} />,
          link: "/",
        },
        {
          icon: <FiLinkedin className="text-white" size={20} />,
          link: "/",
        },
        {
          icon: <FaWhatsapp className="text-white" size={20} />,
          link: "/",
        },
      ],
      cv: "",
    },
    {
      name: "أحمد محمد",
      role: "مطور خلفية",
      description:
        "مهندس برمجيات متخصص في تطوير الخوادم والأنظمة الخلفية، يتميز بقدرته على بناء حلول برمجية معقدة وقوية. يؤمن بأهمية الأداء والكفاءة في التطوير التقني.",
      image: avatar,
      technologies: [
        { name: "Typescript", icon: typescript },
        { name: "Postgresql", icon: postgresql },
        { name: "mongodb", icon: mongodb },
      ],
      links: [
        {
          icon: <FiInstagram className="text-white" size={20} />,
          link: "/",
        },
        {
          icon: <FiFacebook className="text-white" size={20} />,
          link: "/",
        },
        {
          icon: <FiLinkedin className="text-white" size={20} />,
          link: "/",
        },
        {
          icon: <FaWhatsapp className="text-white" size={20} />,
          link: "/",
        },
      ],
      cv: "",
    },
    {
      name: "أحمد محمد",
      role: "مطور خلفية",
      description:
        "مهندس برمجيات متخصص في تطوير الخوادم والأنظمة الخلفية، يتميز بقدرته على بناء حلول برمجية معقدة وقوية. يؤمن بأهمية الأداء والكفاءة في التطوير التقني.",
      image: avatar,
      technologies: [
        { name: "Typescript", icon: typescript },
        { name: "Postgresql", icon: postgresql },
        { name: "mongodb", icon: mongodb },
      ],
      links: [
        {
          icon: <FiInstagram className="text-white" size={20} />,
          link: "/",
        },
        {
          icon: <FiFacebook className="text-white" size={20} />,
          link: "/",
        },
        {
          icon: <FiLinkedin className="text-white" size={20} />,
          link: "/",
        },
        {
          icon: <FaWhatsapp className="text-white" size={20} />,
          link: "/",
        },
      ],
      cv: "",
    },
    {
      name: "سارة إبراهيم",
      role: "مصممة تجربة المستخدم",
      description:
        "مصممة تجربة مستخدم موهوبة تجمع بين الإبداع الفني والفهم العميق لاحتياجات المستخدمين. تسعى دائمًا لخلق تصاميم بديهية وجذابة تعزز التفاعل والسهولة.",
      image: avatar,
      technologies: [
        { name: "React", icon: reactIcon },
        { name: "Next.js", icon: nextjs },
        { name: "Javascript", icon: javascript },
      ],
      links: [
        {
          icon: <FiInstagram className="text-white" size={20} />,
          link: "/",
        },
        {
          icon: <FiFacebook className="text-white" size={20} />,
          link: "/",
        },
        {
          icon: <FiLinkedin className="text-white" size={20} />,
          link: "/",
        },
        {
          icon: <FaWhatsapp className="text-white" size={20} />,
          link: "/",
        },
      ],
      cv: "",
    },
  ];
  return (
    <div className="container">
      <BgImage />
      <section className="bg-background-gradient py-7 lg:py-14 px-6 lg:px-24 rounded-2xl lg:rounded-[36px] mt-9 lg:mt-[72px]">
        <div className="flex flex-col justify-center items-center gap-y-4 lg:gap-y-8">
          <div className="flex flex-col-reverse xl:flex-row gap-x-9 gap-y-6">
            {/* Text */}
            <div className="w-full flex flex-col items-center xl:items-start justify-center gap-y-2 lg:gap-y-4 text-right">
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
            </div>
            <div className="flex justify-center items-center">
              <hr className="h-[1px] w-2/3 xl:h-2/3 xl:w-[1px] bg-muted rounded-2xl" />
            </div>
            {/* Image */}
            <div className="w-full flex justify-center items-center">
              <img
                loading="lazy"
                src={aboutImage}
                className="w-full max-w-sm lg:max-w-sm"
              />
              {/* Line */}
            </div>
          </div>
          {/* Button */}
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
        </div>
      </section>
      <SectionTitle
        title="فريق العمل"
        titleBackFontSizeBack="text-[36px] md:text-[72px] lg:text-[96px]"
      />
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {teamMembers.map(
            (
              { name, description, role, image, links, technologies, cv },
              idx
            ) => (
              <div
                key={idx}
                className="bg-background-gradient py-4 px-6 rounded-2xl lg:rounded-3xl space-y-4"
              >
                <div className="flex flex-col justify-between w-full h-full">
                  <div className="flex flex-col lg:flex-row items-center gap-y-4 gap-x-3">
                    <div className="flex justify-center items-center">
                      <img src={image} alt={name} className="max-w-32" />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <h3 className="text-white text-center lg:text-start text-3xl">
                        {name}
                      </h3>
                      <p className="text-muted text-center lg:text-start font-light">
                        {role}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted text-center lg:text-start text-sm leading-relaxed">
                    {description}
                  </p>
                  <div className="">
                    {/* Technologies Skilles */}
                    <div className="flex justify-center lg:justify-start items-center flex-wrap gap-x-2 mt-2">
                      {technologies.map((tech, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-center p-3 w-12 h-12 rounded-full border border-[#66699C]/50 shadow-md"
                          style={{
                            background:
                              "linear-gradient(103.4deg, rgba(37, 37, 37, 0.5) 16.66%, rgba(43, 45, 66, 0.5) 81.61%)",
                          }}
                        >
                          <img
                            loading="lazy"
                            src={tech.icon}
                            alt={tech.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-y-4 gap-x-3 mt-4">
                      {/* Links */}
                      <div className="flex justify-center lg:justify-start items-center flex-wrap gap-x-4 gap-y-2">
                        {links.map((link, idx) => (
                          <SocialLinkIcon
                            key={idx}
                            link={link.link}
                            icon={link.icon}
                          />
                        ))}
                      </div>
                      {/* Download CV */}
                      <div>
                        <Button className="bg-dark rounded-lg">
                          <Link
                            to={cv}
                            className="flex justify-center items-center px-3 py-2 text-white"
                          >
                            تحميل السيرة الذاتية
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default About;
