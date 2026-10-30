import { useEffect, useState } from "react";
import { TODO } from "../../data/projects";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function ProjectArchitecture({ project }) {
  const reduce = useReducedMotion();
  const details = project.caseStudyDetails || {};
  const archNodes = details.architectureNodes || [];
  const rawArch =
    project.cs && project.cs.architecture ? project.cs.architecture : TODO;
  const isTodo = rawArch === TODO;
  const flowSteps = project.flow || archNodes.map((n) => n.name);

  const [activeStep, setActiveStep] = useState(0);
  const [selectedNodeIdx, setSelectedNodeIdx] = useState(0);

  useEffect(() => {
    setActiveStep(0);
    setSelectedNodeIdx(0);
  }, [project.slug]);

  useEffect(() => {
    if (!flowSteps.length) return;
    const interval = reduce ? 2200 : 1250;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % flowSteps.length);
    }, interval);
    return () => clearInterval(timer);
  }, [flowSteps.length, reduce]);

  return (
    <section
      className="cs-section"
      id="cs-architecture"
      aria-labelledby="cs-arch-heading"
    >
      <div className="wrap">
        <div className="cs-sec-head rv">
          <span className="tag">SYSTEM ARCHITECTURE &amp; WORKFLOW</span>
          <h2 id="cs-arch-heading">معماری سیستم و جریان پردازش</h2>
          <p className="sub">
            ساختار ارتباطی اجزا، جریان حرکت داده و مراحل اجرای کار در این پروژه.
          </p>
        </div>

        {/* Documented Architecture String Banner */}
        <div className="cs-arch-banner rv">
          <div className="cs-arch-banner-top">
            <span className="tag">ARCHITECTURE PIPELINE</span>
            <span className="cs-arch-mode">
              {project.flow ? "AUTOMATED WORKFLOW" : "COMPONENT FLOW"}
            </span>
          </div>
          {!isTodo ? (
            <div className="cs-arch-code" dir="ltr">
              {rawArch}
            </div>
          ) : (
            <div className="cs-arch-code cs-arch-understated" dir="ltr">
              <span>{flowSteps.join(" → ")}</span>
              <small dir="rtl">
                (معماری تفصیلی در منبع اصلی با برچسب {TODO} مشخص شده است)
              </small>
            </div>
          )}
        </div>

        {/* Interactive Animated Flow Diagram (reusing .flow, .fn, .fl design language) */}
        {flowSteps.length > 0 ? (
          <div className="cs-flow-wrap rv">
            <div className="flow cs-interactive-flow" dir="ltr">
              {flowSteps.map((stepName, i) => (
                <div key={`${stepName}-${i}`} style={{ display: "contents" }}>
                  {i > 0 ? (
                    <div
                      className={`fl${i === activeStep ? " on" : ""}`}
                    ></div>
                  ) : null}
                  <button
                    type="button"
                    className={`fn cs-fn-btn${
                      i === activeStep ? " on" : ""
                    }${i === selectedNodeIdx ? " selected" : ""}`}
                    onClick={() => setSelectedNodeIdx(i)}
                  >
                    <span className="cs-fn-idx">0{i + 1}</span>
                    <span>{stepName}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Interactive Node Cards Grid */}
        {archNodes.length > 0 ? (
          <div className="cs-arch-grid rv">
            {archNodes.map((node, idx) => {
              const isCurrent = idx === selectedNodeIdx;
              const isPulse = idx === activeStep;
              return (
                <div
                  key={node.step}
                  className={`cs-arch-node${isCurrent ? " active" : ""}${
                    isPulse ? " pulse" : ""
                  }`}
                  onClick={() => setSelectedNodeIdx(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedNodeIdx(idx);
                    }
                  }}
                >
                  <div className="cs-arch-node-head" dir="ltr">
                    <span className="cs-node-step">{node.step}</span>
                    <strong className="cs-node-name">{node.name}</strong>
                  </div>
                  <p className="cs-node-role">{node.role}</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
