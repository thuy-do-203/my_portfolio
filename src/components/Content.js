import { Routes, Route } from "react-router-dom"
import AboutMe from "./AboutMe";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Content = () => {
    return (
        <div className="center flex-1">
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/education" element={<Education />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default Content;