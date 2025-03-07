import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useGetAllSettings } from "../lib/react-query/settings";
import SessionService from "../utils/SessionService";
import { addSettings } from "../app/features/settings/settingsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { RootState } from "../app/store";

const RootLayout = () => {
  const dispatch = useDispatch();
  const token = SessionService.getToken();
  const { data, isSuccess } = useGetAllSettings(token!);
  const {
    settings: { name },
  } = useSelector((state: RootState) => state.settings);
  useEffect(() => {
    if (isSuccess && data) {
      dispatch(addSettings({ settings: data }));
    }
  }, [isSuccess, dispatch, data]);

  return (
    <>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <ScrollRestoration />

      <main className="min-h-screen relative overflow-hidden">
        <Header />
        <div className="pt-[70px] lg:pt-[78px]">
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default RootLayout;
