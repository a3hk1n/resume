import { TODO } from "../../data/projects";

export default function ProjectChallenge({ project }) {
  const rawProblem = project.cs && project.cs.problem ? project.cs.problem : TODO;
  const isTodo = rawProblem === TODO;
  const details = project.caseStudyDetails || {};
  const ov = details.overview || {};

  return (
    <div className="cs-split-card cs-challenge-card rv">
      <div className="cs-split-header">
        <span className="tag">THE CHALLENGE</span>
        <h3>چالش و مسئله اصلی</h3>
      </div>

      {!isTodo ? (
        <p className="cs-split-lead">{rawProblem}</p>
      ) : (
        <div className="cs-understated-box">
          <p className="cs-split-lead">{ov.problemAddressed || project.d}</p>
          <div className="cs-doc-status">
            <span className="cs-status-dot"></span>
            <span>
              جزئیات تکمیلی مطالعه موردی در منبع اصلی با برچسب{" "}
              <code>{TODO}</code> مشخص شده است.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
