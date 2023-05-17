import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ChefCards from "../Pages/ChefCards/ChefCards";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import Error from "../Pages/Error/Error";
import PrivateRoute from "./PrivateRoute";
import Spinner from "../Pages/Spinner/Spinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:4000/data"),
      },
      {
        path: "/:id",
        element: (
          <PrivateRoute>
            <ChefDetails></ChefDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/data/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/loader",
        element: <Spinner></Spinner>,
      },
    ],
  },
]);

export default router;
