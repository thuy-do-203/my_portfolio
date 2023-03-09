import { useContext } from "react"
import sociable from "../assets/sociable.png"
import responsible from "../assets/responsible.png"
import listener from "../assets/listener.png"
import learner from "../assets/learner.png"
import getText from "./lang"
import LangCtx from "../langContext"

const AboutMe = () => {
    const langContext = useContext(LangCtx)

    return <div className="width-80 flex center column">
        <div className="about-me_items bckgr_items_color">
            <img src={sociable} alt="sociable" className="icon padding-right-20" />
            <span>{getText("sociable", langContext.lang)}</span>
        </div>
        <div className="about-me_items bckgr_items_color">
            <img src={responsible} alt="responsible" className="icon padding-right-20" />
            <span>{getText("responsible", langContext.lang)}</span>
        </div>
        <div className="about-me_items bckgr_items_color">
            <img src={listener} alt="listener" className="icon padding-right-20" />
            <span>{getText("listener", langContext.lang)}</span>
        </div>
        <div className="about-me_items bckgr_items_color">
            <img src={learner} alt="learner" className="icon padding-right-20" />
            <span>{getText("learner", langContext.lang)}</span>
        </div>
    </div>
};

export default AboutMe;