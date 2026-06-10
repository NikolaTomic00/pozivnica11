import InvitationDetailsSection from './sections/InvitationDetailsSection'
import ProfilePictureSection from './sections/ProfilePictureSection'

function App() {
  return (
    <main
      className="min-h-svh overflow-x-hidden bg-[image:var(--bg)]"
      aria-label="Wedding invitation"
    >
      <ProfilePictureSection />
      <InvitationDetailsSection />
      {/* EventTimeSection */}
      {/* CountdownSection */}
      {/* LocationSection */}
      {/* RSVPSection */}
    </main>
  )
}

export default App
