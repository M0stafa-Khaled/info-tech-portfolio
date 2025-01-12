import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20 lg:pt-28">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default RootLayout;
