import { useRef, useCallback } from "react";
import { useReducedMotion } from "./useReducedMotion";

export function useMagnetic() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const onPointerMove = useCallback(
    (e) => {
      if (reduce) return;
      if (
        typeof window !== "undefined" &&
        !window.matchMedia("(hover:hover) and (pointer:fine)").matches
      ) {
        return;
      }
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const tx = (e.clientX - r.left - r.width / 2) * 0.18;
      const ty = (e.clientY - r.top - r.height / 2) * 0.28;
      el.style.transform = `translate(${tx}px, ${ty}px)`;
    },
    [reduce]
  );

  const onPointerLeave = useCallback(() => {
    const el = ref.current;
    if (el) el.style.transform = "";
  }, []);

  return { ref, onPointerMove, onPointerLeave };
}
