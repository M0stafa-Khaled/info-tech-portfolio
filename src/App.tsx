import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Bounce, ToastContainer } from "react-toastify";

const App = () => {
  return (
    <main>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </main>
  );
};

export default App;
