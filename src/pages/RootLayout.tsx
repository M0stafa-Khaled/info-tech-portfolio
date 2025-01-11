import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default RootLayout;
