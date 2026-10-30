import { useEffect, useRef, useState } from "react";

const VP_RATES = [1, 1.25, 1.5, 2, 0.75];

const vpFmt = (s) => {
  if (!isFinite(s)) return "0:00";
  return (
    Math.floor(s / 60) + ":" + String(Math.floor(s % 60)).padStart(2, "0")
  );
};

export const resolveAssetPath = (path) => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("/")) {
    return path;
  }
  return `/${path}`;
};

export default function VideoPlayer({ project }) {
  const vpRef = useRef(null);
  const videoRef = useRef(null);
  const seekRef = useRef(null);
  const volRef = useRef(null);
  const hideTimerRef = useRef(0);

  const [playerState, setPlayerState] = useState("idle"); // idle | playing | paused | ended | error
  const [controlsHidden, setControlsHidden] = useState(false);
  const [timeText, setTimeText] = useState("0:00 / 0:00");
  const [seekValue, setSeekValue] = useState(0);
  const [volValue, setVolValue] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [rateIdx, setRateIdx] = useState(0);

  const showCtl = () => {
    setControlsHidden(false);
    clearTimeout(hideTimerRef.current);
    const v = videoRef.current;
    if (v && !v.paused) {
      hideTimerRef.current = setTimeout(() => setControlsHidden(true), 2500);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(hideTimerRef.current);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    setPlayerState("idle");
    setControlsHidden(false);
    setSeekValue(0);
    setTimeText("0:00 / 0:00");
    if (v.error || v.networkState === 3) {
      setPlayerState("error");
    }
  }, [project]);

  const updateTick = () => {
    const v = videoRef.current;
    if (!v) return;
    setTimeText(`${vpFmt(v.currentTime)} / ${vpFmt(v.duration)}`);
    if (v.duration) {
      const sv = (v.currentTime / v.duration) * 1000;
      setSeekValue(sv);
      if (seekRef.current) {
        seekRef.current.style.setProperty("--p", `${sv / 10}%`);
      }
    }
  };

  const updateSound = () => {
    const v = videoRef.current;
    if (!v) return;
    const m = v.muted || v.volume === 0;
    setIsMuted(m);
    const val = m ? 0 : v.volume;
    setVolValue(val);
    if (volRef.current) {
      volRef.current.style.setProperty("--p", `${val * 100}%`);
    }
  };

  const playPause = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused || v.ended) {
      v.play().catch(() => setPlayerState("error"));
    } else {
      v.pause();
    }
  };

  const toggle = () => {
    if (controlsHidden) {
      showCtl();
      return;
    }
    playPause();
  };

  const skip = (d) => {
    const v = videoRef.current;
    if (v && v.duration) {
      v.currentTime = Math.max(0, Math.min(v.duration, v.currentTime + d));
    }
  };

  const handleSeekInput = (e) => {
    const val = Number(e.target.value);
    setSeekValue(val);
    const v = videoRef.current;
    if (v && v.duration) {
      v.currentTime = (val / 1000) * v.duration;
    }
    if (seekRef.current) {
      seekRef.current.style.setProperty("--p", `${val / 10}%`);
    }
  };

  const handleVolInput = (e) => {
    const val = Number(e.target.value);
    const v = videoRef.current;
    if (!v) return;
    v.volume = val;
    v.muted = val === 0;
  };

  const handleMuteToggle = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted && v.volume === 0) {
      v.volume = 0.5;
    }
  };

  const handleRateCycle = () => {
    const nextIdx = (rateIdx + 1) % VP_RATES.length;
    setRateIdx(nextIdx);
    if (videoRef.current) {
      videoRef.current.playbackRate = VP_RATES[nextIdx];
    }
  };

  const handleFullscreen = () => {
    const vp = vpRef.current;
    const v = videoRef.current;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (vp && vp.requestFullscreen) {
      vp.requestFullscreen();
    } else if (v && v.webkitEnterFullscreen) {
      v.webkitEnterFullscreen();
    }
  };

  const handleKeyDown = (e) => {
    if (e.target !== vpRef.current) return;
    const k = e.key.toLowerCase();
    const v = videoRef.current;
    if (k === " " || k === "k") {
      e.preventDefault();
      playPause();
    } else if (k === "arrowright") {
      e.preventDefault();
      skip(5);
    } else if (k === "arrowleft") {
      e.preventDefault();
      skip(-5);
    } else if (k === "arrowup" && v) {
      e.preventDefault();
      v.volume = Math.min(1, v.volume + 0.1);
    } else if (k === "arrowdown" && v) {
      e.preventDefault();
      v.volume = Math.max(0, v.volume - 0.1);
    } else if (k === "m") {
      handleMuteToggle();
    } else if (k === "f") {
      handleFullscreen();
    }
  };

  const coverLabel =
    {
      ended: "پخش مجدد ویدیو",
      error: "ویدیو در دسترس نیست",
    }[playerState] || "پخش ویدیو";

  const coverMsg =
    {
      ended: "پخش مجدد",
      error: "ویدیو به‌زودی اضافه می‌شود",
    }[playerState] || "";

  const videoSrc = project.video
    ? resolveAssetPath(project.video)
    : "/YOUR_VIDEO_PATH_HERE.mp4";
  const posterSrc =
    project.poster || project.img
      ? resolveAssetPath(project.poster || project.img)
      : "/YOUR_POSTER_IMAGE_HERE.jpg";

  return (
    <section className="vs" aria-label="نمایش پروژه">
      <h4 className="vs-t">ببینید در عمل چطور کار می‌کند</h4>
      <p className="vs-s">مرور کوتاهی از پروژه و قابلیت‌های اصلی آن.</p>
      <div
        className={`vp${controlsHidden ? " hide" : ""}`}
        ref={vpRef}
        data-state={playerState}
        tabIndex={0}
        role="group"
        aria-label="پخش‌کننده ویدیو. فاصله: پخش و توقف، جهت‌ها: جلو و عقب، M: صدا، F: تمام‌صفحه"
        onPointerMove={showCtl}
        onFocus={showCtl}
        onKeyDown={handleKeyDown}
      >
        <video
          className="vp-v"
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          preload="metadata"
          playsInline
          onClick={toggle}
          onPlay={() => {
            setPlayerState("playing");
            showCtl();
          }}
          onPause={() => {
            if (videoRef.current && !videoRef.current.ended) {
              setPlayerState("paused");
            }
            clearTimeout(hideTimerRef.current);
            setControlsHidden(false);
          }}
          onEnded={() => {
            setPlayerState("ended");
            clearTimeout(hideTimerRef.current);
            setControlsHidden(false);
          }}
          onError={() => {
            setPlayerState("error");
            clearTimeout(hideTimerRef.current);
            setControlsHidden(false);
          }}
          onTimeUpdate={updateTick}
          onLoadedMetadata={updateTick}
          onDurationChange={updateTick}
          onVolumeChange={updateSound}
        ></video>

        <button
          className="vp-cover"
          type="button"
          aria-label={coverLabel}
          onClick={() => {
            setControlsHidden(false);
            toggle();
          }}
        >
          <span className="vp-play">
            {playerState === "ended" ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 5V2L7 6l5 4V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </span>
          <span className="vp-msg">{coverMsg}</span>
        </button>

        <div className="vp-ctl">
          <input
            className="vp-seek"
            ref={seekRef}
            type="range"
            min="0"
            max="1000"
            step="1"
            value={seekValue}
            onChange={handleSeekInput}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                e.preventDefault();
                skip(e.key === "ArrowRight" ? 5 : -5);
              }
            }}
            aria-label="نوار پیشرفت ویدیو"
          />
          <div className="vp-row">
            <button
              className="vp-b vp-pp"
              type="button"
              aria-label={playerState === "playing" ? "توقف" : "پخش"}
              onClick={playPause}
            >
              {playerState === "playing" ? (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 5h4v14H7zm6 0h4v14h-4z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            <span className="vp-t" aria-live="off">
              {timeText}
            </span>
            <span className="vp-sp"></span>
            <button
              className="vp-b vp-mu"
              type="button"
              aria-label={isMuted ? "وصل صدا" : "قطع صدا"}
              onClick={handleMuteToggle}
            >
              {isMuted ? (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 9v6h4l5 4V5L8 9H4z" />
                  <path
                    d="M16 9.5l5 5m0-5l-5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 9v6h4l5 4V5L8 9H4zm12.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4z" />
                </svg>
              )}
            </button>
            <input
              className="vp-vol"
              ref={volRef}
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volValue}
              onChange={handleVolInput}
              style={{ "--p": `${volValue * 100}%` }}
              aria-label="میزان صدا"
            />
            <button
              className="vp-b vp-rate"
              type="button"
              aria-label="سرعت پخش"
              onClick={handleRateCycle}
            >
              {VP_RATES[rateIdx]}×
            </button>
            <button
              className="vp-b vp-fs"
              type="button"
              aria-label="تمام‌صفحه"
              onClick={handleFullscreen}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 9V4h5v2H6v3H4zm14-3h-3V4h5v5h-2V6zM6 18h3v2H4v-5h2v3zm12-3h2v5h-5v-2h3v-3z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {project.pdf ? (
        <a
          className="btn vs-doc"
          href={resolveAssetPath(project.pdf)}
          target="_blank"
          rel="noopener noreferrer"
        >
          مشاهده مستندات
        </a>
      ) : null}
    </section>
  );
}
