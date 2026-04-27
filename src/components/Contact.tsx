"use client";

import { Reveal } from "./RevealWrapper";
import { CONTACT_INFO } from "@/lib/data";
import { Wizard } from "./Wizard";

export function Contact() {
  return (
    <section id="contact" className="bg-ivory pt-[120px] pb-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
        {/* Left info */}
        <div>
          <Reveal>
            <span className="eyebrow">Холбоо барих</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="font-serif font-medium mt-5"
              style={{ fontSize: "clamp(36px, 4.5vw, 56px)", lineHeight: 1.05 }}
            >
              Уулзалт <em className="italic">товлох</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-charcoal-3 max-w-[440px] mt-[18px] text-[15px] leading-[1.7]">
              3 алхамд уулзалтаа товлоорой. Бид баталгаажуулалтыг 24 цагийн дотор
              илгээх болно.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8">
              {CONTACT_INFO.map((c, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-[100px_1fr] gap-6 items-baseline py-6 border-b border-[var(--line)] ${
                    i === 0 ? "pt-0" : ""
                  }`}
                >
                  <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-3">
                    {c.lbl}
                  </div>
                  <div className="font-serif text-[22px] font-medium text-charcoal leading-[1.3]">
                    {c.val}
                    <small className="block font-sans text-[13px] font-normal text-charcoal-3 mt-1">
                      {c.sub}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Wizard */}
        <Reveal delay={0.16}>
          <Wizard />
        </Reveal>
      </div>
    </section>
  );
}
