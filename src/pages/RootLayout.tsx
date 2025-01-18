import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Header />
      <div className="pt-[70px] lg:pt-[78px]">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default RootLayout;
