"use client";

import { CmsProvider } from "./providers/cms-provider";
import { LocaleProvider } from "./providers/locale-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <CmsProvider>{children}</CmsProvider>
    </LocaleProvider>
  );
}
