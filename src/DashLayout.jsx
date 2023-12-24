import { Outlet } from "react-router-dom";
import DashNav from "./Pages/Dashboard/component/DashNav";

const DashLayout = () => {
  return (
    <div className="lg:flex">
      <div className="lg:min-w-96">
        <DashNav />
      </div>
      <div className="px-5 mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashLayout;
