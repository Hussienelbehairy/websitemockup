"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type CarouselProps<T> = {
  items: T[];
  interval?: number;
  render: (item: T) => React.ReactNode;
  className?: string;
  onChange?: (index: number) => void;
};

export function Carousel<T>({
  items,
  interval = 6000,
  render,
  className,
  onChange,
}: CarouselProps<T>) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % items.length),
      interval,
    );
    return () => clearInterval(id);
  }, [interval, items.length]);

  useEffect(() => {
    if (onChange) {
      onChange(index);
    }
  }, [index, onChange]);

  if (!items.length) return null;

  const item = items[index];

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4 }}
          className="h-full"
        >
          {render(item)}
        </motion.div>
      </AnimatePresence>
      <div className="mt-4 flex items-center gap-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Slide ${idx + 1}`}
            onClick={() => {
              setIndex(idx);
            }}
            className={`h-2 w-6 rounded-full transition-all ${
              idx === index ? "bg-primary" : "bg-border-subtle"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
