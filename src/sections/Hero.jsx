import HeroViz from "../components/HeroViz/HeroViz";
import { useMagnetic } from "../hooks/useMagnetic";

const HEADING_TEXT = "ساخت راهکارهای هوشمند برای حل مسائل واقعی";

export default function Hero() {
  const words = HEADING_TEXT.trim().split(" ");
  const magPrimary = useMagnetic();
  const magSecondary = useMagnetic();

  return (
    <section id="home">
      <div className="wrap hero">
        <div>
          <span className="tag">AI &amp; Automation Developer</span>
          <h1 id="h1" style={{ marginTop: "0.8rem" }}>
            {words.map((w, i) => (
              <span key={i} style={{ animationDelay: `${0.5 + i * 0.07}s` }}>
                {w}
                {i < words.length - 1 ? "\u00A0" : ""}
              </span>
            ))}
          </h1>

          <p className="lead">
            طراحی و پیاده‌سازی سیستم‌های مبتنی بر هوش مصنوعی، یادگیری ماشین و
            اتوماسیون برای ساده‌سازی فرایندها و تبدیل ایده‌ها به راهکارهای
            کاربردی
          </p>

          <div className="cta">
            <a
              className="btn p mag"
              href="#projects"
              ref={magPrimary.ref}
              onPointerMove={magPrimary.onPointerMove}
              onPointerLeave={magPrimary.onPointerLeave}
            >
              مشاهده پروژه‌ها{" "}
            </a>
            <a
              className="btn mag"
              href="#contact"
              ref={magSecondary.ref}
              onPointerMove={magSecondary.onPointerMove}
              onPointerLeave={magSecondary.onPointerLeave}
            >
              شروع گفتگو
            </a>
          </div>
        </div>
        <HeroViz />
      </div>
    </section>
  );
}
