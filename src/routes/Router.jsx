import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import Bookings from "../pages/Bookings/Bookings";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import CheckOut from "../pages/CheckOut/CheckOut";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/rooms')
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
        loader: () => fetch('http://localhost:5000/rooms')
      },
      {
        path: "/roomDetails/:id",
        element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/rooms/${params.id}`)
      },
      {
        path: "/checkout/:id",
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/rooms/${params.id}`)
      },
      {
        path: "/bookings",
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ]
  },
]);

export default router;