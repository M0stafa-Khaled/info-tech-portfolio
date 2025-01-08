import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import { About, ContactUs, Home, Projects, Services } from "../pages";
import NotFound from "../pages/NotFound";

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="services" element={<Services />} />
      <Route path="contact-us" element={<ContactUs />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </>
);

const router = createBrowserRouter(routes);

export default router;
