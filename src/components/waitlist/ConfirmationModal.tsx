import { Modal, Button } from '../ui'

interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  position: number
  ticketName: string
  quantity: number
}

export function ConfirmationModal({
  isOpen,
  onClose,
  position,
  ticketName,
  quantity,
}: ConfirmationModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} showCloseButton={false}>
      <div className="text-center space-y-6">
        <div className="w-20 h-20 mx-auto bg-kyd-lime rounded-full flex items-center justify-center">
          <svg
            className="w-10 h-10 text-kyd-charcoal"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-kyd-charcoal mb-2">
            You've been added to the waitlist!
          </h2>
          <p className="text-kyd-gray">
            You're #{position} in line for {quantity} {ticketName} ticket{quantity > 1 ? 's' : ''}.
          </p>
        </div>

        <div className="bg-kyd-light-gray/50 rounded-lg p-4 text-left">
          <h3 className="font-medium text-kyd-charcoal mb-2">What happens next?</h3>
          <ul className="text-sm text-kyd-gray space-y-2">
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-kyd-lime" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>We'll notify you when tickets become available</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-kyd-lime" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>You'll have 10 minutes to claim your spot</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-kyd-lime" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>If you don't claim them, you'll get a full refund</span>
            </li>
          </ul>
        </div>

        <Button fullWidth onClick={onClose}>
          Done
        </Button>
      </div>
    </Modal>
  )
}
