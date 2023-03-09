import { useContext } from "react"
import { Link } from "react-router-dom"
import project from "../assets/my_project.jpg"
import getText from "./lang"
import LangCtx from "../langContext"

const Projects = () => {
    const langContext = useContext(LangCtx)

    return <div className="projects">
        <h3>{getText("recent-work", langContext.lang)}</h3>
        <p>{getText("recent-project", langContext.lang)}</p>
        <Link to="https://codic.vercel.app/">
            <img className="project-img" src={project} alt="My project" target="_blank" />
        </Link>
        <p><Link to="https://codic.vercel.app/">{getText("visit", langContext.lang)}</Link></p>
        <p>
            <b>{getText("role", langContext.lang)}</b> {getText("frontend-developer", langContext.lang)} (ReactJS)
        </p>
        <p>
            <b>{getText("achievements", langContext.lang)}</b> {getText("practicing", langContext.lang)}
        </p>
    </div>
};

export default Projects;