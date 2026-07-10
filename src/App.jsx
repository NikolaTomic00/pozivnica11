import InvitationDetailsSection from './sections/InvitationDetailsSection'
import CountdownSection from './sections/CountdownSection'
import FooterSection from './sections/FooterSection'
import ProfilePictureSection from './sections/ProfilePictureSection'
import RSVPSection from './sections/RSVPSection'
import TimelineSection from './sections/TimelineSection'
import MusicSection from './sections/MusicSection'

function App() {
  return (
    <main
      className="min-h-svh overflow-x-hidden bg-[image:var(--bg)]"
      aria-label="Wedding invitation"
    >
      <ProfilePictureSection />
      <InvitationDetailsSection />
      <TimelineSection />
      <MusicSection />
      <CountdownSection />
      <RSVPSection />
      <FooterSection />
    </main>
  )
}

export default App
