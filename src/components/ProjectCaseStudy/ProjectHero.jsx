import { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useMagnetic } from "../../hooks/useMagnetic";
import { resolveAssetPath } from "../VideoPlayer/VideoPlayer";

export default function ProjectHero({ project, onOpenLightbox }) {
  const [imgError, setImgError] = useState(false);
  const reduce = useReducedMotion();
  const cardRef = useRef(null);
  const rafRef = useRef(0);
  const backBtnMag = useMagnetic();
  const galleryBtnMag = useMagnetic();

  const details = project.caseStudyDetails || {};
  const imgSrc = resolveAssetPath(project.img);

  const handlePointerMove = useCallback(
    (e) => {
      if (reduce) return;
      if (
        typeof window !== "undefined" &&
        !window.matchMedia("(hover:hover) and (pointer:fine)").matches
      ) {
        return;
      }
      const el = cardRef.current;
      if (!el) return;
      const clientX = e.clientX;
      const clientY = e.clientY;
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = 0;
          const r = el.getBoundingClientRect();
          const cx = (clientX - r.left) / r.width - 0.5;
          const cy = (clientY - r.top) / r.height - 0.5;
          const rx = (-cy * 6).toFixed(2);
          const ry = (cx * 6).toFixed(2);
          el.style.transform = `perspective(1100px) rotateX(${rx}deg) rotateY(${ry}deg)`;
          el.style.setProperty("--hx", `${((cx + 0.5) * 100).toFixed(1)}%`);
          el.style.setProperty("--hy", `${((cy + 0.5) * 100).toFixed(1)}%`);
        });
      }
    },
    [reduce]
  );

  const handlePointerLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    }
    el.style.transform = "";
  }, []);

  return (
    <section className="cs-hero" aria-labelledby="cs-hero-title">
      <div className="wrap">
        {/* Top Breadcrumb Bar */}
        <div className="cs-topbar rv">
          <Link
            to="/#projects"
            className="btn cs-back-pill mag"
            ref={backBtnMag.ref}
            onPointerMove={backBtnMag.onPointerMove}
            onPointerLeave={backBtnMag.onPointerLeave}
          >
            <i>→</i> بازگشت به پروژه‌ها
          </Link>
          <div className="cs-breadcrumb" aria-label="مسیر صفحه">
            <Link to="/">خانه</Link>
            <span>/</span>
            <Link to="/#projects">پروژه‌ها</Link>
            <span>/</span>
            <strong dir="ltr">{project.t}</strong>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="cs-hero-grid">
          <div className="cs-hero-copy rv">
            <div className="cs-badge-row">
              <span className="tag cs-cat-badge">{project.c}</span>
              {details.accentLabel ? (
                <span className="cs-accent-label" dir="ltr">
                  {details.accentLabel}
                </span>
              ) : null}
            </div>

            <h1 id="cs-hero-title" className="cs-title" dir="ltr">
              {project.t}
            </h1>

            <p className="cs-lead">{project.d}</p>

            {/* Quick Tech Pills */}
            <div className="cs-hero-tags" aria-label="فناوری‌های کلیدی">
              {project.tech.map((t, i) => (
                <span
                  key={t}
                  className="cs-tech-pill"
                  style={{ animationDelay: `${0.15 + i * 0.04}s` }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Hero Actions */}
            <div className="cta cs-hero-cta">
              <a
                href="#cs-showcase"
                className="btn p mag"
                ref={galleryBtnMag.ref}
                onPointerMove={galleryBtnMag.onPointerMove}
                onPointerLeave={galleryBtnMag.onPointerLeave}
              >
                {project.video ? "مشاهده ویدیو و گالری" : "مشاهده پیش‌نمایش پروژه"}{" "}
                <i>↓</i>
              </a>
              <a href="#cs-architecture" className="btn">
                معماری و جریان سیستم
              </a>
              {project.live ? (
                <a
                  className="btn"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  مشاهده دمو ↗
                </a>
              ) : null}
              {project.github ? (
                <a
                  className="btn"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  dir="ltr"
                >
                  GitHub ↗
                </a>
              ) : null}
            </div>
          </div>

          {/* Right/Left Visual Preview Frame */}
          <div className="cs-hero-visual-wrap rv">
            <div
              className="cs-hero-frame"
              ref={cardRef}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
            >
              <div className="cs-frame-bar" dir="ltr">
                <span className="cs-dot r"></span>
                <span className="cs-dot y"></span>
                <span className="cs-dot g"></span>
                <span className="cs-frame-url">{project.slug}</span>
                {project.video ? (
                  <span className="cs-frame-status">VIDEO INCLUDED</span>
                ) : (
                  <span className="cs-frame-status">PREVIEW</span>
                )}
              </div>

              <div
                className="cs-hero-media"
                onClick={() => {
                  if (project.img && !imgError && onOpenLightbox) {
                    onOpenLightbox({
                      src: imgSrc,
                      alt: project.t,
                      caption: `${project.t} — ${project.c}`,
                    });
                  }
                }}
                role={project.img && !imgError ? "button" : undefined}
                tabIndex={project.img && !imgError ? 0 : undefined}
                aria-label={
                  project.img && !imgError
                    ? `بزرگ‌نمایی تصویر ${project.t}`
                    : undefined
                }
                onKeyDown={(e) => {
                  if (
                    (e.key === "Enter" || e.key === " ") &&
                    project.img &&
                    !imgError &&
                    onOpenLightbox
                  ) {
                    e.preventDefault();
                    onOpenLightbox({
                      src: imgSrc,
                      alt: project.t,
                      caption: `${project.t} — ${project.c}`,
                    });
                  }
                }}
              >
                {project.img && !imgError ? (
                  <>
                    <img
                      src={imgSrc}
                      alt={project.t}
                      onError={() => setImgError(true)}
                    />
                    <span className="cs-zoom-hint">بزرگ‌نمایی تصویر ⤢</span>
                  </>
                ) : (
                  <div className="cs-media-fallback">
                    <div className="cs-fallback-orb"></div>
                    <span className="tag" dir="ltr">
                      {details.accentLabel || "SYSTEM PREVIEW"}
                    </span>
                    <h3 dir="ltr">{project.t}</h3>
                    <p>{project.c}</p>
                    <code dir="ltr">{project.img || "assets/images/..."}</code>
                  </div>
                )}
              </div>

              {/* Mini Flow Strip inside Hero Preview if project has flow */}
              {project.flow && project.flow.length ? (
                <div className="cs-hero-flowstrip" dir="ltr">
                  {project.flow.map((node, idx) => (
                    <span key={`${node}-${idx}`} className="cs-hf-item">
                      {idx > 0 ? <i className="cs-hf-arrow">→</i> : null}
                      <b>{node}</b>
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
