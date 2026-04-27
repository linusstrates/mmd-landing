"use client";

import { useState, useMemo } from "react";
import { INTERESTS, SLOTS, getNextWeekdays } from "@/lib/data";

function StepPill({
  n,
  label,
  state,
}: {
  n: number;
  label: string;
  state: "idle" | "active" | "done";
}) {
  return (
    <div className="flex-1 flex items-center gap-3">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-semibold flex-shrink-0 transition-all duration-300 ${
          state === "active"
            ? "text-white border-transparent"
            : state === "done"
            ? "bg-charcoal text-white border-transparent"
            : "bg-white text-charcoal-3 border border-[var(--line-strong)]"
        }`}
        style={state === "active" ? { background: "var(--gold-grad)" } : {}}
      >
        {state === "done" ? "✓" : n}
      </div>
      <div
        className={`text-[11px] font-semibold tracking-[0.14em] uppercase whitespace-nowrap hidden sm:block ${
          state === "active" ? "text-charcoal" : "text-charcoal-3"
        }`}
      >
        {label}
      </div>
    </div>
  );
}

export function Wizard() {
  const [step, setStep] = useState(0);
  const [interests, setInterests] = useState<string[]>([]);
  const [day, setDay] = useState<number | null>(null);
  const [slot, setSlot] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const days = useMemo(() => getNextWeekdays(5), []);

  const toggleInterest = (i: string) => {
    setInterests((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  const canNext =
    (step === 0 && interests.length > 0) ||
    (step === 1 && day !== null && slot !== null) ||
    (step === 2 && name.trim().length >= 2 && org.trim().length >= 2 && phone.trim().length >= 8);

  const next = async () => {
    if (step === 2 && canNext) {
      setLoading(true);
      setError(null);
      try {
        const selectedDay = days[day!];
        const res = await fetch("/api/meeting-requests", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            interests,
            date: selectedDay.date.toISOString().split("T")[0],
            time: SLOTS[slot!],
            fullName: name.trim(),
            organization: org.trim(),
            phone: phone.trim(),
            email: email.trim() || undefined,
            notes: notes.trim() || undefined,
          }),
        });
        if (!res.ok) {
          const data = await res.json();
          setError(data.message || "Алдаа гарлаа. Дахин оролдоно уу.");
        } else {
          setSubmitted(true);
        }
      } catch {
        setError("Сүлжээний алдаа. Дахин оролдоно уу.");
      } finally {
        setLoading(false);
      }
      return;
    }
    if (canNext) setStep(step + 1);
  };

  const back = () => step > 0 && setStep(step - 1);

  if (submitted) {
    const dayObj = days[day!];
    return (
      <div className="bg-white p-[48px_44px] border border-[var(--line)] shadow-[0_30px_60px_-30px_rgba(58,47,25,0.18)]">
        <div className="text-center py-6">
          <div
            className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center text-white text-2xl"
            style={{ background: "var(--gold-grad)" }}
          >
            ✓
          </div>
          <h3 className="font-serif text-[32px] font-medium mb-2.5">
            Хүсэлт хүлээн авлаа
          </h3>
          <p className="text-sm text-charcoal-3 leading-[1.7] max-w-[360px] mx-auto mb-5">
            Бид таны хүсэлтийг хүлээн авч баталгаажууллаа. Манай мэргэжилтэн удахгүй
            холбогдож, уулзалтын дэлгэрэнгүйг тохирох болно.
          </p>
          <div className="bg-ivory-2 p-[18px_22px] text-left text-[13px] leading-[1.7] text-charcoal-2 mt-[18px]">
            <strong className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-gold-3 mb-2">
              Таны уулзалт
            </strong>
            {dayObj.d}, {dayObj.num} {dayObj.mon} · {SLOTS[slot!]}
            <br />
            {name}
            {org && ` — ${org}`}
            <br />
            {phone}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-[48px_44px] max-sm:p-[32px_24px] border border-[var(--line)] shadow-[0_30px_60px_-30px_rgba(58,47,25,0.18)]">
      {/* Step pills */}
      <div className="flex items-center mb-9">
        <StepPill n={1} label="Сонирхол" state={step === 0 ? "active" : step > 0 ? "done" : "idle"} />
        <div className={`flex-1 h-px mx-2 ${step > 0 ? "bg-charcoal" : "bg-[var(--line-strong)]"}`} />
        <StepPill n={2} label="Цаг товлох" state={step === 1 ? "active" : step > 1 ? "done" : "idle"} />
        <div className={`flex-1 h-px mx-2 ${step > 1 ? "bg-charcoal" : "bg-[var(--line-strong)]"}`} />
        <StepPill n={3} label="Холбоо барих" state={step === 2 ? "active" : "idle"} />
      </div>

      {/* Step 1 — Interests */}
      {step === 0 && (
        <>
          <div className="font-serif text-[28px] font-medium leading-[1.2] mb-2">
            Та аль чиглэлийн төхөөрөмжөөр сонирхож байна вэ?
          </div>
          <div className="text-sm text-charcoal-3 mb-7 leading-[1.6]">
            Олон сонголт хийж болно. Үүний дагуу мэргэжилтэн томилогдох болно.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {INTERESTS.map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => toggleInterest(i)}
                className={`px-4 py-3.5 border text-left font-sans text-[13px] font-medium tracking-[0.01em] flex items-center justify-between gap-2.5 transition-all duration-200 cursor-pointer ${
                  interests.includes(i)
                    ? "border-charcoal bg-charcoal text-white"
                    : "border-[var(--line-strong)] bg-white text-charcoal-2 hover:border-gold-2 hover:text-gold-3"
                }`}
              >
                <span>{i}</span>
                <span
                  className={`w-4 h-4 border flex items-center justify-center flex-shrink-0 ${
                    interests.includes(i)
                      ? "bg-gold-2 border-gold-2 opacity-100"
                      : "border-current opacity-50"
                  }`}
                >
                  {interests.includes(i) && (
                    <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5">
                      <path
                        d="M1.5 5L4 7.5L8.5 2.5"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
              </button>
            ))}
          </div>
        </>
      )}

      {/* Step 2 — Date/Time */}
      {step === 1 && (
        <>
          <div className="font-serif text-[28px] font-medium leading-[1.2] mb-2">
            Тохиромжтой цагаа сонгоно уу
          </div>
          <div className="text-sm text-charcoal-3 mb-7 leading-[1.6]">
            Уулзалт нь биечлэн эсвэл онлайнаар явагдах боломжтой.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="text-[11px] font-semibold tracking-[0.16em] uppercase text-charcoal-3 mb-3.5">
                Огноо
              </div>
              <div className="flex flex-col gap-2">
                {days.map((d, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setDay(i)}
                    className={`px-3.5 py-3 border text-left font-sans text-[13px] flex justify-between items-center transition-all duration-200 cursor-pointer ${
                      day === i
                        ? "bg-charcoal border-charcoal text-white"
                        : "bg-white border-[var(--line-strong)] text-charcoal-2 hover:border-gold-2 hover:text-gold-3"
                    }`}
                  >
                    <span>
                      {d.d}, {d.num}
                    </span>
                    <small className="text-[11px] font-medium opacity-60 tracking-[0.06em]">
                      {d.mon}
                    </small>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-semibold tracking-[0.16em] uppercase text-charcoal-3 mb-3.5">
                Цаг
              </div>
              <div className="flex flex-col gap-2">
                {SLOTS.map((s, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSlot(i)}
                    className={`px-3.5 py-3 border text-left font-sans text-[13px] flex justify-between items-center transition-all duration-200 cursor-pointer ${
                      slot === i
                        ? "bg-charcoal border-charcoal text-white"
                        : "bg-white border-[var(--line-strong)] text-charcoal-2 hover:border-gold-2 hover:text-gold-3"
                    }`}
                  >
                    <span>{s}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Step 3 — Contact */}
      {step === 2 && (
        <>
          <div className="font-serif text-[28px] font-medium leading-[1.2] mb-2">
            Холбоо барих мэдээлэл
          </div>
          <div className="text-sm text-charcoal-3 mb-7 leading-[1.6]">
            Бид баталгаажуулалтыг и-мэйл болон утсаар илгээх болно.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[18px] gap-y-1.5 mb-1.5">
            <div>
              <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-charcoal-3 mb-2">
                Овог нэр
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Бат-Эрдэнэ"
                className="w-full py-3.5 px-0 border-0 border-b border-[var(--line-strong)] bg-transparent font-sans text-[15px] text-charcoal focus:outline-none focus:border-gold-2 transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-charcoal-3 mb-2">
                Байгууллага
              </label>
              <input
                type="text"
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                placeholder="Эмнэлгийн нэр"
                className="w-full py-3.5 px-0 border-0 border-b border-[var(--line-strong)] bg-transparent font-sans text-[15px] text-charcoal focus:outline-none focus:border-gold-2 transition-colors"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[18px] gap-y-1.5 mb-1.5">
            <div>
              <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-charcoal-3 mb-2">
                Утас
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+976 ..."
                className="w-full py-3.5 px-0 border-0 border-b border-[var(--line-strong)] bg-transparent font-sans text-[15px] text-charcoal focus:outline-none focus:border-gold-2 transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-charcoal-3 mb-2">
                И-мэйл
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@hospital.mn"
                className="w-full py-3.5 px-0 border-0 border-b border-[var(--line-strong)] bg-transparent font-sans text-[15px] text-charcoal focus:outline-none focus:border-gold-2 transition-colors"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-charcoal-3 mb-2">
              Нэмэлт тэмдэглэл (заавал биш)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Тодорхой загвар, тоо ширхэг, эсвэл асуулт..."
              className="w-full py-3.5 px-0 border-0 border-b border-[var(--line-strong)] bg-transparent font-sans text-[15px] text-charcoal focus:outline-none focus:border-gold-2 transition-colors resize-y min-h-[70px]"
            />
          </div>
          {error && (
            <p className="text-red-600 text-sm mt-3">{error}</p>
          )}
        </>
      )}

      {/* Footer controls */}
      <div className="mt-8 pt-6 border-t border-[var(--line)] flex justify-between items-center gap-4">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className="bg-transparent border-none font-sans text-xs font-semibold tracking-[0.14em] uppercase text-charcoal-3 cursor-pointer inline-flex items-center gap-2 py-2 transition-colors duration-200 hover:text-charcoal disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <span className="w-3.5 h-px bg-current relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-1.5 before:h-1.5 before:border-l before:border-b before:border-current before:-translate-y-1/2 before:rotate-45" />
          Буцах
        </button>
        <button
          type="button"
          onClick={next}
          disabled={!canNext || loading}
          className="btn btn-primary"
          style={{
            opacity: canNext && !loading ? 1 : 0.4,
            cursor: canNext && !loading ? "pointer" : "not-allowed",
          }}
        >
          {loading ? "Илгээж байна..." : step === 2 ? "Хүсэлт илгээх" : "Үргэлжлүүлэх"}
          <span className="btn-arrow"></span>
        </button>
      </div>
    </div>
  );
}
