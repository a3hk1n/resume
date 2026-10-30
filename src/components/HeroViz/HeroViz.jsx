import { useEffect, useRef } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const P = {
  problem: [84, 70],
  data: [318, 108],
  core: [200, 206],
  auto: [318, 310],
  result: [100, 352],
};

const L = {
  problem: "مسئله",
  data: "داده و API",
  auto: "اتوماسیون",
  result: "نتیجه",
};

const PATHS = [
  "M84 70C84 150 130 206 200 206",
  "M200 206C270 206 318 170 318 108",
  "M318 108C372 160 372 260 318 310",
  "M318 310C260 372 160 372 100 352",
];

const COL = ["ac", "hv", "ac2", "ac2"];

const TW_POINTS = [
  [40, 60],
  [360, 40],
  [24, 230],
  [372, 236],
  [150, 26],
  [260, 396],
  [34, 396],
  [236, 150],
  [150, 290],
  [350, 176],
];

const WORDS = ["API", "JSON", "POST", "AI", "DATA", "LLM", "1010", "GET", "{ }"];
const SPOTS = [
  [232, 44],
  [44, 168],
  [356, 212],
  [262, 268],
  [40, 282],
  [200, 396],
  [340, 372],
  [148, 112],
  [262, 150],
];

export default function HeroViz() {
  const wrapRef = useRef(null);
  const vizRef = useRef(null);
  const svgRef = useRef(null);
  const ptsRef = useRef(null);
  const reduce = useReducedMotion();

  /* 1. SVG pipeline choreography, ambient tokens, intersection pause, and pointer glow */
  useEffect(() => {
    const viz = vizRef.current;
    const svg = svgRef.current;
    if (!viz || !svg) return;

    const el = {};
    svg.querySelectorAll(".nd").forEach((n) => {
      el[n.dataset.k] = n;
    });
    const pm = Array.from(svg.querySelectorAll(".pm"));
    const po = Array.from(svg.querySelectorAll(".po"));
    const fxs = Array.from(
      svg.querySelectorAll(".hz-fx,.hz-pg,.hz-sc,.hz-bp,.hz-cb")
    );
    const tk = Array.from(svg.querySelectorAll(".hz-tk"));

    let alive = false;
    let inView = true;
    let timers = [];
    let tokT = 0;
    let ti = 0;
    let lastSpot = -1;

    const at = (ms, fn) => timers.push(setTimeout(fn, ms));

    const act = (k) => {
      const n = el[k];
      if (!n) return;
      n.classList.remove("on");
      void n.getBoundingClientRect();
      n.classList.add("on");
      const tid = setTimeout(() => n.classList.remove("on"), 1500);
      timers.push(tid);
    };

    const processCore = () => {
      fxs.forEach((f) => f.classList.remove("go"));
      void svg.getBoundingClientRect();
      fxs.forEach((f) => f.classList.add("go"));
    };

    const fire = (i, ms) => {
      if (reduce) return;
      [pm[i], po[i]].forEach((a) => {
        if (!a) return;
        a.setAttribute("dur", ms / 1000 + "s");
        if (typeof a.beginElement === "function") {
          try {
            a.beginElement();
          } catch {
            // ignore SMIL errors if browser doesn't support beginElement
          }
        }
      });
    };

    const cycle = () => {
      if (!alive) return;
      timers = [];
      if (reduce) {
        const ks = ["problem", "data", "auto", "result"];
        let i = 0;
        const step = () => {
          if (!alive) return;
          act(ks[i++ % 4]);
          timers = [setTimeout(step, 1800)];
        };
        step();
        return;
      }
      const j = () => 0.88 + Math.random() * 0.24;
      const d = [1800 * j(), 1500 * j(), 1500 * j(), 1700 * j()];
      let t = 0;
      act("problem");
      fire(0, d[0]);
      t += d[0];
      at(t, processCore);
      t += 460;
      at(t, () => fire(1, d[1]));
      t += d[1];
      at(t, () => act("data"));
      t += 240;
      at(t, () => fire(2, d[2]));
      t += d[2];
      at(t, () => act("auto"));
      t += 240;
      at(t, () => fire(3, d[3]));
      t += d[3];
      at(t, () => act("result"));
      t += 2200 + Math.random() * 1400;
      at(t, cycle);
    };

    const showToken = () => {
      if (!alive || reduce || !tk.length) return;
      const t = tk[ti++ % tk.length];
      let s;
      do {
        s = Math.floor(Math.random() * SPOTS.length);
      } while (s === lastSpot);
      lastSpot = s;
      t.setAttribute("x", SPOTS[s][0]);
      t.setAttribute("y", SPOTS[s][1]);
      t.textContent = WORDS[Math.floor(Math.random() * WORDS.length)];
      t.classList.remove("go");
      void t.getBoundingClientRect();
      t.classList.add("go");
      tokT = setTimeout(showToken, 1300 + Math.random() * 1400);
    };

    const sync = () => {
      const on = inView && !document.hidden;
      if (on === alive) return;
      alive = on;
      viz.classList.toggle("hz-off", !on);
      if (on) {
        if (svg.unpauseAnimations) svg.unpauseAnimations();
        cycle();
        showToken();
      } else {
        timers.forEach(clearTimeout);
        clearTimeout(tokT);
        if (svg.pauseAnimations) svg.pauseAnimations();
      }
    };

    let io;
    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver((es) => {
        if (es[0]) {
          inView = es[0].isIntersecting;
          sync();
        }
      });
      io.observe(viz);
    }
    document.addEventListener("visibilitychange", sync);
    sync();

    /* Pointer reaction: depth parallax + soft glow */
    let raf = 0;
    let px = 0;
    let py = 0;
    const setProp = (k, v) => svg.style.setProperty(k, v);
    const upd = () => {
      raf = 0;
      const m = svg.getScreenCTM && svg.getScreenCTM();
      if (!m) return;
      const pt = svg.createSVGPoint();
      pt.x = px;
      pt.y = py;
      const q = pt.matrixTransform(m.inverse());
      const r = viz.getBoundingClientRect();
      setProp("--gx", q.x.toFixed(1));
      setProp("--gy", q.y.toFixed(1));
      setProp("--mx", ((px - r.left) / r.width - 0.5).toFixed(2));
      setProp("--my", ((py - r.top) / r.height - 0.5).toFixed(2));
    };

    const onPointerMove = (e) => {
      if (reduce) return;
      px = e.clientX;
      py = e.clientY;
      if (!raf) raf = requestAnimationFrame(upd);
    };

    const onPointerLeave = () => {
      if (reduce) return;
      setProp("--gx", 200);
      setProp("--gy", 210);
      setProp("--mx", 0);
      setProp("--my", 0);
    };

    if (!reduce) {
      viz.addEventListener("pointermove", onPointerMove);
      viz.addEventListener("pointerleave", onPointerLeave);
    }

    return () => {
      alive = false;
      timers.forEach(clearTimeout);
      clearTimeout(tokT);
      if (raf) cancelAnimationFrame(raf);
      if (io) io.disconnect();
      document.removeEventListener("visibilitychange", sync);
      viz.removeEventListener("pointermove", onPointerMove);
      viz.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [reduce]);

  /* 2. Hero 3D viz tilt + floating particles */
  useEffect(() => {
    if (reduce) return;
    const wrap = wrapRef.current;
    const viz = vizRef.current;
    const pts = ptsRef.current;
    if (!wrap || !viz) return;

    if (pts) {
      pts.innerHTML = "";
      const colors = ["var(--ac)", "var(--ac2)", "var(--ac)"];
      const count =
        typeof window !== "undefined" &&
        window.matchMedia("(max-width:600px)").matches
          ? 0
          : 10;
      for (let i = 0; i < count; i++) {
        const el = document.createElement("div");
        el.className = "viz-p";
        const size = 2 + Math.random() * 3;
        const x = 5 + Math.random() * 90;
        const y = 15 + Math.random() * 70;
        const tx = (Math.random() - 0.5) * 40;
        const ty = -20 - Math.random() * 50;
        const dur = 5 + Math.random() * 5;
        const dl = Math.random() * 6;
        const op = 0.2 + Math.random() * 0.35;
        el.style.cssText = `
          width:${size}px;height:${size}px;
          left:${x}%;top:${y}%;
          background:${colors[i % colors.length]};
          --vp-dur:${dur.toFixed(1)}s;
          --vp-dl:${dl.toFixed(1)}s;
          --vp-tx:${tx.toFixed(0)}px;
          --vp-ty:${ty.toFixed(0)}px;
          --vp-op:${op.toFixed(2)};
        `;
        pts.appendChild(el);
      }
    }

    if (
      typeof window === "undefined" ||
      !window.matchMedia("(hover:hover) and (pointer:fine)").matches
    ) {
      return;
    }

    const MAX_TILT = 10;
    let rafId = 0;
    let cx = 0;
    let cy = 0;
    let leaveTimer = 0;

    const applyTilt = () => {
      rafId = 0;
      const rx = -cy * MAX_TILT;
      const ry = cx * MAX_TILT;
      viz.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(
        2
      )}deg) translateZ(0)`;

      const vx = ((cx + 0.5) * 100).toFixed(1);
      const vy = ((cy + 0.5) * 100).toFixed(1);
      const vx2 = (100 - (cx + 0.5) * 80).toFixed(1);
      const vy2 = ((cy + 0.5) * 80 + 20).toFixed(1);
      viz.style.setProperty("--vx", vx + "%");
      viz.style.setProperty("--vy", vy + "%");
      viz.style.setProperty("--vx2", vx2 + "%");
      viz.style.setProperty("--vy2", vy2 + "%");

      const sx = (cx * 18).toFixed(1);
      const sy = (cy * 14).toFixed(1);
      viz.style.boxShadow = `${sx}px ${sy}px 48px -10px color-mix(in srgb, var(--ac) 28%, transparent)`;
    };

    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      cx = (e.clientX - r.left) / r.width - 0.5;
      cy = (e.clientY - r.top) / r.height - 0.5;
      if (!rafId) rafId = requestAnimationFrame(applyTilt);
    };

    const onLeave = () => {
      cx = 0;
      cy = 0;
      if (!rafId) rafId = requestAnimationFrame(applyTilt);
      viz.style.transition =
        "transform 0.7s cubic-bezier(0.2,0.7,0.2,1), box-shadow 0.5s";
      clearTimeout(leaveTimer);
      leaveTimer = setTimeout(() => {
        viz.style.transition = "";
      }, 750);
    };

    wrap.addEventListener("pointermove", onMove, { passive: true });
    wrap.addEventListener("pointerleave", onLeave);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      clearTimeout(leaveTimer);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce]);

  const burstParticles = Array.from({ length: 8 }, (_, i) => {
    const a = ((i * 45 + 22) * Math.PI) / 180;
    return {
      key: i,
      dx: `${(Math.cos(a) * 82).toFixed(1)}px`,
      dy: `${(Math.sin(a) * 82).toFixed(1)}px`,
    };
  });

  const nodesList = [
    { k: "problem", d: 0.9 },
    { k: "data", d: 0.7 },
    { k: "auto", d: 0.8 },
    { k: "result", d: 1 },
  ];

  return (
    <div
      className="viz-3d-wrap"
      id="viz3w"
      ref={wrapRef}
      style={{ position: "relative" }}
    >
      <div
        className="viz"
        id="viz"
        ref={vizRef}
        role="img"
        aria-label="نمودار جریان: مسئله، هوش مصنوعی، اتوماسیون، داده، نتیجه"
      >
        <div
          className="viz-particles"
          id="viz-pts"
          ref={ptsRef}
          aria-hidden="true"
        ></div>
        <svg viewBox="0 0 400 420" id="vsvg" ref={svgRef}>
          <defs>
            <radialGradient id="hz-gc">
              <stop
                offset="0"
                style={{ stopColor: "var(--ac)", stopOpacity: 0.5 }}
              />
              <stop
                offset="1"
                style={{ stopColor: "var(--ac)", stopOpacity: 0 }}
              />
            </radialGradient>
            <radialGradient id="hz-mgd">
              <stop
                offset="0"
                style={{ stopColor: "var(--ac)", stopOpacity: 0.22 }}
              />
              <stop
                offset="1"
                style={{ stopColor: "var(--ac)", stopOpacity: 0 }}
              />
            </radialGradient>
            {COL.map((c, i) => (
              <radialGradient key={i} id={`hz-g${i}`}>
                <stop
                  offset="0"
                  style={{ stopColor: `var(--${c})`, stopOpacity: 0.55 }}
                />
                <stop
                  offset="1"
                  style={{ stopColor: `var(--${c})`, stopOpacity: 0 }}
                />
              </radialGradient>
            ))}
            <linearGradient id="hz-sw">
              <stop
                offset="0"
                style={{ stopColor: "var(--ac2)", stopOpacity: 0 }}
              />
              <stop
                offset=".5"
                style={{ stopColor: "var(--ac2)", stopOpacity: 0.8 }}
              />
              <stop
                offset="1"
                style={{ stopColor: "var(--ac2)", stopOpacity: 0 }}
              />
            </linearGradient>
            <clipPath id="hz-cc">
              <circle r="44" />
            </clipPath>
          </defs>

          {/* Background rings & twinkles */}
          <g className="hz-bg">
            <circle className="hz-r" cx="200" cy="206" r="122" />
            <circle className="hz-r" cx="200" cy="206" r="168" />
            {TW_POINTS.map((p, i) => (
              <circle
                key={i}
                className="hz-tw"
                cx={p[0]}
                cy={p[1]}
                r="1.4"
                style={{ "--dl": `${(i * 0.7).toFixed(1)}s` }}
              />
            ))}
          </g>

          {/* Pointer magnetic glow */}
          <circle className="hz-mg" r="90" fill="url(#hz-mgd)" />

          {/* Wires & flow paths */}
          {PATHS.map((d, i) => (
            <g key={`wire-${i}`}>
              <path className="wire" d={d} />
              <path
                className="hz-flow"
                d={d}
                pathLength="100"
                style={{ "--dl": `${(-i * 0.85).toFixed(2)}s` }}
              />
            </g>
          ))}

          {/* Ambient particles along paths */}
          {!reduce &&
            PATHS.map((d, i) =>
              [0, 1].map((k) => {
                const dur = (5.2 + i * 0.7).toFixed(1);
                const bgn = (-k * dur * 0.5).toFixed(1) + "s";
                return (
                  <circle
                    key={`amb-${i}-${k}`}
                    r="1.8"
                    opacity="0"
                    style={{ fill: `var(--${COL[i]})` }}
                  >
                    <animateMotion
                      path={d}
                      dur={`${dur}s`}
                      begin={bgn}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0;.75;.75;0"
                      keyTimes="0;.15;.85;1"
                      dur={`${dur}s`}
                      begin={bgn}
                      repeatCount="indefinite"
                    />
                  </circle>
                );
              })
            )}

          {/* Active data packets */}
          {PATHS.map((d, i) => (
            <g key={`pk-${i}`} opacity="0">
              <circle r="10" fill={`url(#hz-g${i})`} />
              <circle r="2.8" style={{ fill: `var(--${COL[i]})` }} />
              <animateMotion
                className="pm"
                path={d}
                dur="1.6s"
                begin="indefinite"
                fill="freeze"
              />
              <animate
                className="po"
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;.12;.86;1"
                dur="1.6s"
                begin="indefinite"
                fill="freeze"
              />
            </g>
          ))}

          {/* AI Core */}
          <g className="hz-core" transform={`translate(${P.core.join(",")})`}>
            <circle className="hz-cg" r="96" fill="url(#hz-gc)" />
            <circle className="hz-fx" r="78" fill="url(#hz-gc)" />
            <circle className="hz-ob" r="64" strokeDasharray="2 7" />
            <circle className="hz-ob b" r="84" strokeDasharray="1 9" />
            <g>
              {!reduce && (
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0"
                  to="360"
                  dur="16s"
                  repeatCount="indefinite"
                />
              )}
              <circle cx="64" r="2.3" style={{ fill: "var(--ac2)" }} />
              <circle cx="-64" r="1.5" style={{ fill: "var(--ac)" }} />
            </g>
            <g>
              {!reduce && (
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="360"
                  to="0"
                  dur="26s"
                  repeatCount="indefinite"
                />
              )}
              <circle cx="84" r="1.8" style={{ fill: "var(--hv)" }} />
              <circle cx="-54" cy="64" r="1.4" style={{ fill: "var(--ac2)" }} />
            </g>
            <circle className="hz-pr" r="46" />
            <circle className="hz-pr" r="46" style={{ "--dl": "1.9s" }} />
            <circle className="hz-pg" r="46" />
            <circle className="hz-cb" r="44" />
            <circle className="hz-ci" r="35" />
            <g clipPath="url(#hz-cc)">
              <rect className="hz-sc" x="-44" y="-1" width="88" height="2" />
            </g>
            <text className="hz-ct" y="3">
              AI
            </text>
            <text className="hz-cs" y="19">
              LLM
            </text>
            {burstParticles.map((bp) => (
              <circle
                key={bp.key}
                className="hz-bp"
                r="2"
                style={{ "--dx": bp.dx, "--dy": bp.dy }}
              />
            ))}
          </g>

          {/* Pipeline Nodes */}
          {nodesList.map(({ k, d }) => (
            <g
              key={k}
              className="nd"
              data-k={k}
              style={{ "--d": d }}
            >
              <g transform={`translate(${P[k].join(",")})`}>
                <rect
                  className="nr"
                  x="-52"
                  y="-17"
                  width="104"
                  height="34"
                  rx="17"
                />
                <rect
                  className="hz-ring"
                  x="-52"
                  y="-17"
                  width="104"
                  height="34"
                  rx="17"
                />
                <circle className="hz-nd" cx="36" r="3" />
                <text x="-6" y="4.5">
                  {L[k]}
                </text>
              </g>
            </g>
          ))}

          {/* Micro Data Tokens */}
          {Array.from({ length: 6 }, (_, i) => (
            <text key={`tk-${i}`} className="hz-tk"></text>
          ))}

          {/* Analysis Sweep Line */}
          <rect className="hz-sw" x="0" y="0" width="400" height="2" />
        </svg>
      </div>
    </div>
  );
}
