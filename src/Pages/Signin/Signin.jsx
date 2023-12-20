import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../Components/Authprovider/AuthProvider";
import axios from "axios";

export function SignIn() {
  useEffect(() => {
    window.document.title = "PrimePress | Sign In";
  }, []);
  const { signIn, signG } = useContext(AuthContext);
  const [logging, setLogging] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data, e) => {
    e.preventDefault();
    setLogging(true);
    // const form = e.target;
    const email = data.email;
    const password = data.password;
    const user = { email, password };

    signIn(email, password)
      .then(() => {
        setLogging(false);
        // toast.success("Successfully Logged In!", {
        //   position: "top-center",
        //   autoClose: 3000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",
        // });
        navigate("/");
      })
      .catch((err) => {
        setLogging(false);
        console.dir(err);
        const error = err.code;
        if (error === "auth/too-many-requests") {
          setError("password", {
            type: "manual",
            message:
              "Too many unsuccessful sign-in attempts. Please try again later.",
          });
        } else if (error) {
          let er = error.split("/")[1];
          setError("password", {
            type: "manual",
            message: `${er}`,
          });
        }
      });
  };
  return (
    <div className="mx-3">
      <div className="mx-auto max-w-lg my-20 px-6 py-5  rounded-lg ">
        <div color="transparent" shadow={false} className="text-inherit">
          <h4 className="text-3xl font-bold">Sign In</h4>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 mb-2 max-w-screen-lg "
          >
            <div className="mb-4 flex flex-col gap-6">
              <div>
                <input
                  type="email"
                  size="lg"
                  name="email"
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
                <input
                  type="password"
                  size="lg"
                  name="password"
                  {...register("password", {
                    required: "password is required!",
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
            {logging ? (
              <button
                className={`mx-auto flex items-center gap-3  justify-center   bg-transparent   rounded-none  outline outline-2 outline-black   hover:scale-105 py-0  delay-75 ease-linear`}
              >
                loaddin....
              </button>
            ) : (
              <button
                type="submit"
                className={`mx-auto flex items-center gap-3  justify-center   bg-transparent hover:bg-gradient-to-tr from-[#58bfff]  to-[#01bea5] text-black  hover:text-white  rounded-none  outline outline-2    hover:outline-none hover:scale-105  delay-75 ease-linear`}
              >
                Login
              </button>
            )}
            <p className="mt-4 text-center font-normal">
              Don't have an account?{" "}
              <Link to="/signUp" className="underline font-semibold text-black">
                Register
              </Link>
            </p>
          </form>
          <div className="w-full mx-auto text-center">
            <hr className="border-t-2 border-black w-2/3 mx-auto py-2" />
            <button
              onClick={() => {
                setLogging(true);
                signG()
                  .then((res) => {
                    setLogging(false);
                    navigate("/");
                    const user = {
                      name: res.user.displayName,
                      email: res.user.email,
                      img: res.user.photoURL,
                    };

                    axios
                      .post("/addUser", user)
                      .then(() => {
                        setLogging(false);
                      })
                      .catch(() => {
                        setLogging(false);
                      });
                    // toast.success(`Successfully Logged In!`, {
                    //   position: "top-center",
                    //   autoClose: 1500,
                    //   hideProgressBar: false,
                    //   closeOnClick: true,
                    //   pauseOnHover: true,
                    //   draggable: true,
                    //   progress: undefined,
                    //   theme: "colored",
                    // });
                  })
                  .catch(() => setLogging(false));
              }}
              type="submit"
              className={`mt-6 w-1/2 mx-auto flex items-center gap-3 justify-center  rounded-none  bg-transparent text-black hover:text-white hover:bg-black border-black border-2 hover:scale-105  delay-50 ease-linear`}
            >
              login with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
