import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
]);
