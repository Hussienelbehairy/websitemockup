"use client";

import Link from "next/link";
import { Card } from "../../ui/card";
import { SectionHeading, SectionShell } from "../../ui/section";
import { Button } from "../../ui/button";
import { useLocale } from "@/app/providers/locale-provider";
import { useCmsContent } from "@/app/providers/cms-provider";

export default function RecentPosts() {
  const { locale } = useLocale();
  const blog = useCmsContent("home", locale).blog;

  return (
    <SectionShell>
      <div className="flex items-center justify-between gap-4">
        <SectionHeading
          eyebrow={locale === "en" ? "Blog" : "المدونة"}
          title={blog.title}
        />
        <Button variant="outline" href="/blog">
          {locale === "en" ? "View all posts" : "كل المقالات"}
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {blog.posts.map((post) => (
          <Card key={post.title} interactive className="h-full">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
              {locale === "en" ? "Article" : "مقال"}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-text-main">
              {post.title}
            </h3>
            <p className="text-sm text-text-muted">{post.summary}</p>
            <Link
              href={post.href}
              className="mt-3 inline-flex items-center text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              {locale === "en" ? "Read" : "اقرأ"}
            </Link>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
