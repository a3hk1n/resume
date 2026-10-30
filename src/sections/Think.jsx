import { processSteps } from "../data/projects";

export default function Think() {
  return (
    <section id="think">
      <div className="wrap rv">
        <h2>درک مسئله، شروع یک راهکار مناسب</h2>
        <div className="steps" style={{ marginTop: "2.5rem" }}>
          {processSteps.map((st) => (
            <div key={st.number} className="step">
              <b>{st.number}</b>
              <h3>{st.title}</h3>
              <p>{st.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
