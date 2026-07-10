import { useEffect, useRef, useState } from "react";
import { assetPath } from "../lib/assetPath";

const CLIP_START = 8;
const CLIP_END = 48;
const CLIP_DURATION = CLIP_END - CLIP_START;

function PlayIcon({ isPlaying }) {
  if (isPlaying) {
    return (
      <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <rect x="6" y="5" width="4" height="14" rx="1" />
        <rect x="14" y="5" width="4" height="14" rx="1" />
      </svg>
    );
  }

  return (
    <svg className="ml-0.5 size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.5 5.4a1 1 0 0 1 1.53-.85l10.2 6.6a1 1 0 0 1 0 1.7l-10.2 6.6a1 1 0 0 1-1.53-.85V5.4Z" />
    </svg>
  );
}

function formatTime(seconds) {
  const safeSeconds = Math.max(0, Math.min(CLIP_DURATION, Math.floor(seconds)));
  return `0:${String(safeSeconds).padStart(2, "0")}`;
}

function MusicSection() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    const handleTimeUpdate = () => {
      if (audio.currentTime < CLIP_START) audio.currentTime = CLIP_START;

      const nextElapsed = Math.max(0, audio.currentTime - CLIP_START);
      setElapsed(Math.min(nextElapsed, CLIP_DURATION));

      if (audio.currentTime >= CLIP_END) {
        audio.pause();
        audio.currentTime = CLIP_START;
        setElapsed(0);
        setIsPlaying(false);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setElapsed(0);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    if (audio.currentTime < CLIP_START || audio.currentTime >= CLIP_END) {
      audio.currentTime = CLIP_START;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const seekTo = (event) => {
    const nextElapsed = Number(event.target.value);
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = CLIP_START + nextElapsed;
    setElapsed(nextElapsed);
  };

  return (
    <section
      className="mx-auto w-full max-w-107.5 px-6 pb-12 pt-5 [--music-gold:#b68d48] md:max-w-140"
      aria-labelledby="music-title"
    >
      <div className="mx-auto max-w-95">
        <p className="mb-3 text-center font-['Great_Vibes',cursive] text-[2.45rem] leading-none text-black">
          Naša pesma
        </p>

        <article className="overflow-hidden rounded-[1.4rem] border border-[#b68d48]/35 bg-[#faf7f1] shadow-[0_18px_38px_rgb(74_58_40_/_0.14)]">
          <div className="relative aspect-[1.38] overflow-hidden bg-[#2a211b]">
            <img
              className="h-full w-full object-cover object-[50%_35%]"
              src={assetPath("bruno-mars.jpg")}
              alt="Bruno Mars na koncertu"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 px-5 pb-4 text-white">
              <h2 id="music-title" className="font-['Playfair_Display',serif] text-[1.75rem] font-semibold leading-tight">
                Marry You
              </h2>
              <p className="mt-0.5 font-['Geist',Arial,sans-serif] text-sm text-white/80">
                Bruno Mars
              </p>
            </div>
          </div>

          <div className="px-5 pb-5 pt-4 font-['Geist',Arial,sans-serif]">
            <audio ref={audioRef} preload="metadata" src={assetPath("marry-you.mp3")} />

            <div className="flex items-center gap-4">
              <button
                className="grid size-12 shrink-0 place-items-center rounded-full bg-[#b68d48] text-white shadow-[0_8px_18px_rgb(182_141_72_/_0.3)] transition hover:scale-105 hover:bg-[#9f793d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b68d48] active:scale-95"
                type="button"
                onClick={togglePlayback}
                aria-label={isPlaying ? "Pauziraj pesmu" : "Pusti refren"}
              >
                <PlayIcon isPlaying={isPlaying} />
              </button>

              <div className="min-w-0 flex-1">
                <input
                  className="music-progress block w-full cursor-pointer"
                  type="range"
                  min="0"
                  max={CLIP_DURATION}
                  step="0.1"
                  value={elapsed}
                  onChange={seekTo}
                  aria-label="Pozicija u isečku pesme"
                  style={{ "--progress": `${(elapsed / CLIP_DURATION) * 100}%` }}
                />
                <div className="mt-1.5 flex justify-between text-[0.65rem] tabular-nums text-[#7b6b5d]">
                  <span>{formatTime(elapsed)}</span>
                  <span>0:40</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default MusicSection;
