import { Modal, Button } from '../ui'

interface LeaveWaitlistModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  position: number
}

export function LeaveWaitlistModal({
  isOpen,
  onClose,
  onConfirm,
  position,
}: LeaveWaitlistModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Leave waitlist?">
      <div className="space-y-6">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          
          <p className="text-kyd-charcoal">
            You're currently <strong>#{position}</strong> on the waitlist. If you leave, you'll lose your position and won't be able to get it back.
          </p>
        </div>

        <div className="bg-kyd-light-gray/50 rounded-lg p-4">
          <p className="text-sm text-kyd-gray">
            Your waitlist fee will be refunded within 5-10 business days.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            variant="destructive"
            fullWidth
            onClick={onConfirm}
          >
            Yes, leave waitlist
          </Button>
          <Button
            variant="secondary"
            fullWidth
            onClick={onClose}
          >
            Keep my spot
          </Button>
        </div>
      </div>
    </Modal>
  )
}
