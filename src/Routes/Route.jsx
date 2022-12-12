import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";

import Main from "../Layouts/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
    {
        path: "/projectDetails/:id",
        element: <ProjectDetails />,
        loader: ({ params }) => params.id,
    },
]);

export default router;
