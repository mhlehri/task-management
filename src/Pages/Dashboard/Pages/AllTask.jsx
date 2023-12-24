import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import { AuthContext } from "../../../Components/Authprovider/AuthProvider";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AllTask = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const type = ["todo", "ongoing", "completed"];
  const {
    data: tasks,
    isPending,
    isSuccess,
    refetch,
  } = useQuery({
    queryKey: ["tasks", user],
    queryFn: async () => {
      const res = await axios.get(
        `https://task-management-server-eight-topaz.vercel.app/tasks?email=${user?.email}`
      );
      return res.data;
    },
  });
  const onDragEnd = (result) => {
    const { source, destination } = result;
    let draggedTodo = tasks.find((todo) => todo._id === result.draggableId);
    draggedTodo.category = destination.droppableId;
    let draggedTodoPosition = tasks.findIndex(
      (todo) => todo._id === source.draggableId
    );
    console.log(result);
    tasks.splice(draggedTodoPosition, 0, draggedTodo.category);
    axios
      .put(
        `https://task-management-server-eight-topaz.vercel.app/updateTask`,
        draggedTodo
      )
      .then(() => {
        toast.success(`Successfully Updated to ${draggedTodo.category}!`, {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };
  console.log(tasks);
  useEffect(() => {
    window.document.title = "TaskSpan | Add task";
  }, []);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="mb-20 lg:mb-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start place-content-center  gap-5 lg:mt-20 pt-5  mx-auto h-fit">
        {/* 1 */}
        {type.map((todos) => (
          <Droppable droppableId={todos} key={todos}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`shadow-lg rounded-lg p-3  bg-gradient-to-tr ${
                  snapshot.isDraggingOver
                    ? "bg-black/70"
                    : todos === "todo"
                    ? "from-slate-600 to-amber-500"
                    : todos === "ongoing"
                    ? "from-slate-600 to-green-500"
                    : "from-slate-600 to-rose-900"
                } `}
              >
                <h1 className="text-xl lg:text-3xl whitespace-nowrap mb-3 text-white">
                  {todos.toUpperCase()}
                </h1>
                {isPending
                  ? "loading..."
                  : isSuccess
                  ? tasks?.map(
                      (item, i) =>
                        todos === item.category && (
                          <Draggable key={i} draggableId={item?._id} index={i}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                draggable
                                className={`p-3  ${
                                  todos === "todo"
                                    ? "bg-yellow-600"
                                    : todos === "ongoing"
                                    ? "bg-green-600"
                                    : "bg-rose-900"
                                }  relative flex shadow-md text-white rounded-lg gap-2 items-center mt-8`}
                              >
                                <div
                                  className={`absolute -right-1 -top-5 font-semibold shadow-lg bg-slate-800 text-white p-2 rounded-lg`}
                                >
                                  {item?.priority}
                                </div>
                                <img
                                  src="/todo.svg"
                                  className="h-full w-4 md:w-6 lg:w-8"
                                  alt=""
                                />
                                <div className="flex justify-between items-center flex-1">
                                  <div className="overflow-x-hidden flex-1">
                                    <h4 className="lg:text-xl font-semibold">
                                      {item?.title}
                                    </h4>
                                    <p className="text-sm lg:text-base opacity-90">
                                      {item?.description}
                                    </p>
                                    <p className="text-sm pt-2 opacity-90">
                                      <span className="font-bold">
                                        Deadline <br />
                                      </span>{" "}
                                      {moment(item?.deadline).format(
                                        "MM-D-YY, h:mm a"
                                      )}
                                    </p>
                                  </div>
                                  <div className="py-2 flex flex-col">
                                    <button
                                      onClick={() => {
                                        navigate(`/dashboard/edit/${item._id}`);
                                      }}
                                    >
                                      <img
                                        src="/edit.svg"
                                        width={30}
                                        className="cursor-pointer"
                                        alt=""
                                      />
                                    </button>
                                    <button
                                      onClick={() => {
                                        axios
                                          .delete(
                                            `https://task-management-server-eight-topaz.vercel.app/delete/${item._id}`
                                          )
                                          .then(() => refetch());
                                      }}
                                    >
                                      <img
                                        src="/delete.svg"
                                        width={30}
                                        className="cursor-pointer"
                                        alt=""
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        )
                    )
                  : "Not Available"}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default AllTask;
