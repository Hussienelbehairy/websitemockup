export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  tags: string[];
  body: string;
};

export const blogContent = {
  en: {
    hero: {
      title: "Insights, specs, and project recaps.",
      description:
        "Filter by sector, material, or application. All content is ready to be fed from the CMS.",
    },
    categories: ["Materials", "Healthcare", "Residential", "Banking", "Commercial"],
    posts: [
      {
        slug: "solid-surface-vs-quartz",
        title: "Solid Surface vs Quartz in Healthcare",
        summary:
          "When to choose seamless acrylic vs engineered stone for infection control.",
        date: "2024-09-12",
        category: "Materials",
        tags: ["Solid Surface", "Quartz", "Healthcare"],
        body:
          "Solid surfaces excel in seamless hygiene-critical zones, while quartz dominates high-impact counters.",
      },
      {
        slug: "vinyl-fast-track",
        title: "Vinyl Flooring for Fast Track Fit-Outs",
        summary:
          "Speed, weld quality, and acoustic control for night-shift rollouts.",
        date: "2024-08-01",
        category: "Commercial",
        tags: ["Vinyl", "Acoustic", "Installation"],
        body:
          "Tarkett’s acoustic rolls deliver -18 dB reduction with rapid weld seams and PU coatings.",
      },
      {
        slug: "hpl-humidity",
        title: "Designing Cubicles That Survive Humidity",
        summary:
          "Details that keep coastal and gym washrooms looking new.",
        date: "2024-06-18",
        category: "Commercial",
        tags: ["HPL", "Washrooms", "Humidity"],
        body:
          "CrownLam compact panels with stainless hardware resist swelling and vandalism.",
      },
    ] as BlogPost[],
  },
  ar: {
    hero: {
      title: "معرفة تقنية وحكايات مشاريع.",
      description:
        "فلتر حسب القطاع أو الخامة أو التطبيق. كل المحتوى جاهز يتسحب من الـ CMS.",
    },
    categories: ["خامات", "صحة", "سكني", "بنوك", "تجاري"],
    posts: [
      {
        slug: "solid-surface-vs-quartz",
        title: "الأسطح الصلبة ولا الكوارتز في الصحة؟",
        summary:
          "امتى نختار الأكريليك بدون فواصل مقابل الكوارتز للتحكم في العدوى.",
        date: "2024-09-12",
        category: "خامات",
        tags: ["أسطح صلبة", "كوارتز", "صحة"],
        body:
          "الأسطح الصلبة بتتفوق في مناطق التعقيم، والكوارتز للكاونترات عالية الصدمات.",
      },
      {
        slug: "vinyl-fast-track",
        title: "فينيل للتركيبات السريعة",
        summary:
          "السرعة وجودة اللحام والتحكم الصوتي في ورديات الليل.",
        date: "2024-08-01",
        category: "تجاري",
        tags: ["فينيل", "صوت", "تركيب"],
        body:
          "لفات Tarkett العازلة بتقدم -18 ديسبل وتقفيل PU سهل التنظيف.",
      },
      {
        slug: "hpl-humidity",
        title: "تصميم كبائن تقاوم الرطوبة",
        summary:
          "تفاصيل تحافظ على الحمامات الساحلية والجيمات جديدة.",
        date: "2024-06-18",
        category: "تجاري",
        tags: ["HPL", "حمامات", "رطوبة"],
        body:
          "ألواح CrownLam مع إكسسوارات ستانلس بتقاوم الانتفاخ والتخريب.",
      },
    ] as BlogPost[],
  },
};
