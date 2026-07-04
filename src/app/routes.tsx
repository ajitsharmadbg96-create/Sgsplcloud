import { createHashRouter } from "react-router";
import Site from "./Site";
import AdminLogin from "./admin/AdminLogin";
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import EditHero from "./admin/EditHero";
import EditServices from "./admin/EditServices";
import EditAbout from "./admin/EditAbout";
import EditContactInfo from "./admin/EditContactInfo";
import Enquiries from "./admin/Enquiries";

export const router = createHashRouter([
  {
    path: "/",
    Component: Site,
  },
  {
    path: "/admin",
    Component: AdminLogin,
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { path: "dashboard", Component: Dashboard },
      { path: "hero", Component: EditHero },
      { path: "services", Component: EditServices },
      { path: "about", Component: EditAbout },
      { path: "contact-info", Component: EditContactInfo },
      { path: "enquiries", Component: Enquiries },
    ],
  },
]);
