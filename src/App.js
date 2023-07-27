import "./styles.css";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import NavBar from "./components/NavBar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/users",
    element: <Users />
  }
]);

export default function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
    </>
  );
}
