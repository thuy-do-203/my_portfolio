import { useContext } from "react"
import { NavLink } from "react-router-dom"
import getText from "./lang";
import LangCtx from "../langContext";

const navLinkClassName = (navLinkStatus) => {
    return navLinkStatus.isActive ? "nav-link-active" : "";
}

const NavBar = () => {
    const langContext = useContext(LangCtx)
    return (
        <div className="nav-bar background-grey">
            <div className="padding">
                <NavLink className={navLinkClassName} to="/">{getText('about-me', langContext.lang)}</NavLink>
            </div>
            <div className="padding">
                <NavLink className={navLinkClassName} to="/education">{getText('education', langContext.lang)}</NavLink>
            </div>
            <div className="padding">
                <NavLink className={navLinkClassName} to="/skills">{getText('skills', langContext.lang)}</NavLink>
            </div>
            <div className="padding">
                <NavLink className={navLinkClassName} to="/projects">{getText('projects', langContext.lang)}</NavLink>
            </div>
            <div className="padding">
                <NavLink className={navLinkClassName} to="/contact">{getText('contact', langContext.lang)}</NavLink>
            </div>
        </div>
    )
}

export default NavBar;