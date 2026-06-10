function CountdownSection() {
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
      </div>
    </section>
  );
}

export default CountdownSection;
