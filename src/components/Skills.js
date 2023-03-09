import { useContext } from "react"
import reactjs from "../assets/reactjs.png"
import js from "../assets/js.png"
import getText from "./lang"
import LangCtx from "../langContext"

const Skills = () => {
    const langContext = useContext(LangCtx)

    return <div className="flex padding justify-between width-60">
        <div className="skill_items bckgr_items_color">
            <div><img src={reactjs} alt="reactjs" className="icon" /></div>
            <h3>FRONTEND</h3>
            <div>
                <p><strong>{getText("framework", langContext.lang)}</strong></p>
                <p>ReactJS</p>
            </div>
            <div>
                <p><strong>{getText("dev-tools", langContext.lang)}</strong> <br /></p>
                <p>
                    VSCode <br />
                    Github <br />
                    HTML & CSS <br />
                    Vercel
                </p>
            </div>
        </div>
        <div className="skill_items bckgr_items_color">
        <div><img src={js} alt="js" className="icon" /></div>
            <h3>{getText("language", langContext.lang)}</h3>
            <div>
                <p><strong>{getText("programming-lang", langContext.lang)}</strong></p>
                <p>Javascript</p>
            </div>
            <div>
                <p><strong>{getText("speaking-lang", langContext.lang)}</strong></p>
                <p>{getText("english", langContext.lang)}</p>
            </div>
        </div>
    </div>
};

export default Skills;