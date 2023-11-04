import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import Bookings from "../pages/Bookings/Bookings";

const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/rooms",
            element: <Rooms></Rooms>
        },
        {
            path: "/bookings",
            element: <Bookings></Bookings>
        },
      ]
    },
  ]);

export default router;