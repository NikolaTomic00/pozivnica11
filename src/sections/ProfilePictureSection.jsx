import { useState } from "react";
import { assetPath } from "../lib/assetPath";

function ProfilePictureSection() {
  const [isPhotoLoaded, setIsPhotoLoaded] = useState(false);

  return (
    <section
      className="relative mx-auto w-full max-w-107.5 box-border pt-[clamp(56px,10svh,72px)] pb-6 [--frame-gold:#b68d48] md:max-w-140 md:pt-14.5"
      aria-label="Couple photo"
    >
      <img
        className="profile-leaf-arrive absolute top-2 -right-px z-10 h-auto w-[clamp(370px,98vw,456px)] mix-blend-multiply pointer-events-none select-none md:top-1.5 md:-right-1 md:w-117"
        src={assetPath("11.svg")}
        alt=""
      />

      <div className={`profile-frame-arrive profile-frame-shell relative z-20 mx-auto aspect-[3/4] w-[clamp(286px,70vw,360px)] overflow-hidden bg-white/45 p-[clamp(7px,1.8vw,9px)] shadow-[0_22px_55px_rgb(80_72_58_/_0.11)] md:w-90${isPhotoLoaded ? " is-loaded" : ""}`}>
        <div className="profile-photo-mask relative h-full w-full overflow-hidden bg-[var(--frame-gold)] shadow-[inset_0_0_0_1px_rgb(255_255_255_/_0.22)] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:content-[''] after:shadow-[inset_0_1px_0_rgb(255_255_255_/_0.34),inset_0_-1px_0_rgb(96_66_25_/_0.2)]">
          <img
            className="profile-photo-arrive block h-full w-full object-cover object-[48%_50%]"
            src={assetPath("profilepic.jpg")}
            alt="Couple portrait"
            onLoad={() => setIsPhotoLoaded(true)}
          />
        </div>
      </div>

      <div className="relative z-20 mx-auto mt-8 w-full max-w-96 overflow-hidden px-6 text-center">
        <h1 className="profile-name-arrive flex items-baseline justify-center gap-2 whitespace-nowrap font-['Edwardian_Script_ITC',cursive] text-[3.9rem] leading-none font-normal text-[var(--frame-gold)]">
          <span>Milica</span>
          <span>i</span>
          <span>Dušan</span>
        </h1>
      </div>
    </section>
  );
}

export default ProfilePictureSection;
