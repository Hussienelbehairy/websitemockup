"use client";

import Footer from "./Footer";
import Header from "./Header";
import { useLocale } from "@/app/providers/locale-provider";
import { useCms } from "@/app/providers/cms-provider";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locale } = useLocale();
  const { cms } = useCms();

  return (
    <div className="relative flex min-h-screen flex-col bg-transparent">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(13,75,115,0.12),transparent_38%),radial-gradient(circle_at_82%_8%,rgba(212,155,39,0.14),transparent_34%)] opacity-80"
      />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <div className="fixed bottom-4 right-4 hidden w-72 rounded-2xl border border-border-subtle bg-surface p-4 shadow-xl shadow-primary/10 lg:block">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          CMS Access
        </p>
        <p className="mt-1 text-sm text-text-muted">
          {locale === "en"
            ? "Authentication is limited to three managed emails:"
            : "تسجيل الدخول محدود لثلاثة إيميلات محددة:"}
        </p>
        <ul className="mt-2 space-y-1 text-sm font-medium text-text-main">
          {cms.cmsUsers.map((user) => (
            <li
              key={user.email}
              className="rounded-lg bg-background-soft px-3 py-2"
            >
              {user.role}: {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
