import { useEffect, useRef } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function CustomCursor() {
  const curRef = useRef(null);
  const cur2Ref = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(hover:hover) and (pointer:fine)").matches
    ) {
      return;
    }

    document.body.classList.add("cc-on");
    const a = curRef.current;
    const b = cur2Ref.current;
    if (!a || !b) return;

    let x = 0;
    let y = 0;
    let bx = 0;
    let by = 0;
    let rafId = 0;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      a.style.transform = `translate(${x}px,${y}px)`;
      b.classList.toggle(
        "h",
        Boolean(e.target.closest && e.target.closest("a,button,.proj"))
      );
    };

    const loop = () => {
      bx += (x - bx) * 0.18;
      by += (y - by) * 0.18;
      b.style.transform = `translate(${bx}px,${by}px)`;
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    rafId = requestAnimationFrame(loop);

    return () => {
      document.body.classList.remove("cc-on");
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, [reduce]);

  return (
    <>
      <div id="cur" ref={curRef}></div>
      <div id="cur2" ref={cur2Ref}></div>
    </>
  );
}
