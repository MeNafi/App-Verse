import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root"; // Changed from MainLayout to Root
import Home from "../pages/Home/Home";
import AllApps from "../pages/AllApps/AllApps";
import AppDetails from "../pages/AppDetails/AppDetails";
import MyInstallation from "../pages/MyInstallation/MyInstallation";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Using Root here
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/", // This is the default child for the "/" path
        element: <Home />,
      },
      {
        path: "apps",
        element: <AllApps />,
      },
      {
        path: "app/:id",
        element: <AppDetails />,
      },
      {
        path: "installation",
        element: <MyInstallation />,
      },
      
    {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />, // This triggers for invalid URLs
    
  
      }
    ],
  },
]);

export default Router;