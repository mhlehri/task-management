import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AuthContext } from "../../../Components/Authprovider/AuthProvider";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

const EditTask = () => {
  useEffect(() => {
    window.document.title = "TaskSpan | Add task";
  }, []);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  console.log(id, "id re vai");
  const { data: task, isPending } = useQuery({
    queryKey: ["1task", user],
    queryFn: async () => {
      const res = await axios.get(
        `https://task-management-server-eight-topaz.vercel.app/tasks/${id}`
      );
      return res.data;
    },
  });
  console.log(task);
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
      _id: task._id,
      title,
      priority,
      deadline: date,
      description: des,
    };
    axios
      .put(
        "https://task-management-server-eight-topaz.vercel.app/editTask",
        Info
      )
      .then(() => {
        setPublishing(false);
        navigate("/dashboard/all_tasks");
        e.target.reset();
        toast.success("Successfully updated!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch(() => {
        setPublishing(false);
      });
  };

  return (
    <div className="text-black w-full  mx-auto h-screen flex items-center justify-center flex-col mb-20 lg:mb-0">
      {isPending ? (
        "loading..."
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gradient-to-tr from-slate-700 w-full md:w-2/3 lg:w-[550px] to-amber-500 p-8 rounded-lg drop-shadow-2xl"
        >
          <h1 className="mb-5 font-bold text-4xl text-white text-center">
            Edit Task
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
              defaultValue={task?.title}
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
              defaultValue={task?.priority}
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
              defaultValue={task?.deadline}
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
            defaultValue={task?.description}
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
            {publishing ? "loading..." : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
};

export default EditTask;
