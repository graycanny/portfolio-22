import React, { useRef } from "react";
import style from "./App.module.css";
import Landing from "../Landing";
import Tech from "../Tech";
import Projects from "../Projects";
import Contact from "../Contact";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function App() {
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        multiplier: 0.7,
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div ref={containerRef} className={style.app} data-scroll-container>
        <Landing />
        <Tech />
        <Projects />
        <Contact />
      </div>
    </LocomotiveScrollProvider>
  );
}

export default App;
