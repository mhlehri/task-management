import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Components/Authprovider/AuthProvider";

const AllTask = () => {
  const { user } = useContext(AuthContext);
  console.log(user, "11");
  const [task, setTask] = useState([]);
  const type = ["todo", "ongoing", "completed"];
  const {
    data: tasks,
    isPending,
    isSuccess,
  } = useQuery({
    queryKey: ["tasks", user],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/tasks?email=${user?.email}`
      );
      setTask(res.data);
      return res.data;
    },
  });
  const onDragEnd = (result) => {
    const { source, destination } = result;
    let draggedTodo = tasks.find((todo) => todo._id === result.draggableId);
    console.log(draggedTodo, "paici");
    draggedTodo.category = destination.droppableId;
    let draggedTodoPosition = tasks.findIndex(
      (todo) => todo._id === source.draggableId
    );
    console.log(result);
    tasks.splice(draggedTodoPosition, 0, draggedTodo.category);
    axios.put(
      `http://localhost:5000/updateTask?email=${user?.email}`,
      draggedTodo
    );
  };
  console.log(tasks);
  useEffect(() => {
    window.document.title = "TaskSnap | Add task";
    console.log(tasks);
  }, []);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-5 lg:mt-20 p-4 flex-wrap items-start justify-center ">
        {/* 1 */}
        {type.map((todos) => (
          <Droppable droppableId={todos} key={todos}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`shadow-lg rounded-lg p-3 w-60 md:w-72 lg:w-[300px] xl:w-[400px] bg-gradient-to-tr ${
                  snapshot.isDraggingOver
                    ? "bg-black/70"
                    : todos === "todo"
                    ? "from-slate-600 to-amber-500"
                    : todos === "ongoing"
                    ? "from-slate-600 to-green-500"
                    : "from-slate-600 to-red-500"
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
                                    ? "bg-amber-300"
                                    : todos === "ongoing"
                                    ? "bg-emerald-400"
                                    : "bg-red-300"
                                }  relative flex shadow-md rounded-lg gap-3 items-center mt-3`}
                              >
                                <div className="absolute -right-1 -top-4 shadow-lg bg-fuchsia-300 p-1 rounded-lg">
                                  {item?.priority}
                                </div>
                                <img
                                  src="/todo.svg"
                                  className="h-full"
                                  width={20}
                                  alt=""
                                />
                                <div>
                                  <h4 className="text-xl font-semibold">
                                    {item?.title}
                                  </h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Tenetur, minus.
                                  </p>
                                  <div className="py-2 flex justify-center gap-4">
                                    <Link to="/">
                                      <img
                                        src="/edit.svg"
                                        width={30}
                                        className="cursor-pointer"
                                        alt=""
                                      />
                                    </Link>
                                    <Link to="/">
                                      <img
                                        src="/delete.svg"
                                        width={30}
                                        className="cursor-pointer"
                                        alt=""
                                      />
                                    </Link>
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
        {/* 2 */}
        {/* <Droppable droppableId="ongoing">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="shadow-lg rounded-lg p-3 w-60 md:w-72 lg:w-[300px] bg-gradient-to-tr from-slate-600 to-blue-500 "
              draggable
            >
              <h1 className="text-xl lg:text-3xl whitespace-nowrap mb-3 text-white">
                ongoing List
              </h1>
              {arr3.map((item, i) => (
                <Draggable key={i} draggableId={item?.id} index={i}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      draggable
                      className="p-3 bg-amber-300 flex rounded-lg gap-3 items-center mt-3"
                    >
                      <img src="/todo.svg" width={20} alt="" />
                      <p className="">task1</p>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="completed">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="shadow-lg rounded-lg p-3 w-60 md:w-72 lg:w-[300px] bg-gradient-to-tr from-slate-600 to-blue-500 "
              draggable
            >
              <h1 className="text-xl lg:text-3xl whitespace-nowrap mb-3 text-white">
                Completed List
              </h1>
              {arr2.map((item, i) => (
                <Draggable key={i} draggableId={item?.id} index={i}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      draggable
                      className="p-3 bg-amber-300 flex rounded-lg gap-3 items-center mt-3"
                    >
                      <img src="/todo.svg" width={20} alt="" />
                      <p className="">task1</p>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable> */}
      </div>
    </DragDropContext>
  );
};

export default AllTask;
