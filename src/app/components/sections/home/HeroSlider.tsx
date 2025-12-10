"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Carousel } from "../../ui/carousel";
import { Button } from "../../ui/button";
import { useLocale } from "@/app/providers/locale-provider";
import { useState } from "react";
import { useCmsContent } from "@/app/providers/cms-provider";

export default function HeroSlider() {
  const { locale } = useLocale();
  const slides = useCmsContent("home", locale).heroSlides;
  const [active, setActive] = useState(0);

  return (
    <section className="relative isolate overflow-hidden px-4 pb-10 pt-6 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6">
          <Carousel
            items={slides}
            onChange={setActive}
            className="rounded-3xl border border-border-subtle bg-surface/80 p-6 shadow-[0_30px_80px_rgba(0,66,116,0.12)] backdrop-blur"
            render={(slide) => (
              <div className="flex flex-col gap-4">
                <span className="inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {slide.kicker}
                </span>
                <h1 className="text-4xl font-bold leading-tight text-text-main sm:text-5xl">
                  {slide.title}
                </h1>
                <p className="max-w-2xl text-base text-text-muted sm:text-lg">
                  {slide.description}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Button href={slide.href}>{slide.cta}</Button>
                  <Link
                    href="/contact"
                    className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    {locale === "en"
                      ? "Talk to delivery team"
                      : "اتكلم مع فريق التنفيذ"}
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs text-text-muted sm:grid-cols-4">
                  <div className="rounded-2xl bg-background-soft px-3 py-2 font-semibold text-text-main">
                    <span className="block text-2xl text-primary">8</span>
                    {locale === "en" ? "Slides link to live pages" : "اسلايدز مربوطة بالصفحات"}
                  </div>
                  <div className="rounded-2xl bg-background-soft px-3 py-2 font-semibold text-text-main">
                    <span className="block text-2xl text-primary">CMS</span>
                    {locale === "en" ? "Ready for headless" : "جاهز للـ CMS"}
                  </div>
                  <div className="rounded-2xl bg-background-soft px-3 py-2 font-semibold text-text-main">
                    <span className="block text-2xl text-primary">2</span>
                    {locale === "en" ? "Languages" : "لغتين"}
                  </div>
                  <div className="rounded-2xl bg-background-soft px-3 py-2 font-semibold text-text-main">
                    <span className="block text-2xl text-primary">24/7</span>
                    {locale === "en" ? "Email requests" : "طلبات بالإيميل"}
                  </div>
                </div>
              </div>
            )}
          />
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border-subtle shadow-[0_20px_60px_rgba(0,66,116,0.18)]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
            <div
              className="h-full min-h-[420px] bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[active].image})` }}
              aria-hidden
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute left-4 top-4 rounded-2xl bg-white/80 px-4 py-3 text-sm font-semibold text-primary shadow-lg shadow-primary/15 backdrop-blur"
          >
            {locale === "en"
              ? "Modern, responsive, SEO-first, motion-friendly."
              : "مودرن، متجاوب، SEO، ومتحرك."}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
