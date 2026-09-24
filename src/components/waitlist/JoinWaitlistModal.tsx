import { useState } from 'react'
import { Modal, Button, QuantityStepper, Checkbox } from '../ui'

interface JoinWaitlistModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (quantity: number, autoCancel: boolean) => void
  ticketName: string
  ticketPrice: number
}

export function JoinWaitlistModal({
  isOpen,
  onClose,
  onSubmit,
  ticketName,
  ticketPrice,
}: JoinWaitlistModalProps) {
  const [quantity, setQuantity] = useState(1)
  const [autoCancel, setAutoCancel] = useState(true)

  const handleSubmit = () => {
    onSubmit(quantity, autoCancel)
  }

  const waitlistFee = 2.50
  const totalFee = waitlistFee * quantity

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Get in line">
      <div className="space-y-6">
        <div className="bg-kyd-light-gray/50 rounded-lg p-4">
          <p className="font-medium text-kyd-charcoal">{ticketName}</p>
          <p className="text-sm text-kyd-gray">${ticketPrice.toFixed(2)} per ticket</p>
        </div>

        <div>
          <QuantityStepper
            value={quantity}
            onChange={setQuantity}
            min={1}
            max={4}
            label="How many tickets?"
          />
          <p className="text-xs text-kyd-gray mt-2">
            Maximum 4 tickets per person
          </p>
        </div>

        <Checkbox
          id="auto-cancel"
          checked={autoCancel}
          onChange={setAutoCancel}
          label="Auto-cancel if ticket isn't claimed within 10 minutes of becoming available"
        />

        <div className="border-t border-kyd-light-gray pt-4">
          <div className="flex justify-between text-sm text-kyd-gray mb-1">
            <span>Waitlist fee ({quantity}x)</span>
            <span>${totalFee.toFixed(2)}</span>
          </div>
          <p className="text-xs text-kyd-gray">
            Refundable if you don't get a ticket
          </p>
        </div>

        <Button fullWidth onClick={handleSubmit}>
          JOIN WAITLIST
        </Button>

        <p className="text-xs text-center text-kyd-gray">
          You'll be charged the waitlist fee now. If tickets become available, 
          you'll have 10 minutes to claim and pay for them.
        </p>
      </div>
    </Modal>
  )
}
