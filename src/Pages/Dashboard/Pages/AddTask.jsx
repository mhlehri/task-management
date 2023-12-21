import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import axios from "axios";
import { AuthContext } from "../../../Components/Authprovider/AuthProvider";
const options1 = [
  { value: "Politics", label: "Politics" },
  { value: "Business", label: "Business" },
  { value: "Technology", label: "Technology" },
];
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "white", // Change the background color
    borderColor: state.isFocused ? "black" : provided.borderColor,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundImage: state.isSelected
      ? "linear-gradient(to top right, #58bfff , #01bea5)"
      : "white", // Change the option background color
    color: state.isSelected ? "white" : "black", // Change the option text color
  }),
};
const AddTask = () => {
  useEffect(() => {
    window.document.title = "PrimePress | Add Articles";
  }, []);
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedOption, setSelectedOption] = useState(null);
  const [publishing, setPublishing] = useState(false);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setPublishing(true);
    const title = data.title;
    const article = data.article;
    let publisher = e.target.publisher.value;

    const Info = {
      publisher,
      Aemail: user?.email,
      Aname: user?.displayName,
      Aimage: user?.photoURL,
      title,
      article,
    };
    axios
      .post("/addArticle", Info)
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

          <select name="priority" id="" className="text-sm mb-2">
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
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
