export type BrandMaterial = {
  id: string;
  name: string;
  description: string;
  history: string;
  bestUses: string[];
  quality: string[];
  blog: string[];
  brands: {
    id: string;
    name: string;
    intro: string;
    history: string;
    products: {
      id: string;
      name: string;
      description: string;
      strengths: string[];
      specs: string[];
      colors: { name: string; code: string; swatch: string }[];
      blog: string[];
    }[];
  }[];
};

type BrandContent = {
  philosophy: string;
  materials: BrandMaterial[];
};

export const brandsContent: Record<"en" | "ar", BrandContent> = {
  en: {
    philosophy:
      "We curate brands that combine hygiene, durability, and expressive aesthetics—each backed by factory training and local warranty.",
    materials: [
      {
        id: "solid-surfaces",
        name: "Solid Surfaces",
        description:
          "Seamless acrylic-based sheets for coved splashbacks, integrated sinks, and sculpted counters.",
        history:
          "Acrylic solid surface evolved to deliver non-porous, repairable solutions for healthcare and hospitality.",
        bestUses: [
          "Operating theaters and ICU stations",
          "Reception desks and coffee bars",
          "Vanities with integrated bowls",
        ],
        quality: [
          "NSF food-safe certification",
          "GREENGUARD low-VOC",
          "Thermoformable without discoloration",
        ],
        blog: ["/blog/solid-surface-vs-quartz"],
        brands: [
          {
            id: "staron",
            name: "Staron",
            intro:
              "Premium Korean solid surface with rich color depth and excellent thermoforming consistency.",
            history:
              "Part of LX Hausys, Staron leads with healthcare approvals and bold aesthetic ranges.",
            products: [
              {
                id: "healthcare",
                name: "Healthcare Counters",
                description:
                  "Coved splashbacks, drop edges, and integrated sinks for infection control.",
                strengths: [
                  "Seamless joints with color-matched adhesives",
                  "Integrated coved backs and drip edges",
                  "Repairable onsite with minimal downtime",
                ],
                specs: [
                  "Sheet thickness: 12 mm",
                  "Fire rating: Class B s1 d0",
                  "Warranty: 10 years",
                ],
                colors: [
                  { name: "Polar White", code: "SP016", swatch: "#f5f5f5" },
                  { name: "Ivory", code: "SI040", swatch: "#f4e8d6" },
                ],
                blog: ["/blog/solid-surface-vs-quartz"],
              },
              {
                id: "hospitality",
                name: "Hospitality Counters",
                description:
                  "Curved reception desks and coffee bars with seamless lighting insets.",
                strengths: [
                  "Thermoformed radii down to 150mm",
                  "Backlit translucents for signatures",
                  "Stain resistant matte finish",
                ],
                specs: [
                  "Sheet thickness: 9 / 12 mm",
                  "Finish: Satin matte",
                  "Warranty: 10 years",
                ],
                colors: [
                  { name: "Sandalwood", code: "SB042", swatch: "#d8c7b0" },
                  { name: "Metallic Silver", code: "SM075", swatch: "#b9bdc2" },
                ],
                blog: ["/blog/hpl-humidity"],
              },
            ],
          },
        ],
      },
      {
        id: "quartz-surfaces",
        name: "Quartz Surfaces",
        description:
          "Engineered stone slabs with bold veining, high impact resistance, and low absorption.",
        history:
          "Quartz combines crushed stone with resins, delivering stone aesthetics with predictable performance.",
        bestUses: [
          "Kitchen and pantry worktops",
          "Banking counters and teller lines",
          "Vanities and wall cladding",
        ],
        quality: [
          "Scratch resistance suitable for high traffic",
          "UV stability on select colors",
          "Precise thickness tolerance for seamless joins",
        ],
        blog: ["/blog/solid-surface-vs-quartz"],
        brands: [
          {
            id: "belenco",
            name: "Belenco",
            intro:
              "Turkish-made quartz with expressive veining and consistent slab calibration.",
            history:
              "Trusted in residential towers and flagship retail counters across the region.",
            products: [
              {
                id: "calacatta",
                name: "Calacatta Series",
                description:
                  "Dramatic marble-inspired veining for luxury kitchens and reception desks.",
                strengths: [
                  "Book-matched slab options",
                  "Low porosity and high impact resistance",
                  "Sharp edge profiling without chipping",
                ],
                specs: ["Thickness: 20 / 30 mm", "Finish: Polished", "Warranty: 15 years"],
                colors: [
                  { name: "Calacatta Gold", code: "CL 901", swatch: "#f2ede7" },
                  { name: "Volakas", code: "CL 915", swatch: "#ebe7e2" },
                ],
                blog: ["/blog/solid-surface-vs-quartz"],
              },
            ],
          },
        ],
      },
      {
        id: "vinyl-flooring",
        name: "Vinyl Flooring",
        description:
          "Acoustic, slip-resistant vinyl systems for healthcare, education, and retail rollouts.",
        history:
          "PVC flooring delivers fast installation with welded seams and hygienic, cushioned comfort.",
        bestUses: [
          "Hospital corridors and patient rooms",
          "Classrooms and labs",
          "Retail aisles with heavy trolleys",
        ],
        quality: [
          "Slip resistance R10",
          "Acoustic reduction up to -18 dB",
          "Quick-weld seams for hygiene",
        ],
        blog: ["/blog/vinyl-fast-track"],
        brands: [
          {
            id: "tarkett",
            name: "Tarkett",
            intro:
              "Global leader in resilient flooring with healthcare approvals and rapid install systems.",
            history:
              "Trusted for acoustic performance and easy maintenance in Egypt’s top hospitals.",
            products: [
              {
                id: "acoustic-rolls",
                name: "Acoustic Rolls",
                description:
                  "Cushioned rolls that reduce noise and fatigue while keeping seams tight.",
                strengths: [
                  "Factory PU coating for easy cleaning",
                  "Fast welding with color-matched rods",
                  "Indentation resistance for hospital beds",
                ],
                specs: ["Thickness: 3.3 mm", "Acoustic: -18 dB", "Slip: R10"],
                colors: [
                  { name: "Sky", code: "V331", swatch: "#c7d7e8" },
                  { name: "Sand", code: "V312", swatch: "#e3d2b8" },
                ],
                blog: ["/blog/vinyl-fast-track"],
              },
            ],
          },
        ],
      },
      {
        id: "hpl-compact",
        name: "HPL Compact",
        description:
          "High-pressure compact laminates for cubicles, lockers, and benches in humid, high-traffic zones.",
        history:
          "Dense kraft core laminates that stay stable near pools, gyms, and coastal projects.",
        bestUses: [
          "Changing rooms and showers",
          "School lockers and benches",
          "Public washrooms",
        ],
        quality: [
          "Anti-bacterial surfaces",
          "Waterproof and impact-proof cores",
          "Color-through edges for clean detailing",
        ],
        blog: ["/blog/hpl-humidity"],
        brands: [
          {
            id: "crownlam",
            name: "CrownLam",
            intro:
              "Robust compact laminates engineered for humidity and high abuse.",
            history:
              "Preferred for coastal resorts, gyms, and education facilities across Egypt.",
            products: [
              {
                id: "cubicles",
                name: "Cubicles & Lockers",
                description:
                  "Partitions and lockers with stainless hardware and anti-corrosion cores.",
                strengths: [
                  "Vandal-resistant hardware kits",
                  "Full-height privacy options",
                  "Quick installation with concealed fixings",
                ],
                specs: [
                  "Thickness: 12 / 18 mm",
                  "Anti-bacterial rating: ISO 22196",
                  "Moisture: 0% swelling",
                ],
                colors: [
                  { name: "Cement Grey", code: "CL401", swatch: "#d0d3d4" },
                  { name: "Walnut", code: "CL205", swatch: "#b38a5b" },
                ],
                blog: ["/blog/hpl-humidity"],
              },
            ],
          },
        ],
      },
      {
        id: "pvc-wall-protection",
        name: "PVC Wall Protection",
        description:
          "Crash rails, corner guards, and sheets that keep corridors pristine under carts and trolleys.",
        history:
          "PVC protection systems evolved to manage impact and hygiene for hospitals and transport hubs.",
        bestUses: [
          "Hospital corridors and nurse stations",
          "Airports and metro stations",
          "Schools and universities",
        ],
        quality: [
          "Impact resistance with continuous backing",
          "Anti-bacterial PVC skins",
          "Color-matched accessories",
        ],
        blog: ["/blog/vinyl-fast-track"],
        brands: [
          {
            id: "aks-profil",
            name: "AKS Profil",
            intro:
              "European wall protection systems tailored for healthcare and transport projects.",
            history:
              "Installed in hospitals and transport hubs with long-term color stability.",
            products: [
              {
                id: "rails",
                name: "Rails & Guards",
                description:
                  "Crash rails and corner guards with hidden fasteners for clean corridors.",
                strengths: [
                  "Continuous aluminum backers",
                  "Anti-bacterial PVC skins",
                  "Radius options for OR suites",
                ],
                specs: [
                  "Thickness: 2.5 mm PVC skins",
                  "Core: Aluminum backing",
                  "Fire: Class B-s2-d0",
                ],
                colors: [
                  { name: "Ice Grey", code: "AK110", swatch: "#dfe5eb" },
                  { name: "Blush", code: "AK210", swatch: "#e7d1c9" },
                ],
                blog: ["/blog/vinyl-fast-track"],
              },
            ],
          },
        ],
      },
    ],
  },
  ar: {
    philosophy:
      "بنختار براندات تجمع النظافة والمتانة والجمال مع تدريب مصنعي وضمان محلي.",
    materials: [
      {
        id: "solid-surfaces",
        name: "أسطح صلبة",
        description:
          "ألواح أكريليك بدون فواصل لظهر متصل، أحواض مدمجة، وكاونترات منحوتة.",
        history:
          "تطورت الأسطح الأكريليك لتقديم حل غير مسامي قابل للإصلاح للمستشفيات والضيافة.",
        bestUses: ["غرف عمليات وعناية", "مكاتب استقبال وبار قهوة", "أحواض وحمامات"],
        quality: [
          "معتمد NSF للأغذية",
          "انبعاثات منخفضة GREENGUARD",
          "تشكيل حر بدون تغيير لون",
        ],
        blog: ["/blog/solid-surface-vs-quartz"],
        brands: [
          {
            id: "staron",
            name: "Staron",
            intro:
              "خام كوري بجودة تشكيل ثابتة وعمق ألوان مميز.",
            history:
              "تابع لـ LX Hausys ومعتمد في الصحة ومجموعات ألوان قوية.",
            products: [
              {
                id: "healthcare",
                name: "كاونترات طبية",
                description:
                  "ظهر مقوس وأحواض مدمجة بدون فواصل للعدوى والتحكم.",
                strengths: [
                  "لحامات ملونة غير مرئية",
                  "ظهر مقوس وحواف تقطر",
                  "قابل للإصلاح في الموقع",
                ],
                specs: ["سمك: 12 مم", "حريق: Class B s1 d0", "ضمان: 10 سنوات"],
                colors: [
                  { name: "Polar White", code: "SP016", swatch: "#f5f5f5" },
                  { name: "Ivory", code: "SI040", swatch: "#f4e8d6" },
                ],
                blog: ["/blog/solid-surface-vs-quartz"],
              },
              {
                id: "hospitality",
                name: "كاونترات ضيافة",
                description:
                  "مكاتب استقبال ومناضد قهوة بمنحنيات وإضاءات مخفية.",
                strengths: [
                  "تشكيل حتى نصف قطر 150 مم",
                  "ألوان شفافة للإضاءة",
                  "سطح ساتان مقاوم للبقع",
                ],
                specs: ["سمك: 9 / 12 مم", "تشطيب: ساتان", "ضمان: 10 سنوات"],
                colors: [
                  { name: "Sandalwood", code: "SB042", swatch: "#d8c7b0" },
                  { name: "Metallic Silver", code: "SM075", swatch: "#b9bdc2" },
                ],
                blog: ["/blog/hpl-humidity"],
              },
            ],
          },
        ],
      },
      {
        id: "quartz-surfaces",
        name: "أسطح كوارتز",
        description:
          "ألواح حجر هندسي بعرق واضح ومقاومة صدمات وامتصاص منخفض.",
        history:
          "بيجمع الكوارتز الحصى مع الريزن ليقدم شكل الحجر مع أداء ثابت.",
        bestUses: ["مطابخ وبانترى", "كاونترات بنوك", "حوائط وأحواض"],
        quality: [
          "مقاومة خدش عالية",
          "ثبات ألوان UV لبعض الألوان",
          "سماحية سمك دقيقة",
        ],
        blog: ["/blog/solid-surface-vs-quartz"],
        brands: [
          {
            id: "belenco",
            name: "Belenco",
            intro:
              "كوارتز تركي بعرق جريء ومعايرة ألواح ثابتة.",
            history:
              "موثوق في الأبراج السكنية ومكاتب الاستقبال الفاخرة.",
            products: [
              {
                id: "calacatta",
                name: "سلسلة Calacatta",
                description:
                  "عرق رخام قوي لمطابخ فاخرة ومكاتب استقبال مميزة.",
                strengths: [
                  "إمكانية Book-match",
                  "امتصاص منخفض وصدمات عالية",
                  "حواف حادة بدون تشرخ",
                ],
                specs: ["سمك: 20 / 30 مم", "تشطيب: لامع", "ضمان: 15 سنة"],
                colors: [
                  { name: "Calacatta Gold", code: "CL 901", swatch: "#f2ede7" },
                  { name: "Volakas", code: "CL 915", swatch: "#ebe7e2" },
                ],
                blog: ["/blog/solid-surface-vs-quartz"],
              },
            ],
          },
        ],
      },
      {
        id: "vinyl-flooring",
        name: "أرضيات فينيل",
        description:
          "أنظمة فينيل عازلة للصوت ومضادة للانزلاق للمستشفيات والمدارس والمتاجر.",
        history:
          "PVC flooring بيقدم تركيب سريع بلحامات ملحومة ونظافة عالية.",
        bestUses: ["ممرات وغرف مرضى", "فصول ومعامل", "ممرات محلات"],
        quality: [
          "مقاومة انزلاق R10",
          "عزل صوتي حتى -18 ديسبل",
          "لحامات سريعة للنظافة",
        ],
        blog: ["/blog/vinyl-fast-track"],
        brands: [
          {
            id: "tarkett",
            name: "Tarkett",
            intro:
              "رائد عالمي في الأرضيات resilient بموافقات طبية وأنظمة تركيب سريعة.",
            history:
              "موثوق في الأداء الصوتي وسهولة التنظيف في أكبر مستشفيات مصر.",
            products: [
              {
                id: "acoustic-rolls",
                name: "لفات عازلة",
                description:
                  "لفات مبطنة تقلل الضوضاء والإجهاد مع لحامات محكمة.",
                strengths: [
                  "طبقة PU تنظيف سهل",
                  "لحام سريع بخيوط مطابقة",
                  "مقاومة انبعاج لأسرة المرضى",
                ],
                specs: ["سمك: 3.3 مم", "عزل: -18 ديسبل", "انزلاق: R10"],
                colors: [
                  { name: "Sky", code: "V331", swatch: "#c7d7e8" },
                  { name: "Sand", code: "V312", swatch: "#e3d2b8" },
                ],
                blog: ["/blog/vinyl-fast-track"],
              },
            ],
          },
        ],
      },
      {
        id: "hpl-compact",
        name: "HPL كومباكت",
        description:
          "ألواح HPL كثيفة للكبائن واللوكرز والبنشات في الرطوبة والحركة العالية.",
        history:
          "قلب كرافت عالي الكثافة يبقى ثابت جنب حمامات السباحة والجيم.",
        bestUses: ["غرف تغيير واستحمام", "لوكرز مدارس", "حمامات عامة"],
        quality: [
          "سطح مضاد للبكتيريا",
          "مقاوم للمياه والصدمات",
          "حواف بلون موحد للتشطيب",
        ],
        blog: ["/blog/hpl-humidity"],
        brands: [
          {
            id: "crownlam",
            name: "CrownLam",
            intro:
              "ألواح كومباكت قوية للرطوبة والحركة.",
            history:
              "مفضلة للمنتجعات الساحلية والجيمات والمدارس في مصر.",
            products: [
              {
                id: "cubicles",
                name: "كبائن ولوكرز",
                description:
                  "Partitions ولوكرز بخامات ستانلس ومقاومة تآكل.",
                strengths: [
                  "إكسسوارات ضد التخريب",
                  "خيارات خصوصية كاملة",
                  "تركيب سريع بتثبيت مخفي",
                ],
                specs: ["سمك: 12 / 18 مم", "ISO 22196", "0% انتفاخ رطوبة"],
                colors: [
                  { name: "Cement Grey", code: "CL401", swatch: "#d0d3d4" },
                  { name: "Walnut", code: "CL205", swatch: "#b38a5b" },
                ],
                blog: ["/blog/hpl-humidity"],
              },
            ],
          },
        ],
      },
      {
        id: "pvc-wall-protection",
        name: "حماية حوائط PVC",
        description:
          "حواجز وزوايا وألواح تحافظ على الممرات من العربيات والتروليات.",
        history:
          "أنظمة حماية تطورت لإدارة الصدمات والنظافة للمستشفيات والمطارات.",
        bestUses: ["ممرات ومستشفيات", "مطارات ومترو", "مدارس وجامعات"],
        quality: [
          "مقاومة صدمات بظهر متصل",
          "PVC مضاد بكتيريا",
          "إكسسوارات بنفس اللون",
        ],
        blog: ["/blog/vinyl-fast-track"],
        brands: [
          {
            id: "aks-profil",
            name: "AKS Profil",
            intro:
              "أنظمة حماية أوروبية موجهة للصحة والنقل.",
            history:
              "مركبة في مستشفيات ومراكز نقل بثبات لون طويل.",
            products: [
              {
                id: "rails",
                name: "حواجز وزوايا",
                description:
                  "Crash rails و corner guards بتثبيت مخفي لممرات نظيفة.",
                strengths: [
                  "دعامات ألومنيوم متصلة",
                  "PVC مضاد بكتيريا",
                  "خيارات زوايا مقوسة",
                ],
                specs: [
                  "سمك الجلد: 2.5 مم",
                  "ظهر: ألومنيوم",
                  "حريق: B-s2-d0",
                ],
                colors: [
                  { name: "Ice Grey", code: "AK110", swatch: "#dfe5eb" },
                  { name: "Blush", code: "AK210", swatch: "#e7d1c9" },
                ],
                blog: ["/blog/vinyl-fast-track"],
              },
            ],
          },
        ],
      },
    ],
  },
};
