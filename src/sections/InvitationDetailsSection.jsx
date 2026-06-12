import { assetPath } from "../lib/assetPath";

function WeddingRingsIcon() {
  return (
    <svg
      className="mx-auto size-12 text-[#993e0a]"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24.5 25.5c-9.1 0-16.5 7.4-16.5 16.5s7.4 16.5 16.5 16.5S41 51.1 41 42 33.6 25.5 24.5 25.5Z"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M39.5 25.5C30.4 25.5 23 32.9 23 42s7.4 16.5 16.5 16.5S56 51.1 56 42 48.6 25.5 39.5 25.5Z"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="m24 9 7-5 7 5-3.5 8h-7L24 9Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M31 4v13"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
      />
    </svg>
  );
}

function InvitationDetailsSection() {
  return (
    <section
      className="relative mx-auto w-full max-w-107.5 overflow-hidden px-6 pb-16 pt-8 [--frame-gold:#b68d48] md:max-w-140 md:pb-20"
      aria-label="Invitation details"
    >
      <img
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover select-none"
        src={assetPath("2 top.png")}
        alt=""
      />
      <img
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover select-none"
        src={assetPath("2 bottom.png")}
        alt=""
      />

      <div className="animate-border relative z-10 mx-auto bg-[conic-gradient(from_var(--border-angle),#b68d48_0_66%,#7f5d2a_73%,#e0ad4f_80%,#fff0b8_84%,#d49a36_88%,#7f5d2a_94%,#b68d48_100%)] p-1 shadow-[0_18px_35px_rgb(80_72_58_/_0.08)]">
        <div className="bg-white/88 px-8 py-10 text-center font-['Times_New_Roman',Times,serif] text-[#993e0a] backdrop-blur-[1px] sm:py-12">
          <div className="space-y-7">
            <WeddingRingsIcon />

            <div className="space-y-5">
              <p className="text-xl uppercase tracking-[0.2em]">
                Dragi gosti
              </p>

              <p className="mx-auto max-w-72 text-l leading-6">
                Pozivamo Vas da svojim prisustvom učinite naš dan posebnim.
              </p>
            </div>

            <div className="space-y-2 text-l leading-7">
              <p className="text-xl font-semibold tracking-[0.14em]">
                07.10.2026.
              </p>
              <p className="uppercase tracking-[0.18em]">Hotel Moskva</p>
              <p className="uppercase tracking-[0.18em]">Beograd</p>
            </div>

            <p className="mx-auto w-fit whitespace-nowrap border-b border-[#993e0a]/60 px-2 pb-1 font-['Bickham_Script_Pro',cursive] text-[clamp(35px,5.2vw,28px)] leading-none">
              Porodice Jović i Marić
            </p>

            <p className="mx-auto max-w-72 px-2 pt-2 text-sm leading-5">
              Molimo Vas da potvrdite dolazak klikom na dugme "potvrdi dolazak",
              koje se nalazi ispod, najkasnije do{" "}
              <span className="font-bold">01.09.2026.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InvitationDetailsSection;
