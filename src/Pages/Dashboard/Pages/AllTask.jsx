import { Link } from "react-router-dom";

const AllTask = () => {
  return (
    <div className="flex gap-5  p-4 flex-wrap items-center justify-center ">
      <div
        className="shadow-lg rounded-lg p-3 w-60 md:w-72 lg:w-[400px]"
        draggable
      >
        <h1 className="text-3xl mb-3">Todo List</h1>
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
      <div className="shadow-lg rounded-lg p-3 w-60 md:w-72 lg:w-[400px]">
        <h1 className="text-3xl mb-3">Ongoing</h1>
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
      <div className="shadow-lg rounded-lg p-3 w-60 md:w-72 lg:w-[400px]">
        <h1 className="text-3xl mb-3">Completed</h1>
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
