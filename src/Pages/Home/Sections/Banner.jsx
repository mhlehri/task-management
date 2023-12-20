import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 h-[500px] flex justify- items-center">
      <div>
        <h1 className="text-7xl font-semibold mb-3">
          Organize <br /> yourwork and <br /> life,{" "}
          <span className="text-blue-600">Finally.</span>
        </h1>
        <p className="text-2xl w-1/2 text-black/70 mb-3">
          Become Focused, organized, and calm with todo-list. The world's #1
          task management app.
        </p>
        <button className="text-3xl p-4 bg-black text-white relative overflow-hidden group z-10">
          <span className="absolute bg-white rotate-12 -inset-20 group-hover:duration-500 duration-1000 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
          <span className="absolute bg-blue-500 rotate-12 -inset-20 group-hover:duration-1000 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
          <span className="absolute bg-blue-600 rotate-12 -inset-20 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span>
          <span className="absolute opacity-0 text-3xl group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out text-center z-10 text-white">
            Register Now
          </span>
          Let’s Explore
        </button>
      </div>
    </div>
  );
};

export default Banner;
