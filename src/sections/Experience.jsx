import { journeyTimeline, educationInfo } from "../data/projects";

export default function Experience() {
  return (
    <section id="journey">
      <div className="wrap rv">
        <h2>مسیر حرفه‌ای</h2>
        <div className="tl">
          {journeyTimeline.map((item) => (
            <div key={item.period} className="ti">
              <time>{item.period}</time>
              <h3>{item.role}</h3>
              <p>{item.stack}</p>
            </div>
          ))}
        </div>
        <p className="sub" style={{ marginTop: "1rem" }}>
          <b style={{ color: "var(--ink)" }}>{educationInfo.label}</b>{" "}
          {educationInfo.text}
        </p>
      </div>
    </section>
  );
}
