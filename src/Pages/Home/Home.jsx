import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <header>
        <nav className="flex items-center mx-auto max-w-screen-xl p-5">
          <div className="logo absolute">
            {/* <img src="" alt="" /> */}
            <h1 className="text-4xl">logo</h1>
          </div>
          <div className="flex justify-center mx-auto text-center">
            <ul className="hidden font-medium lg:flex gap-5 items-center">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="contact">Contact</Link>
              <Link to="pricing">Pricing</Link>
            </ul>
          </div>
          <img
            onClick={() => {
              setOpen(!open);
            }}
            className="block lg:hidden"
            src="/public/menu.svg"
            width={30}
            alt="menu"
          />
        </nav>

        <ul className="lg:hidden font-medium flex-col flex gap-5 items-center">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="contact">Contact</Link>
          <Link to="pricing">Pricing</Link>
        </ul>
      </header>
    </div>
  );
};

export default Home;
