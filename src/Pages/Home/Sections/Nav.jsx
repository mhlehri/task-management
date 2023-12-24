import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Components/Authprovider/AuthProvider";
import { toast } from "react-toastify";

const Nav = () => {
  const { user, signO } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center mx-auto max-w-screen-xl p-5">
        <div className="logo absolute">
          {/* <img src="" alt="" /> */}
          <h1 className="text-2xl lg:text-4xl font-semibold">
            Task<span className="text-amber-500">Span</span>
          </h1>
        </div>
        <div className="flex justify-center mx-auto text-center">
          <ul className="hidden font-medium text-xl lg:flex gap-5 items-center">
            <Link to="/">Home</Link>
            {user && <Link to="/dashboard/home">Dashboard</Link>}
            <Link to="/contact">Contact</Link>
            <Link to="/pricing">Pricing</Link>
            {user ? (
              <Link
                to="/"
                onClick={() => {
                  signO().then(() => {
                    toast.success("Successfully Logout!", {
                      position: "top-center",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });
                  });
                }}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active bg-amber-400 p-2 rounded-lg"
                    : "p-2"
                }
              >
                <h5 className="flex items-center whitespace-nowrap">
                  <img src="/logout.svg" width={30} alt="" />{" "}
                  <span className="ml-1">Logout</span>
                </h5>
              </Link>
            ) : (
              <Link to="/login">
                <h5 className="flex items-center whitespace-nowrap">
                  <img src="/login.svg" width={30} alt="" />{" "}
                  <span className="ml-1">Login</span>
                </h5>
              </Link>
            )}
          </ul>
        </div>
        {open ? (
          <img
            onClick={() => {
              setOpen(!open);
            }}
            className="block lg:hidden"
            src="/close.svg"
            width={30}
            alt="menu"
          />
        ) : (
          <img
            onClick={() => {
              setOpen(!open);
            }}
            className="block lg:hidden"
            src="/menu.svg"
            width={30}
            alt="menu"
          />
        )}
      </nav>

      {open && (
        <ul
          className={`lg:hidden ${
            open ? "h-full duration-300" : "h-0"
          } font-medium justify-center mx-auto text-sm shadow-lg pb-3 flex-wrap duration-300 flex gap-3 lg:gap-5 items-center px-5`}
        >
          <Link to="/">Home</Link>
          {user && <Link to="/dashboard">Dashboard</Link>}
          <Link to="contact">Contact</Link>
          <Link to="pricing">Pricing</Link>
          {user ? (
            <Link
              to="/"
              onClick={() => {
                signO().then(() => {
                  toast.success("Successfully Logout!", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });
                });
              }}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active bg-amber-400 p-2 rounded-lg"
                  : "p-2"
              }
            >
              <h5 className="flex items-center whitespace-nowrap">
                <img src="/logout.svg" width={30} alt="" />{" "}
                <span className="ml-1">Logout</span>
              </h5>
            </Link>
          ) : (
            <Link to="/login">
              <h5 className="flex items-center whitespace-nowrap">
                <img src="/login.svg" width={30} alt="" />{" "}
                <span className="ml-1">Login</span>
              </h5>
            </Link>
          )}
        </ul>
      )}
    </>
  );
};

export default Nav;
