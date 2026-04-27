"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-350 ease-out border-b ${
        scrolled
          ? "bg-[rgba(251,248,242,0.92)] backdrop-blur-[14px] backdrop-saturate-[140%] border-[var(--line)] py-3.5"
          : "bg-transparent border-transparent py-[22px]"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-10 flex items-center justify-between gap-8">
        <a href="#top" className="block">
          <Image
            src="/assets/logo-mmd-full.png"
            alt="Mongolian Medical Device"
            width={200}
            height={42}
            className={`transition-all duration-350 ${scrolled ? "h-9" : "h-[42px]"}`}
            style={{ width: "auto", height: scrolled ? 36 : 42 }}
            priority
          />
        </a>

        <ul className="hidden lg:flex gap-9 list-none">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="nav-link-underline relative text-charcoal-2 text-sm font-medium tracking-[0.02em] py-1.5 transition-colors duration-200 hover:text-gold-3"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn btn-primary" style={{ padding: "12px 22px" }}>
          Уулзалт товлох
          <span className="btn-arrow"></span>
        </a>
      </div>
    </nav>
  );
}
