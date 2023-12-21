import { NavLink } from "react-router-dom";

const DashNav = () => {
  return (
    <div className="w-3/12">
      <div className="flex flex-col fixed space-y-1 lg:space-y-3 w-fit  pt-6 lg:pt-20 text-xl px-6 lg:px-16 shadow-gray-400  shadow-lg h-screen">
        <div className="flex flex-col items-center justify-center py-5">
          <img src="/user.svg" width={80} alt="" />
          <h5>John Doe</h5>
        </div>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => {
            isActive ? "active " : "flex items-center";
          }}
        >
          <h5 className="flex items-center">
            <img src="/dashboard.svg" width={30} alt="" />{" "}
            <span className="ml-1">Dashboard</span>
          </h5>
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) => {
            isPending ? "pending" : isActive ? "active" : "";
          }}
        >
          <h5 className="flex items-center">
            <img src="/add.svg" width={30} alt="" />{" "}
            <span className="ml-1">Add Task</span>
          </h5>
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) => {
            isPending ? "pending" : isActive ? "active" : "";
          }}
        >
          <h5 className="flex items-center">
            <img src="/task.svg" width={30} alt="" />{" "}
            <span className="ml-1">All Tasks</span>
          </h5>
        </NavLink>
        <hr />
        <NavLink
          to="/"
          className={({ isActive, isPending }) => {
            isPending ? "pending" : isActive ? "active" : "";
          }}
        >
          <h5 className="flex items-center">
            <img src="/home.svg" width={30} alt="" />{" "}
            <span className="ml-1">Home</span>
          </h5>
        </NavLink>
      </div>
    </div>
  );
};

export default DashNav;
