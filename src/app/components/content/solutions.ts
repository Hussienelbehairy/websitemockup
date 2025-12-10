export type Sector = {
  id: string;
  name: string;
  description: string;
  relevance: string[];
  applications: { name: string; products: string[] }[];
};

export type Space = {
  id: string;
  name: string;
  description: string;
  applications: { name: string; products: string[] }[];
};

export type Application = {
  id: string;
  name: string;
  history: string;
  practice: string[];
  specs: string[];
  blog: string[];
};

type SolutionsContent = {
  hero: { title: string; description: string };
  differentiators: string[];
  sectors: Sector[];
  spaces: Space[];
  applications: Application[];
};

export const solutionsContent: Record<"en" | "ar", SolutionsContent> = {
  en: {
    hero: {
      title: "Solutions tailored to each sector, space, and application.",
      description:
        "Healthcare compliance, residential warmth, banking durability, and commercial speed—each mapped to the right materials.",
    },
    differentiators: [
      "Compliance notes baked into drawings and handover packs.",
      "Install teams trained on infection control and hospitality detailing.",
      "Email-based CTAs route to the right owner for fast response.",
    ],
    sectors: [
      {
        id: "healthcare",
        name: "Healthcare",
        description:
          "Infection control finishes with quick night-shift installation.",
        relevance: [
          "Non-porous solid surfaces for nurse stations and labs.",
          "PVC wall protection for carts and stretchers.",
          "Acoustic, anti-slip vinyl flooring.",
        ],
        applications: [
          {
            name: "ICU & OR suites",
            products: ["Staron healthcare counters", "AKS Profil rails"],
          },
          {
            name: "Public corridors",
            products: ["Tarkett acoustic rolls", "AKS corner guards"],
          },
        ],
      },
      {
        id: "residential",
        name: "Residential",
        description: "Premium kitchens, vanities, and feature walls.",
        relevance: [
          "Quartz veining for luxury tops.",
          "Solid surface sinks with easy repairs.",
          "Low-VOC adhesives and sealants.",
        ],
        applications: [
          {
            name: "Kitchens",
            products: ["Belenco Calacatta tops", "Staron backsplashes"],
          },
          {
            name: "Living areas",
            products: ["Staron media walls", "CrownLam cladding"],
          },
        ],
      },
      {
        id: "banking",
        name: "Banking",
        description: "Anti-scratch counters and secure, tidy finishes.",
        relevance: [
          "Quartz counters with cable management.",
          "Compact HPL storage and lockers.",
          "PVC guards to protect queue lines.",
        ],
        applications: [
          {
            name: "Branches",
            products: ["Belenco teller counters", "AKS wall protection"],
          },
          {
            name: "Back office",
            products: ["CrownLam lockers", "Staron worktops"],
          },
        ],
      },
      {
        id: "commercial",
        name: "Commercial",
        description: "Retail and hospitality spaces that install fast.",
        relevance: [
          "Statement solid surface desks.",
          "Compact HPL washrooms that last.",
          "Vinyl that handles heavy trolleys.",
        ],
        applications: [
          {
            name: "Retail",
            products: ["Staron counters", "Tarkett tiles"],
          },
          {
            name: "Hospitality",
            products: ["CrownLam cubicles", "Belenco bars"],
          },
        ],
      },
    ],
    spaces: [
      {
        id: "operating-rooms",
        name: "Operating rooms",
        description: "Seamless counters, coved splashbacks, and PVC guards.",
        applications: [
          {
            name: "Sinks & scrub areas",
            products: ["Staron healthcare counters", "AKS Profil guards"],
          },
          {
            name: "Control desks",
            products: ["Staron consoles", "Tarkett static-safe flooring"],
          },
        ],
      },
      {
        id: "lobbies",
        name: "Lobbies & receptions",
        description: "Bold statements with quick install and clean detailing.",
        applications: [
          { name: "Reception desks", products: ["Staron curves", "Belenco slabs"] },
          { name: "Feature walls", products: ["Staron cladding", "CrownLam panels"] },
        ],
      },
      {
        id: "washrooms",
        name: "Washrooms & changing",
        description: "Moisture-proof cubicles and easy-clean vanity tops.",
        applications: [
          { name: "Cubicles", products: ["CrownLam compact", "Stainless hardware"] },
          { name: "Vanities", products: ["Staron vanities", "Belenco tops"] },
        ],
      },
    ],
    applications: [
      {
        id: "integrated-sinks",
        name: "Integrated sinks",
        history: "Solid surface sinks removed seams and bacterial traps.",
        practice: [
          "Factory-bonded bowls with thermal expansion control.",
          "Coved backsplashes for easy cleaning.",
          "Template verification before fabrication.",
        ],
        specs: [
          "Bonding: Color-matched adhesive",
          "Drainage: Sloped base with overflow",
          "Warranty: 5-10 years depending on brand",
        ],
        blog: ["/blog/solid-surface-vs-quartz"],
      },
      {
        id: "protective-rails",
        name: "Protective rails",
        history: "PVC rails evolved to reduce damage from carts and trolleys.",
        practice: [
          "Continuous aluminum backers with concealed screws.",
          "End caps and returns for clean lines.",
          "Height set per cart impact analysis.",
        ],
        specs: [
          "Skin thickness: 2.5 mm PVC",
          "Backer: Aluminum",
          "Fire: Class B-s2-d0",
        ],
        blog: ["/blog/vinyl-fast-track"],
      },
      {
        id: "vinyl-welding",
        name: "Vinyl welding",
        history: "Heat welding keeps floors monolithic and hygienic.",
        practice: [
          "Weld rods color-matched to rolls.",
          "Coved skirting for mop-friendly edges.",
          "Moisture testing before install.",
        ],
        specs: [
          "Slip: R10",
          "Acoustic: -18 dB",
          "VOC: TVOC < 10 µg/m³",
        ],
        blog: ["/blog/vinyl-fast-track"],
      },
    ],
  },
  ar: {
    hero: {
      title: "حلول مخصوصة لكل قطاع ومساحة وتطبيق.",
      description:
        "التوافق الصحي، دفء السكن، متانة البنوك، وسرعة التجاري - كله مربوط بالخامة الصح.",
    },
    differentiators: [
      "ملاحظات الالتزام داخل الرسومات وحزم التسليم.",
      "فرق تركيب مدربة على التحكم في العدوى وتفاصيل الضيافة.",
      "الطلبات بالإيميل بتوصل لصاحبها أسرع.",
    ],
    sectors: [
      {
        id: "healthcare",
        name: "صحة",
        description: "تشطيبات مكافحة عدوى وتركيب ليلي سريع.",
        relevance: [
          "أسطح صلبة غير مسامية لمحطات التمريض والمعامل.",
          "حمايات حوائط PVC للعربيات والنقالات.",
          "أرضيات فينيل عازلة ومضادة للانزلاق.",
        ],
        applications: [
          {
            name: "غرف عناية وعمليات",
            products: ["Staron طبية", "AKS حمايات"],
          },
          {
            name: "ممرات عامة",
            products: ["لف Tarkett عازل", "AKS زوايا"],
          },
        ],
      },
      {
        id: "residential",
        name: "سكني",
        description: "مطابخ وحمامات وجدران مميزة.",
        relevance: [
          "كوارتز بعرق فاخر",
          "أحواض أكريليك قابلة للإصلاح",
          "مواد لاصقة منخفضة الانبعاثات",
        ],
        applications: [
          { name: "مطابخ", products: ["Belenco Calacatta", "Staron"] },
          { name: "مساحات معيشة", products: ["حوائط Staron", "كسوة CrownLam"] },
        ],
      },
      {
        id: "banking",
        name: "بنوك",
        description: "كاونترات مقاومة للخدش وتشطيبات منظمة.",
        relevance: [
          "كوارتز بإدارة كابلات",
          "تخزين HPL كومباكت",
          "حمايات PVC للطوابير",
        ],
        applications: [
          { name: "الفروع", products: ["Belenco", "AKS"] },
          { name: "المكاتب الخلفية", products: ["CrownLam", "Staron"] },
        ],
      },
      {
        id: "commercial",
        name: "تجاري",
        description: "تجزئة وضيافة بتركيب سريع.",
        relevance: [
          "مكاتب استقبال مميزة",
          "حمامات HPL متينة",
          "فينيل يتحمل الحركة",
        ],
        applications: [
          { name: "تجزئة", products: ["Staron", "Tarkett"] },
          { name: "ضيافة", products: ["CrownLam", "Belenco"] },
        ],
      },
    ],
    spaces: [
      {
        id: "operating-rooms",
        name: "غرف عمليات",
        description: "كاونترات بدون فواصل وحمايات PVC.",
        applications: [
          { name: "أحواض وغسيل", products: ["Staron طبية", "AKS"] },
          { name: "مكاتب تحكم", products: ["Staron", "Tarkett مضاد كهرباء"] },
        ],
      },
      {
        id: "lobbies",
        name: "الاستقبال",
        description: "تصاميم جريئة وتركيب سريع.",
        applications: [
          { name: "مكاتب استقبال", products: ["Staron curves", "Belenco"] },
          { name: "حوائط مميزة", products: ["كسوة Staron", "CrownLam"] },
        ],
      },
      {
        id: "washrooms",
        name: "حمامات وتغيير",
        description: "كبائن مقاومة للرطوبة وأحواض سهلة التنظيف.",
        applications: [
          { name: "كبائن", products: ["CrownLam", "اكسسوارات ستانلس"] },
          { name: "أحواض", products: ["Staron", "Belenco"] },
        ],
      },
    ],
    applications: [
      {
        id: "integrated-sinks",
        name: "أحواض مدمجة",
        history: "أحواض الأكريليك ألغت الفواصل ومصادر البكتيريا.",
        practice: [
          "تجميع في المصنع مع تحكم تمدد حراري",
          "ظهر مقوس للتنظيف السهل",
          "مراجعة قوالب قبل التصنيع",
        ],
        specs: [
          "لصق بلون مطابق",
          "تصريف مائل مع Overflow",
          "ضمان 5-10 سنوات حسب البراند",
        ],
        blog: ["/blog/solid-surface-vs-quartz"],
      },
      {
        id: "protective-rails",
        name: "حمايات الحوائط",
        history: "أنظمة PVC اتطورت لتقليل الصدمات من العربيات.",
        practice: [
          "دعامات ألومنيوم متصلة بتثبيت مخفي",
          "نهايات وكابات لخط نظيف",
          "ارتفاع حسب تحليل حركة العربيات",
        ],
        specs: [
          "سماكة الجلد: 2.5 مم",
          "ظهر: ألومنيوم",
          "حريق: B-s2-d0",
        ],
        blog: ["/blog/vinyl-fast-track"],
      },
      {
        id: "vinyl-welding",
        name: "لحام الفينيل",
        history: "لحام حراري يحافظ على الأرضية كتلة واحدة للنظافة.",
        practice: [
          "خيوط لحام مطابقة للون",
          "تنعيم الحواف لمقاسات سهلة التنظيف",
          "اختبار رطوبة قبل التركيب",
        ],
        specs: ["انزلاق: R10", "عزل: -18 ديسبل", "VOC: أقل من 10 ميكروجم"],
        blog: ["/blog/vinyl-fast-track"],
      },
    ],
  },
};
