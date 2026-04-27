"use client";

import { Reveal } from "./RevealWrapper";

export function CtaBand() {
  return (
    <section className="bg-charcoal text-white py-[100px] relative overflow-hidden">
      {/* Decorative gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 100% 0%, rgba(232,203,148,0.10), transparent 50%),
            radial-gradient(ellipse at 0% 100%, rgba(160,127,63,0.08), transparent 60%)
          `,
        }}
      />
      <div className="max-w-[1280px] mx-auto px-10 relative grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-center">
        <div>
          <Reveal>
            <span className="eyebrow" style={{ color: "#E8CB94" }}>
              Хамтран ажиллах
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="font-serif font-normal leading-[1.1] tracking-[-0.01em] mt-5"
              style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
            >
              Танай эмнэлгийн хэрэгцээнд тохирсон{" "}
              <em className="italic gold-text">тусгай</em> шийдэл боловсруулъя.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.16}>
          <p className="text-white/70 text-[15px] leading-[1.7] mb-8">
            Манай мэргэжилтэн танай эмнэлгийн төсөв, орон зай, эмчилгээний
            чиглэлд тулгуурлан тусгайлсан санал боловсруулна. 30 минутын
            үнэгүй зөвлөгөө.
          </p>
          <a href="#contact" className="btn btn-primary">
            Уулзалт товлох
            <span className="btn-arrow"></span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
