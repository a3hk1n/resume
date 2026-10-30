export default function About() {
  return (
    <section id="about">
      <div className="wrap rv about">
        <figure className="avatar">
          <img
            src="assets/profile.jpg"
            alt="تصویر اشکان کیانی"
            width="400"
            height="500"
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div className="about-text">
          <h2>چه کاری انجام می‌دهم</h2>

          <p className="sub">
            در زمینه توسعه نرم‌افزار، هوش مصنوعی و اتوماسیون فعالیت می‌کنم و
            روی ساخت سیستم‌هایی تمرکز دارم که فرایندهای واقعی را ساده‌تر،
            سریع‌تر و دقیق‌تر می‌کنند.
          </p>

          <p className="big">
            از ایده تا پیاده‌سازی؛ تمرکز بر ساخت راهکارهای کاربردی با استفاده
            از فناوری‌های مدرن.
          </p>
        </div>
      </div>
    </section>
  );
}
