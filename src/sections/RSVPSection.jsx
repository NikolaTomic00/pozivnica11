function CheckIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
    </svg>
  );
}

function RSVPButton({ children, href }) {
  return (
    <a
      className="group relative mt-10 inline-flex min-h-13 items-center justify-center overflow-visible rounded-full bg-[#efe5d6] px-8 py-3.5 font-['Geist',Arial,sans-serif] text-sm font-semibold uppercase tracking-[0.08em] text-[#993e0a] shadow-[0_12px_24px_rgb(153_62_10_/_0.12)] transition-colors duration-300 hover:bg-[#ead8c0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b68d48]"
      href={href}
    >
      <svg
        className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-visible"
        viewBox="0 0 220 58"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="rsvp-button-border-gradient"
            x1="0"
            x2="220"
            y1="0"
            y2="58"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#b68d48" />
            <stop offset="0.5" stopColor="#993e0a" />
            <stop offset="1" stopColor="#e0ad4f" />
          </linearGradient>
        </defs>
        <path
          className="animate-rsvp-button-border"
          d="M 29 1 A 28 28 0 0 0 1 29 A 28 28 0 0 0 29 57 L 191 57 A 28 28 0 0 0 219 29 A 28 28 0 0 0 191 1 Z"
          fill="none"
          stroke="url(#rsvp-button-border-gradient)"
          strokeDasharray="370 560"
          strokeDashoffset="370"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>

      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </a>
  );
}

function RSVPSection() {
  return (
    <section
      className="mx-auto w-full max-w-107.5 px-6 pb-16 pt-4 [--frame-gold:#b68d48] md:max-w-140 md:pb-20"
      aria-label="RSVP"
    >
      <div className="mx-auto overflow-hidden rounded-t-full border border-[#b68d48] bg-[#f6f1e9] shadow-[0_18px_35px_rgb(80_72_58_/_0.08)]">
        <div className="flex min-h-[460px] flex-col items-center justify-center rounded-t-full px-8 py-16 text-center font-['Times_New_Roman',Times,serif] text-[#993e0a] sm:min-h-[540px] sm:px-10 sm:py-20">
          <p className="mx-auto max-w-74 text-lg leading-7">
            Molim Vas klikom na dugme ispod da potvrdite Vaš dolazak.
          </p>

          <RSVPButton href="https://docs.google.com/forms/d/e/1FAIpQLSdmWj9fsw7zgAPd_51eBlPMMvcSGrxClSnLJPzPWzSSJNHqAQ/viewform?usp=dialog">
            <CheckIcon />
            Potvrdi dolazak
          </RSVPButton>
        </div>
      </div>
    </section>
  );
}

export default RSVPSection;
