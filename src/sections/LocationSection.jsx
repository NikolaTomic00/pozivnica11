function LocationSection() {
  return (
    <section
      className="mx-auto w-full max-w-107.5 px-6 pb-12 pt-8 [--frame-gold:#b68d48] md:max-w-140"
      aria-label="Lokacija građanskog venčanja"
    >
      <div className="mx-auto max-w-96">
        <div className="overflow-hidden rounded-lg border border-[#b68d48]/60 bg-[#f6f1e9] p-1 shadow-[0_16px_30px_rgb(80_72_58_/_0.1)]">
          <iframe
            className="block h-64 w-full rounded-md border-0 sm:h-72"
            title="Mapa - Hotel Moskva, Beograd"
            src="https://www.google.com/maps?q=Hotel%20Moskva%2C%20Beograd&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
