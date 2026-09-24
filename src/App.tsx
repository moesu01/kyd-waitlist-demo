import { useState } from 'react'
import { EventPage } from './components/event'
import {
  JoinWaitlistModal,
  PaymentForm,
  ConfirmationModal,
  LeaveWaitlistModal,
} from './components/waitlist'

type WaitlistStep = 'idle' | 'join' | 'payment' | 'confirmation' | 'leave'

interface WaitlistState {
  isOnWaitlist: boolean
  position: number
  quantity: number
}

function App() {
  const [step, setStep] = useState<WaitlistStep>('idle')
  const [waitlistState, setWaitlistState] = useState<WaitlistState>({
    isOnWaitlist: false,
    position: 0,
    quantity: 1,
  })

  const ticketInfo = {
    name: 'General Admission',
    price: 75.00,
    waitlistFee: 2.50,
  }

  const handleJoinWaitlist = () => {
    setStep('join')
  }

  const handleLeaveWaitlist = () => {
    setStep('leave')
  }

  const handleJoinSubmit = (quantity: number) => {
    setWaitlistState(prev => ({ ...prev, quantity }))
    setStep('payment')
  }

  const handlePaymentSubmit = () => {
    const randomPosition = Math.floor(Math.random() * 50) + 1
    setWaitlistState(prev => ({
      ...prev,
      isOnWaitlist: true,
      position: randomPosition,
    }))
    setStep('confirmation')
  }

  const handleConfirmationClose = () => {
    setStep('idle')
  }

  const handleLeaveConfirm = () => {
    setWaitlistState({
      isOnWaitlist: false,
      position: 0,
      quantity: 1,
    })
    setStep('idle')
  }

  const handleClose = () => {
    setStep('idle')
  }

  return (
    <>
      <EventPage
        isOnWaitlist={waitlistState.isOnWaitlist}
        waitlistPosition={waitlistState.position}
        onJoinWaitlist={handleJoinWaitlist}
        onLeaveWaitlist={handleLeaveWaitlist}
      />

      <JoinWaitlistModal
        isOpen={step === 'join'}
        onClose={handleClose}
        onSubmit={handleJoinSubmit}
        ticketName={ticketInfo.name}
        ticketPrice={ticketInfo.price}
      />

      <PaymentForm
        isOpen={step === 'payment'}
        onClose={handleClose}
        onSubmit={handlePaymentSubmit}
        amount={ticketInfo.waitlistFee * waitlistState.quantity}
        description={`Waitlist fee (${waitlistState.quantity}x)`}
      />

      <ConfirmationModal
        isOpen={step === 'confirmation'}
        onClose={handleConfirmationClose}
        position={waitlistState.position}
        ticketName={ticketInfo.name}
        quantity={waitlistState.quantity}
      />

      <LeaveWaitlistModal
        isOpen={step === 'leave'}
        onClose={handleClose}
        onConfirm={handleLeaveConfirm}
        position={waitlistState.position}
      />
    </>
  )
}

export default App
