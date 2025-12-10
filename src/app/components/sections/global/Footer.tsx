"use client";

import Link from "next/link";
import { useState } from "react";
import { useLocale } from "@/app/providers/locale-provider";
import { Button } from "../../ui/button";
import { useCmsContent } from "@/app/providers/cms-provider";

export default function Footer() {
  const { locale } = useLocale();
  const copy = useCmsContent("footer", locale);
  const [email, setEmail] = useState("");

  return (
    <footer className="mt-16 border-t border-border-subtle bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-sm font-bold uppercase text-text-inverse shadow-lg shadow-primary/20">
                SE
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-semibold text-text-main">
                  {locale === "en" ? "Staron Egypt" : "ستارون مصر"}
                </span>
                <span className="text-xs text-text-muted">
                  {locale === "en"
                    ? "Supply & Apply Contractor"
                    : "توريد وتركيب متكامل"}
                </span>
              </div>
            </div>
            <p className="text-sm text-text-muted">{copy.description}</p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              {locale === "en" ? "Site Map" : "خريطة الموقع"}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-text-muted">
              {copy.sitemap.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-2 py-1 transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-2 rounded-2xl bg-background-soft p-4">
              <p className="text-sm font-semibold text-text-main">
                {locale === "en"
                  ? "Newsletter"
                  : "النشرة البريدية"}
              </p>
              <p className="text-xs text-text-muted">
                {locale === "en"
                  ? "Product drops, approvals, and project wins straight to your inbox."
                  : "أحدث المنتجات والموافقات والمشاريع الجديدة مباشرة لبريدك."}
              </p>
              <form
                className="mt-3 flex flex-col gap-2 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  setEmail("");
                  alert(
                    locale === "en"
                      ? "Subscribed. We will sync this to the CMS."
                      : "تم الاشتراك. سيتم تسجيله في الـ CMS.",
                  );
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={
                    locale === "en" ? "Work email" : "بريد العمل"
                  }
                  className="w-full rounded-xl border border-border-subtle bg-white px-3 py-2 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
                <Button type="submit">OK</Button>
              </form>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              {locale === "en" ? "Contact" : "تواصل"}
            </h4>
            <div className="space-y-2 text-sm text-text-muted">
              {copy.contacts.map((contact) => (
                <div key={contact.label} className="flex flex-col">
                  <span className="font-semibold text-text-main">
                    {contact.label}
                  </span>
                  <Link
                    href={contact.href}
                    className="text-text-muted transition-colors hover:text-primary"
                  >
                    {contact.detail}
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {copy.socials.map((social) => (
                <span
                  key={social}
                  className="rounded-full border border-border-subtle px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-muted"
                >
                  {social}
                </span>
              ))}
            </div>
            <p className="text-sm font-semibold text-text-main">
              {copy.workWeek}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-6 text-xs text-text-muted sm:flex-row">
          <div>
            © {new Date().getFullYear()} {locale === "en" ? "Staron Egypt" : "ستارون مصر"}
          </div>
          <div className="flex items-center gap-3">
            <Link href="#" className="hover:text-primary">
              {copy.policy}
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-primary">
              {copy.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
