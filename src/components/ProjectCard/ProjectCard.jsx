import { useRef, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useMagnetic } from "../../hooks/useMagnetic";

export default function ProjectCard({ project, index, onOpenCaseStudy }) {
  const projRef = useRef(null);
  const shotRef = useRef(null);
  const rafRef = useRef(0);
  const leaveTimerRef = useRef(0);
  const reduce = useReducedMotion();
  const magBtn = useMagnetic();
  const [imgError, setImgError] = useState(false);

  const handlePointerMove = useCallback(
    (e) => {
      if (reduce) return;
      if (
        typeof window !== "undefined" &&
        !window.matchMedia("(hover:hover) and (pointer:fine)").matches
      ) {
        return;
      }
      const proj = projRef.current;
      const shot = shotRef.current;
      if (!proj || !shot) return;

      const clientX = e.clientX;
      const clientY = e.clientY;

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = 0;
          const r = proj.getBoundingClientRect();
          const cx = (clientX - r.left) / r.width - 0.5;
          const cy = (clientY - r.top) / r.height - 0.5;
          const MAX = 8;
          const rx = -cy * MAX;
          const ry = cx * MAX;

          proj.style.transform = `perspective(1200px) rotateX(${rx.toFixed(
            2
          )}deg) rotateY(${ry.toFixed(2)}deg)`;
          proj.classList.add("tilt-active");
          proj.classList.remove("tilt-idle");

          const sr = shot.getBoundingClientRect();
          const sx = (((clientX - sr.left) / sr.width) * 100).toFixed(1);
          const sy = (((clientY - sr.top) / sr.height) * 100).toFixed(1);
          shot.style.setProperty("--sx", `${sx}%`);
          shot.style.setProperty("--sy", `${sy}%`);
        });
      }
    },
    [reduce]
  );

  const handlePointerLeave = useCallback(() => {
    const proj = projRef.current;
    const shot = shotRef.current;
    if (!proj) return;
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    }
    proj.classList.add("tilt-idle");
    proj.classList.remove("tilt-active");
    proj.style.transform = "";
    if (shot) {
      shot.style.removeProperty("--sx");
      shot.style.removeProperty("--sy");
    }
    clearTimeout(leaveTimerRef.current);
    leaveTimerRef.current = setTimeout(() => {
      if (projRef.current) {
        projRef.current.classList.remove("tilt-idle");
      }
    }, 700);
  }, []);

  return (
    <article
      className="proj rv"
      ref={projRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="shot"
        ref={shotRef}
        role="img"
        aria-label={`پیش‌نمایش ${project.t}`}
        style={{ textDecoration: "none", aspectRatio: "16/10" }}
      >
        {project.img && !imgError ? (
          <img
            src={project.img}
            alt={project.t}
            loading="lazy"
            onError={() => setImgError(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div className="shot-fallback">
            <span className="shot-fallback-badge">{project.c}</span>
            <strong className="shot-fallback-title">{project.t}</strong>
            <span className="shot-fallback-path">
              {project.img || `assets/images/project-${index + 1}.webp`}
            </span>
          </div>
        )}
      </Link>
      <div>
        <span className="tag">{project.c}</span>
        <h3>
          <Link
            to={`/projects/${project.slug}`}
            style={{ textDecoration: "none" }}
          >
            {project.t}
          </Link>
        </h3>
        <p>{project.d}</p>
        <div className="tags">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="cta">
          <Link
            to={`/projects/${project.slug}`}
            className="btn p mag"
            ref={magBtn.ref}
            onPointerMove={magBtn.onPointerMove}
            onPointerLeave={magBtn.onPointerLeave}
          >
            مطالعه موردی <i>←</i>
          </Link>
          {onOpenCaseStudy ? (
            <button
              type="button"
              className="btn"
              onClick={() => onOpenCaseStudy(project)}
            >
              پیش‌نمایش سریع
            </button>
          ) : null}
          {project.live ? (
            <a
              className="btn"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              دمو
            </a>
          ) : null}
          {project.github ? (
            <a
              className="btn"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
