import { useContext } from "react";
import { Routes, Route } from "react-router-dom"
// import { useState } from "react";
import Login from "./Login";
import SideBar from "./SideBar";
import Content from "./Content";
import AuthCtx from "../authContext";

const Body = () => {
    // const isLoggedIn = props.isLoggedIn;
    // const onLogin = props.onLogin;
    const authCtx = useContext(AuthCtx);
    console.log(authCtx);

    return (
        <div className="flex-1 center items-stretch">
            {
                authCtx.isLoggedIn ? (
                    <>
                        <SideBar />
                        <Content />
                    </>
                ) : (
                    <Login onSubmit ={() => {}}/>
                )
            }
        </div>
    )
};

export default Body