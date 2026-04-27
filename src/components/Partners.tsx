"use client";

import { Reveal } from "./RevealWrapper";
import { PARTNERS } from "@/lib/data";

export function Partners() {
  const list = [...PARTNERS, ...PARTNERS]; // duplicate for seamless marquee

  return (
    <section id="partners" className="bg-ivory py-[100px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-end">
          <div>
            <Reveal>
              <span className="eyebrow">Хамтрагч брэндүүд</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                className="font-serif font-medium tracking-[-0.015em] mt-5"
                style={{ fontSize: "clamp(36px, 4.5vw, 56px)", lineHeight: 1.05 }}
              >
                Дэлхийн <em className="italic">тэргүүлэгч</em> үйлдвэрлэгчид.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="text-base leading-[1.7] text-charcoal-3 max-w-[520px]">
              Бид зөвхөн албан ёсны эрх бүхий ханган нийлүүлэгч, эх үйлдвэрээс шууд
              гаралтай төхөөрөмж дамжуулдаг. Бүх төхөөрөмж олон улсын чанарын
              батламжтай.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Marquee */}
      <Reveal>
        <div
          className="mt-14 overflow-hidden relative"
          style={{
            maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          }}
        >
          <div
            className="flex w-max hover:[animation-play-state:paused]"
            style={{ animation: "marquee 50s linear infinite" }}
          >
            {list.map((p, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[240px] h-[110px] border-r border-[var(--line)] flex items-center justify-center px-8 group"
              >
                <div className="font-serif text-[22px] font-medium tracking-[0.04em] text-charcoal-3 opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:text-gold-3 whitespace-nowrap text-center leading-tight">
                  {p.name}
                  <small className="block font-sans text-[9px] font-semibold tracking-[0.22em] uppercase mt-1 opacity-70">
                    {p.sub}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
