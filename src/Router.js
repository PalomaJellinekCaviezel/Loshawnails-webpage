import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Location from "./pages/Location";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "aboutUs",
    element: <AboutUs />,
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "location",
    element: <Location />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);
