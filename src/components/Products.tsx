"use client";

import { Reveal } from "./RevealWrapper";
import { PRODUCTS } from "@/lib/data";

export function Products() {
  return (
    <section id="products" className="bg-ivory-2 py-[120px]">
      <div className="max-w-[1280px] mx-auto px-10">
        {/* Section head */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-end mb-[72px]">
          <div>
            <Reveal>
              <span className="eyebrow">Бүтээгдэхүүн</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                className="font-serif font-medium tracking-[-0.015em] mt-5"
                style={{ fontSize: "clamp(36px, 4.5vw, 56px)", lineHeight: 1.05 }}
              >
                Сонгомол <em className="italic">каталог</em>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="text-base leading-[1.7] text-charcoal-3 max-w-[520px]">
              Бид нийтлэг хэрэглээний болон тусгай мэргэжлийн өндөр зэрэглэлийн
              төхөө��өмжүүдийг санал болгодог. Доорх жишээнүүд бол бидний ажиллаж буй
              үндсэн чиглэлүүд. Дэлгэрэнгүй, үнийн саналыг уулзалтаар авна уу.
            </p>
          </Reveal>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => (
            <Reveal key={i} delay={((i % 3) + 1) * 0.08}>
              <article className="group relative bg-white overflow-hidden cursor-pointer flex flex-col transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-2 hover:shadow-[0_30px_50px_-25px_rgba(58,47,25,0.25)]">
                {/* Image */}
                <div
                  className="relative flex items-center justify-center overflow-hidden"
                  style={{
                    aspectRatio: "4/3",
                    background:
                      i % 2 === 0
                        ? `linear-gradient(135deg, rgba(160,127,63,0.10), rgba(0,0,0,0.05)),
                           repeating-linear-gradient(45deg, #e8e1d2 0 1px, #ddd5c2 1px 12px),
                           #e3dbc7`
                        : `linear-gradient(135deg, rgba(58,58,58,0.08), rgba(0,0,0,0.04)),
                           repeating-linear-gradient(45deg, #d8d4cb 0 1px, #ccc7bb 1px 12px),
                           #d2cdc1`,
                  }}
                >
                  <span className="absolute top-4 left-4 text-[10px] font-semibold tracking-[0.16em] uppercase text-gold-3 bg-[rgba(255,248,235,0.92)] px-2.5 py-1.5 border border-[rgba(160,127,63,0.2)]">
                    {p.cat}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-charcoal/65 bg-white/60 px-2.5 py-1.5 backdrop-blur-sm border border-charcoal/8">
                    Product still life
                  </span>
                </div>

                {/* Body */}
                <div className="p-[28px_26px_30px] flex-1 flex flex-col">
                  <h3 className="font-serif text-2xl font-medium leading-[1.18] mb-2">
                    {p.title}
                  </h3>
                  <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-charcoal-3 mb-3.5">
                    {p.origin}
                  </div>
                  <p className="text-sm leading-[1.6] text-charcoal-3 mb-5 flex-1">
                    {p.desc}
                  </p>
                  <a
                    href="#contact"
                    className="text-xs font-semibold tracking-[0.12em] uppercase text-charcoal inline-flex items-center gap-2.5 transition-all duration-300 group-hover:gap-4 group-hover:text-gold-3"
                  >
                    Дэлгэрэнгүй
                    <span className="btn-arrow"></span>
                  </a>
                </div>

                {/* Hover border */}
                <div className="absolute inset-0 border border-transparent pointer-events-none transition-colors duration-400 group-hover:border-gold-2" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
