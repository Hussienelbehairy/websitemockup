export type Locale = "en" | "ar";

export const cmsUsers = [
  { role: "Operations", email: "ops@staron-egypt.com" },
  { role: "Sales", email: "sales@staron-egypt.com" },
  { role: "Projects", email: "projects@staron-egypt.com" },
];

export const navigationContent = {
  en: {
    logo: "Staron Egypt",
    tagline: "Supply & Apply Contractor",
    searchPlaceholder:
      "Search materials, brands, products, sectors, spaces, articles...",
    topbar: {
      contacts: [
        { icon: "location", label: "Katameya, New Cairo", href: "#" },
        { icon: "phone", label: "+20 2 2750 6000", href: "tel:+20227506000" },
        { icon: "email", label: "hello@staron-egypt.com", href: "mailto:hello@staron-egypt.com" },
      ],
      socials: [
        { label: "Facebook", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "YouTube", href: "#" },
        { label: "WhatsApp", href: "#" },
      ],
    },
    nav: [
      { label: "About", href: "/about" },
      { label: "Brands", href: "/brands", type: "brands" },
      { label: "Solutions", href: "/solutions", type: "solutions" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    ctas: [
      { label: "Schedule Appointment", action: "appointments" },
      { label: "Get Quotation", action: "quotations" },
      { label: "View Catalog", href: "/catalog" },
      { label: "Online Store", href: "/store" },
    ],
    brandMenu: [
      {
        product: "Solid Surfaces",
        brands: [
          {
            name: "Staron",
            href: "/brands/solid-surfaces/staron",
            description:
              "Seamless thermoformable surfaces for clinical-grade hygiene and sculpted hospitality counters.",
            images: [
              "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?auto=format&fit=crop&w=800&q=80",
            ],
          },
        ],
      },
      {
        product: "Quartz Surfaces",
        brands: [
          {
            name: "Belenco",
            href: "/brands/quartz-surfaces/belenco",
            description:
              "Durable quartz slabs with bold veining for banks, residences, and high-traffic receptions.",
            images: [
              "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
            ],
          },
        ],
      },
      {
        product: "Vinyl Flooring",
        brands: [
          {
            name: "Tarkett",
            href: "/brands/vinyl-flooring/tarkett",
            description:
              "Acoustic, slip-resistant vinyl flooring for healthcare, education, and retail rollouts.",
            images: [
              "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=800&q=80",
            ],
          },
        ],
      },
      {
        product: "HPL Compact",
        brands: [
          {
            name: "CrownLam",
            href: "/brands/hpl-compact/crownlam",
            description:
              "Impact-proof cubicles and lockers engineered for busy facilities and seaside humidity.",
            images: [
              "https://images.unsplash.com/photo-1484156818044-c040038b0710?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
            ],
          },
        ],
      },
      {
        product: "PVC Wall Protection",
        brands: [
          {
            name: "AKS Profil",
            href: "/brands/pvc-wall-protection/aks-profil",
            description:
              "Wall guards, corner protectors, and sheets tailored for hospitals and transport hubs.",
            images: [
              "https://images.unsplash.com/photo-1484156818044-c040038b0710?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=800&q=80",
            ],
          },
        ],
      },
    ],
    solutionsMenu: [
      {
        sector: "Healthcare",
        spaces: [
          {
            name: "Operating & ICU Suites",
            applications: [
              "Seamless infection control counters",
              "Antimicrobial wall protection",
              "Non-slip acoustic flooring",
            ],
          },
          {
            name: "Public Zones",
            applications: [
              "Wayfinding counters",
              "Crash rails and corner guards",
              "Easy-clean waiting lounges",
            ],
          },
        ],
      },
      {
        sector: "Residential",
        spaces: [
          {
            name: "Kitchens & Vanities",
            applications: [
              "Quartz worktops",
              "Integrated solid-surface sinks",
              "Backsplash protection",
            ],
          },
          {
            name: "Living Spaces",
            applications: [
              "Feature walls",
              "Low-VOC flooring",
              "Custom media units",
            ],
          },
        ],
      },
      {
        sector: "Banking",
        spaces: [
          {
            name: "Branches",
            applications: [
              "Anti-scratch counters",
              "Queue management cladding",
              "Security-friendly finishes",
            ],
          },
          {
            name: "Back of House",
            applications: [
              "Durable flooring",
              "Acoustic walling",
              "Smart storage with HPL",
            ],
          },
        ],
      },
      {
        sector: "Commercial",
        spaces: [
          {
            name: "Retail & Hospitality",
            applications: [
              "Statement reception desks",
              "HPL compact washrooms",
              "High-wear flooring",
            ],
          },
          {
            name: "Workspaces",
            applications: [
              "Breakout counters",
              "Writable walls",
              "Cable-managed surfaces",
            ],
          },
        ],
      },
    ],
  },
  ar: {
    logo: "ستارون مصر",
    tagline: "مقاول توريد وتركيب متكامل",
    searchPlaceholder:
      "دور على الخامات، البراندات، المنتجات، القطاعات، المساحات، المقالات...",
    topbar: {
      contacts: [
        { icon: "location", label: "القطامية، القاهرة الجديدة", href: "#" },
        { icon: "phone", label: "+20 2 2750 6000", href: "tel:+20227506000" },
        { icon: "email", label: "hello@staron-egypt.com", href: "mailto:hello@staron-egypt.com" },
      ],
      socials: [
        { label: "Facebook", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "YouTube", href: "#" },
        { label: "WhatsApp", href: "#" },
      ],
    },
    nav: [
      { label: "عنّا", href: "/about" },
      { label: "البراندات", href: "/brands", type: "brands" },
      { label: "الحلول", href: "/solutions", type: "solutions" },
      { label: "المدونة", href: "/blog" },
      { label: "تواصل", href: "/contact" },
    ],
    ctas: [
      { label: "احجز معاد", action: "appointments" },
      { label: "اطلب تسعير", action: "quotations" },
      { label: "كتالوج المنتجات", href: "/catalog" },
      { label: "المتجر الإلكتروني", href: "/store" },
    ],
    brandMenu: [
      {
        product: "أسطح أكريليك",
        brands: [
          {
            name: "Staron",
            href: "/brands/solid-surfaces/staron",
            description:
              "أسطح بدون فواصل للتشكيل الحر وتعقيم غرف العمليات والكاونترات الفخمة.",
            images: [
              "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?auto=format&fit=crop&w=800&q=80",
            ],
          },
        ],
      },
      {
        product: "أسطح كوارتز",
        brands: [
          {
            name: "Belenco",
            href: "/brands/quartz-surfaces/belenco",
            description:
              "ألواح كوارتز قوية بعرق واضح لبنوك، بيوت، ومكاتب استقبال عالية الحركة.",
            images: [
              "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
            ],
          },
        ],
      },
      {
        product: "أرضيات فينيل",
        brands: [
          {
            name: "Tarkett",
            href: "/brands/vinyl-flooring/tarkett",
            description:
              "أرضيات عازلة للصوت ومضادة للانزلاق للمستشفيات والمدارس والمتاجر.",
            images: [
              "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=800&q=80",
            ],
          },
        ],
      },
      {
        product: "HPL كومباكت",
        brands: [
          {
            name: "CrownLam",
            href: "/brands/hpl-compact/crownlam",
            description:
              "كبائن وخزائن ضد الصدمات والرطوبة للأندية والمواقع الساحلية.",
            images: [
              "https://images.unsplash.com/photo-1484156818044-c040038b0710?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
            ],
          },
        ],
      },
      {
        product: "حماية حوائط PVC",
        brands: [
          {
            name: "AKS Profil",
            href: "/brands/pvc-wall-protection/aks-profil",
            description:
              "حمايات حوائط وزوايا مصممة للمستشفيات والمطارات ومحطات النقل.",
            images: [
              "https://images.unsplash.com/photo-1484156818044-c040038b0710?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=800&q=80",
            ],
          },
        ],
      },
    ],
    solutionsMenu: [
      {
        sector: "الصحة",
        spaces: [
          {
            name: "غرف عمليات وعناية",
            applications: [
              "كاونترات معقمة بدون فواصل",
              "حمايات حوائط مضادة للبكتيريا",
              "أرضيات هادئة مضادة للانزلاق",
            ],
          },
          {
            name: "المناطق العامة",
            applications: [
              "كاونترات إرشاد",
              "حواجز حوائط وزوايا",
              "جلسات انتظار سهلة التنظيف",
            ],
          },
        ],
      },
      {
        sector: "سكني",
        spaces: [
          {
            name: "مطابخ وحمامات",
            applications: [
              "أسطح كوارتز",
              "أحواض مدمجة من الأكريليك",
              "حماية خلفية الحوائط",
            ],
          },
          {
            name: "مساحات معيشة",
            applications: [
              "حوائط ديكورية",
              "أرضيات منخفضة الانبعاثات",
              "وحدات ميديا مخصصة",
            ],
          },
        ],
      },
      {
        sector: "بنوك",
        spaces: [
          {
            name: "الفروع",
            applications: [
              "كاونترات مقاومة للخدش",
              "كسوات تنظيم الطوابير",
              "تشطيبات آمنة ومريحة",
            ],
          },
          {
            name: "مكاتب خلفية",
            applications: [
              "أرضيات قوية",
              "حوائط صوتية",
              "تخزين ذكي بـ HPL",
            ],
          },
        ],
      },
      {
        sector: "تجاري",
        spaces: [
          {
            name: "تجزئة وضيافة",
            applications: [
              "مكاتب استقبال مميزة",
              "حمامات HPL كومباكت",
              "أرضيات قوية الاستخدام",
            ],
          },
          {
            name: "مكاتب عمل",
            applications: [
              "كاونترات استراحة",
              "حوائط للكتابة",
              "أسطح بإدارة كابلات",
            ],
          },
        ],
      },
    ],
  },
};

export type NavigationContent = (typeof navigationContent)["en"];
