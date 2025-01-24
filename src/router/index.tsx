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
// import ProtectedRoute from "../components/auth/ProtectedRoute";
import {
  AdminDashboardLayout,
  EmployeeDashboardLayout,
  RootLayout,
} from "../layout";
import {
  AddProjectAdminDashboard,
  AppearanceAdminDashboard,
  ContactsAdminDashboard,
  EditProjectAdminDashboard,
  HomeAdminDashboard,
  SettingsAdminDashboard,
  UsersAdminDashboard,
} from "../pages/dashboard/admin";
import ProjectsAdminDashboard from "../pages/dashboard/admin/ProjectsAdminDashboard";

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
        // <ProtectedRoute requiredRole="admin">
        <AdminDashboardLayout />
        // </ProtectedRoute>
      }
    >
      <Route index element={<HomeAdminDashboard />} />
      <Route path="users" element={<UsersAdminDashboard />} />
      <Route path="projects" element={<ProjectsAdminDashboard />} />
      <Route path="projects/:id" element={<EditProjectAdminDashboard />} />
      <Route path="projects/add" element={<AddProjectAdminDashboard />} />
      <Route path="contacts" element={<ContactsAdminDashboard />} />
      <Route path="settings" element={<SettingsAdminDashboard />} />
      <Route path="appearance" element={<AppearanceAdminDashboard />} />
    </Route>

    {/* Employee Dashboard */}
    <Route
      path="/dashboard/employee"
      element={
        // <ProtectedRoute requiredRole="employee">
        <EmployeeDashboardLayout />
        // </ProtectedRoute>
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
