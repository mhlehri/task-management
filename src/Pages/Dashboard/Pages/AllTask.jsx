import { Link } from "react-router-dom";

const AllTask = () => {
  return (
    <div className="flex gap-5 lg:mt-20 p-4 flex-wrap items-start justify-center ">
      <div
        className="shadow-lg rounded-lg p-3 w-60 md:w-72 lg:w-[300px] bg-gradient-to-tr from-slate-600 to-blue-500 "
        draggable
      >
        <h1 className="text-xl lg:text-3xl whitespace-nowrap mb-3 text-white">
          Todo List
        </h1>
        <Link
          draggable={true}
          className="p-3 bg-amber-300 flex rounded-lg gap-3 items-center mt-3"
        >
          <img src="/todo.svg" width={20} alt="" />
          <p className="">task1</p>
        </Link>
        <Link
          draggable={true}
          className="p-3 bg-amber-300 flex rounded-lg gap-3 items-center  mt-3"
        >
          <img src="/todo.svg" width={20} alt="" />
          <p className="">task1</p>
        </Link>
      </div>
      <div className="shadow-lg rounded-lg p-3 w-60 md:w-72 lg:w-[300px] bg-gradient-to-tr from-slate-600 to-teal-600 ">
        <h1 className="text-xl lg:text-3xl whitespace-nowrap mb-3 text-white">
          Ongoing
        </h1>
        <Link
          draggable
          onDragStart={() => {
            console.log("lehri");
          }}
          className="p-3 bg-amber-300 flex rounded-lg gap-3 items-center mt-3"
        >
          <img src="/todo.svg" width={20} alt="" />
          <p className="">task1</p>
        </Link>
        <Link
          draggable={true}
          className="p-3 bg-amber-300 flex rounded-lg gap-3 items-center  mt-3"
        >
          <img src="/todo.svg" width={20} alt="" />
          <p className="">task1</p>
        </Link>
      </div>
      <div className="shadow-lg rounded-lg p-3 w-60 md:w-72 lg:w-[300px] bg-gradient-to-tr from-slate-600 to-lime-900">
        <h1 className="text-xl lg:text-3xl whitespace-nowrap mb-3 text-white">
          Completed
        </h1>
        <Link
          draggable={true}
          className="p-3 bg-amber-300 flex rounded-lg gap-3 items-center mt-3"
        >
          <img src="/todo.svg" width={20} alt="" />
          <p className="">task1</p>
        </Link>
        <Link
          draggable={true}
          className="p-3 bg-amber-300 flex rounded-lg gap-3 items-center  mt-3"
        >
          <img src="/todo.svg" width={20} alt="" />
          <p className="">task1</p>
        </Link>
        <Link
          draggable={true}
          className="p-3 bg-amber-300 flex rounded-lg gap-3 items-center  mt-3"
        >
          <img src="/todo.svg" width={20} alt="" />
          <p className="">task1</p>
        </Link>
        <Link
          draggable={true}
          className="p-3 bg-amber-300 flex rounded-lg gap-3 items-center  mt-3"
        >
          <img src="/todo.svg" width={20} alt="" />
          <p className="">task1</p>
        </Link>
      </div>
    </div>
  );
};

export default AllTask;
