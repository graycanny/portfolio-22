import React from "react";
import style from "./App.module.css";
import Landing from "../Landing";
import Tech from "../Tech";
import Projects from "../Projects";
import Contact from "../Contact";

function App() {
  return (
    <div className={style.app}>
      <Landing />
      <Tech />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
