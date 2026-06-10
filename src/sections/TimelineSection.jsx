import { Button } from "../components/ui/button";
import { assetPath } from "../lib/assetPath";

function MapPinIcon() {
  return (
    <svg
      className="size-3.5"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function TimelineEvent({ icon, title, address, time, mapUrl }) {
  return (
    <article className="text-center">
      <div className="relative mx-auto mb-5 h-42 w-44 overflow-hidden">
        <img
          className="absolute -top-3 left-1/2 w-130 max-w-none -translate-x-1/2"
          src={icon}
          alt=""
        />
      </div>

      <div className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-lg leading-6">{address}</p>
          <p className="text-2xl font-bold tracking-[0.12em]">{time}</p>
        </div>

        <Button
          as="a"
          size="compact"
          href={mapUrl}
          target="_blank"
          rel="noreferrer"
        >
          <MapPinIcon />
          Pogledaj na mapi
        </Button>
      </div>
    </article>
  );
}

function TimelineSection() {
  return (
    <section
      className="mx-auto w-full max-w-107.5 px-6 pb-8 pt-16 [--frame-gold:#b68d48] md:max-w-140"
      aria-label="Wedding day timeline"
    >
      <div className="mx-auto space-y-14 font-['Geist',Arial,sans-serif] text-black">
        <TimelineEvent
          icon={assetPath("3.1.png")}
          title="Crkveno venčanje"
          address="Kralja Petra 5, Beograd"
          time="13:00h"
          mapUrl="https://www.google.com/maps/search/?api=1&query=Kralja%20Petra%205%2C%20Beograd"
        />

        <TimelineEvent
          icon={assetPath("3.2.png")}
          title="Svečana proslava"
          address="Hotel Moskva, Beograd"
          time="15:00h"
          mapUrl="https://www.google.com/maps/search/?api=1&query=Hotel%20Moskva%2C%20Beograd"
        />

        <TimelineEvent
          icon={assetPath("3.3.png")}
          title="Građansko venčanje"
          address="Hotel Moskva, Beograd"
          time="16:00h"
          mapUrl="https://www.google.com/maps/search/?api=1&query=Hotel%20Moskva%2C%20Beograd"
        />
      </div>
    </section>
  );
}

export default TimelineSection;
