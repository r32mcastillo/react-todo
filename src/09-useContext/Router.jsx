import { createBrowserRouter } from "react-router-dom";
import { AboutPage, ErrorPage, HomePage, LoginPage, MainApp } from "./";

export const router = createBrowserRouter([
  {
    path: "login",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/",
    element: <MainApp />,
    //errorElement: <Navigate to={`login`}/>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]
  //,{basename:'casa'}
);