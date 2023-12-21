import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center mx-auto max-w-screen-xl p-5">
        <div className="logo absolute">
          {/* <img src="" alt="" /> */}
          <h1 className="text-4xl font-semibold">
            Task<span className="text-amber-500">Span</span>
          </h1>
        </div>
        <div className="flex justify-center mx-auto text-center">
          <ul className="hidden font-medium text-xl lg:flex gap-5 items-center">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="contact">Contact</Link>
            <Link to="pricing">Pricing</Link>
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
          } font-medium justify-center mx-auto flex-wrap duration-300 flex gap-3 lg:gap-5 items-center px-5`}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="contact">Contact</Link>
          <Link to="pricing">Pricing</Link>
        </ul>
      )}
    </>
  );
};

export default Nav;
