import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

export default function CaseStudyModal({ project, onClose }) {
  const dlgRef = useRef(null);

  useEffect(() => {
    const dlg = dlgRef.current;
    if (!dlg) return;
    if (project) {
      if (!dlg.open && typeof dlg.showModal === "function") {
        dlg.showModal();
      }
    } else if (dlg.open && typeof dlg.close === "function") {
      dlg.close();
    }
  }, [project]);

  const handleBackdropClick = (e) => {
    if (e.target === dlgRef.current) {
      onClose();
    }
  };

  if (!project) {
    return <dialog id="cs" ref={dlgRef} aria-labelledby="cst"></dialog>;
  }

  const c = project.cs || {};
  const sections = [
    ["مسئله", c.problem],
    ["رویکرد", c.approach],
    ["معماری", c.architecture],
    ["نتیجه / هدف", c.result],
  ];

  return (
    <dialog
      id="cs"
      ref={dlgRef}
      aria-labelledby="cst"
      onClick={handleBackdropClick}
      onClose={onClose}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
          marginBottom: "0.8rem",
        }}
      >
        <span className="tag">{project.c}</span>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Link
            className="btn p"
            to={`/projects/${project.slug}`}
            onClick={onClose}
            style={{ padding: "8px 18px", minHeight: "40px", fontSize: "0.86rem" }}
          >
            صفحه کامل مطالعه موردی <i>←</i>
          </Link>
          <button
            className="btn"
            id="csx"
            style={{ padding: "8px 18px", minHeight: "40px" }}
            onClick={onClose}
          >
            بستن ✕
          </button>
        </div>
      </div>
      <div id="csb">
        <h2
          id="cst"
          style={{ margin: ".4rem 0 1rem", fontSize: "1.8rem" }}
        >
          {project.t}
        </h2>
        <p>{project.d}</p>
        {sections.map(([label, val]) => (
          <div key={label}>
            <h4>{label}</h4>
            <p
              style={
                label === "معماری"
                  ? {
                      direction: "ltr",
                      fontFamily: "var(--m)",
                      fontSize: ".85rem",
                    }
                  : undefined
              }
            >
              {val}
            </p>
          </div>
        ))}
        <h4>فناوری</h4>
        <div className="tags">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        {project.flow ? (
          <div className="flow" style={{ marginTop: "1rem" }}>
            {project.flow.map((f, i) => (
              <div
                key={`${f}-${i}`}
                style={{ display: "contents" }}
              >
                {i > 0 ? <div className="fl on"></div> : null}
                <div className="fn on">{f}</div>
              </div>
            ))}
          </div>
        ) : null}
        <VideoPlayer project={project} />
      </div>
    </dialog>
  );
}
