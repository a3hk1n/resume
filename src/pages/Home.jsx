import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Value from "../sections/Value";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Showcase from "../sections/Showcase";
import Think from "../sections/Think";
import Quote from "../sections/Quote";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";

export default function Home() {
  const location = useLocation();
  useReveal([location.pathname]);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
      }
    }
  }, [location.hash]);

  return (
    <main>
      <Hero />
      <About />
      <Value />
      <Skills />
      <Projects />
      <Showcase />
      <Think />
      <Quote />
      <Experience />
      <Contact />
    </main>
  );
}
