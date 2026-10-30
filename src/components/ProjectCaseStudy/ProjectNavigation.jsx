import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { useMagnetic } from "../../hooks/useMagnetic";

export default function ProjectNavigation({ currentProject }) {
  const currentIndex = projects.findIndex(
    (p) => p.slug === currentProject.slug
  );
  const prevProject =
    currentIndex > 0
      ? projects[currentIndex - 1]
      : projects[projects.length - 1];
  const nextProject =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : projects[0];

  const homeMag = useMagnetic();

  return (
    <section className="cs-nav-section" aria-label="ناوبری بین پروژه‌ها">
      <div className="wrap">
        <div className="cs-nav-grid rv">
          {/* Previous Project */}
          <Link
            to={`/projects/${prevProject.slug}`}
            className="card cs-nav-card prev"
          >
            <span className="tag">→ پروژه قبلی</span>
            <strong dir="ltr" className="cs-nav-title">
              {prevProject.t}
            </strong>
            <span className="cs-nav-cat">{prevProject.c}</span>
          </Link>

          {/* Return to All Projects */}
          <div className="cs-nav-center">
            <Link
              to="/#projects"
              className="btn p mag"
              ref={homeMag.ref}
              onPointerMove={homeMag.onPointerMove}
              onPointerLeave={homeMag.onPointerLeave}
            >
              مشاهده همه پروژه‌ها در صفحه اصلی
            </Link>
          </div>

          {/* Next Project */}
          <Link
            to={`/projects/${nextProject.slug}`}
            className="card cs-nav-card next"
          >
            <span className="tag">پروژه بعدی ←</span>
            <strong dir="ltr" className="cs-nav-title">
              {nextProject.t}
            </strong>
            <span className="cs-nav-cat">{nextProject.c}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
