import { assetPath } from "../lib/assetPath";

function ProfilePictureSection() {
  return (
    <section
      className="relative mx-auto w-full max-w-107.5 box-border pt-[clamp(56px,10svh,72px)] pb-6 [--frame-gold:#b68d48] md:max-w-140 md:pt-14.5"
      aria-label="Couple photo"
    >
      <img
        className="absolute top-2 -right-px z-10 h-auto w-[clamp(370px,98vw,456px)] mix-blend-multiply pointer-events-none select-none md:top-1.5 md:-right-1 md:w-117"
        src={assetPath("11.svg")}
        alt=""
      />

      <div className="animate-border relative z-20 mx-auto aspect-[0.635] w-[clamp(258px,61vw,336px)] overflow-hidden rounded-t-full bg-[conic-gradient(from_var(--border-angle),#b68d48_0_66%,#7f5d2a_73%,#e0ad4f_80%,#fff0b8_84%,#d49a36_88%,#7f5d2a_94%,#b68d48_100%)] p-[clamp(3px,0.85vw,5px)] shadow-[0_16px_28px_rgb(80_72_58_/_0.08)] md:w-84">
        <div className="relative h-full w-full overflow-hidden rounded-t-full bg-[var(--frame-gold)] shadow-[inset_0_0_0_1px_rgb(255_255_255_/_0.22)] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:content-[''] after:shadow-[inset_0_1px_0_rgb(255_255_255_/_0.34),inset_0_-1px_0_rgb(96_66_25_/_0.2)]">
          <img
            className="block h-full w-full object-cover object-[48%_50%]"
            src={assetPath("profilepic.jpg")}
            alt="Couple portrait"
          />
        </div>
      </div>

      <div className="relative z-20 mx-auto mt-8 w-full max-w-96 px-6 text-center">
        <h1 className="flex items-baseline justify-center gap-2 whitespace-nowrap font-['Edwardian_Script_ITC',cursive] text-[3.9rem] leading-none font-normal text-[var(--frame-gold)]">
          <span>Milica</span>
          <span>i</span>
          <span>Dušan</span>
        </h1>
      </div>
    </section>
  );
}

export default ProfilePictureSection;
