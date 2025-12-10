"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  CmsData,
  cmsSeed,
  getLocalizedCmsSection,
  LocalizedCmsSection,
  mergeCms,
} from "../lib/cms";
import { Locale } from "../components/content/navigation";

type CmsContextValue = {
  cms: CmsData;
  updateLocalizedSection: <Section extends LocalizedCmsSection>(
    section: Section,
    locale: Locale,
    value: CmsData[Section][Locale],
  ) => void;
  updateCmsUsers: (value: CmsData["cmsUsers"]) => void;
  resetCms: () => void;
};

const CmsContext = createContext<CmsContextValue | undefined>(undefined);

export function CmsProvider({ children }: { children: React.ReactNode }) {
  const [cms, setCms] = useState<CmsData>(cmsSeed);

  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? window.localStorage.getItem("staron-cms")
        : null;
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Partial<CmsData>;
        setCms(mergeCms(cmsSeed, parsed));
      } catch (error) {
        console.warn("Failed to parse stored CMS state", error);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("staron-cms", JSON.stringify(cms));
  }, [cms]);

  const updateLocalizedSection = <Section extends LocalizedCmsSection>(
    section: Section,
    locale: Locale,
    value: CmsData[Section][Locale],
  ) => {
    setCms((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [locale]: value,
      },
    }));
  };

  const updateCmsUsers = (value: CmsData["cmsUsers"]) => {
    setCms((prev) => ({
      ...prev,
      cmsUsers: value,
    }));
  };

  const resetCms = () => setCms(cmsSeed);

  const value = useMemo(
    () => ({
      cms,
      updateLocalizedSection,
      updateCmsUsers,
      resetCms,
    }),
    [cms],
  );

  return <CmsContext.Provider value={value}>{children}</CmsContext.Provider>;
}

export function useCms() {
  const context = useContext(CmsContext);
  if (!context) throw new Error("useCms must be used within CmsProvider");
  return context;
}

export function useCmsContent<Section extends LocalizedCmsSection>(
  section: Section,
  locale: Locale,
) {
  const { cms } = useCms();
  return getLocalizedCmsSection(cms, section, locale);
}
