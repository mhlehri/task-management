import { Outlet } from "react-router-dom";
import DashNav from "./Pages/Dashboard/component/DashNav";
const DashLayout = () => {
  return (
    <div className="lg:flex">
      <DashNav />
      <div className="p-5 mx-auto mb-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashLayout;
