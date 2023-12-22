import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AuthContext } from "../../../Components/Authprovider/AuthProvider";

const AddTask = () => {
  useEffect(() => {
    window.document.title = "TaskSnap | Add task";
  }, []);
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [publishing, setPublishing] = useState(false);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setPublishing(true);
    const title = data.title;
    const priority = data.priority;
    const date = data.date;
    const des = data.des;

    const Info = {
      title,
      email: user?.email,
      priority,
      deadline: date,
      description: des,
    };
    axios
      .post("http://localhost:5000/addTask", Info)
      .then(() => {
        setPublishing(false);
        e.target.reset();
        //   toast.success("Successfully Inserted!", {
        //     position: "top-center",
        //     autoClose: 2000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "colored",
        //   }
        //   );
      })
      .catch(() => {
        setPublishing(false);
      });
  };

  return (
    <div className="text-black w-full  mx-auto h-full flex items-center justify-center flex-col">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gradient-to-tr from-[#207cb5] lg:w-[500px]  to-amber-600 p-8 rounded-lg drop-shadow-2xl"
      >
        <h1 className="mb-5 font-bold text-4xl text-white text-center">
          Add New Task
        </h1>
        <div>
          <label
            htmlFor="title"
            className="block mb-2  text-sm font-medium text-white"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            {...register("title", {
              required: "Title is required!",
            })}
            placeholder="article title here"
            className=" rounded-md mb-2 block outline-blue-400   w-full border border-gray-400  text-sm"
          />
          {errors.title && (
            <span className="text-amber-400 text-xs">
              {errors.title.message}
            </span>
          )}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-white">
            Priority
          </label>

          <select
            name="priority"
            {...register("priority")}
            id=""
            className="text-sm mb-2"
          >
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="date"
            className="block mb-2  text-sm font-medium text-white"
          >
            Deadline
          </label>
          <input
            id="date"
            type="datetime-local"
            {...register("date", {
              required: "Deadline is required!",
            })}
            placeholder="article title here"
            className=" rounded-md mb-2 block outline-blue-400   w-full border border-gray-400  text-sm"
          />
          {errors.date && (
            <span className="text-amber-400 text-xs">
              {errors.date.message}
            </span>
          )}
        </div>

        <label
          htmlFor="article"
          className="block mb-2  text-sm font-medium text-white"
        >
          Task Description
        </label>
        <textarea
          className=" resize-none outline-blue-400 block w-full border border-gray-400  text-sm "
          rows="3"
          id="article"
          {...register("des", {
            minLength: {
              value: 20,
              message: "Description should be at least 20 character!",
            },
          })}
          placeholder="This is about..."
        ></textarea>
        {errors.des && (
          <span className="text-amber-400 text-xs">{errors.des.message}</span>
        )}
        <button
          className={`mt-6  mx-auto flex items-center gap-3 justify-center  rounded-none  bg-transparent text-white hover:text-black hover:bg-white border-white border-2 ease-linear px-4 py-2 duration-300`}
        >
          {publishing ? "loading..." : "Continue"}
        </button>
      </form>
    </div>
  );
};

export default AddTask;
