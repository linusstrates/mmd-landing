"use client";

import { Reveal } from "./RevealWrapper";
import { HERO_STATS } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        padding: "140px 0 80px",
        background: `
          radial-gradient(ellipse at 80% 20%, rgba(232,203,148,0.18), transparent 50%),
          radial-gradient(ellipse at 0% 80%, rgba(160,127,63,0.08), transparent 50%),
          #FBF8F2
        `,
      }}
    >
      <div className="max-w-[1280px] mx-auto px-10 w-full grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-20 items-center">
        {/* Text column */}
        <div>
          <Reveal>
            <span className="eyebrow">Mongolian Medical Device · est. 2014</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1
              className="font-serif font-medium tracking-[-0.02em] text-charcoal mt-7 mb-8"
              style={{ fontSize: "clamp(48px, 6.5vw, 88px)", lineHeight: 1.02 }}
            >
              Дэлхийн стандартын <em className="italic font-normal">эмнэлгийн</em> төхөөрөмж
              — Монголын эмнэлгүүдэд.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-[17px] leading-[1.65] text-charcoal-3 max-w-[480px] mb-10">
              Бид Герман, Япон, АНУ-ын тэргүүлэх үйлдвэрлэгчдээс эмнэлгийн өндөр
              технологийн төхөөрөмжийг шууд гаралтайгаар ханган нийлүүлж, суурилуулалт,
              сургалт, баталгаат үйлчилгээг бүрэн эхээр нь хариуцдаг.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="flex gap-3.5 flex-wrap mb-14">
              <a href="#contact" className="btn btn-primary">
                Уулзалт товлох
                <span className="btn-arrow"></span>
              </a>
              <a href="#products" className="btn btn-ghost">
                Бүтээгдэхүүн үзэх
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="flex gap-14 pt-8 border-t border-[var(--line)] flex-wrap">
              {HERO_STATS.map((s, i) => (
                <div key={i}>
                  <span className="font-serif text-4xl font-medium gold-text block leading-none">
                    {s.num}
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-charcoal-3 mt-2 block">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Visual column */}
        <Reveal delay={0.16} className="relative hidden lg:block">
          <div className="relative" style={{ aspectRatio: "4/5", maxHeight: 680 }}>
            {/* Gold frame */}
            <div
              className="absolute pointer-events-none z-[-1]"
              style={{
                inset: "-16px -16px 16px 16px",
                border: "1px solid #C9A461",
              }}
            />
            {/* Image placeholder */}
            <div
              className="absolute inset-0 flex items-center justify-center overflow-hidden"
              style={{
                background: `
                  linear-gradient(135deg, rgba(160,127,63,0.20), rgba(0,0,0,0.10)),
                  repeating-linear-gradient(45deg, #d7c9ac 0 1px, #cfbf9d 1px 14px),
                  #d4c4a3
                `,
              }}
            >
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/85 bg-charcoal/55 px-3.5 py-2 backdrop-blur-sm">
                Photo · Surgical team with imported equipment
              </span>
            </div>
            {/* Badge */}
            <div className="absolute bottom-6 -left-8 bg-white py-[18px] px-[22px] flex gap-3.5 items-center shadow-[0_20px_40px_-20px_rgba(0,0,0,0.18)] border border-[var(--line)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4ca65b] shadow-[0_0_0_4px_rgba(76,166,91,0.18)]" />
              <div>
                <span className="text-xs font-semibold text-charcoal-2 tracking-[0.04em]">
                  ISO 13485 Чанарын батламж
                </span>
                <small className="block text-[10px] font-medium tracking-[0.14em] uppercase text-charcoal-3 mt-0.5">
                  Албан ёсны төлөөлөгч
                </small>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Scroll cue */}
      <div className="scroll-cue absolute bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-semibold tracking-[0.24em] uppercase text-charcoal-3 flex flex-col items-center gap-3">
        Доош гүйлгэх
      </div>
    </section>
  );
}
