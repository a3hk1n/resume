export default function ProjectOverview({ project }) {
  const details = project.caseStudyDetails || {};
  const ov = details.overview || {};

  const items = [
    {
      id: "what",
      badge: "01 / PROJECT IDENTITY",
      title: "معرفی پروژه",
      text: ov.whatItIs || project.d,
    },
    {
      id: "problem",
      badge: "02 / CORE FOCUS",
      title: "مسئله و نیاز هدف",
      text: ov.problemAddressed || project.d,
    },
    {
      id: "audience",
      badge: "03 / TARGET CONTEXT",
      title: "مخاطبان و بستر استفاده",
      text: ov.intendedAudience,
    },
    {
      id: "why",
      badge: "04 / OBJECTIVE",
      title: "هدف توسعه و پیاده‌سازی",
      text: ov.motivation,
    },
  ].filter((item) => Boolean(item.text));

  const handleSpotlight = (e) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--px", `${e.clientX - r.left}px`);
    card.style.setProperty("--py", `${e.clientY - r.top}px`);
  };

  return (
    <section className="cs-section" id="cs-overview" aria-labelledby="cs-ov-heading">
      <div className="wrap">
        <div className="cs-sec-head rv">
          <span className="tag">PROJECT OVERVIEW</span>
          <h2 id="cs-ov-heading">نمای کلی و چارچوب پروژه</h2>
          <p className="sub">
            بررسی ابعاد اصلی، هدف طراحی و دامنه کاربردی سیستم بر اساس مستندات پروژه.
          </p>
        </div>

        <div className="cs-overview-grid">
          {items.map((item) => (
            <article
              key={item.id}
              className="card cs-ov-card rv"
              onPointerMove={handleSpotlight}
            >
              <span className="tag cs-ov-badge">{item.badge}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
