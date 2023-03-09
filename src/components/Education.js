import { useContext } from "react"
import school from "../assets/school.png"
import university from "../assets/university.png"
import book from "../assets/book.png"
import getText from "./lang"
import LangCtx from "../langContext"

const Education = () => {
    const langContext = useContext(LangCtx)

    return <div className="flex justify-between width-80">
        <div className="education_items bckgr_items_color">
            <div>
                <img src={school} alt="school" className="icon" />
            </div>
            <h3>2012 - 2015</h3>
            <p><strong>{getText("school", langContext.lang)}</strong></p>
            <p>{getText("major", langContext.lang)}</p>
        </div>
        <div className="education_items bckgr_items_color">
            <div>
                <img src={university} alt="university" className="icon" />
            </div>
            <h3>2015 - 2019</h3>
            <p><strong>{getText("university", langContext.lang)}</strong></p>
            <p>{getText("faculty", langContext.lang)}</p>
            <p>GPA: 3.3/4 (8.01/10)</p>
        </div>
        <div className="education_items bckgr_items_color">
            <div>
                <img src={book} alt="book" className="icon" />
            </div>
            <h3>2022</h3>
            <p><strong>{getText("mindx", langContext.lang)}</strong></p>
            <p>{getText("fullstack", langContext.lang)}</p>
        </div>
    </div>
};

export default Education;