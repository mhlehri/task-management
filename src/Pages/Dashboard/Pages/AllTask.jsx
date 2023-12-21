import { useEffect, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";

const AllTask = () => {
  const arra = [
    { id: "1", title: "title1" },
    { id: "2", title: "title1" },
    { id: "3", title: "title1" },
  ];
  const arra2 = [];
  const [arr, setarr] = useState(arra);
  const [arr2, setarr2] = useState(arra2);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) result;
    if (destination?.index === source?.index) return;
    let add,
      active = arra,
      complete = arra2;
    if (source.droppableId === "todo") {
      add = active[source?.index];
      active.splice(source?.index, 1);
    } else {
      add = complete[source?.index];
      complete.splice(source?.index, 1);
    }
    if (destination?.droppableId === "todo") {
      active.splice(destination?.index, 0, add);
    } else {
      complete.splice(destination?.index, 0, add);
    }

    setarr(active);
    setarr2(complete);
    console.log(active);
    console.log(complete);
  };

  useEffect(() => {
    window.document.title = "TaskSnap | Add task";
  }, []);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        {" "}
        <div className="flex gap-5 lg:mt-20 p-4 flex-wrap items-start justify-center ">
          {/* 1 */}
          <Droppable droppableId="todo">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="shadow-lg rounded-lg p-3 w-60 md:w-72 lg:w-[300px] bg-gradient-to-tr from-slate-600 to-orange-500 "
              >
                <h1 className="text-xl lg:text-3xl whitespace-nowrap mb-3 text-white">
                  Todo List
                </h1>
                {arr.map((item, i) => (
                  <Draggable key={i} draggableId={item?.id} index={i}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        draggable={true}
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
          {/* 2 */}
          <Droppable droppableId="ongoing">
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
                {arr2.map((item, i) => (
                  <Draggable key={i} draggableId={item?.id} index={i}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        draggable={true}
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
        </div>
      </div>
    </DragDropContext>
  );
};

export default AllTask;
