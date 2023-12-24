import { useContext } from "react";
import { AuthContext } from "../../Components/Authprovider/AuthProvider";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, signO } = useContext(AuthContext);
  return (
    <div className="w-full flex items-center h-screen overflow-hidden mx-auto justify-center">
      <div className="p-6 drop-shadow-lg w-fit bg-gradient-to-tr from-slate-600 to-amber-500 space-y-3 text-center rounded-lg text-white">
        <img
          src={user?.photoURL}
          className="w-24 h-24 lg:w-32 mx-auto rounded-full lg:h-32"
          alt=""
        />
        <h3 className="text-lg">
          <span className="font-semibold">Name:</span> {user?.displayName}
        </h3>
        <p>
          <span className="font-semibold">Email:</span> {user?.email}
        </p>
        <button
          to="/"
          onClick={() => {
            signO().then(() => {
              toast.success("Successfully Logout!", {
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
          className="border-2 px-4 py-2 border-white"
        >
          <h5 className="flex items-center whitespace-nowrap">
            <img src="/logout-white.svg" width={30} alt="" />{" "}
            <span className="ml-1">Logout</span>
          </h5>
        </button>
      </div>
    </div>
  );
};

export default Profile;
