import { useEffect } from "react";
import Banner from "./Sections/Banner";
import Nav from "./Sections/Nav";

const Home = () => {
  useEffect(() => {
    window.document.title = "TaskSnap | Home";
  }, []);
  return (
    <div>
      <header>
        <Nav />
        <Banner />
      </header>
    </div>
  );
};

export default Home;
