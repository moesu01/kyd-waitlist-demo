import { useState } from 'react'
import { EventPage, SiteFooter, SiteHeader } from './components/event'
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
  const [autoCancel, setAutoCancel] = useState(false)
  const [useDifferentCard, setUseDifferentCard] = useState(false)

  const handleOpenJoin = () => {
    setQuantity(0)
    setAutoCancel(false)
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
    setAutoCancel(false)
    setUseDifferentCard(false)
    setScreen('event')
  }

  if (screen === 'confirmation') {
    return <ConfirmationScreen onGotIt={() => setScreen('wallet')} />
  }

  return (
    <div className="kyd-page flex min-h-screen flex-col">
      <SiteHeader />
      <EventPage showTickets={screen === 'event'} onJoinWaitlist={handleOpenJoin} />
      {renderScreen({
        screen,
        useDifferentCard,
        onUseDifferentCard: () => setUseDifferentCard(true),
        onJoin: () => setScreen('confirmation'),
        onLeave: handleLeave,
      })}
      <SiteFooter />
      <JoinWaitlistModal
        isOpen={isJoinOpen && screen === 'event'}
        quantity={quantity}
        autoCancel={autoCancel}
        onQuantityChange={setQuantity}
        onAutoCancelChange={setAutoCancel}
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
