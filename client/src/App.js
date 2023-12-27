import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

//Import All routes 
import Username from "./Components/Username";
import Password from "./Components/Password";
import Profile from "./Components/Profile";
import Reset from "./Components/Reset";
import Recovery from "./Components/Recovery";
import Register from "./Components/Register";
import PageNotFound from "./Components/PageNotFound";

const router = createBrowserRouter(
  [
  {
  path:"/",
  element:<Username></Username>
  },
  {
    path:"/register",
    element:<Register></Register>
  },
  {
    path:"/password",
    element:<Password></Password>
  },
  {
    path:"/profile",
    element:<Profile></Profile>
  },
  {
    path:"/reset",
    element:<Reset></Reset>
  },
  {
    path:"/recovery",
    element:<Recovery></Recovery>
  },
  {
    path:"*",
    element:<PageNotFound></PageNotFound>
  }
  ]
)
function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
