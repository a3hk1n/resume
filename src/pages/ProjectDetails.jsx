import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { useReveal } from "../hooks/useReveal";
import ProjectHero from "../components/ProjectCaseStudy/ProjectHero";
import ProjectOverview from "../components/ProjectCaseStudy/ProjectOverview";
import ProjectChallenge from "../components/ProjectCaseStudy/ProjectChallenge";
import ProjectSolution from "../components/ProjectCaseStudy/ProjectSolution";
import ProjectArchitecture from "../components/ProjectCaseStudy/ProjectArchitecture";
import ProjectFeatures from "../components/ProjectCaseStudy/ProjectFeatures";
import ProjectGallery from "../components/ProjectCaseStudy/ProjectGallery";
import ProjectNavigation from "../components/ProjectCaseStudy/ProjectNavigation";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [lightboxItem, setLightboxItem] = useState(null);

  useReveal([slug]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLightboxItem(null);
  }, [slug]);

  useEffect(() => {
    if (project) {
      document.title = `${project.t} | Ashkan Kiani — مطالعه موردی`;
    } else {
      document.title = "پروژه یافت نشد | Ashkan Kiani";
    }
    return () => {
      document.title = "Ashkan Kiani | AI & Automation Developer";
    };
  }, [project]);

  if (!project) {
    return (
      <main className="page-shell">
        <div className="wrap">
          <div className="page-card" style={{ textAlign: "center" }}>
            <span className="tag">404 / PROJECT NOT FOUND</span>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                margin: "0.6rem 0 1rem",
              }}
            >
              پروژه مورد نظر یافت نشد
            </h1>
            <p className="sub" style={{ marginInline: "auto" }}>
              پروژه‌ای با شناسه <code dir="ltr">{slug}</code> در سیستم ثبت نشده
              است.
            </p>
            <div className="cta" style={{ justifyContent: "center" }}>
              <Link className="btn p" to="/#projects">
                مشاهده همه پروژه‌ها <i>→</i>
              </Link>
              <Link className="btn" to="/">
                صفحه اصلی
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const details = project.caseStudyDetails || {};
  const variantClass = details.themeVariant
    ? `cs-variant-${details.themeVariant}`
    : "";

  return (
    <main className={`cs-page ${variantClass}`}>
      {/* A. Project Hero */}
      <ProjectHero
        project={project}
        onOpenLightbox={(item) => setLightboxItem(item)}
      />

      {/* B. Project Overview */}
      <ProjectOverview project={project} />

      {/* C & D. The Challenge & The Solution */}
      <section
        className="cs-section"
        id="cs-challenge-solution"
        aria-label="چالش و راهکار"
      >
        <div className="wrap">
          <div className="cs-sec-head rv">
            <span className="tag">PROBLEM &amp; APPROACH</span>
            <h2>مسئله و رویکرد حل آن</h2>
            <p className="sub">
              چالش اصلی پروژه و شیوه طراحی سیستم برای پاسخگویی به آن.
            </p>
          </div>
          <div className="cs-challenge-solution-grid">
            <ProjectChallenge project={project} />
            <ProjectSolution project={project} />
          </div>
        </div>
      </section>

      {/* E. System Architecture */}
      <ProjectArchitecture project={project} />

      {/* G. Visual Showcase (Image Gallery + Lightbox + Video Showcase) */}
      <ProjectGallery
        project={project}
        lightboxItem={lightboxItem}
        onOpenLightbox={(item) => setLightboxItem(item)}
        onCloseLightbox={() => setLightboxItem(null)}
      />

      {/* H, F, I. Key Features, Technologies & Tools, and Project Outcome */}
      <ProjectFeatures project={project} />

      {/* J. Footer Project Navigation */}
      <ProjectNavigation currentProject={project} />
    </main>
  );
}
