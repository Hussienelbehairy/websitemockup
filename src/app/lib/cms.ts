import { aboutContent } from "../components/content/about";
import { blogContent } from "../components/content/blog";
import { brandsContent } from "../components/content/brands";
import { catalogContent } from "../components/content/catalog";
import { contactContent } from "../components/content/contact";
import { footerContent } from "../components/content/footer";
import { homeContent } from "../components/content/home";
import { navigationContent, cmsUsers, Locale } from "../components/content/navigation";
import { solutionsContent } from "../components/content/solutions";
import { storeContent } from "../components/content/store";

export type CmsData = {
  navigation: typeof navigationContent;
  home: typeof homeContent;
  about: typeof aboutContent;
  solutions: typeof solutionsContent;
  brands: typeof brandsContent;
  blog: typeof blogContent;
  contact: typeof contactContent;
  catalog: typeof catalogContent;
  store: typeof storeContent;
  footer: typeof footerContent;
  cmsUsers: typeof cmsUsers;
};

export type CmsSection = keyof CmsData;
export type LocalizedCmsSection = Exclude<CmsSection, "cmsUsers">;

export const cmsSeed: CmsData = {
  navigation: navigationContent,
  home: homeContent,
  about: aboutContent,
  solutions: solutionsContent,
  brands: brandsContent,
  blog: blogContent,
  contact: contactContent,
  catalog: catalogContent,
  store: storeContent,
  footer: footerContent,
  cmsUsers,
};

const localizedSections: LocalizedCmsSection[] = [
  "navigation",
  "home",
  "about",
  "solutions",
  "brands",
  "blog",
  "contact",
  "catalog",
  "store",
  "footer",
];

export function mergeCms(
  base: CmsData,
  overrides?: Partial<CmsData>,
): CmsData {
  if (!overrides) return base;

  const merged: CmsData = {
    ...base,
    cmsUsers: overrides.cmsUsers ?? base.cmsUsers,
  };

  localizedSections.forEach((section) => {
    const override = overrides[section] as Record<Locale, unknown> | undefined;
    merged[section] = {
      ...base[section],
      ...(override ?? {}),
    } as CmsData[typeof section];
  });

  return merged;
}

export function getLocalizedCmsSection<
  Section extends LocalizedCmsSection,
  Value = CmsData[Section][Locale],
>(cms: CmsData, section: Section, locale: Locale): Value {
  return cms[section][locale] as Value;
}
