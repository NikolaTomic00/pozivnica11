import { assetPath } from "../lib/assetPath";

function WeddingRingsIcon() {
  return (
    <svg
      className="mx-auto size-12 text-[var(--frame-gold)]"
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
        <div className="bg-white/88 px-8 py-10 text-center font-['Playfair_Display',serif] text-[#993e0a] backdrop-blur-[1px] sm:py-12">
          <div className="grid justify-items-center">
            <WeddingRingsIcon />

            <p className="mt-5 max-w-72 text-[0.9rem] leading-[1.7]">
              Pozivamo Vas da svojim prisustvom učinite naš dan posebnim.
            </p>

            <p className="mt-5 font-['Geist','Arial',sans-serif] text-[1.3rem] leading-[1.2] tracking-[0.14em]">
              07.10.2026.
            </p>

            <div className="mt-4 font-['Geist','Arial',sans-serif] text-[0.9rem] font-medium leading-[1.5]">
              <p>13:00 h - crkveno venčanje</p>
              <p>15:00 h - svečana proslava</p>
              <p>16:00 h - građansko venčanje</p>
            </div>

            <p className="mt-4 text-[1rem] leading-[1.45] tracking-[0.08em]">
              Hotel Moskva, Beograd
            </p>

            <p className="mt-5 w-fit whitespace-nowrap font-['Bickham_Script_Pro',cursive] text-[2.1875rem] font-normal leading-none text-[#993e0a]/80">
              Porodice Jović i Marić
            </p>

            <span
              className="mt-2 h-px w-3/4 max-w-62.5 bg-[#993e0a]/35"
              aria-hidden="true"
            />

            <p className="mt-6 max-w-72 px-2 text-[0.8rem] leading-[1.7]">
              Molimo Vas da potvrdite dolazak najkasnije do{" "}
              <span className="font-semibold">01.09.2026.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InvitationDetailsSection;
