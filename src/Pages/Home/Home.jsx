import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header>
        <nav className="flex items-center mx-auto max-w-screen-xl p-5 bg-red-300">
          <div className="logo absolute">
            {/* <img src="" alt="" /> */}
            <h1 className="text-4xl">logo</h1>
          </div>
          <div className="flex justify-center mx-auto text-center">
            <ul className="hidden font-semibold lg:flex gap-5 items-center">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="contact">Contact</Link>
              <Link to="pricing">Pricing</Link>
            </ul>
          </div>
          {/* <ul>
            <li></li>
          </ul> */}
        </nav>
      </header>
    </div>
  );
};

export default Home;
