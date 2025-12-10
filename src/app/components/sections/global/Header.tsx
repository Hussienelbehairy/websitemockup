"use client";

import Link from "next/link";
import { useState, type ReactElement } from "react";
import { Button } from "../../ui/button";
import clsx from "clsx";
import { useLocale } from "@/app/providers/locale-provider";
import { useCmsContent } from "@/app/providers/cms-provider";

type MenuType = "brands" | "solutions" | null;

const iconMap: Record<string, ReactElement> = {
  location: (
    <svg width="16" height="16" viewBox="0 0 24 24" className="text-primary">
      <path
        fill="currentColor"
        d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7m0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5"
      />
    </svg>
  ),
  phone: (
    <svg width="16" height="16" viewBox="0 0 24 24" className="text-primary">
      <path
        fill="currentColor"
        d="M6.6 10.79a15.05 15.05 0 0 0 6.61 6.61l2.2-2.2a1 1 0 0 1 1-.24a11.36 11.36 0 0 0 3.56.57a1 1 0 0 1 1 1v3.6a1 1 0 0 1-1 1A17.58 17.58 0 0 1 2 4a1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1a11.36 11.36 0 0 0 .57 3.56a1 1 0 0 1-.25 1Z"
      />
    </svg>
  ),
  email: (
    <svg width="16" height="16" viewBox="0 0 24 24" className="text-primary">
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v1.2l10 5.56l10-5.56V6a2 2 0 0 0-2-2m0 5.87l-8.65 4.8a1 1 0 0 1-.97 0L2 9.87V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"
      />
    </svg>
  ),
};

function MegaMenuCard({
  title,
  subtitle,
  description,
  image,
}: {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
      <div className="rounded-2xl border border-border-subtle bg-surface p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
          {subtitle}
        </p>
        <h4 className="mt-2 text-xl font-semibold text-text-main">{title}</h4>
        <p className="mt-2 text-sm text-text-muted">{description}</p>
      </div>
      <div className="h-32 rounded-2xl bg-gradient-to-br from-primary/10 via-background-soft to-accent/10">
        <div
          className="h-full w-full rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden
        />
      </div>
    </div>
  );
}

export default function Header() {
  const { locale, toggleLocale } = useLocale();
  const copy = useCmsContent("navigation", locale);
  const [openMenu, setOpenMenu] = useState<MenuType>(null);
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeBrand, setActiveBrand] = useState(0);
  const [activeSector, setActiveSector] = useState(0);
  const [activeSpace, setActiveSpace] = useState(0);

  const brands = copy.brandMenu;
  const solutions = copy.solutionsMenu;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border-subtle/70 backdrop-blur-xl">
      <div className="flex w-full flex-col bg-surface/90">
        <div className="hidden items-center justify-between border-b border-border-subtle/70 px-4 py-2 text-xs text-text-muted sm:flex sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center gap-4">
            {copy.topbar.contacts.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 text-xs text-text-muted transition-colors hover:text-primary"
              >
                {iconMap[item.icon]}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {copy.topbar.socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="rounded-full bg-background-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-muted transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {social.label}
                </Link>
              ))}
            </div>
            <button
              type="button"
              onClick={toggleLocale}
              className="rounded-full border border-border-subtle px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-main transition-colors hover:border-primary hover:text-primary"
            >
              {locale === "en" ? "AR / EN" : "EN / AR"}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 px-4 py-3 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-1 items-center gap-3">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-sm font-bold uppercase text-text-inverse shadow-lg shadow-primary/20">
                  SE
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-lg font-semibold text-text-main">
                    {copy.logo}
                  </span>
                  <span className="text-xs text-text-muted">
                    {copy.tagline}
                  </span>
                </div>
              </Link>
              <div className="relative hidden flex-1 items-center sm:flex">
                <input
                  type="search"
                  placeholder={copy.searchPlaceholder}
                  className="w-full rounded-full border border-border-subtle bg-background-soft px-4 py-3 text-sm text-text-main outline-none transition-all placeholder:text-text-muted/80 focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
                <span className="pointer-events-none absolute right-4 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                  Ctrl K
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="hidden sm:inline-flex"
                href="/catalog"
              >
                {locale === "en" ? "View Catalog" : "كتالوج"}
              </Button>
              <Button variant="primary" href="/contact">
                {locale === "en" ? "Talk to us" : "تواصل معنا"}
              </Button>
            </div>
          </div>

          <nav className="flex items-center gap-4 text-sm font-semibold text-text-main">
            {copy.nav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  setOpenMenu(item.type ? (item.type as MenuType) : null)
                }
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className={clsx(
                    "rounded-full px-3 py-2 transition-colors hover:bg-primary/10 hover:text-primary",
                    openMenu === item.type && "bg-primary/10 text-primary",
                  )}
                  onClick={() =>
                    item.type
                      ? setOpenMenu(
                          openMenu === (item.type as MenuType)
                            ? null
                            : (item.type as MenuType),
                        )
                      : null
                  }
                >
                  {item.label}
                </Link>

                {item.type === "brands" && openMenu === "brands" ? (
                  <div className="absolute left-0 top-12 hidden w-[720px] rounded-3xl border border-border-subtle bg-surface p-6 shadow-2xl shadow-primary/10 lg:block">
                    <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-4">
                      <div className="flex flex-col gap-2 border-r border-border-subtle pr-4">
                        {brands.map((product, idx) => (
                          <button
                            key={product.product}
                            type="button"
                            className={clsx(
                              "flex items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-colors",
                              activeProduct === idx
                                ? "bg-primary/10 text-primary"
                                : "hover:bg-background-soft",
                            )}
                            onMouseEnter={() => {
                              setActiveProduct(idx);
                              setActiveBrand(0);
                            }}
                          >
                            <span>{product.product}</span>
                            <span className="text-xs text-text-muted">
                              {product.brands.length}{" "}
                              {locale === "en" ? "brand" : "براند"}
                            </span>
                          </button>
                        ))}
                      </div>
                      <div className="flex flex-col gap-2 border-r border-border-subtle pr-4">
                        {brands[activeProduct]?.brands.map((brand, idx) => (
                          <Link
                            key={brand.name}
                            href={brand.href}
                            className={clsx(
                              "rounded-2xl px-4 py-3 text-sm transition-colors hover:bg-background-soft",
                              activeBrand === idx &&
                                "bg-primary/10 text-primary",
                            )}
                            onMouseEnter={() => setActiveBrand(idx)}
                          >
                            <div className="font-semibold">{brand.name}</div>
                            <p className="text-xs text-text-muted">
                              {brand.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                      <div className="pl-2">
                        {brands[activeProduct]?.brands[activeBrand] ? (
                          <MegaMenuCard
                            title={
                              brands[activeProduct]!.brands[activeBrand]!.name
                            }
                            subtitle={brands[activeProduct]!.product}
                            description={
                              brands[activeProduct]!.brands[activeBrand]!
                                .description
                            }
                            image={
                              brands[activeProduct]!.brands[activeBrand]!
                                .images[0]
                            }
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                ) : null}

                {item.type === "solutions" && openMenu === "solutions" ? (
                  <div className="absolute left-0 top-12 hidden w-[760px] rounded-3xl border border-border-subtle bg-surface p-6 shadow-2xl shadow-primary/10 lg:block">
                    <div className="grid grid-cols-[1.3fr_1fr_1fr] gap-4">
                      <div className="flex flex-col gap-2 border-r border-border-subtle pr-4">
                        {solutions.map((sector, idx) => (
                          <button
                            key={sector.sector}
                            type="button"
                            className={clsx(
                              "flex items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-colors",
                              activeSector === idx
                                ? "bg-primary/10 text-primary"
                                : "hover:bg-background-soft",
                            )}
                            onMouseEnter={() => {
                              setActiveSector(idx);
                              setActiveSpace(0);
                            }}
                          >
                            <span>{sector.sector}</span>
                            <span className="text-xs text-text-muted">
                              {sector.spaces.length}{" "}
                              {locale === "en" ? "spaces" : "مساحات"}
                            </span>
                          </button>
                        ))}
                      </div>
                      <div className="flex flex-col gap-2 border-r border-border-subtle pr-4">
                        {solutions[activeSector]?.spaces.map((space, idx) => (
                          <button
                            key={space.name}
                            type="button"
                            className={clsx(
                              "rounded-2xl px-4 py-3 text-left text-sm transition-colors",
                              activeSpace === idx
                                ? "bg-primary/10 text-primary"
                                : "hover:bg-background-soft",
                            )}
                            onMouseEnter={() => setActiveSpace(idx)}
                          >
                            <div className="font-semibold">{space.name}</div>
                            <p className="text-xs text-text-muted">
                              {space.applications.join(" · ")}
                            </p>
                          </button>
                        ))}
                      </div>
                      <div className="pl-2">
                        {solutions[activeSector]?.spaces[activeSpace] ? (
                          <MegaMenuCard
                            title={
                              solutions[activeSector]!.spaces[activeSpace]!.name
                            }
                            subtitle={solutions[activeSector]!.sector}
                            description={solutions[activeSector]!.spaces[
                              activeSpace
                            ]!.applications.join(" • ")}
                            image="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
            <div className="ml-auto flex items-center gap-2">
              <Link
                href="/store"
                className="rounded-full px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                {locale === "en" ? "Online Store" : "المتجر"}
              </Link>
              <Link
                href="/solutions"
                className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-text-inverse shadow-md shadow-primary/20 transition-transform hover:-translate-y-0.5"
              >
                {locale === "en" ? "Book Now" : "احجز الآن"}
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
