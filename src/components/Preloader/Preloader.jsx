import { useEffect, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onLoad = () => {
      setTimeout(() => setHidden(true), reduce ? 0 : 350);
    };
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }
    const fallback = setTimeout(() => setHidden(true), 1500);
    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(fallback);
    };
  }, [reduce]);

  return (
    <div id="pre" className={hidden ? "x" : ""} aria-hidden="true">
      INITIALIZING SYSTEM… READY
    </div>
  );
}
