"use client";

import { Reveal } from "./RevealWrapper";
import { STATS } from "@/lib/data";

export function Stats() {
  return (
    <section className="bg-charcoal text-white py-20">
      <div className="max-w-[1280px] mx-auto px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div
                className={`text-left px-3 ${
                  i === 0 ? "" : "lg:border-l lg:border-white/12"
                }`}
              >
                <span className="font-serif text-[64px] font-medium leading-none gold-text block">
                  {s.num}
                </span>
                <span
                  className="text-xs font-medium tracking-[0.14em] uppercase text-white/65 mt-3.5 block whitespace-pre-line"
                >
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
