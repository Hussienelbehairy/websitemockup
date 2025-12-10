"use client";

import Link from "next/link";
import { Card } from "../../ui/card";
import { SectionHeading, SectionShell } from "../../ui/section";
import { useLocale } from "@/app/providers/locale-provider";
import { useCmsContent } from "@/app/providers/cms-provider";

export default function BlogPost({ slug }: { slug: string }) {
  const { locale } = useLocale();
  const posts = useCmsContent("blog", locale).posts;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <SectionShell>
        <p className="text-text-muted">
          {locale === "en" ? "Post not found." : "المقال غير موجود."}
        </p>
      </SectionShell>
    );
  }

  const related = posts.filter(
    (item) => item.slug !== slug && item.category === post.category,
  );

  return (
    <div className="flex flex-col gap-6">
      <SectionShell>
        <SectionHeading
          eyebrow={post.category}
          title={post.title}
          description={post.summary}
        />
        <Card>
          <p className="text-sm text-text-muted leading-relaxed">{post.body}</p>
          <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-text-muted">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-background-soft px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
        </Card>
      </SectionShell>

      <SectionShell background="soft">
        <SectionHeading
          eyebrow={locale === "en" ? "Related" : "ذات صلة"}
          title={
            locale === "en"
              ? "Related blog posts"
              : "مقالات مرتبطة"
          }
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {related.map((item) => (
            <Card key={item.slug} interactive>
              <h3 className="text-lg font-semibold text-text-main">
                {item.title}
              </h3>
              <p className="text-sm text-text-muted">{item.summary}</p>
              <Link
                href={`/blog/${item.slug}`}
                className="mt-2 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                {locale === "en" ? "Read" : "اقرأ"}
              </Link>
            </Card>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
