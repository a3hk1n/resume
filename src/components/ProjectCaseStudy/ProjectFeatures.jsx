import { TODO } from "../../data/projects";

const TECH_CATEGORY_HINT = {
  "Telegram Bot": "Interface & Bot",
  n8n: "Workflow Automation",
  "AI Agent": "Autonomous Intelligence",
  LLM: "Large Language Model",
  Webhooks: "Event Trigger",
  APIs: "System Integration",
  "Google Drive": "Cloud Document Storage",
  "PDF Processing": "Document Parsing",
  PostgreSQL: "Relational Database",
  Docker: "Container Infrastructure",
  "Claude API": "LLM Intelligence",
  JSON: "Structured Data",
  "REST APIs": "Backend Communication",
  React: "Frontend UI Library",
  "Next.js": "React Framework",
  Responsive: "Multi-Device Layout",
  Authentication: "User Security & Access",
  Payment: "Checkout Workflow",
  SEO: "Search Optimization",
  Performance: "Web Vitals & Speed",
  "UI/UX": "Interface Experience",
  Accessibility: "Inclusive Web Standard",
};

export default function ProjectFeatures({ project }) {
  const details = project.caseStudyDetails || {};
  const features = details.features || [];
  const rawResult =
    project.cs && project.cs.result ? project.cs.result : TODO;
  const isResultTodo = rawResult === TODO;

  const handleSpotlight = (e) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--px", `${e.clientX - r.left}px`);
    card.style.setProperty("--py", `${e.clientY - r.top}px`);
  };

  return (
    <>
      {/* Key Features Section */}
      <section
        className="cs-section"
        id="cs-features"
        aria-labelledby="cs-feat-heading"
      >
        <div className="wrap">
          <div className="cs-sec-head rv">
            <span className="tag">KEY CAPABILITIES &amp; FEATURES</span>
            <h2 id="cs-feat-heading">قابلیت‌ها و ویژگی‌های کلیدی</h2>
            <p className="sub">
              اجزا و قابلیت‌های اصلی پیاده‌سازی‌شده در معماری و تجربه کاربری این پروژه.
            </p>
          </div>

          <div className="cs-features-grid">
            {features.map((feat, idx) => (
              <article
                key={feat.title}
                className="card cs-feature-card rv"
                onPointerMove={handleSpotlight}
              >
                <div className="cs-feat-top" dir="ltr">
                  <span className="cs-feat-num">0{idx + 1}</span>
                  {feat.tag ? (
                    <span className="cs-feat-tag">{feat.tag}</span>
                  ) : null}
                </div>
                <h3>{feat.title}</h3>
                <p>{feat.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Tools Section */}
      <section
        className="cs-section"
        id="cs-technologies"
        aria-labelledby="cs-tech-heading"
      >
        <div className="wrap">
          <div className="cs-sec-head rv">
            <span className="tag">TECHNOLOGIES &amp; TOOLS</span>
            <h2 id="cs-tech-heading">فناوری‌ها و ابزارهای استفاده‌شده</h2>
            <p className="sub">
              مجموعه فناوری‌ها، کتابخانه‌ها و زیرساخت‌های به‌کاررفته در ساخت این راهکار.
            </p>
          </div>

          <div className="cs-tech-showcase rv">
            {project.tech.map((techName, i) => (
              <div
                key={techName}
                className="cs-tech-card"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="cs-tech-dot"></div>
                <div className="cs-tech-info" dir="ltr">
                  <strong>{techName}</strong>
                  <span>{TECH_CATEGORY_HINT[techName] || "Core Technology"}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results / Project Outcome Section */}
      <section
        className="cs-section"
        id="cs-outcome"
        aria-labelledby="cs-out-heading"
      >
        <div className="wrap">
          <div className="cs-outcome-box rv">
            <div className="cs-outcome-content">
              <span className="tag">PROJECT OUTCOME &amp; GOAL</span>
              <h2 id="cs-out-heading">نتیجه و خروجی پروژه</h2>
              {!isResultTodo ? (
                <p className="cs-outcome-lead">{rawResult}</p>
              ) : (
                <div className="cs-understated-outcome">
                  <p className="cs-outcome-lead">
                    هدف اصلی این پروژه ارائه{" "}
                    <strong>{project.t}</strong> در قالب «{project.c}» با تمرکز بر{" "}
                    {project.d}
                  </p>
                  <p className="cs-outcome-note">
                    وضعیت ثبت نتیجه در داده‌های پایه پروژه:{" "}
                    <code>{TODO}</code> (بدون ادعای آماری یا عددی ثبت‌نشده).
                  </p>
                </div>
              )}
            </div>
            <div className="cs-outcome-meta" dir="ltr">
              <div className="cs-meta-stat">
                <span>CATEGORY</span>
                <strong dir="rtl">{project.c}</strong>
              </div>
              <div className="cs-meta-stat">
                <span>STACK SIZE</span>
                <strong>{project.tech.length} Technologies</strong>
              </div>
              <div className="cs-meta-stat">
                <span>MEDIA</span>
                <strong>
                  {project.video ? "Image + Video Walkthrough" : "Visual Preview"}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
