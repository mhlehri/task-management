import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../Components/Authprovider/AuthProvider";
import { toast } from "react-toastify";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export function SignUp() {
  useEffect(() => {
    window.document.title = "TaskSpan | Sign Up";
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const { createUser, update, signO, signG, signGit } = useContext(AuthContext);
  const navigate = useNavigate();
  const [creating, setCreating] = useState(false);
  const onSubmit = async (data, e) => {
    e.preventDefault();
    setCreating(true);
    const name = data.name;
    const image = data.photo[0];
    const email = data.email;
    const password = data.password;
    const res = await axios.post(
      image_hosting_api,
      { image },
      {
        headers: { "content-type": "multipart/form-data" },
      }
    );

    const img = res.data.data.display_url;
    if (res.data.success) {
      createUser(email, password)
        .then(() => {
          toast.success("Successfully Registered!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          update(name, img)
            .then(
              signO()
                .then(() => {
                  navigate("/login");
                  setCreating(false);
                })
                .catch(() => {
                  setCreating(false);
                })
            )
            .catch((err) => {
              if (err) {
                toast.error(`${err.code}`, {
                  position: "top-center",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
                setCreating(false);
              }
            });
        })
        .catch((err) => {
          setCreating(false);
          const error = err.code;
          if (error === "auth/email-already-in-use") {
            setError("email", {
              type: "manual",
              message: `Email already in use. Please try another one`,
            });
          } else if (error) {
            let er = error.split("/")[1];
            setError("password", {
              type: "manual",
              message: `${er}`,
            });
          }
          toast.error(`${err.code}`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
    }
  };
  return (
    <div className="mx-3 ">
      <div className="mx-auto max-w-lg my-5 lg:my-20 px-6 py-5  rounded-lg">
        <div color="transparent" className="text-inherit">
          <h4 className="text-3xl font-bold">Register</h4>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-2 lg:mt-6 mb-2 max-w-screen-lg "
          >
            <div className="mb-4 flex flex-col gap-6 ">
              <div>
                <div className="">
                  <label htmlFor="files">Upload Profile</label>
                  <input
                    id="files"
                    type="file"
                    size="lg"
                    name="photo"
                    {...register("photo", {
                      required: "Photo is required",
                      validate: {
                        lessThan10MB: (files) =>
                          files[0]?.size < 10000000 || "Max 10MB",
                        acceptedFormats: (files) =>
                          [
                            "image/jpeg",
                            "image/png",
                            "image/gif",
                            "image/jpg",
                          ].includes(files[0]?.type) ||
                          "Only PNG, JPEG, GIF, JPG",
                      },
                    })}
                    className="file:bg-gray-950 file:rounded-lg file:text-white overflow-hidden underline  cursor-pointer "
                  />
                </div>
                {errors.photo && (
                  <p className="text-red-800 text-xs">{errors.photo.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="Name">Your Name</label>
                <input
                  id="name"
                  placeholder="John Doe"
                  type="text"
                  size="lg"
                  name="name"
                  label="Name"
                  color="black"
                  {...register("name", {
                    required: "Name is required field!",
                  })}
                />
                {errors.name && (
                  <span className="text-red-800 text-xs">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="email">Your email</label>
                <input
                  id="email"
                  type="email"
                  size="lg"
                  name="email"
                  placeholder="abc@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  label="Email"
                  color="black"
                />
                {errors.email && (
                  <span className="text-red-800 text-xs">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="pass">Password</label>
                <input
                  id="pass"
                  type="password"
                  size="lg"
                  name="password"
                  placeholder="********"
                  {...register("password", {
                    required: "password is required!",
                    minLength: {
                      value: 6,
                      message: "Password should be at least 6 character!",
                    },
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9]).*$/,
                      message:
                        "Password should be at least 1 uppercase letter, 1 special character & 1 Number",
                    },
                  })}
                  label="Password"
                  color="black"
                />
                {errors.password && (
                  <span className="text-red-800 text-xs">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>

            <button
              className={`mt-6  mx-auto flex items-center gap-3 justify-center  rounded-none  bg-transparent text-black hover:text-white hover:bg-black border-black border-2 ease-linear px-4 py-2 duration-300`}
            >
              {creating ? "loading..." : "Continue"}
            </button>

            <p className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold underline text-black">
                Login
              </Link>
            </p>
          </form>
          <div className="w-full mx-auto text-center">
            <hr className="border-t-2 border-black w-2/3 mx-auto py-2" />

            <button
              onClick={() => {
                setCreating(true);
                signG()
                  .then((res) => {
                    setCreating(false);
                    navigate("/dashboard/home");
                    toast.success(`Successfully Logged In!`, {
                      position: "top-center",
                      autoClose: 1500,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });
                  })
                  .catch((err) => {
                    setCreating(false);
                    toast.error(`${err.message}`, {
                      position: "top-center",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });
                  });
              }}
              type="submit"
              className={`mt-6 lg:w-1/2 mx-auto flex items-center gap-3 justify-center  rounded-none  bg-transparent text-black hover:text-white hover:bg-black border-black border-2  py-2 px-4 duration-300 ease-linear`}
            >
              Continue with google
            </button>
            <button
              onClick={() => {
                setCreating(true);
                signGit()
                  .then(() => {
                    setCreating(false);
                    navigate("/dashboard/home");
                    toast.success(`Successfully Logged In!`, {
                      position: "top-center",
                      autoClose: 1500,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });
                  })
                  .catch((err) => {
                    setCreating(false);
                    toast.error(`${err.message}`, {
                      position: "top-center",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });
                  });
              }}
              type="submit"
              className={`mt-2 lg:w-1/2 mx-auto flex items-center gap-3 justify-center  rounded-none  bg-transparent text-black hover:text-white hover:bg-black border-black border-2  py-2 px-4 duration-300 ease-linear`}
            >
              Continue with github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
