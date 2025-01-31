import EditUserForm from "../../../../components/dashboard/users/EditUserForm";


const EditUser = () => {
  const user={
    id:1,
    name:"احمد عبسي",
    email:"ahmed@gmail.com",
    job:"رجل اعمال",
    role:"ادمن"
  }
  return (
    <div className="bg-dark text-white p-4 rounded-2xl shadow-md my-20 w-auto lg:w-3/5">
      <h1 className="text-3xl font-medium text-white text-center my-10">تعديل</h1>
      <EditUserForm user={user}/>
    </div>
  );
};

export default EditUser;
