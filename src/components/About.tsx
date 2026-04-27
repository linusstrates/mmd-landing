"use client";

import { Reveal } from "./RevealWrapper";
import { ABOUT_FEATURES } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="bg-ivory py-[120px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-10">
        {/* Section head */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-end mb-[72px]">
          <div>
            <Reveal>
              <span className="eyebrow">Бидний тухай</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                className="font-serif font-medium tracking-[-0.015em] mt-5"
                style={{ fontSize: "clamp(36px, 4.5vw, 56px)", lineHeight: 1.05 }}
              >
                Эмнэлгийн салбарт <em className="italic">итгэмжлэгдсэн</em> түнш.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="text-base leading-[1.7] text-charcoal-3 max-w-[520px]">
              MMD буюу Mongolian Medical Device нь 2014 оноос хойш Монголын эрүүл
              мэндийн салбарт олон улсын брэндийн өндөр чанарын төхөөрөмж нийлүүлэгч
              байгууллага юм. Бид зөвхөн төхөөрөмж нийлүүлдэггүй — бид эмчилгээний
              үйл явцын түнш.
            </p>
          </Reveal>
        </div>

        {/* Body grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <Reveal className="relative" style={{ aspectRatio: "1" }}>
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: `
                  linear-gradient(160deg, rgba(58,58,58,0.55), rgba(58,58,58,0.20)),
                  repeating-linear-gradient(45deg, #b8b3aa 0 1px, #aea99e 1px 14px),
                  #aea99e
                `,
              }}
            >
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/90 bg-black/40 px-2.5 py-1.5 backdrop-blur-sm">
                Photo · Hospital exterior / staff
              </span>
            </div>
            <div
              className="absolute flex items-center justify-center"
              style={{
                width: "45%",
                aspectRatio: "4/5",
                bottom: "-40px",
                right: "-40px",
                background: `
                  linear-gradient(135deg, rgba(160,127,63,0.25), rgba(0,0,0,0.10)),
                  repeating-linear-gradient(45deg, #d7c9ac 0 1px, #cfbf9d 1px 14px),
                  #d4c4a3
                `,
                border: "6px solid #FBF8F2",
              }}
            >
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/90 bg-black/40 px-2.5 py-1.5 backdrop-blur-sm">
                Photo · Engineer at install
              </span>
            </div>
          </Reveal>

          {/* Features */}
          <div>
            <Reveal>
              <span className="eyebrow">Бидний ажиллах арга барил</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h3 className="font-serif font-medium text-[32px] leading-[1.15] mt-4">
                Сонголтоос суурилуулалт, сургалт, засвар хүртэл — нэг гарт.
              </h3>
            </Reveal>
            <div className="mt-9 grid gap-6">
              {ABOUT_FEATURES.map((f, i) => (
                <Reveal key={i} delay={0.08 * (i + 1)}>
                  <div className="grid grid-cols-[48px_1fr] gap-5 items-start">
                    <div className="font-serif text-[28px] gold-text border-t border-gold-2 pt-2.5">
                      {f.num}
                    </div>
                    <div>
                      <h4 className="font-sans text-[15px] font-semibold text-charcoal tracking-[0.01em] mb-1.5">
                        {f.title}
                      </h4>
                      <p className="text-sm text-charcoal-3 leading-[1.65]">{f.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
