import { TODO } from "../../data/projects";

export default function ProjectSolution({ project }) {
  const rawApproach =
    project.cs && project.cs.approach ? project.cs.approach : TODO;
  const isTodo = rawApproach === TODO;
  const details = project.caseStudyDetails || {};
  const ov = details.overview || {};

  return (
    <div className="cs-split-card cs-solution-card rv">
      <div className="cs-split-header">
        <span className="tag" style={{ color: "var(--ac2)" }}>
          THE SOLUTION
        </span>
        <h3>رویکرد و راهکار پیاده‌سازی‌شده</h3>
      </div>

      {!isTodo ? (
        <p className="cs-split-lead">{rawApproach}</p>
      ) : (
        <div className="cs-understated-box">
          <p className="cs-split-lead">{ov.motivation || project.d}</p>
          <div className="cs-doc-status">
            <span className="cs-status-dot teal"></span>
            <span>
              توضیحات تفصیلی رویکرد در منبع اصلی با وضعیت{" "}
              <code>{TODO}</code> ثبت شده است.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
