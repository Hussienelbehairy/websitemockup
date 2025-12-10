"use client";

import { FormEvent, useMemo, useState } from "react";
import { Button } from "./button";
import { useLocale } from "@/app/providers/locale-provider";
import { useCms } from "@/app/providers/cms-provider";

type Action = "appointments" | "quotations" | "orders" | "purchases";

const actionRoleMap: Record<Action, string> = {
  appointments: "Operations",
  quotations: "Sales",
  orders: "Sales",
  purchases: "Projects",
};

export default function RequestForm({
  defaultAction = "appointments",
}: {
  defaultAction?: Action;
}) {
  const { locale } = useLocale();
  const { cms } = useCms();
  const [action, setAction] = useState<Action>(defaultAction);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const recipient = useMemo(() => {
    const role = actionRoleMap[action];
    return (
      cms.cmsUsers.find((user) => user.role === role)?.email ??
      "hello@staron-egypt.com"
    );
  }, [action, cms.cmsUsers]);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject =
      locale === "en"
        ? `Staron Egypt | ${action} request`
        : `ستارون مصر | طلب ${action}`;
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nRequest type: ${action}\nNotes: ${notes}`,
    );
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
      subject,
    )}&body=${body}`;
  };

  return (
    <form
      className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-surface p-4 shadow-sm"
      onSubmit={submit}
    >
      <div className="grid gap-2 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm text-text-main">
          {locale === "en" ? "Name" : "الاسم"}
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-xl border border-border-subtle bg-background-soft px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm text-text-main">
          {locale === "en" ? "Email" : "الإيميل"}
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl border border-border-subtle bg-background-soft px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
          />
        </label>
      </div>
      <label className="flex flex-col gap-1 text-sm text-text-main">
        {locale === "en" ? "Request type" : "نوع الطلب"}
        <select
          value={action}
          onChange={(e) => setAction(e.target.value as Action)}
          className="rounded-xl border border-border-subtle bg-background-soft px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
        >
          <option value="appointments">
            {locale === "en" ? "Schedule appointment" : "حجز معاد"}
          </option>
          <option value="quotations">
            {locale === "en" ? "Get quotation" : "طلب تسعير"}
          </option>
          <option value="orders">
            {locale === "en" ? "Place order" : "طلب شراء"}
          </option>
          <option value="purchases">
            {locale === "en" ? "Purchase request" : "طلب شراء"}
          </option>
        </select>
      </label>
      <label className="flex flex-col gap-1 text-sm text-text-main">
        {locale === "en" ? "Notes" : "ملاحظات"}
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          className="rounded-xl border border-border-subtle bg-background-soft px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
          placeholder={
            locale === "en"
              ? "Project scope, materials, timeline..."
              : "نطاق المشروع، الخامات، المواعيد..."
          }
        />
      </label>
      <div className="flex flex-col gap-2 text-xs text-text-muted">
        <span>
          {locale === "en"
            ? `This request routes to ${recipient}`
            : `الطلب هيتبعت لـ ${recipient}`}
        </span>
        <Button type="submit">
          {locale === "en" ? "Send email request" : "إرسال الطلب بالإيميل"}
        </Button>
      </div>
    </form>
  );
}
