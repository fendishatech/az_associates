import "../../../assets/styles/public/blogs.css";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Footer from "./Footer";
import TopBanner from "./TopBanner";
import { HelmetProvider } from "react-helmet-async";

const PublicLayout = () => {
  return (
    <HelmetProvider>
      <TopBanner />
      <TopBar />
      <Outlet />
      <Footer />
    </HelmetProvider>
  );
};

export default PublicLayout;
