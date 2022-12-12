import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";

import Qualification from "./components/Qualification/Qualification";
import Contact from "./components/Contact/Contact";
import Work from "./components/Work/Work";
import Works from "./components/Work/Works/Works";
import router from "./Routes/Route";
import { RouterProvider } from "react-router-dom";

function App() {
    const switchTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
