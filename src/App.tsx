import { useState } from 'react'
import { EventPage, SiteFooter, SiteHeader } from './components/event'
import { TicketSection } from './components/event/TicketSection'
import {
  ConfirmationScreen,
  JoinWaitlistModal,
  OnListPanel,
  PaymentPage,
} from './components/waitlist'

type Screen = 'event' | 'payment' | 'confirmation' | 'wallet'

function App() {
  const [screen, setScreen] = useState<Screen>('event')
  const [isJoinOpen, setIsJoinOpen] = useState(false)
  const [quantity, setQuantity] = useState(0)
  const [useDifferentCard, setUseDifferentCard] = useState(false)

  const handleOpenJoin = () => {
    setQuantity(0)
    setIsJoinOpen(true)
  }

  const handleJoinSubmit = () => {
    if (quantity < 1) return
    setIsJoinOpen(false)
    setUseDifferentCard(false)
    setScreen('payment')
  }

  const handleLeave = () => {
    setQuantity(0)
    setUseDifferentCard(false)
    setScreen('event')
  }

  if (screen === 'confirmation') {
    return <ConfirmationScreen onGotIt={() => setScreen('wallet')} />
  }

  return (
    <div className="kyd-page flex min-h-screen flex-col">
      <SiteHeader />
      <EventPage>
        {screen === 'event' ? <TicketSection onJoinWaitlist={handleOpenJoin} /> : null}
        {renderScreen({
          screen,
          useDifferentCard,
          onUseDifferentCard: () => setUseDifferentCard(true),
          onJoin: () => setScreen('confirmation'),
          onLeave: handleLeave,
        })}
      </EventPage>
      <SiteFooter />
      <JoinWaitlistModal
        isOpen={isJoinOpen && screen === 'event'}
        quantity={quantity}
        onQuantityChange={setQuantity}
        onClose={() => setIsJoinOpen(false)}
        onSubmit={handleJoinSubmit}
      />
    </div>
  )
}

interface ScreenExtras {
  screen: Exclude<Screen, 'confirmation'>
  useDifferentCard: boolean
  onUseDifferentCard: () => void
  onJoin: () => void
  onLeave: () => void
}

function renderScreen({ screen, useDifferentCard, onUseDifferentCard, onJoin, onLeave }: ScreenExtras) {
  switch (screen) {
    case 'event':
      return null
    case 'payment':
      return (
        <PaymentPage
          useDifferentCard={useDifferentCard}
          onUseDifferentCard={onUseDifferentCard}
          onJoin={onJoin}
        />
      )
    case 'wallet':
      return <OnListPanel onLeave={onLeave} />
    default: {
      const unreachable: never = screen
      return unreachable
    }
  }
}

export default App
