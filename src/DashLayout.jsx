import { Outlet } from "react-router-dom";
import DashNav from "./Pages/Dashboard/component/DashNav";
const DashLayout = () => {
  return (
    <div className="flex max-w-screen-xl mx-auto">
      <DashNav />
      <div className="p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default DashLayout;
