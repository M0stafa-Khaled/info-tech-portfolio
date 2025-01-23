import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { ReactNode } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
  title?: string;
  description?: string;
  children?: ReactNode;
}

const Modal = ({
  isOpen,
  closeModal,
  title,
  description,
  children,
}: IProps) => {
  return (
    <div>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={closeModal}
        >
          <div className="fixed bg-dark/90 backdrop-blur-[2px] inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-background backdrop-blur-md p-6">
                  <div className="w-full flex justify-end">
                    <IoCloseOutline
                      className="cursor-pointer text-white"
                      size={35}
                      onClick={closeModal}
                    />
                  </div>
                  {title && (
                    <DialogTitle
                      as="h3"
                      className="text-xl text-center text-white font-semibold"
                    >
                      {title}
                    </DialogTitle>
                  )}
                  {description && (
                    <Description className="text-base text-center mt-5 text-muted">
                      {description}
                    </Description>
                  )}

                  <div className="mt-4">{children}</div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Modal;
