import { Link } from "react-router-dom";
import { IProject } from "../../../interfaces";
import Button from "../../ui/Button";
import { useState } from "react";
import Modal from "../../ui/Modal";

interface IProps {
  project: IProject;
}
const ProjectCard = ({ project }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-background-gradient p-3 lg:p-4 rounded-2xl shadow-sm border border-dark-blue">
      <div className="h-full flex justify-between flex-col gap-3">
        {/* Image */}
        <div className="bg-[#000F22]/40 rounded-2xl  flex justify-center items-center">
          <img
            src={project.img}
            alt={project.title}
            className="w-full md:max-w-md h-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-center text-lg text-white font-medium">
              {project.title}
            </h3>
          </div>
          {/* Action buttons */}
          <div className="w-full flex flex-col sm:flex-row justify-between gap-4">
            <Button className="bg-btn-primary hover:bg-btn-primary-hover w-full py-3 rounded-full text-white">
              <Link to={`${project.id}`} className="py-3">
                تعديل
              </Link>
            </Button>
            <Button
              onClick={() => setIsOpen(true)}
              className="bg-danger hover:bg-danger-hover w-full rounded-full py-3 text-white"
            >
              حذف
            </Button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        title="حذف المشروع"
        description="هل انت متاكد من حذف المشروع؟"
      >
        <div className="flex flex-col gap-y-3">
          <Button className="border border-danger hover:bg-danger-hover w-fll rounded-xl text-danger hover:text-white py-4">
            حذف
          </Button>
          <Button
            onClick={() => setIsOpen(false)}
            className="border border-btn-primary hover:bg-btn-primary-hover w-full rounded-xl text-blue hover:text-white py-4"
          >
            إلغاء
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ProjectCard;
