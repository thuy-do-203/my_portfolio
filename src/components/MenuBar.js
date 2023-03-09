import { useContext } from "react";
import getText from "./lang";
import LangCtx from "../langContext";
import AuthCtx from "../authContext";
import { Link } from "react-router-dom";

const MenuBar = (props) => {
    const langContext = useContext(LangCtx)
    const authCtx = useContext(AuthCtx);

    return (
        <div className="center menu-bar">
            {authCtx.isLoggedIn ? (
                <>
                    <div style={{ margin: "0 10px" }}>
                        <Link to="/">
                            {getText("back", langContext.lang)}
                        </Link>
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