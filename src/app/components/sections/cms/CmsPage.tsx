"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import type { CmsData } from "@/app/lib/cms";
import type { Locale as SiteLocale } from "../../content/navigation";
import { Card } from "../../ui/card";
import { SectionHeading, SectionShell } from "../../ui/section";
import { Button } from "../../ui/button";
import RequestForm from "../../ui/request-form";
import { useLocale } from "@/app/providers/locale-provider";
import { useCms, useCmsContent } from "@/app/providers/cms-provider";

const models = [
  "Navigation, top bar, and CTAs",
  "Hero slider and homepage highlights",
  "Brands, materials, products, colors",
  "Solutions: sectors, spaces, applications",
  "Blog posts with search, filter, sort",
  "Store SKUs and catalog items",
];

const routingActions = [
  { key: "appointments", role: "Operations", labelEn: "Appointments", labelAr: "الحجوزات" },
  { key: "quotations", role: "Sales", labelEn: "Quotations", labelAr: "التسعير" },
  { key: "orders", role: "Sales", labelEn: "Orders", labelAr: "الطلبات" },
  { key: "purchases", role: "Projects", labelEn: "Purchases", labelAr: "المشتريات" },
];

type HeroDraft = CmsData["home"][SiteLocale]["heroSlides"][number];

type BlogDraft = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  tags: string;
  body: string;
};

export default function CmsPage() {
  const { locale } = useLocale();
  const { cms, updateLocalizedSection, updateCmsUsers, resetCms } = useCms();
  const navigation = useCmsContent("navigation", locale);
  const home = useCmsContent("home", locale);
  const blog = useCmsContent("blog", locale);
  const brands = useCmsContent("brands", locale);
  const store = useCmsContent("store", locale);
  const catalog = useCmsContent("catalog", locale);
  const solutions = useCmsContent("solutions", locale);

  const [heroIndex, setHeroIndex] = useState(0);
  const [heroDraft, setHeroDraft] = useState<HeroDraft>(home.heroSlides[0]);
  const [postDraft, setPostDraft] = useState<BlogDraft>({
    slug: "",
    title: "",
    summary: "",
    category: "",
    tags: "",
    body: "",
  });
  const [userDraft, setUserDraft] = useState(cms.cmsUsers);
  const [heroSaved, setHeroSaved] = useState(false);
  const [routingSaved, setRoutingSaved] = useState(false);
  const [postSaved, setPostSaved] = useState(false);

  useEffect(() => {
    setHeroDraft(home.heroSlides[heroIndex] ?? home.heroSlides[0]);
  }, [heroIndex, home.heroSlides]);

  useEffect(() => {
    setUserDraft(cms.cmsUsers);
  }, [cms.cmsUsers]);

  const stats = useMemo(() => {
    const brandCount = brands.materials.reduce(
      (count, material) => count + material.brands.length,
      0,
    );
    return [
      {
        label: locale === "en" ? "Hero slides" : "اسلايدز الهيرو",
        value: home.heroSlides.length,
        hint:
          locale === "en"
            ? "Live on homepage slider"
            : "معروضة في الصفحة الرئيسية",
      },
      {
        label: locale === "en" ? "Brands" : "براندات",
        value: brandCount,
        hint:
          locale === "en"
            ? "Across all materials"
            : "مقسمة حسب الخامات",
      },
      {
        label: locale === "en" ? "Blog posts" : "مقالات",
        value: blog.posts.length,
        hint:
          locale === "en"
            ? "Search + filter ready"
            : "جاهزة للبحث والفلترة",
      },
      {
        label: locale === "en" ? "Store items" : "عناصر المتجر",
        value: store.items.length,
        hint:
          locale === "en"
            ? "Email checkout"
            : "طلبات بريدية",
      },
    ];
  }, [
    blog.posts.length,
    brands.materials,
    home.heroSlides.length,
    locale,
    store.items.length,
  ]);

  const saveHeroSlide = () => {
    if (!heroDraft) return;
    const updatedSlides = home.heroSlides.map((slide, idx) =>
      idx === heroIndex ? heroDraft : slide,
    );
    updateLocalizedSection("home", locale, {
      ...home,
      heroSlides: updatedSlides,
    });
    setHeroSaved(true);
    setTimeout(() => setHeroSaved(false), 1800);
  };

  const addBlogPost = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (!postDraft.slug || !postDraft.title || !postDraft.summary) {
      alert(
        locale === "en"
          ? "Slug, title, and summary are required."
          : "الـ slug والعنوان والملخص مطلوبين.",
      );
      return;
    }

    const tags = postDraft.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    const newPost = {
      slug: postDraft.slug.trim(),
      title: postDraft.title.trim(),
      summary: postDraft.summary.trim(),
      date: new Date().toISOString().split("T")[0],
      category:
        (postDraft.category || navigation.nav[0]?.label || "General").trim(),
      tags: tags.length ? tags : [locale === "en" ? "General" : "عام"],
      body: postDraft.body.trim() || postDraft.summary.trim(),
    };

    const posts = [
      newPost,
      ...blog.posts.filter((post) => post.slug !== newPost.slug),
    ];
    const categories = Array.from(
      new Set([...blog.categories, newPost.category]),
    );

    updateLocalizedSection("blog", locale, { ...blog, categories, posts });
    setPostDraft({
      slug: "",
      title: "",
      summary: "",
      category: "",
      tags: "",
      body: "",
    });
    setPostSaved(true);
    setTimeout(() => setPostSaved(false), 1800);
  };

  const saveRouting = () => {
    updateCmsUsers(userDraft);
    setRoutingSaved(true);
    setTimeout(() => setRoutingSaved(false), 1600);
  };

  const exportData = () => {
    const blob = new Blob([JSON.stringify(cms, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `staron-cms-${locale}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const collectionRows = [
    {
      label: locale === "en" ? "Materials" : "الخامات",
      value: brands.materials.length,
    },
    {
      label: locale === "en" ? "Solutions spaces" : "مساحات الحلول",
      value: solutions.spaces.length,
    },
    {
      label: locale === "en" ? "Catalog products" : "منتجات الكتالوج",
      value: catalog.products.length,
    },
    {
      label: locale === "en" ? "Store SKUs" : "عناصر المتجر",
      value: store.items.length,
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <SectionShell>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <SectionHeading
            eyebrow="Local CMS"
            title={
              locale === "en"
                ? "Manage content without a headless service"
                : "إدارة المحتوى بدون Headless CMS"
            }
            description={
              locale === "en"
                ? "Edits persist in the browser CMS layer, can be exported as JSON, and stream live into every page."
                : "التعديلات بتتحفظ محلياً، تقدر تصدرها JSON، وبتظهر فوراً في الصفحات."
            }
          />
          <div className="flex flex-wrap gap-2">
            <Button variant="accent" onClick={exportData}>
              {locale === "en" ? "Export JSON" : "تصدير JSON"}
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                resetCms();
                setHeroIndex(0);
              }}
            >
              {locale === "en" ? "Reset to seed" : "رجوع للوضع الأساسي"}
            </Button>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <Card key={item.label} className="h-full">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                {item.label}
              </p>
              <p className="mt-2 text-3xl font-bold text-text-main">
                {item.value}
              </p>
              <p className="text-sm text-text-muted">{item.hint}</p>
            </Card>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        background="soft"
        className="rounded-[28px] shadow-[0_20px_60px_rgba(0,66,116,0.08)]"
      >
        <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
          <Card className="h-full">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  {locale === "en" ? "Homepage hero" : "الهيرو الرئيسي"}
                </p>
                <h3 className="text-lg font-semibold text-text-main">
                  {locale === "en"
                    ? "Edit slider entries"
                    : "تعديل اسلايدز الهيرو"}
                </h3>
              </div>
              {heroSaved ? (
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {locale === "en" ? "Saved" : "تم الحفظ"}
                </span>
              ) : null}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {home.heroSlides.map((slide, idx) => (
                <button
                  key={`${slide.title}-${idx}`}
                  type="button"
                  onClick={() => setHeroIndex(idx)}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold transition-all ${
                    heroIndex === idx
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border-subtle text-text-main hover:border-primary/60"
                  }`}
                >
                  {idx + 1}. {slide.kicker}
                </button>
              ))}
            </div>
            <div className="mt-4 grid gap-3">
              <input
                value={heroDraft?.kicker ?? ""}
                onChange={(e) =>
                  setHeroDraft((prev) => ({
                    ...prev,
                    kicker: e.target.value,
                  }))
                }
                className="rounded-xl border border-border-subtle bg-background-soft px-3 py-2 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15"
                placeholder={locale === "en" ? "Eyebrow" : "عنوان فرعي"}
              />
              <input
                value={heroDraft?.title ?? ""}
                onChange={(e) =>
                  setHeroDraft((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
                className="rounded-xl border border-border-subtle bg-background-soft px-3 py-2 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15"
                placeholder={locale === "en" ? "Headline" : "العنوان"}
              />
              <textarea
                value={heroDraft?.description ?? ""}
                onChange={(e) =>
                  setHeroDraft((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                rows={3}
                className="rounded-xl border border-border-subtle bg-background-soft px-3 py-2 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15"
                placeholder={locale === "en" ? "Description" : "الوصف"}
              />
              <div className="grid gap-2 sm:grid-cols-2">
                <input
                  value={heroDraft?.cta ?? ""}
                  onChange={(e) =>
                    setHeroDraft((prev) => ({
                      ...prev,
                      cta: e.target.value,
                    }))
                  }
                  className="rounded-xl border border-border-subtle bg-background-soft px-3 py-2 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15"
                  placeholder={locale === "en" ? "CTA label" : "نص الزر"}
                />
                <input
                  value={heroDraft?.href ?? ""}
                  onChange={(e) =>
                    setHeroDraft((prev) => ({
                      ...prev,
                      href: e.target.value,
                    }))
                  }
                  className="rounded-xl border border-border-subtle bg-background-soft px-3 py-2 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15"
                  placeholder="/brands/solid-surfaces/staron"
                />
              </div>
              <input
                value={heroDraft?.image ?? ""}
                onChange={(e) =>
                  setHeroDraft((prev) => ({
                    ...prev,
                    image: e.target.value,
                  }))
                }
                className="rounded-xl border border-border-subtle bg-background-soft px-3 py-2 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15"
                placeholder={locale === "en" ? "Hero image URL" : "رابط الصورة"}
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button onClick={saveHeroSlide}>
                {locale === "en" ? "Save slide" : "حفظ الاسلايد"}
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  setHeroDraft(home.heroSlides[heroIndex] ?? home.heroSlides[0])
                }
              >
                {locale === "en" ? "Reset draft" : "إعادة الضبط"}
              </Button>
            </div>
          </Card>

          <Card className="flex h-full flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  {locale === "en" ? "Routing & owners" : "توجيه الطلبات"}
                </p>
                <h3 className="text-lg font-semibold text-text-main">
                  {locale === "en"
                    ? "Map CTAs to inboxes"
                    : "اربط الـ CTA بالإيميلات"}
                </h3>
              </div>
              {routingSaved ? (
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {locale === "en" ? "Saved" : "تم الحفظ"}
                </span>
              ) : null}
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              {userDraft.map((user, idx) => (
                <label
                  key={user.role}
                  className="flex flex-col gap-1 rounded-xl border border-border-subtle bg-background-soft px-3 py-2"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                    {user.role}
                  </span>
                  <input
                    value={user.email}
                    onChange={(e) =>
                      setUserDraft((prev) => {
                        const next = [...prev];
                        next[idx] = { ...next[idx], email: e.target.value };
                        return next;
                      })
                    }
                    className="rounded-lg border border-border-subtle bg-white px-2 py-2 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                </label>
              ))}
            </div>
            <div className="rounded-2xl bg-background-soft/80 p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
                {locale === "en" ? "CTA routing" : "توجيه الأزرار"}
              </p>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                {routingActions.map((action) => {
                  const email =
                    userDraft.find((user) => user.role === action.role)
                      ?.email ??
                    cms.cmsUsers.find((user) => user.role === action.role)
                      ?.email ??
                    "hello@staron-egypt.com";
                  return (
                    <div
                      key={action.key}
                      className="rounded-xl border border-border-subtle bg-white px-3 py-2"
                    >
                      <p className="text-xs font-semibold text-text-muted">
                        {locale === "en" ? action.labelEn : action.labelAr} →
                        <span className="ml-1 text-primary">{action.role}</span>
                      </p>
                      <p className="text-sm font-semibold text-text-main">
                        {email}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-auto flex flex-wrap gap-2">
              <Button onClick={saveRouting}>
                {locale === "en" ? "Save routing" : "حفظ التوجيه"}
              </Button>
              <Button variant="outline" href="/contact">
                {locale === "en" ? "View contact page" : "عرض صفحة التواصل"}
              </Button>
            </div>
            <div className="rounded-2xl border border-border-subtle/80 bg-white/80 p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
                {locale === "en" ? "Send a test request" : "ابعت طلب تجربة"}
              </p>
              <RequestForm defaultAction="appointments" />
            </div>
          </Card>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
          <Card className="flex h-full flex-col gap-4">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  {locale === "en" ? "Blog" : "المدونة"}
                </p>
                <h3 className="text-lg font-semibold text-text-main">
                  {locale === "en" ? "Manage posts" : "إدارة المقالات"}
                </h3>
              </div>
              {postSaved ? (
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {locale === "en" ? "Saved" : "تم الحفظ"}
                </span>
              ) : null}
            </div>
            <div className="grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-3">
                {blog.posts.slice(0, 4).map((post) => (
                  <div
                    key={post.slug}
                    className="rounded-2xl border border-border-subtle bg-background-soft p-3"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                      {post.category} · {post.date}
                    </p>
                    <p className="text-sm font-semibold text-text-main">
                      {post.title}
                    </p>
                    <p className="text-xs text-text-muted">{post.summary}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-text-muted">
                      {post.tags.join(" • ")}
                    </p>
                  </div>
                ))}
              </div>
              <form
                onSubmit={addBlogPost}
                className="flex flex-col gap-2 rounded-2xl border border-border-subtle bg-white/80 p-3"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  {locale === "en" ? "Add post" : "إضافة مقال"}
                </p>
                <input
                  value={postDraft.slug}
                  onChange={(e) =>
                    setPostDraft((prev) => ({ ...prev, slug: e.target.value }))
                  }
                  placeholder="solid-surface-vs-quartz"
                  className="rounded-lg border border-border-subtle bg-background-soft px-3 py-2 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15"
                  required
                />
                <input
                  value={postDraft.title}
                  onChange={(e) =>
                    setPostDraft((prev) => ({ ...prev, title: e.target.value }))
                  }
                  placeholder={locale === "en" ? "Title" : "العنوان"}
                  className="rounded-lg border border-border-subtle bg-background-soft px-3 py-2 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15"
                  required
                />
                <textarea
                  value={postDraft.summary}
                  onChange={(e) =>
                    setPostDraft((prev) => ({
                      ...prev,
                      summary: e.target.value,
                    }))
                  }
                  placeholder={locale === "en" ? "Summary" : "الملخص"}
                  rows={2}
                  className="rounded-lg border border-border-subtle bg-background-soft px-3 py-2 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15"
                  required
                />
                <div className="grid gap-2 sm:grid-cols-2">
                  <input
                    value={postDraft.category}
                    onChange={(e) =>
                      setPostDraft((prev) => ({
                        ...prev,
                        category: e.target.value,
                      }))
                    }
                    placeholder={locale === "en" ? "Category" : "التصنيف"}
                    className="rounded-lg border border-border-subtle bg-background-soft px-3 py-2 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                  <input
                    value={postDraft.tags}
                    onChange={(e) =>
                      setPostDraft((prev) => ({
                        ...prev,
                        tags: e.target.value,
                      }))
                    }
                    placeholder={
                      locale === "en"
                        ? "Tags (comma separated)"
                        : "وسوم بالفواصل"
                    }
                    className="rounded-lg border border-border-subtle bg-background-soft px-3 py-2 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                </div>
                <textarea
                  value={postDraft.body}
                  onChange={(e) =>
                    setPostDraft((prev) => ({
                      ...prev,
                      body: e.target.value,
                    }))
                  }
                  placeholder={
                    locale === "en"
                      ? "Body (optional)"
                      : "المحتوى (اختياري)"
                  }
                  rows={3}
                  className="rounded-lg border border-border-subtle bg-background-soft px-3 py-2 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
                <div className="flex flex-wrap gap-2">
                  <Button type="submit">
                    {locale === "en" ? "Publish to CMS" : "نشر في الـ CMS"}
                  </Button>
                  <Button variant="outline" href="/blog">
                    {locale === "en" ? "Open blog page" : "فتح صفحة المدونة"}
                  </Button>
                </div>
              </form>
            </div>
          </Card>

          <Card className="flex h-full flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  {locale === "en" ? "Collections" : "المجموعات"}
                </p>
                <h3 className="text-lg font-semibold text-text-main">
                  {locale === "en"
                    ? "Data models ready to sync"
                    : "نماذج البيانات الجاهزة"}
                </h3>
              </div>
            </div>
            <div className="rounded-2xl border border-border-subtle bg-background-soft p-3">
              <div className="grid gap-2 sm:grid-cols-2">
                {collectionRows.map((row) => (
                  <div
                    key={row.label}
                    className="rounded-xl border border-border-subtle bg-white px-3 py-2"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
                      {row.label}
                    </p>
                    <p className="text-xl font-bold text-text-main">
                      {row.value}
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-primary">
                      {locale === "en" ? "Synced" : "متزامن"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {brands.materials.slice(0, 4).map((material) => (
                <div
                  key={material.id}
                  className="rounded-2xl border border-border-subtle bg-white px-3 py-3"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    {material.name}
                  </p>
                  <p className="text-sm text-text-muted">
                    {material.description}
                  </p>
                  <p className="text-xs text-text-muted">
                    {locale === "en" ? "Brands" : "براندات"}:{" "}
                    {material.brands.length}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-border-subtle/80 bg-white/80 p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                {locale === "en" ? "Model coverage" : "النماذج"}
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {models.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-background-soft px-3 py-2 text-sm font-semibold text-text-main"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </SectionShell>
    </div>
  );
}
