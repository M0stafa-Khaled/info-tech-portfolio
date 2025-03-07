import BgImage from "../../components/BgImage";
import { motion } from "framer-motion";
import ProjectDetails from "../../components/project/ProjectDetails";
import ProjectImagesSlider from "../../components/project/ProjectImagesSlider";
import { containerVariants } from "../../animations";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProjectById } from "../../lib/react-query/projects";
import Loader from "../../components/Loader";
import { IImage, IProject } from "../../interfaces";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: projectDetails, isLoading, error } = useGetProjectById(id!);
  useEffect(() => {
    if (isNaN(+id!)) navigate("/404");
    if (error) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        toast.error(error.response.statusText || "Project not found");
        navigate("/");
      } else {
        toast.error("لقد حدث خطأ ما حاول لاحقا");
        navigate("/");
      }
    }
  }, [navigate, error, id]);

  if (isLoading) return <Loader />;

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <BgImage />
      <div className="container mt-2">
        <div className="bg-background-gradient py-6 px-2 lg:px-6 rounded-2xl">
          <div className="max-w-5xl mx-auto">
            <ProjectImagesSlider
              images={projectDetails?.data.images as IImage[]}
              name={projectDetails?.data.title as string}
            />
          </div>
          {/* Project Details */}
          <ProjectDetails projectDetails={projectDetails?.data as IProject} />
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
