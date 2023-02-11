import { createBrowserRouter, Navigate } from "react-router-dom";

import {
  PublicLayout,
  Home,
  AboutUs,
  Blogs,
  BlogDetail,
  Jobs,
  JobDetail,
  ApplyForm,
  Experiences,
  ExperienceDetail,
  Services,
  ServiceDetail,
} from "../views/public";

import {
  Users,
  UserForm,
  AdminLayout,
  Dashboard,
  AdminBlogs,
  AdminBlogForm,
  AdminJobs,
  AdminJobForm,
  AdminExperiences,
  AdminExperienceForm,
} from "../views/admin/index";

import Login from "../views/auth/Login";
import NotFound from "../views/error/NotFound";

import ProtectedRoutes from "./ProtectedRoutes";

const router = createBrowserRouter([
  // ADMIN ROUTES
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <Navigate to="/admin/users" />,
      },
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      // Users
      {
        path: "/admin/users",
        element: <Users />,
      },
      {
        path: "/admin/users/new",
        element: <UserForm key="userCreate" />,
      },
      {
        path: "/admin/users/:id",
        element: <UserForm key="userUpdate" />,
      },
      // Blogs
      {
        path: "/admin/blogs",
        element: <AdminBlogs />,
      },
      {
        path: "/admin/blogs/new",
        element: <AdminBlogForm key="userCreate" />,
      },
      {
        path: "/admin/blogs/:id",
        element: <AdminBlogForm key="userUpdate" />,
      },
      // Jobs
      {
        path: "/admin/jobs",
        element: <AdminJobs />,
      },
      {
        path: "/admin/jobs/new",
        element: <AdminJobForm key="userCreate" />,
      },
      {
        path: "/admin/jobs/:id",
        element: <AdminJobForm key="userUpdate" />,
      },
      // Experiences
      {
        path: "/admin/experiences",
        element: <AdminExperiences />,
      },
      {
        path: "/admin/experiences/new",
        element: <AdminExperienceForm key="userCreate" />,
      },
      {
        path: "/admin/experiences/:id",
        element: <AdminExperienceForm key="userUpdate" />,
      },
    ],
  },
  // PUBLIC ROUTES
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetail />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/jobs/:id",
        element: <JobDetail />,
      },
      {
        path: "/apply/:id",
        element: <ApplyForm />,
      },
      {
        path: "/experiences",
        element: <Experiences />,
      },
      {
        path: "/experiences/:id",
        element: <ExperienceDetail />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        element: <ServiceDetail />,
      },
    ],
  },
  // AUTH ROUTES
  {
    path: "/login",
    element: (
      <ProtectedRoutes>
        <Login />
      </ProtectedRoutes>
    ),
  },
  // ERROR ROUTE
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
