import { useEffect, useState } from "react";
import { flows } from "../data/projects";
import { useReducedMotion } from "../hooks/useReducedMotion";

function AnimatedFlow({ steps, flowIndex, reduce }) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = reduce ? 1800 : 1000 + flowIndex * 150;
    const id = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % steps.length);
    }, interval);
    return () => clearInterval(id);
  }, [steps.length, flowIndex, reduce]);

  return (
    <div className="flow">
      {steps.map((s, i) => (
        <div key={`${s}-${i}`} style={{ display: "contents" }}>
          {i > 0 ? (
            <div className={`fl${i === activeIdx ? " on" : ""}`}></div>
          ) : null}
          <div className={`fn${i === activeIdx ? " on" : ""}`}>{s}</div>
        </div>
      ))}
    </div>
  );
}

export default function Showcase() {
  const reduce = useReducedMotion();

  return (
    <section id="showcase">
      <div className="wrap rv">
        <h2>از مسئله تا راهکار</h2>

        <p className="sub">
          تحلیل مسئله، طراحی فرایند، توسعه و پیاده‌سازی؛ هر مرحله با هدف ساخت
          یک راهکار کاربردی و قابل استفاده انجام می‌شود.
        </p>

        <div className="flows" id="flows">
          {flows.map((f, fi) => (
            <AnimatedFlow
              key={fi}
              steps={f}
              flowIndex={fi}
              reduce={reduce}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
