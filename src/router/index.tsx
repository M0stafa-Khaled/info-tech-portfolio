import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { About, ContactUs, Home, Projects, Services } from "../pages/public";
import NotFound from "../pages/NotFound";
import Project from "../pages/public/Project";
import Unauthorized from "../pages/Unauthorized";
import { Login, Register } from "../pages/auth";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import {
  AdminDashboardLayout,
  EmployeeDashboardLayout,
  RootLayout,
} from "../layout";

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="projects/:id" element={<Project />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<ContactUs />} />
    </Route>
    {/* Auth */}
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    {/* Admin Dashboard */}
    <Route
      path="/dashboard/admin"
      element={
        <ProtectedRoute requiredRole="admin">
          <AdminDashboardLayout />
        </ProtectedRoute>
      }
    >
      <Route index element={<h1>لوحة تحكم الأدمن</h1>} />
      <Route path="users" element={<div>لوحة تحكم المستخدمين</div>} />
      <Route path="settings" element={<div>لوحة تحكم الاعدادات</div>} />
    </Route>

    {/* Employee Dashboard */}

    <Route
      path="/dashboard/employee"
      element={
        <ProtectedRoute requiredRole="employee">
          <EmployeeDashboardLayout />
        </ProtectedRoute>
      }
    >
      <Route index element={<h1>لوحة تحكم الموظف</h1>} />
      <Route path="projects" element={<div>لوحة تحكم المشاريع</div>} />
      <Route path="settings" element={<div>لوحة تحكم الاعدادات</div>} />
    </Route>

    {/* Error Routes */}
    <Route path="unauthorized" element={<Unauthorized />} />
    <Route path="*" element={<NotFound />} />
  </>
);

const router = createBrowserRouter(routes, {
  basename: "/",
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
  },
});

export default router;
