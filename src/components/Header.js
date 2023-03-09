import { useContext } from "react";
import MenuBar from "./MenuBar";
import getText from "./lang";
import LangCtx from "../langContext";

const Header = (props) => {

    const langContext = useContext(LangCtx)
    
    return (
        <div className="flex justify-between items-center background-grey">
            <h2 className="padding-left-10"> 
            {getText("thuy-do", langContext.lang)}
            </h2>
            <MenuBar isLoggedIn={props.isLoggedIn} />
        </div>
    )
};

export default Header