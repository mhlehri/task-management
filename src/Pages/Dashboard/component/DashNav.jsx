import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Components/Authprovider/AuthProvider";

const DashNav = () => {
  const { signO, user } = useContext(AuthContext);
  return (
    <>
      <div className="mr-3 hidden lg:block">
        <div className="fixed flex flex-col space-y-3 pt-6 lg:pt-20 text-xl px-6 lg:px-16 shadow-gray-400  shadow-lg h-screen">
          <div className="flex flex-col items-center justify-center py-5">
            <h1 className="text-2xl lg:text-4xl font-semibold mb-3">
              Task<span className="text-amber-500">Span</span>
            </h1>
          </div>
          <NavLink
            to="/dashboard/home"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active bg-amber-400 p-2 rounded-lg"
                : "p-2"
            }
          >
            <h5 className="flex items-center">
              <img src="/dashboard.svg" width={30} alt="" />{" "}
              <span className="ml-1 whitespace-nowrap">Dashboard</span>
            </h5>
          </NavLink>
          <NavLink
            to="/dashboard/add"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active bg-amber-400 p-2 rounded-lg"
                : "p-2"
            }
          >
            <h5 className="flex items-center">
              <img src="/add.svg" width={30} alt="" />{" "}
              <span className="ml-1 whitespace-nowrap">Add Todo</span>
            </h5>
          </NavLink>
          <NavLink
            to="/dashboard/all_tasks"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active bg-amber-400 p-2 rounded-lg"
                : "p-2"
            }
          >
            <h5 className="flex items-center whitespace-nowrap">
              <img src="/task.svg" width={30} alt="" />{" "}
              <span className="ml-1 w-36">All Tasks</span>
            </h5>
          </NavLink>
          <NavLink
            to="/dashboard/Profile"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active bg-amber-400 p-2 rounded-lg"
                : "p-2"
            }
          >
            <h5 className="flex items-center">
              <img src="/user.svg" width={30} alt="" />{" "}
              <span className="ml-1 whitespace-nowrap">Profile</span>
            </h5>
          </NavLink>

          <hr />
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "p-2"
            }
          >
            <h5 className="flex items-center">
              <img src="/home.svg" width={30} alt="" />{" "}
              <span className="ml-1">Home</span>
            </h5>
          </NavLink>
        </div>
      </div>

      {/* mobile nav */}
      <div className="lg:hidden w-screen shadow-xl">
        <div className="flex fixed bottom-0 z-[300] bg-amber-300 justify-center gap-5 w-full p-4">
          <Link to="/">
            <img src="/home.svg" width={30} alt="" />{" "}
          </Link>
          <Link
            to="/dashboard/home"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active bg-amber-400 p-2 rounded-lg"
                : "p-2"
            }
          >
            <img src="/dashboard.svg" width={30} alt="" />{" "}
          </Link>
          <Link
            to="/dashboard/add"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active bg-amber-400 p-2 rounded-lg"
                : "p-2"
            }
          >
            <img src="/add.svg" width={30} alt="" />{" "}
          </Link>
          <Link
            to="/dashboard/all_tasks"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active bg-amber-400 p-2 rounded-lg"
                : "p-2"
            }
          >
            <img src="/task.svg" width={30} alt="" />{" "}
          </Link>
          <Link
            to="/dashboard/Profile"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active bg-amber-400 p-2 rounded-lg"
                : "p-2"
            }
          >
            <img src="/user.svg" width={30} alt="" />{" "}
          </Link>
          {/* <img src="/user.svg" width={40} alt="" /> */}
        </div>
      </div>
    </>
  );
};

export default DashNav;
