import { Outlet } from "react-router-dom";
import Nav from "./Pages/Home/Sections/Nav";
import { Footer } from "./Components/Footer";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
