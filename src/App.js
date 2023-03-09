import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AuthCtx from "./authContext";
import LangCtx from "./langContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [lang, setLang] = useState("en")

  const toggleIsLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div className="flex column h-100">
      <AuthCtx.Provider value={{ isLoggedIn: isLoggedIn, toggleIsLoggedIn: toggleIsLoggedIn }}>
        <LangCtx.Provider value={{ lang: lang, setLang: setLang }}>
          <Header />
          <Body />
          <Footer />
        </LangCtx.Provider>
      </AuthCtx.Provider>
    </div>
  );
}

export default App;
