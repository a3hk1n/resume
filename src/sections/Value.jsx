import { valueCards } from "../data/projects";

export default function Value() {
  const handlePointerMove = (e) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--px", `${e.clientX - r.left}px`);
    card.style.setProperty("--py", `${e.clientY - r.top}px`);
  };

  return (
    <section id="value">
      <div className="wrap rv">
        <h2>هوش مصنوعی برای مسائل واقعی کسب‌وکار</h2>
        <div className="grid">
          {valueCards.map((c) => (
            <div
              key={c.title}
              className="card"
              onPointerMove={handlePointerMove}
            >
              <h3>{c.title}</h3>
              <p>{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
