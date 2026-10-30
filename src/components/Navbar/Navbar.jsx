import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { href: "#home", label: "خانه" },
  { href: "#about", label: "درباره" },
  { href: "#expertise", label: "تخصص" },
  { href: "#projects", label: "پروژه‌ها" },
  { href: "#journey", label: "مسیر" },
  { href: "#contact", label: "تماس" },
];

export default function Navbar({ onToast }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const logoClickCount = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) {
        document.documentElement.dataset.theme = saved;
      } else if (!document.documentElement.dataset.theme) {
        document.documentElement.dataset.theme = "dark";
      }
    } catch {
      document.documentElement.dataset.theme = "dark";
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // ignore storage errors
    }
  };

  const handleLogoClick = (e) => {
    logoClickCount.current += 1;
    if (logoClickCount.current === 5) {
      if (onToast) {
        onToast("Automation is everywhere. You just need to see it.");
      }
      logoClickCount.current = 0;
    }
    if (location.pathname !== "/") {
      e.preventDefault();
      navigate("/");
    }
  };

  const handleNavClick = (e, hash) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      e.preventDefault();
      navigate("/" + hash);
    }
  };

  return (
    <header id="hd" className={scrolled ? "s" : ""}>
      <div className="wrap">
        <nav aria-label="ناوبری اصلی">
          <a
            className="logo"
            href="#home"
            id="logo"
            onClick={handleLogoClick}
          >
            Ashkan Kiani
          </a>
          <div className={`links${menuOpen ? " o" : ""}`} id="links">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              className="ib"
              id="theme"
              aria-label="تغییر پوسته"
              onClick={toggleTheme}
            >
              <i className="fa-solid fa-circle-half-stroke"></i>
            </button>
            <button
              className="ib"
              id="burger"
              aria-label="منو"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? "✕" : "≡"}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
