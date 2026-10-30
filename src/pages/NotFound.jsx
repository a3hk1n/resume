import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="page-shell">
      <div className="wrap">
        <div className="page-card" style={{ textAlign: "center" }}>
          <span className="tag">404 ERROR</span>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.6rem)",
              margin: "0.6rem 0 1rem",
            }}
          >
            صفحه مورد نظر پیدا نشد
          </h1>
          <p className="sub" style={{ marginInline: "auto" }}>
            مسیر درخواستی وجود ندارد یا جابه‌جا شده است.
          </p>
          <div className="cta" style={{ justifyContent: "center" }}>
            <Link className="btn p" to="/">
              بازگشت به خانه <i>→</i>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
