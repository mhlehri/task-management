import { useEffect } from "react";
import Banner from "./Sections/Banner";
import User from "./Sections/User";

const Home = () => {
  useEffect(() => {
    window.document.title = "TaskSpan | Home";
  }, []);
  return (
    <div>
      <header>
        <Banner />
        <User />
      </header>
    </div>
  );
};

export default Home;
