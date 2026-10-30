import { useState, useEffect } from "react";
import VideoPlayer, { resolveAssetPath } from "../VideoPlayer/VideoPlayer";

export default function ProjectGallery({
  project,
  lightboxItem,
  onOpenLightbox,
  onCloseLightbox,
}) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [project.slug]);

  useEffect(() => {
    if (!lightboxItem) return;
    const onKey = (e) => {
      if (e.key === "Escape") onCloseLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxItem, onCloseLightbox]);

  const imgSrc = resolveAssetPath(project.img);

  return (
    <section
      className="cs-section"
      id="cs-showcase"
      aria-labelledby="cs-gal-heading"
    >
      <div className="wrap">
        <div className="cs-sec-head rv">
          <span className="tag">VISUAL SHOWCASE &amp; MEDIA</span>
          <h2 id="cs-gal-heading">نمایش بصری و پیش‌نمایش پروژه</h2>
          <p className="sub">
            {project.video
              ? "تصویر محیط پروژه و ویدیوی عملکرد واقعی سیستم در عمل."
              : "نمای رابط کاربری و پیش‌نمایش بصری ثبت‌شده برای این پروژه."}
          </p>
        </div>

        <div className="cs-gallery-grid rv">
          {/* Primary Image Showcase Card */}
          <figure className="cs-gallery-figure">
            <div className="cs-gallery-frame">
              {project.img && !imgError ? (
                <div
                  className="cs-gallery-img-btn"
                  role="button"
                  tabIndex={0}
                  aria-label={`بزرگ‌نمایی تصویر ${project.t}`}
                  onClick={() =>
                    onOpenLightbox({
                      src: imgSrc,
                      alt: project.t,
                      caption: `${project.t} — ${project.c}`,
                    })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onOpenLightbox({
                        src: imgSrc,
                        alt: project.t,
                        caption: `${project.t} — ${project.c}`,
                      });
                    }
                  }}
                >
                  <img
                    src={imgSrc}
                    alt={`پیش‌نمایش ${project.t}`}
                    loading="lazy"
                    onError={() => setImgError(true)}
                  />
                  <div className="cs-gallery-overlay">
                    <span className="btn p">مشاهده در اندازه کامل ⤢</span>
                  </div>
                </div>
              ) : (
                <div className="cs-gallery-missing">
                  <span className="tag" dir="ltr">
                    PREVIEW ASSET PATH
                  </span>
                  <h3 dir="ltr">{project.t}</h3>
                  <p>
                    فایل تصویر در مسیر زیر تعریف شده است و با قرارگیری در پوشه{" "}
                    <code dir="ltr">public/assets/</code> به صورت خودکار نمایش
                    داده می‌شود:
                  </p>
                  <code className="cs-missing-path" dir="ltr">
                    {project.img || "assets/images/..."}
                  </code>
                </div>
              )}
            </div>
            <figcaption className="cs-gallery-caption">
              <span>تصویر پیش‌نمایش: {project.t}</span>
              <span dir="ltr" className="cs-caption-path">
                {project.img}
              </span>
            </figcaption>
          </figure>
        </div>

        {/* Video Showcase (Reusing existing custom VideoPlayer) */}
        {project.video ? (
          <div className="cs-video-container rv">
            <VideoPlayer project={project} />
          </div>
        ) : (
          <div className="cs-no-video-note rv">
            <span className="tag">MEDIA NOTE</span>
            <p>
              برای این پروژه در داده‌های اصلی، تصویر پیش‌نمایش ثبت شده است و فایل
              ویدیویی جداگانه‌ای در منبع اصلی تعریف نشده است.
            </p>
          </div>
        )}
      </div>

      {/* Accessible Lightbox Modal */}
      {lightboxItem ? (
        <div
          className="cs-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.alt}
          onClick={onCloseLightbox}
        >
          <div
            className="cs-lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cs-lightbox-bar">
              <span>{lightboxItem.caption}</span>
              <button
                type="button"
                className="btn"
                onClick={onCloseLightbox}
                style={{ padding: "8px 18px", minHeight: "40px" }}
              >
                بستن ✕
              </button>
            </div>
            <div className="cs-lightbox-body">
              <img src={lightboxItem.src} alt={lightboxItem.alt} />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
