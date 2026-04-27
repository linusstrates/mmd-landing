"use client";

import Image from "next/image";
import { NAV_LINKS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/70 pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 lg:gap-15 mb-15">
          <div>
            <div className="mb-6">
              <Image
                src="/assets/logo-mmd-full.png"
                alt="MMD"
                width={200}
                height={44}
                style={{ width: "auto", height: 44 }}
              />
            </div>
            <p className="text-sm leading-[1.65] max-w-[320px] text-white/55">
              Mongolian Medical Device — дэлхийн чанартай эмнэлгийн төхөөрөмжийг
              Монголын эмнэлгүүдэд хүргэх итгэмжлэгдсэн түнш.
            </p>
          </div>
          <div>
            <h5 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white mb-5">
              Цэс
            </h5>
            <ul className="grid gap-3 list-none">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="text-white/60 text-sm no-underline transition-colors duration-200 hover:text-gold-1"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white mb-5">
              Холбоо барих
            </h5>
            <ul className="grid gap-3 list-none text-sm text-white/60">
              <li>+976 7700 0000</li>
              <li>info@mmd.mn</li>
              <li>Улаанбаатар хот</li>
            </ul>
          </div>
          <div>
            <h5 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white mb-5">
              Цагийн хуваарь
            </h5>
            <ul className="grid gap-3 list-none text-sm text-white/60">
              <li>Даваа–Баасан</li>
              <li>09:00 — 18:00</li>
              <li>Бямба, Ням амарна</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/40 tracking-[0.04em]">
          <span>© 2026 Mongolian Medical Device LLC. Бүх эрх хуулиар хамгаалагдсан.</span>
          <span>Хууль ёсны мэдэгдэл · Нууцлалын бодлого</span>
        </div>
      </div>
    </footer>
  );
}
