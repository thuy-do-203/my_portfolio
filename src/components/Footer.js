import { useContext } from "react";
import LangCtx from "../langContext";
import AuthCtx from "../authContext";
import getText from "./lang";


const Footer = () => {
    const langCtx = useContext(LangCtx);
    const langContext = useContext(LangCtx)
    console.log(langCtx);

    return (
        <div className="center column padding background-grey">
            <span className="padding">{getText("slogan", langContext.lang)}</span>
            <select
                className="padding-3"
                value={langCtx.lang}
                onChange={(event) => {
                    langCtx.setLang(event.target.value)
                }}
            >
                <option value="en">English</option>
                <option value="vi">Tiếng Việt</option>
            </select>
        </div>
    );
};

export default Footer;