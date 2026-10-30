import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import CaseStudyModal from "../components/CaseStudyModal/CaseStudyModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects">
      <div className="wrap">
        <div className="rv">
          <h2>پروژه‌ها و راهکارها</h2>
          <p className="sub">
            پروژه‌های کاربردی در حوزه هوش مصنوعی، اتوماسیون و توسعه نرم‌افزار،
            با تمرکز بر تبدیل ایده‌ها به سیستم‌های قابل اجرا.
          </p>
        </div>
        <div id="plist">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.slug || i}
              project={p}
              index={i}
              onOpenCaseStudy={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
