import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 h-[500px] flex justify- items-center">
      <div>
        <h1 className="text-7xl font-semibold mb-3">
          Organize <br /> yourwork and <br /> life,{" "}
          <span className="text-amber-500">Finally.</span>
        </h1>
        <p className="text-2xl w-1/2 text-black/70 mb-3">
          Become Focused, organized, and calm with todo-list. The world's #1
          task management app.
        </p>
        <button className="text-3xl px-4 py-2 bg-black text-white relative overflow-hidden group z-10">
          <span className="absolute bg-white rotate-12 -inset-20 group-hover:duration-500 duration-1000 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
          <span className="absolute bg-amber-400 rotate-12 -inset-20 group-hover:duration-1000 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
          <span className="absolute bg-amber-500 rotate-12 -inset-20 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span>
          <span className="absolute opacity-0 text-black text-3xl group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out text-center z-10">
            Let’s Explore
          </span>
          Let’s Explore
        </button>
      </div>
    </div>
  );
};

export default Banner;
