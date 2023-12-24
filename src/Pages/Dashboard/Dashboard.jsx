import { useContext } from "react";
import { AuthContext } from "../../Components/Authprovider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  return (
    <div className="text-center flex items-center h-screen flex-col justify-center gap-4">
      <h1 className="text-3xl">Welcome! {user?.displayName}</h1>
      <p className="lg:w-3/5 opacity-75 mx-auto">
        Welcome to Your Productivity Sanctuary! Step into your dashboard, where
        dreams meet deadlines. Embrace the power of organization, conquer
        challenges, and let your accomplishments soar. Your journey to success
        starts here – make each task a step closer to your goals. Happy tasking!
      </p>
      <button
        onClick={() => {
          navigate("/dashboard/all_tasks");
        }}
        className=" px-4 py-2 bg-black text-white relative overflow-hidden group z-10"
      >
        <span className="absolute bg-white rotate-12 -inset-20 group-hover:duration-500 duration-1000 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
        <span className="absolute bg-amber-400 rotate-12 -inset-20 group-hover:duration-1000 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
        <span className="absolute bg-amber-500 rotate-12 -inset-20 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span>
        <span className="absolute opacity-0 text-black group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out text-center z-10">
          Go & Check your Todos
        </span>
        Go & Check your Todos
      </button>
    </div>
  );
};

export default Dashboard;
