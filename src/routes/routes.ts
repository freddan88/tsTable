import { createBrowserRouter } from "react-router-dom";
import userPageRoutes from "./userPageRoutes";
import testPageRoutes from "./testPageRoutes";

const routes = createBrowserRouter([userPageRoutes, testPageRoutes]);

export default routes;
