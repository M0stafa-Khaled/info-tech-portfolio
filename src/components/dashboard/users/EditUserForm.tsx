import Button from "../../ui/Button";
//import FileUploader from "../../../components/dashboard/FileUploader";

interface IUser {
  user?: {
    id: number;
    name: string;
    email: string;
    job: string;
    role: string;
  };
}

function EditUserForm({ user }: IUser) {
  return (
    <>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-y-4">
          {/* <FileUploader /> */}
          <div className=" relative mt-2 text-muted text-sm">
            <label className=" absolute -top-3 ">الاسم</label>
            <input
              type="text"
              placeholder="الاسم"
              defaultValue={user?.name}
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all border-b placeholder-shown:border-blue-gray-200 placeholder:opacity-1 focus:placeholder:opacity-100 text-sm pt-4 pb-1.5 text-white !border-muted focus:!border-muted after:!bg-muted min-w-fit"
            />
          </div>
          <div className=" relative mt-2 text-muted text-sm">
            <label className=" absolute -top-3 ">الايميل</label>
            <input
              type="text"
              placeholder="الايميل"
              defaultValue={user?.email}
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all border-b placeholder-shown:border-blue-gray-200 placeholder:opacity-1 focus:placeholder:opacity-100 text-sm pt-4 pb-1.5 text-white !border-muted focus:!border-muted after:!bg-muted min-w-fit"
            />
          </div>
          <div className=" relative mt-2 text-muted text-sm">
            <label className=" absolute -top-3 ">الوظيفه</label>
            <input
              type="text"
              placeholder="الوظيفه"
              defaultValue={user?.job}
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all border-b placeholder-shown:border-blue-gray-200 placeholder:opacity-1 focus:placeholder:opacity-100 text-sm pt-4 pb-1.5 text-white !border-muted focus:!border-muted after:!bg-muted min-w-fit"
            />
          </div>
          <div className=" relative mt-2 text-muted text-sm">
            <label className=" absolute -top-3 ">الدور</label>
            <input
              type="text"
              placeholder="الاسم"
              defaultValue={user?.role}
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all border-b placeholder-shown:border-blue-gray-200 placeholder:opacity-1 focus:placeholder:opacity-100 text-sm pt-4 pb-1.5 text-white !border-muted focus:!border-muted after:!bg-muted min-w-fit"
            />
          </div>
          <div className="w-full mt-2">
            <Button
              type="submit"
              className="rounded-xl w-full border-2 border-btn-primary text-blue py-4 hover:bg-btn-primary hover:text-white"
            >
              حفظ
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditUserForm;
