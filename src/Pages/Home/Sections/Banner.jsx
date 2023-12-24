import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import cal from "./../../../assets/trgoVzx0dI.json";

export const Cal = () => <Lottie animationData={cal} loop={true} />;

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-screen-xl mx-auto p-5 lg:h-[500px] text-center lg:text-left flex flex-col lg:flex-row justify- items-center">
      <div>
        <h1
          data-aos="fade-up"
          className="text-3xl md:text-4xl lg:text-7xl font-semibold mb-3"
        >
          Organize <br /> yourwork and <br /> life,{" "}
          <span className="text-amber-500">Finally.</span>
        </h1>
        <p data-aos="fade-down" className=" lg:text-2xl  text-black/70 mb-3">
          Become Focused, organized, and calm with todo-list. The world's #1
          task management app.
        </p>
        <button
          data-aos="fade-down"
          onClick={() => {
            navigate("/dashboard/home");
          }}
          className="lg:text-3xl px-4 py-2 bg-black text-white relative overflow-hidden group z-10"
        >
          <span className="absolute bg-white rotate-12 -inset-20 group-hover:duration-500 duration-1000 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
          <span className="absolute bg-amber-400 rotate-12 -inset-20 group-hover:duration-1000 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
          <span className="absolute bg-amber-500 rotate-12 -inset-20 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span>
          <span className="absolute opacity-0 text-black lg:text-3xl group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out text-center z-10">
            Let’s Explore
          </span>
          Let’s Explore
        </button>
      </div>
      <div>
        <Cal />
      </div>
    </div>
  );
};

export default Banner;
