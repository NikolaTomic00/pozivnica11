import InvitationDetailsSection from './sections/InvitationDetailsSection'
import CountdownSection from './sections/CountdownSection'
import LocationSection from './sections/LocationSection'
import ProfilePictureSection from './sections/ProfilePictureSection'
import RSVPSection from './sections/RSVPSection'
import TimelineSection from './sections/TimelineSection'

function App() {
  return (
    <main
      className="min-h-svh overflow-x-hidden bg-[image:var(--bg)]"
      aria-label="Wedding invitation"
    >
      <ProfilePictureSection />
      <InvitationDetailsSection />
      <TimelineSection />
      <CountdownSection />
      <RSVPSection />
      <LocationSection />
    </main>
  )
}

export default App
