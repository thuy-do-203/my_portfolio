import { useContext } from "react";
import getText from "./lang";
import LangCtx from "../langContext";
import AuthCtx from "../authContext";
import { Link } from "react-router-dom";

const MenuBar = (props) => {
    const langContext = useContext(LangCtx)
    const authCtx = useContext(AuthCtx);

    const handleClick = (event) => {
        authCtx.toggleIsLoggedIn();
    }

    return (
        <div className="center menu-bar">
            {authCtx.isLoggedIn ? (
                <>
                    <div style={{ margin: "0 10px" }}>
                        <button className="button-back" onClick={handleClick}>
                            {getText("back", langContext.lang)}
                        </button>
                    </div>
                </>
            ) : (
                <div style={{ margin: "0 10px" }}>
                    {getText("frontend-developer", langContext.lang)}
                </div>
            )}
        </div>
    )
};

export default MenuBar;