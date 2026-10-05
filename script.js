/* ---------- Content (add projects here; i18n-ready: swap strings per lang) ---------- */
const TODO = "— به‌زودی —";
const projects = [
  {
    t: "AI Laboratory Assistant",
    c: "اتوماسیون هوش مصنوعی / دستیار هوشمند",
    d: "دستیاری هوشمند برای پردازش و تحلیل اطلاعات آزمایشگاهی از طریق گردش‌کار خودکار شامل تلگرام، n8n، هوش مصنوعی، API، پردازش اسناد و داده ساختاریافته.",
    tech: [
      "Telegram Bot",
      "n8n",
      "AI Agent",
      "LLM",
      "Webhooks",
      "APIs",
      "Google Drive",
      "PDF Processing",
    ],
    img: "assets/images/IMG_3129.jpg",
    video:
      "assets/videos/Telegram Web — Mozilla Firefox 2026-10-05 21-53-59.mp4",
    pdf: "",
    github: "",
    live: "",
    flow: ["Telegram", "n8n", "AI Agent", "Drive / PDF", "Structured Data"],
    cs: {
      problem:
        "اطلاعات آزمایشگاهی در قالب‌ها و فایل‌های مختلف پراکنده است و پردازش دستی آن زمان‌بر است.",
      approach:
        "ورودی از طریق ربات تلگرام دریافت می‌شود و گردش‌کار n8n آن را به عامل هوش مصنوعی و ابزارهای پردازش سند می‌سپارد.",
      architecture:
        "Telegram → Webhook → n8n → AI Agent → Google Drive / PDF → Structured Data",
      result: "سیستم کاری برای پردازش و تحلیل خودکار اطلاعات آزمایشگاهی.",
    },
  },
  {
    t: "AI Medication Analysis System",
    c: "هوش مصنوعی / اتوماسیون / داده",
    d: "گردش‌کاری مبتنی بر هوش مصنوعی برای پردازش و تحلیل اطلاعات دارویی با اتوماسیون، داده ساختاریافته، پایگاه داده و API مدل‌های زبانی.",
    tech: [
      "n8n",
      "PostgreSQL",
      "Docker",
      "Claude API",
      "Webhooks",
      "JSON",
      "REST APIs",
    ],
    img: "assets/images/IMG_3128.jpg",
    video: "",
    pdf: "",
    github: "",
    live: "",
    flow: [
      "User Input",
      "Webhook",
      "Processing",
      "PostgreSQL",
      "AI Analysis",
      "Persian Report",
    ],
    cs: {
      problem:
        "تحلیل اطلاعات دارویی نیازمند پردازش ساختاریافته و گزارش‌دهی قابل فهم است.",
      approach:
        "ورودی با Webhook دریافت، پردازش و در PostgreSQL ذخیره می‌شود؛ سپس Claude API تحلیل را انجام می‌دهد.",
      architecture:
        "Input → Webhook → Data Processing → Database → AI Analysis → Structured Output → Persian Report",
      result:
        "گزارش فارسی ساختاریافته از تحلیل خودکار. (نتیجه‌ی عددی ثبت نشده است.)",
    },
  },
  {
    t: "Coffee Shop E-Commerce",
    c: "اپلیکیشن وب",
    d: "تجربه‌ی فروشگاهی واکنش‌گرا با کشف محصول، فیلتر دسته‌بندی، جزئیات محصول، سبد خرید، احراز هویت، علاقه‌مندی‌ها، جریان پرداخت، عملکرد و سئو.",
    tech: [
      "React",
      "Responsive",
      "Authentication",
      "Payment",
      "SEO",
      "Performance",
    ],
    img: "assets/images/IMG_3130.jpg",
    video:
      "assets/videos/Golden Coffee — Mozilla Firefox 2026-10-05 17-06-46.mp4",
    pdf: "",
    github: "",
    live: "",
    cs: { problem: TODO, approach: TODO, architecture: TODO, result: TODO },
  },
  {
    t: "Digital Commerce Interface",
    c: "فرانت‌اند / تجارت الکترونیک",
    d: "رابط کاربری مدرن فروشگاهی با تمرکز بر کشف محصول، فیلتر، سبد خرید، طراحی واکنش‌گرا و معماری مقیاس‌پذیر.",
    tech: ["React", "Next.js", "UI/UX", "SEO", "Accessibility"],
    img: "assets/images/IMG_3131.jpg",
    video: "",
    pdf: "",
    github: "",
    live: "",
    cs: { problem: TODO, approach: TODO, architecture: TODO, result: TODO },
  },
  // {
  //   t: "Personal Portfolio",
  //   c: "توسعه خلاقانه",
  //   d: "پورتفولیوی تعاملی برای ارائه پروژه‌ها، توانایی‌های فنی، انیمیشن، عملکرد و هویت دیجیتال.",
  //   tech: ["React", "Next.js", "Framer Motion", "SEO", "Accessibility"],
  //   img: "",
  //   video: "",
  //   pdf: "",
  //   github: "",
  //   live: "",
  //   cs: { problem: TODO, approach: TODO, architecture: TODO, result: TODO },
  // },
];
const skills = {
  "AI & LLM": [
    "LLM Applications",
    "Prompt Engineering",
    "AI Agents",
    "LLM API Integration",
    "AI-powered Workflows",
  ],
  اتوماسیون: [
    "n8n",
    "Workflow Automation",
    "Webhooks",
    "API Integration",
    "Business Process Automation",
  ],
  "بک‌اند و زیرساخت": [
    "Node.js",
    "TypeScript",
    "REST APIs",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Git",
    "GitHub",
  ],
  "توسعه فرانت": [
    "JavaScript",
    "Python",
    "React",
    "Next.js",
    "Vue",
    "Tailwind",
    "Css",
    "Html",
  ],
};
const flows = [
  [
    "Customer Message",
    "AI Agent",
    "Data Analysis",
    "Database / CRM",
    "Automated Response",
  ],
  ["PDF", "Extraction", "AI Processing", "Structured Data", "Report"],
];

/* ---------- Helpers ---------- */
const $ = (s, r = document) => r.querySelector(s),
  $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
const toast = (m) => {
  const t = $("#toast");
  t.textContent = m;
  t.classList.add("s");
  clearTimeout(toast.i);
  toast.i = setTimeout(() => t.classList.remove("s"), 1800);
};

/* preloader: gone as soon as the page is ready */
addEventListener("load", () =>
  setTimeout(() => $("#pre").classList.add("x"), reduce ? 0 : 350)
);
setTimeout(() => $("#pre").classList.add("x"), 1500);

/* hero heading word stagger */
const h1 = $("#h1");
h1.innerHTML = h1.textContent
  .trim()
  .split(" ")
  .map((w, i) => `<span style="animation-delay:${0.5 + i * 0.07}s">${w}</span>`)
  .join(" ");

/* nav */
const hd = $("#hd");
addEventListener("scroll", () => hd.classList.toggle("s", scrollY > 20), {
  passive: true,
});
const bg = $("#burger"),
  lk = $("#links");
bg.onclick = () => {
  const o = lk.classList.toggle("o");
  bg.setAttribute("aria-expanded", o);
  bg.textContent = o ? "✕" : "≡";
};
$$("#links a").forEach(
  (a) =>
    (a.onclick = () => {
      lk.classList.remove("o");
      bg.textContent = "≡";
    })
);

/* theme */
const root = document.documentElement;
try {
  const s = localStorage.getItem("theme");
  if (s) root.dataset.theme = s;
} catch (e) {}
$("#theme").onclick = () => {
  const n = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = n;
  try {
    localStorage.setItem("theme", n);
  } catch (e) {}
};

/* reveal */
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12 }
);
const reveal = () => $$(".rv:not(.in)").forEach((el) => io.observe(el));

/* hero workflow visual */
(() => {
  const labels = ["مسئله", "هوش مصنوعی", "اتوماسیون", "API / داده", "نتیجه"];
  const pts = [
    [200, 50],
    [110, 130],
    [290, 210],
    [110, 290],
    [200, 370],
  ];
  let w = "",
    n = "",
    d = "";
  pts.forEach((p, i) => {
    if (i < 4) {
      const q = pts[i + 1],
        my = (p[1] + q[1]) / 2,
        path = `M${p[0]} ${p[1] + 16} C${p[0]} ${my},${q[0]} ${my},${q[0]} ${
          q[1] - 16
        }`;
      w += `<path class="wire" d="${path}"/>`;
      if (!reduce)
        d += `<circle class="dot" r="3"><animateMotion dur="${
          2.2 + i * 0.3
        }s" repeatCount="indefinite" begin="${
          i * 0.4
        }s" path="${path}"/></circle>`;
    }
    n += `<g class="nd" style="--d:${(0.5 + i * 0.35).toFixed(
      2
    )}" data-i="${i}"><rect x="${p[0] - 62}" y="${
      p[1] - 18
    }" width="124" height="36" rx="12"/><text x="${p[0]}" y="${p[1] + 5}">${
      labels[i]
    }</text></g>`;
  });
  $("#vsvg").innerHTML = w + d + n;
  const viz = $("#viz");
  let k = 0;
  setInterval(() => {
    $$(".nd", viz).forEach((g, i) => g.classList.toggle("on", i === k));
    k = (k + 1) % 5;
  }, 900);
  if (!reduce)
    viz.addEventListener("pointermove", (e) => {
      const r = viz.getBoundingClientRect();
      viz.style.setProperty(
        "--mx",
        ((e.clientX - r.left) / r.width - 0.5).toFixed(2)
      );
      viz.style.setProperty(
        "--my",
        ((e.clientY - r.top) / r.height - 0.5).toFixed(2)
      );
      $$(".nd", viz).forEach((g) => {
        g.style.setProperty("--mx", viz.style.getPropertyValue("--mx"));
        g.style.setProperty("--my", viz.style.getPropertyValue("--my"));
      });
    });
  viz.addEventListener("pointerleave", () =>
    $$(".nd", viz).forEach((g) => {
      g.style.setProperty("--mx", 0);
      g.style.setProperty("--my", 0);
    })
  );
})();

/* expertise tabs */
(() => {
  const tb = $("#tabs"),
    ch = $("#chips");
  const show = (k) => {
    $$(".tab", tb).forEach((b) =>
      b.setAttribute("aria-selected", b.dataset.k === k)
    );
    ch.innerHTML = skills[k]
      .map(
        (s, i) =>
          `<span class="chip" style="animation-delay:${i * 0.05}s">${s}</span>`
      )
      .join("");
  };
  tb.innerHTML = Object.keys(skills)
    .map((k) => `<button class="tab" role="tab" data-k="${k}">${k}</button>`)
    .join("");
  tb.onclick = (e) => {
    const b = e.target.closest(".tab");
    if (b) show(b.dataset.k);
  };
  show(Object.keys(skills)[0]);
})();

/* projects */
$("#plist").innerHTML = projects
  .map(
    (
      p,
      i
    ) => `<article class="proj rv"><div class="shot" role="img" aria-label="پیش‌نمایش ${
      p.t
    }">${
      p.img
        ? `<img src="${p.img}" alt="${p.t}" loading="lazy" style="width:100%;height:100%;object-fit:cover">`
        : "assets/images/project-" + (i + 1) + ".webp — place preview here"
    }</div>
<div><span class="tag">${p.c}</span><h3>${p.t}</h3><p>${
      p.d
    }</p><div class="tags">${p.tech
      .map((t) => `<span>${t}</span>`)
      .join("")}</div>
<div class="cta"><button class="btn p mag" data-cs="${i}">مطالعه موردی <i>←</i></button>${
      p.live
        ? `<a class="btn" href="${p.live}" target="_blank" rel="noopener">دمو</a>`
        : ""
    }${
      p.github
        ? `<a class="btn" href="${p.github}" target="_blank" rel="noopener">GitHub</a>`
        : ""
    }</div></div></article>`
  )
  .join("");
const dlg = $("#cs");
$("#plist").onclick = (e) => {
  const b = e.target.closest("[data-cs]");
  if (!b) return;
  const p = projects[b.dataset.cs],
    c = p.cs;
  const sec = [
    ["مسئله", c.problem],
    ["رویکرد", c.approach],
    ["معماری", c.architecture],
    ["نتیجه / هدف", c.result],
  ];
  $("#csb").innerHTML = `<span class="tag">${
    p.c
  }</span><h2 id="cst" style="margin:.4rem 0 1rem;font-size:1.8rem">${
    p.t
  }</h2><p>${p.d}</p>${sec
    .map(
      (s) =>
        `<h4>${s[0]}</h4><p ${
          s[0] === "معماری"
            ? 'style="direction:ltr;font-family:var(--m);font-size:.85rem"'
            : ""
        }>${s[1]}</p>`
    )
    .join("")}
 <h4>فناوری</h4><div class="tags">${p.tech
   .map((t) => `<span>${t}</span>`)
   .join("")}</div>
 ${
   p.flow
     ? `<div class="flow" style="margin-top:1rem">${p.flow
         .map(
           (f, i) =>
             (i ? '<div class="fl on"></div>' : "") +
             `<div class="fn on">${f}</div>`
         )
         .join("")}</div>`
     : ""
 }
 ${videoShowcase(p)}`;
  dlg.showModal();
  initPlayer($("#csb"));
};
$("#csx").onclick = () => dlg.close();
dlg.addEventListener("click", (e) => {
  if (e.target === dlg) dlg.close();
});

/* automation showcase */
$("#flows").innerHTML = flows
  .map(
    (f) =>
      `<div class="flow">${f
        .map(
          (s, i) =>
            (i ? '<div class="fl"></div>' : "") + `<div class="fn">${s}</div>`
        )
        .join("")}</div>`
  )
  .join("");
$$(".flow", $("#flows")).forEach((fl, fi) => {
  const ns = $$(".fn", fl),
    ls = $$(".fl", fl);
  let k = 0;
  setInterval(
    () => {
      ns.forEach((n, i) => n.classList.toggle("on", i === k));
      ls.forEach((l, i) => l.classList.toggle("on", i === k - 1));
      k = (k + 1) % ns.length;
    },
    reduce ? 1800 : 1000 + fi * 150
  );
});

/* cards spotlight */
document.addEventListener(
  "pointermove",
  (e) => {
    const c = e.target.closest && e.target.closest(".card");
    if (c) {
      const r = c.getBoundingClientRect();
      c.style.setProperty("--px", e.clientX - r.left + "px");
      c.style.setProperty("--py", e.clientY - r.top + "px");
    }
  },
  { passive: true }
);

/* copy */
$$("[data-copy]").forEach(
  (b) =>
    (b.onclick = async () => {
      try {
        await navigator.clipboard.writeText(b.dataset.copy);
      } catch (e) {}
      const o = b.textContent;
      b.textContent = "Copied ✓";
      setTimeout(() => (b.textContent = o), 1500);
    })
);

/* cursor + magnetic buttons (desktop only) */
if (matchMedia("(hover:hover) and (pointer:fine)").matches && !reduce) {
  document.body.classList.add("cc-on");
  const a = $("#cur"),
    b = $("#cur2");
  let x = 0,
    y = 0,
    bx = 0,
    by = 0;
  addEventListener(
    "pointermove",
    (e) => {
      x = e.clientX;
      y = e.clientY;
      a.style.transform = `translate(${x}px,${y}px)`;
      b.classList.toggle("h", !!e.target.closest("a,button,.proj"));
    },
    { passive: true }
  );
  (function l() {
    bx += (x - bx) * 0.18;
    by += (y - by) * 0.18;
    b.style.transform = `translate(${bx}px,${by}px)`;
    requestAnimationFrame(l);
  })();
  $$(".mag").forEach((m) => {
    m.addEventListener("pointermove", (e) => {
      const r = m.getBoundingClientRect();
      m.style.transform = `translate(${
        (e.clientX - r.left - r.width / 2) * 0.18
      }px,${(e.clientY - r.top - r.height / 2) * 0.28}px)`;
    });
    m.addEventListener("pointerleave", () => (m.style.transform = ""));
  });
}

/* easter egg: click the logo 5 times */
let lc = 0;
$("#logo").addEventListener("click", () => {
  if (++lc === 5) {
    toast("Automation is everywhere. You just need to see it.");
    lc = 0;
  }
});

/* ===== VIDEO SHOWCASE ===== */
const vpSvg = (d) =>
  '<svg viewBox="0 0 24 24" aria-hidden="true">' + d + "</svg>";
const VP_ICON = {
  play: vpSvg('<path d="M8 5v14l11-7z"/>'),
  pause: vpSvg('<path d="M7 5h4v14H7zm6 0h4v14h-4z"/>'),
  vol: vpSvg(
    '<path d="M4 9v6h4l5 4V5L8 9H4zm12.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4z"/>'
  ),
  mute: vpSvg(
    '<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 9.5l5 5m0-5l-5 5" stroke="currentColor" stroke-width="2" fill="none"/>'
  ),
  fs: vpSvg(
    '<path d="M4 9V4h5v2H6v3H4zm14-3h-3V4h5v5h-2V6zM6 18h3v2H4v-5h2v3zm12-3h2v5h-5v-2h3v-3z"/>'
  ),
  replay: vpSvg('<path d="M12 5V2L7 6l5 4V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7z"/>'),
};
const videoShowcase = (p) => `
<section class="vs" aria-label="نمایش پروژه">
 <h4 class="vs-t">ببینید در عمل چطور کار می‌کند</h4>
 <p class="vs-s">مرور کوتاهی از پروژه و قابلیت‌های اصلی آن.</p>
 <div class="vp" data-state="idle" tabindex="0" role="group" aria-label="پخش‌کننده ویدیو. فاصله: پخش و توقف، جهت‌ها: جلو و عقب، M: صدا، F: تمام‌صفحه">
  <video class="vp-v" src="${p.video || "YOUR_VIDEO_PATH_HERE.mp4"}" poster="${
  p.poster || p.img || "YOUR_POSTER_IMAGE_HERE.jpg"
}" preload="metadata" playsinline></video>
  <button class="vp-cover" type="button" aria-label="پخش ویدیو">
   <span class="vp-play">${VP_ICON.play}</span><span class="vp-msg"></span>
  </button>
  <div class="vp-ctl">
   <input class="vp-seek" type="range" min="0" max="1000" step="1" value="0" aria-label="نوار پیشرفت ویدیو">
   <div class="vp-row">
    <button class="vp-b vp-pp" type="button" aria-label="پخش">${
      VP_ICON.play
    }</button>
    <span class="vp-t" aria-live="off">0:00 / 0:00</span>
    <span class="vp-sp"></span>
    <button class="vp-b vp-mu" type="button" aria-label="قطع صدا">${
      VP_ICON.vol
    }</button>
    <input class="vp-vol" type="range" min="0" max="1" step="0.05" value="1" aria-label="میزان صدا">
    <button class="vp-b vp-rate" type="button" aria-label="سرعت پخش">1×</button>
    <button class="vp-b vp-fs" type="button" aria-label="تمام‌صفحه">${
      VP_ICON.fs
    }</button>
   </div>
  </div>
 </div>
 ${
   p.pdf
     ? `<a class="btn vs-doc" href="${p.pdf}" target="_blank" rel="noopener">مشاهده مستندات</a>`
     : ""
 }
</section>`;

const VP_RATES = [1, 1.25, 1.5, 2, 0.75];
const vpFmt = (s) => {
  if (!isFinite(s)) return "0:00";
  return Math.floor(s / 60) + ":" + String(Math.floor(s % 60)).padStart(2, "0");
};
function initPlayer(root) {
  $$(".vp", root).forEach((vp) => {
    const v = $(".vp-v", vp),
      seek = $(".vp-seek", vp),
      vol = $(".vp-vol", vp),
      pp = $(".vp-pp", vp),
      mu = $(".vp-mu", vp),
      rt = $(".vp-rate", vp),
      fs = $(".vp-fs", vp),
      tm = $(".vp-t", vp),
      cover = $(".vp-cover", vp),
      big = $(".vp-play", vp),
      msg = $(".vp-msg", vp);
    let ri = 0,
      ht;
    const fill = (el, pct) => el.style.setProperty("--p", pct + "%");
    const state = (s) => {
      vp.dataset.state = s;
      cover.setAttribute(
        "aria-label",
        { ended: "پخش مجدد ویدیو", error: "ویدیو در دسترس نیست" }[s] ||
          "پخش ویدیو"
      );
      big.innerHTML = s === "ended" ? VP_ICON.replay : VP_ICON.play;
      msg.textContent =
        { ended: "پخش مجدد", error: "ویدیو به‌زودی اضافه می‌شود" }[s] || "";
      if (s !== "playing") {
        clearTimeout(ht);
        vp.classList.remove("hide");
      }
    };
    const showCtl = () => {
      vp.classList.remove("hide");
      clearTimeout(ht);
      if (!v.paused) ht = setTimeout(() => vp.classList.add("hide"), 2500);
    };
    const tick = () => {
      tm.textContent = vpFmt(v.currentTime) + " / " + vpFmt(v.duration);
      if (v.duration) {
        seek.value = (v.currentTime / v.duration) * 1000;
        fill(seek, seek.value / 10);
      }
    };
    const playPause = () =>
      v.paused || v.ended ? v.play().catch(() => state("error")) : v.pause();
    const toggle = () => {
      if (vp.classList.contains("hide")) {
        showCtl();
        return;
      }
      playPause();
    };
    const skip = (d) => {
      if (v.duration)
        v.currentTime = Math.max(0, Math.min(v.duration, v.currentTime + d));
    };
    const sound = () => {
      const m = v.muted || v.volume === 0;
      mu.innerHTML = m ? VP_ICON.mute : VP_ICON.vol;
      mu.setAttribute("aria-label", m ? "وصل صدا" : "قطع صدا");
      vol.value = m ? 0 : v.volume;
      fill(vol, vol.value * 100);
    };

    v.addEventListener("play", () => {
      state("playing");
      pp.innerHTML = VP_ICON.pause;
      pp.setAttribute("aria-label", "توقف");
      showCtl();
    });
    v.addEventListener("pause", () => {
      if (!v.ended) state("paused");
      pp.innerHTML = VP_ICON.play;
      pp.setAttribute("aria-label", "پخش");
    });
    v.addEventListener("ended", () => state("ended"));
    v.addEventListener("error", () => state("error"));
    ["timeupdate", "loadedmetadata", "durationchange"].forEach((ev) =>
      v.addEventListener(ev, tick)
    );
    v.addEventListener("volumechange", sound);

    cover.onclick = () => {
      vp.classList.remove("hide");
      toggle();
    };
    v.onclick = toggle;
    pp.onclick = playPause;
    seek.oninput = () => {
      if (v.duration) v.currentTime = (seek.value / 1000) * v.duration;
      fill(seek, seek.value / 10);
    };
    seek.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        skip(e.key === "ArrowRight" ? 5 : -5);
      }
    });
    vol.oninput = () => {
      v.volume = +vol.value;
      v.muted = v.volume === 0;
    };
    mu.onclick = () => {
      v.muted = !v.muted;
      if (!v.muted && v.volume === 0) v.volume = 0.5;
    };
    rt.onclick = () => {
      ri = (ri + 1) % VP_RATES.length;
      v.playbackRate = VP_RATES[ri];
      rt.textContent = VP_RATES[ri] + "×";
    };
    fs.onclick = () => {
      if (document.fullscreenElement) document.exitFullscreen();
      else if (vp.requestFullscreen) vp.requestFullscreen();
      else if (v.webkitEnterFullscreen) v.webkitEnterFullscreen();
    };

    vp.addEventListener("pointermove", showCtl);
    vp.addEventListener("focusin", showCtl);
    vp.addEventListener("keydown", (e) => {
      if (e.target !== vp) return;
      const k = e.key.toLowerCase();
      if (k === " " || k === "k") {
        e.preventDefault();
        playPause();
      } else if (k === "arrowright") {
        e.preventDefault();
        skip(5);
      } else if (k === "arrowleft") {
        e.preventDefault();
        skip(-5);
      } else if (k === "arrowup") {
        e.preventDefault();
        v.volume = Math.min(1, v.volume + 0.1);
      } else if (k === "arrowdown") {
        e.preventDefault();
        v.volume = Math.max(0, v.volume - 0.1);
      } else if (k === "m") mu.click();
      else if (k === "f") fs.click();
    });
    sound();
    tick();
    if (v.error || v.networkState === 3) state("error");
  });
}
/* stop playback when the case study closes */
dlg.addEventListener("close", () => $$("video", dlg).forEach((v) => v.pause()));

reveal();
