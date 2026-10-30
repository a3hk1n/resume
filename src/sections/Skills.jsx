import { useState } from "react";
import { skills } from "../data/projects";

const CATEGORIES = Object.keys(skills);

export default function Skills() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0]);

  return (
    <section id="expertise">
      <div className="wrap rv">
        <h2>فناوری‌ها و ابزارها</h2>
        <p className="sub">دسته‌بندی بر اساس کاربرد، نه درصد مهارت.</p>
        <div className="tabs" role="tablist" id="tabs">
          {CATEGORIES.map((k) => (
            <button
              key={k}
              className="tab"
              role="tab"
              data-k={k}
              aria-selected={activeTab === k}
              onClick={() => setActiveTab(k)}
            >
              {k}
            </button>
          ))}
        </div>
        <div
          className="chips"
          id="chips"
          role="tabpanel"
          aria-live="polite"
        >
          {skills[activeTab].map((s, i) => (
            <span
              key={`${activeTab}-${s}`}
              className="chip"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {s}
            </span>
          ))}
        </div>
        <p className="sub" style={{ marginTop: "1.6rem", fontSize: "0.9rem" }}>
          تمرکز فعلی من بر طراحی وب ، هوش مصنوعی و اتوماسیون است؛ با هدف توسعه
          سیستم‌های هوشمند و کاربردی که بتوانند بخشی از فرایندهای واقعی را
          ساده‌تر و خودکار کنند.
        </p>
      </div>
    </section>
  );
}
