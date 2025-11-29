import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import Countdown from "./pages/CountDown";
import PageThree from "./pages/PageThree";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageOne />,
  },
  {
    path: "/page-two",
    element: <PageTwo />,
  },
  {
    path: "/page-four",
    element: <Countdown />,
  },
  {
    path: "/page-three",
    element: <PageThree />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
