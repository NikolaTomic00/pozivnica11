import { useEffect, useState } from "react";

const weddingDate = new Date("2026-10-07T00:00:00+02:00").getTime();

function getTimeLeft() {
  const difference = Math.max(weddingDate - Date.now(), 0);

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function CountdownBox({ value, label }) {
  return (
    <div className="flex min-w-0 flex-col items-center gap-2">
      <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg border border-[#b68d48]/55 bg-[#f6f1e9] shadow-[0_12px_24px_rgb(80_72_58_/_0.08)]">
        <span className="absolute left-0 top-0 h-px w-1/2 animate-[countdown-scan_2.4s_linear_infinite] bg-gradient-to-r from-transparent via-[#993e0a] to-transparent" />
        <span className="font-['Geist',Arial,sans-serif] text-[clamp(24px,7vw,38px)] font-bold leading-none text-[var(--frame-gold)]">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="font-['Geist',Arial,sans-serif] text-[10px] font-semibold uppercase tracking-[0.14em] text-[#993e0a] sm:text-xs">
        {label}
      </span>
    </div>
  );
}

function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const countdownItems = [
    ["days", "Dana"],
    ["hours", "Sati"],
    ["minutes", "Min"],
    ["seconds", "Sek"],
  ];

  return (
    <section
      className="mx-auto w-full max-w-107.5 px-6 pb-16 pt-2 [--frame-gold:#b68d48] md:max-w-140 md:pb-20"
      aria-label="Countdown"
    >
      <div className="mx-auto text-center text-[var(--frame-gold)]">
        <div className="relative mx-auto h-[clamp(200px,59vw,326px)] w-full max-w-112 overflow-hidden">
          <img
            className="absolute left-1/2 top-0 w-full -translate-x-1/2 select-none"
            src="/4.1.png"
            alt=""
          />
        </div>

        <div className="mx-auto mt-5 flex max-w-88 items-center justify-center gap-5">
          <span className="h-px flex-1 bg-[var(--frame-gold)]" />
          <p className="whitespace-nowrap font-['Playwrite_GB_J',cursive] text-[clamp(22px,6vw,30px)] leading-none">
            07/10/2026
          </p>
          <span className="h-px flex-1 bg-[var(--frame-gold)]" />
        </div>

        <p className="mt-7 font-['Playwrite_GB_J',cursive] text-[clamp(38px,11vw,62px)] leading-none">
          Brojimo zajedno
        </p>

        <div className="mx-auto mt-8 grid max-w-104 grid-cols-4 gap-2.5 sm:gap-4">
          {countdownItems.map(([key, label]) => (
            <CountdownBox key={key} value={timeLeft[key]} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CountdownSection;
