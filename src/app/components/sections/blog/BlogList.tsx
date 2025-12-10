"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Card } from "../../ui/card";
import { SectionHeading, SectionShell } from "../../ui/section";
import { Button } from "../../ui/button";
import { useLocale } from "@/app/providers/locale-provider";
import { useCmsContent } from "@/app/providers/cms-provider";

export default function BlogList() {
  const { locale } = useLocale();
  const content = useCmsContent("blog", locale);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const posts = useMemo(() => {
    return content.posts.filter((post) => {
      const matchesQuery =
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.summary.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category ? post.category === category : true;
      return matchesQuery && matchesCategory;
    });
  }, [category, content.posts, query]);

  return (
    <div className="flex flex-col gap-6">
      <SectionShell>
        <SectionHeading
          eyebrow={locale === "en" ? "Blog" : "المدونة"}
          title={content.hero.title}
          description={content.hero.description}
        />
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              locale === "en"
                ? "Search articles..."
                : "ابحث في المقالات..."
            }
            className="w-full rounded-full border border-border-subtle bg-background-soft px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15 sm:max-w-md"
          />
          <div className="flex flex-wrap gap-2">
            <Button
              variant={category === null ? "primary" : "outline"}
              onClick={() => setCategory(null)}
            >
              {locale === "en" ? "All" : "الكل"}
            </Button>
            {content.categories.map((cat) => (
              <Button
                key={cat}
                variant={category === cat ? "primary" : "outline"}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell background="soft">
        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.slug} interactive className="h-full">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                {post.category}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-text-main">
                {post.title}
              </h3>
              <p className="text-sm text-text-muted">{post.summary}</p>
              <div className="mt-2 flex flex-wrap gap-1 text-[11px] text-text-muted">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white px-2 py-1 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-3 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                {locale === "en" ? "Read article" : "اقرأ المقال"}
              </Link>
            </Card>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
