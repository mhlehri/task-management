import { Link, NavLink } from "react-router-dom";

const DashNav = () => {
  return (
    <>
      <div className="mr-3 hidden lg:block">
        <div className="flex flex-col space-y-3  pt-6 lg:pt-20 text-xl px-6 lg:px-16 shadow-gray-400  shadow-lg fixed h-screen">
          <div className="flex flex-col items-center justify-center py-5">
            <img src="/user.svg" width={80} alt="" />
            <h5 className="text-blue-600 font-semibold">John Doe</h5>
          </div>
          <div>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => {
                isActive ? "active " : "flex items-center";
              }}
            >
              <h5 className="flex items-center wfu">
                <img src="/dashboard.svg" width={30} alt="" />{" "}
                <span className="ml-1">Dashboard</span>
              </h5>
            </NavLink>
          </div>
          <NavLink
            to="/dashboard/add"
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
            to="/dashboard/all_tasks"
            className={({ isActive, isPending }) => {
              isPending ? "pending" : isActive ? "active" : "";
            }}
          >
            <h5 className="flex items-center whitespace-nowrap">
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

      {/* mobile nav */}
      <div className="lg:hidden">
        <div className="flex flex-col items-center justify-center py-5">
          <img src="/user.svg" width={80} alt="" />
          <h5 className="text-blue-600 font-semibold">John Doe</h5>
        </div>
        <div className="flex fixed bottom-0 z-[300] bg-orange-300 justify-center gap-5 w-full p-4">
          <Link
            to="/dashboard"
            className={({ isActive }) => {
              isActive ? "active " : "flex items-center";
            }}
          >
            <img src="/dashboard.svg" width={30} alt="" />{" "}
          </Link>
          <Link
            to="/dashboard/add"
            className={({ isActive, isPending }) => {
              isPending ? "pending" : isActive ? "active" : "";
            }}
          >
            <img src="/add.svg" width={30} alt="" />{" "}
          </Link>
          <Link
            className={({ isActive, isPending }) => {
              isPending ? "pending" : isActive ? "active" : "";
            }}
          >
            <img src="/task.svg" width={30} alt="" />{" "}
          </Link>

          <Link
            to="/"
            className={({ isActive, isPending }) => {
              isPending ? "pending" : isActive ? "active" : "";
            }}
          >
            {" "}
            <img src="/home.svg" width={30} alt="" />{" "}
          </Link>
          {/* <img src="/user.svg" width={40} alt="" /> */}
        </div>
      </div>
    </>
  );
};

export default DashNav;
