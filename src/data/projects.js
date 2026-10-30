export const TODO = "— به‌زودی —";

export const projects = [
  {
    id: 0,
    slug: "ai-laboratory-assistant",
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
    caseStudyDetails: {
      themeVariant: "lab-automation",
      accentLabel: "AI WORKFLOW & DOCUMENT PIPELINE",
      overview: {
        whatItIs:
          "دستیاری هوشمند مبتنی بر گردش‌کار خودکار برای دریافت، پردازش اسناد و تحلیل ساختاریافته اطلاعات آزمایشگاهی.",
        problemAddressed:
          "پراکندگی فایل‌ها و قالب‌های مختلف آزمایشگاهی و زمان‌بر بودن استخراج و تحلیل دستی اطلاعات.",
        intendedAudience:
          "محیط‌ها و فرایندهایی که با اسناد، فایل‌های PDF و داده‌های آزمایشگاهی سر و کار دارند و نیازمند دریافت و تحلیل سریع‌تر از طریق رابط پیام‌رسان هستند.",
        motivation:
          "حذف مراحل دستی دریافت فایل و تبدیل خودکار اسناد آزمایشگاهی به داده‌های ساختاریافته و قابل تحلیل توسط عامل هوش مصنوعی.",
      },
      features: [
        {
          title: "دریافت ورودی از طریق ربات تلگرام",
          description:
            "امکان ارسال مستقیم فایل‌ها و درخواست‌های آزمایشگاهی از طریق رابط Telegram Bot و انتقال آنی با Webhooks.",
          tag: "Telegram Bot / Webhooks",
        },
        {
          title: "ارکستریشن گردش‌کار با n8n",
          description:
            "مدیریت خودکار زنجیره دریافت داده، ارتباط بین سرویس‌ها، فراخوانی APIها و هدایت اسناد در گردش‌کار n8n.",
          tag: "n8n Workflow",
        },
        {
          title: "پردازش اسناد PDF و یکپارچه‌سازی با Google Drive",
          description:
            "ذخیره‌سازی، خوانش و استخراج محتوا از فایل‌های PDF و اسناد آزمایشگاهی متصل به Google Drive.",
          tag: "Google Drive / PDF Processing",
        },
        {
          title: "تحلیل هوشمند با AI Agent و LLM",
          description:
            "پردازش متن و داده‌های استخراج‌شده توسط عامل هوش مصنوعی و مدل زبانی برای تولید خروجی ساختاریافته.",
          tag: "AI Agent / LLM",
        },
      ],
      architectureNodes: [
        {
          step: "01",
          name: "Telegram",
          role: "دریافت پیام و سند آزمایشگاهی از کاربر در ربات تلگرام",
        },
        {
          step: "02",
          name: "Webhook",
          role: "انتقال بلادرنگ رویداد و داده ورودی به موتور اتوماسیون",
        },
        {
          step: "03",
          name: "n8n",
          role: "مدیریت و هماهنگی مراحل گردش‌کار و فراخوانی سرویس‌ها",
        },
        {
          step: "04",
          name: "AI Agent",
          role: "تحلیل هوشمند محتوا با استفاده از مدل زبانی (LLM) و APIها",
        },
        {
          step: "05",
          name: "Google Drive / PDF",
          role: "مدیریت فایل‌ها و پردازش اسناد PDF آزمایشگاهی",
        },
        {
          step: "06",
          name: "Structured Data",
          role: "تولید خروجی ساختاریافته و آماده بهره‌برداری از اطلاعات آزمایشگاهی",
        },
      ],
    },
  },
  {
    id: 1,
    slug: "ai-medication-analysis-system",
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
    caseStudyDetails: {
      themeVariant: "medication-data",
      accentLabel: "DATA PIPELINE & CLAUDE LLM ANALYSIS",
      overview: {
        whatItIs:
          "سیستم اتوماسیون و خط لوله داده مبتنی بر هوش مصنوعی برای پردازش، ذخیره‌سازی و تحلیل ساختاریافته اطلاعات دارویی به همراه تولید گزارش فارسی.",
        problemAddressed:
          "نیاز به پردازش ساختاریافته اطلاعات دارویی و تبدیل داده‌های خام به گزارش‌های تحلیلی قابل فهم به زبان فارسی.",
        intendedAudience:
          "سیستم‌ها و کاربرانی که به تحلیل خودکار، ثبت پایگاه‌داده‌ای و گزارش‌دهی ساختاریافته فارسی از اطلاعات دارویی نیاز دارند.",
        motivation:
          "ایجاد یک جریان یکپارچه از دریافت ورودی و ذخیره‌سازی در پایگاه داده رابطه‌ای تا تحلیل پیشرفته با مدل زبانی و خروجی استاندارد JSON و گزارش فارسی.",
      },
      features: [
        {
          title: "دریافت و پیش‌پردازش خودکار ورودی‌ها",
          description:
            "دریافت اطلاعات دارویی از طریق Webhooks و REST APIs و استانداردسازی داده‌ها در قالب ساختاریافته JSON.",
          tag: "Webhooks / JSON / REST APIs",
        },
        {
          title: "ذخیره‌سازی پایدار در PostgreSQL",
          description:
            "ثبت و مدیریت ساختاریافته داده‌های دارویی در پایگاه داده PostgreSQL روی زیرساخت کانتینری Docker.",
          tag: "PostgreSQL / Docker",
        },
        {
          title: "تحلیل هوشمند با Claude API",
          description:
            "ارسال داده‌های پردازش‌شده به Claude API در بستر گردش‌کار n8n جهت استنتاج و تحلیل دقیق اطلاعات دارویی.",
          tag: "Claude API / n8n",
        },
        {
          title: "تولید گزارش ساختاریافته فارسی",
          description:
            "تبدیل خروجی تحلیلی مدل زبانی به گزارش فارسی خوانا، ساختاریافته و قابل فهم.",
          tag: "Persian Report",
        },
      ],
      architectureNodes: [
        {
          step: "01",
          name: "User Input",
          role: "ثبت و ارسال اطلاعات دارویی اولیه توسط کاربر یا کلاینت",
        },
        {
          step: "02",
          name: "Webhook",
          role: "دریافت درخواست از طریق نقطه پایانی Webhook در n8n",
        },
        {
          step: "03",
          name: "Data Processing",
          role: "اعتبارسنجی، نرمال‌سازی و تبدیل داده‌ها به ساختار JSON",
        },
        {
          step: "04",
          name: "PostgreSQL",
          role: "ذخیره‌سازی و بازیابی اطلاعات در پایگاه داده رابطه‌ای",
        },
        {
          step: "05",
          name: "AI Analysis",
          role: "تحلیل عمیق اطلاعات دارویی توسط Claude API",
        },
        {
          step: "06",
          name: "Persian Report",
          role: "تولید خروجی ساختاریافته و گزارش نهایی به زبان فارسی",
        },
      ],
    },
  },
  {
    id: 2,
    slug: "coffee-shop-e-commerce",
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
    caseStudyDetails: {
      themeVariant: "coffee-ecommerce",
      accentLabel: "FULL-FEATURED WEB COMMERCE APPLICATION",
      overview: {
        whatItIs:
          "اپلیکیشن وب فروشگاهی واکنش‌گرا (Golden Coffee) ساخته‌شده با React که چرخه کامل خرید آنلاین از کشف محصول تا سبد خرید و جریان پرداخت را پوشش می‌دهد.",
        problemAddressed:
          "ارائه یک تجربه کاربری یکپارچه، سریع و بهینه برای جستجو، فیلتر دسته‌بندی و خرید آنلاین محصولات کافی‌شاپ در دستگاه‌های مختلف.",
        intendedAudience:
          "مشتریان و علاقه‌مندان محصولات قهوه و فروشگاه‌های آنلاین که به دنبال رابط کاربری مدرن و فرایند خرید روان هستند.",
        motivation:
          "پیاده‌سازی کامل جریان‌های کلیدی تجارت الکترونیک شامل احراز هویت، علاقه‌مندی‌ها، مدیریت سبد خرید، پرداخت، بهینه‌سازی عملکرد (Performance) و سئو (SEO).",
      },
      features: [
        {
          title: "کشف محصول و فیلتر دسته‌بندی",
          description:
            "مرور کاتالوگ محصولات، فیلتر بر اساس دسته‌بندی و مشاهده صفحه جزئیات کامل هر محصول.",
          tag: "Product Discovery & Filtering",
        },
        {
          title: "سبد خرید و لیست علاقه‌مندی‌ها",
          description:
            "افزودن و مدیریت اقلام در سبد خرید و ذخیره محصولات منتخب در بخش علاقه‌مندی‌ها.",
          tag: "Cart & Wishlist",
        },
        {
          title: "احراز هویت و جریان پرداخت",
          description:
            "سیستم ورود و احراز هویت کاربران همراه با جریان تکمیل سفارش و پرداخت.",
          tag: "Authentication & Payment",
        },
        {
          title: "طراحی واکنش‌گرا، عملکرد و سئو",
          description:
            "ساختار کاملاً واکنش‌گرا با تمرکز بر سرعت بارگذاری بالا و رعایت اصول فنی SEO در React.",
          tag: "Responsive / Performance / SEO",
        },
      ],
      architectureNodes: [
        {
          step: "01",
          name: "Product Discovery",
          role: "نمایش کاتالوگ و فیلتر دسته‌بندی محصولات",
        },
        {
          step: "02",
          name: "Product Details & Wishlist",
          role: "بررسی جزئیات محصول و مدیریت لیست علاقه‌مندی‌ها",
        },
        {
          step: "03",
          name: "Authentication",
          role: "مدیریت نشست و احراز هویت کاربر",
        },
        {
          step: "04",
          name: "Shopping Cart",
          role: "مدیریت اقلام انتخابی و محاسبه سفارش",
        },
        {
          step: "05",
          name: "Payment Flow",
          role: "جریان نهایی‌سازی سفارش و پرداخت",
        },
      ],
    },
  },
  {
    id: 3,
    slug: "digital-commerce-interface",
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
    caseStudyDetails: {
      themeVariant: "digital-commerce-ui",
      accentLabel: "SCALABLE FRONTEND & UI/UX ARCHITECTURE",
      overview: {
        whatItIs:
          "رابط کاربری مدرن فروشگاهی مبتنی بر React و Next.js با تمرکز بر تجربه کاربری (UI/UX)، دسترس‌پذیری (Accessibility) و معماری فرانت‌اند مقیاس‌پذیر.",
        problemAddressed:
          "طراحی و ساخت رابط فروشگاهی استاندارد که علاوه بر زیبایی بصری، در کشف محصول، فیلتر کردن، سبد خرید، سئو و دسترس‌پذیری عملکردی ساختاریافته داشته باشد.",
        intendedAudience:
          "پلتفرم‌های تجارت الکترونیک مدرن که نیازمند فرانت‌اند مقیاس‌پذیر، واکنش‌گرا و منطبق با استانداردهای وب هستند.",
        motivation:
          "ترکیب قابلیت‌های React و Next.js با اصول UI/UX، بهینه‌سازی موتورهای جستجو (SEO) و دسترس‌پذیری برای خلق یک تجربه کاربری تمیز و قابل توسعه.",
      },
      features: [
        {
          title: "معماری مقیاس‌پذیر با React و Next.js",
          description:
            "ساختار کامپوننت‌محور و مقیاس‌پذیر با بهره‌گیری از قابلیت‌های React و فریم‌ورک Next.js.",
          tag: "React / Next.js",
        },
        {
          title: "تجربه کشف محصول، فیلتر و سبد خرید",
          description:
            "رابط کاربری روان برای جستجو، فیلتر محصولات و مدیریت تعاملی سبد خرید.",
          tag: "Product Discovery & Cart",
        },
        {
          title: "تمرکز بر UI/UX و طراحی واکنش‌گرا",
          description:
            "طراحی بصری مدرن و سلسله‌مراتب اطلاعاتی دقیق برای نمایش هماهنگ در تمامی ابعاد صفحه.",
          tag: "UI/UX & Responsive",
        },
        {
          title: "دسترس‌پذیری (Accessibility) و SEO",
          description:
            "رعایت اصول معنایی وب، دسترس‌پذیری رابط کاربری و بهینه‌سازی ساختار صفحه برای موتورهای جستجو.",
          tag: "Accessibility & SEO",
        },
      ],
      architectureNodes: [
        {
          step: "01",
          name: "Next.js & React Layer",
          role: "معماری فرانت‌اند مقیاس‌پذیر و رندر بهینه صفحات",
        },
        {
          step: "02",
          name: "UI/UX & Accessibility",
          role: "طراحی واکنش‌گرا و رعایت استانداردهای دسترس‌پذیری و SEO",
        },
        {
          step: "03",
          name: "Catalog & Filtering",
          role: "رابط کشف سریع محصول و فیلترهای تعاملی",
        },
        {
          step: "04",
          name: "Cart Experience",
          role: "مدیریت وضعیت سبد خرید در سمت کلاینت",
        },
      ],
    },
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

export const skills = {
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

export const flows = [
  [
    "Customer Message",
    "AI Agent",
    "Data Analysis",
    "Database / CRM",
    "Automated Response",
  ],
  ["PDF", "Extraction", "AI Processing", "Structured Data", "Report"],
];

export const valueCards = [
  {
    title: "کاهش کار تکراری",
    description:
      "فرایندهای دستی تکراری خودکار می‌شوند تا تیم وقت بیشتری برای کارهای ارزشمندتر داشته باشد.",
  },
  {
    title: "عملیات سریع‌تر",
    description:
      "با اتوماسیون و هوش مصنوعی، مراحل دستی غیرضروری حذف و سرعت گردش‌کار بالاتر می‌رود.",
  },
  {
    title: "اتصال ابزارها",
    description:
      "API، پایگاه داده، پلتفرم‌های ارتباطی و ابزارهای کسب‌وکار در یک گردش‌کار یکپارچه به هم وصل می‌شوند.",
  },
  {
    title: "داده خام به اطلاعات مفید",
    description:
      "اطلاعات خام با اتوماسیون و هوش مصنوعی پردازش شده و به خروجی ساختاریافته و کاربردی تبدیل می‌شود.",
  },
];

export const processSteps = [
  {
    number: "1",
    title: "درک",
    description:
      "گردش‌کار فعلی را بررسی می‌کنم و بخش‌های تکراری، ناکارآمد یا مستعد خطا را پیدا می‌کنم.",
  },
  {
    number: "2",
    title: "طراحی",
    description:
      "فرصت‌های اتوماسیون، ادغام هوش مصنوعی، اتصال سیستم‌ها و بهینه‌سازی گردش‌کار را مشخص می‌کنم.",
  },
  {
    number: "3",
    title: "ساخت",
    description:
      "راه‌حل را با هوش مصنوعی، اتوماسیون، API، پایگاه داده و توسعه نرم‌افزار پیاده می‌کنم.",
  },
];

export const journeyTimeline = [
  {
    period: "2022–2024",
    role: "توسعه‌دهنده فرانت‌اند",
    stack: "React · Next.js · TypeScript · UI/UX · Performance · SEO",
  },
  {
    period: "2024–2025",
    role: "توسعه‌دهنده بک‌اند",
    stack: "Node.js · JavaScript · APIs · Dashboards · Vue.js",
  },
  {
    period: "2025–2026",
    role: "مهندسی هوش مصنوعی",
    stack: "Python · TensorFlow · PyTorch · AI Applications",
  },
];

export const educationInfo = {
  label: "تحصیلات:",
  text: "کارشناسی مهندسی کامپیوتر، دانشگاه سیستان و بلوچستان، زاهدان",
};

export const contactInfo = {
  email: "amir.ash.kiani83@gmail.com",
  phoneDisplay: "+98 937 050 9408",
  phoneCopy: "+989370509408",
  socials: [
    { label: "GitHub", href: "https://github.com/a3hk1n" },
    { label: "LinkedIn", href: "#" },
    { label: "Telegram", href: "https://t.me/a3hk1n" },
    { label: "Instagram", href: "https://instagram.com/ia3hkn" },
    { label: "Website", href: "#" },
  ],
};
