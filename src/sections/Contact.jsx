import { useState } from "react";
import { contactInfo } from "../data/projects";
import { useMagnetic } from "../hooks/useMagnetic";

function CopyButton({ copyText, label, primary }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
    } catch {
      // ignore clipboard permissions error
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      className={`btn${primary ? " p" : ""} cp`}
      data-copy={copyText}
      onClick={handleCopy}
    >
      {copied ? "Copied ✓" : label}
    </button>
  );
}

export default function Contact() {
  const magBtn = useMagnetic();

  return (
    <section id="contact">
      <div className="wrap rv">
        <h2>یک مسئله دارید؟ راهکارش را پیدا می‌کنیم.</h2>

        <p className="sub">
          ایده‌ها و مسائل واقعی، نقطه شروع ساخت راهکارهای هوشمند هستند؛ از
          تحلیل و طراحی تا توسعه و پیاده‌سازی.
        </p>

        <div className="cc">
          <CopyButton
            copyText={contactInfo.email}
            label={contactInfo.email}
            primary={true}
          />
          <CopyButton
            copyText={contactInfo.phoneCopy}
            label={contactInfo.phoneDisplay}
            primary={false}
          />
        </div>
        <div className="cta" style={{ justifyContent: "center" }}>
          <a
            className="btn mag"
            href="#projects"
            ref={magBtn.ref}
            onPointerMove={magBtn.onPointerMove}
            onPointerLeave={magBtn.onPointerLeave}
          >
            مشاهده پروژه‌ها
          </a>
        </div>
        <p className="soc" style={{ marginTop: "2rem" }}>
          {contactInfo.socials.map((soc) => (
            <a
              key={soc.label}
              href={soc.href}
              data-placeholder=""
              target={soc.href !== "#" ? "_blank" : undefined}
              rel={soc.href !== "#" ? "noopener noreferrer" : undefined}
            >
              {soc.label}
            </a>
          ))}
        </p>
      </div>
    </section>
  );
}
