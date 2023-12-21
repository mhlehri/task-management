import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Route.jsx";
import AuthProvider from "./Components/Authprovider/AuthProvider.jsx";
// import { DragDropContext } from "react-beautiful-dnd";

// const onDragEnd = (result) => {
//   const { source, destination } = result;
//   if (!destination) result;
//   if (destination.index === source.index) return;

//   console.log(result);
// };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <DragDropContext onDragEnd={onDragEnd}> */}
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    {/* </DragDropContext> */}
  </React.StrictMode>
);
