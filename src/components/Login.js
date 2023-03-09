import { useContext } from "react";
// import { useState } from "react";
import AuthCtx from "../authContext";
import LangCtx from "../langContext";
import getText from "./lang";
import avatar from "../assets/my_avatar.jpg";


const Login = (props) => {
    // const [value, setValue] = useState("")
    const authContext = useContext(AuthCtx)
    const langContext = useContext(LangCtx)

    const handleSubmit = (event) => {
        event.preventDefault();
        authContext.toggleIsLoggedIn();
    }
    return (
        <form onSubmit={handleSubmit} className="flex column center">
            <img src={avatar} alt="My avatar" className="avatar_img" />
            <h1 className="text-align padding">{getText('welcome_message', langContext.lang)}</h1>
            <p className="text-align padding">{getText("introduction", langContext.lang)}</p>
            {/* <input type="text" value={value} onChange={(event) => { setValue(event.target.value) }} /> */}
            <button className="padding bckgr_items_color">{getText("get_started", langContext.lang)}</button>
        </form>
    )
}

export default Login;