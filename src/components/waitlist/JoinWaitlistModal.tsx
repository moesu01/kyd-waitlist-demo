import { useEffect } from 'react'
import { waitlistCopy } from '../../content'
import { QuantityStepper } from '../ui/QuantityStepper'

interface JoinWaitlistModalProps {
  isOpen: boolean
  quantity: number
  autoCancel: boolean
  onQuantityChange: (quantity: number) => void
  onAutoCancelChange: (checked: boolean) => void
  onClose: () => void
  onSubmit: () => void
}

export function JoinWaitlistModal({
  isOpen,
  quantity,
  autoCancel,
  onQuantityChange,
  onAutoCancelChange,
  onClose,
  onSubmit,
}: JoinWaitlistModalProps) {
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previous
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const canJoin = quantity > 0

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 md:items-center" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="get-in-line-title"
        data-testid="join-modal"
        onClick={(event) => event.stopPropagation()}
        className="max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-white px-5 pb-6 pt-5 text-neutral-900 shadow-2xl md:max-w-[460px] md:rounded-3xl md:px-6"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="get-in-line-title" className="text-2xl font-bold">{waitlistCopy.modalTitle}</h2>
          <button type="button" aria-label="Close" onClick={onClose} className="text-2xl leading-none text-neutral-700">
            ×
          </button>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-neutral-500">{waitlistCopy.modalBody}</p>
        <div className="mt-5 flex items-center justify-between gap-3 rounded-full bg-black px-4 py-3 text-white">
          <span className="flex min-w-0 items-center gap-2 text-xs font-bold tracking-wide">
            <TicketIcon />
            <span className="truncate">{waitlistCopy.tierName}</span>
          </span>
          <span className="text-sm font-semibold">{waitlistCopy.price}</span>
          <QuantityStepper value={quantity} onChange={onQuantityChange} tone="pill" />
        </div>
        <label className="mt-5 flex items-center gap-3 text-sm">
          <input
            type="checkbox"
            checked={autoCancel}
            onChange={(event) => onAutoCancelChange(event.target.checked)}
            className="h-4 w-4 accent-black"
          />
          {waitlistCopy.cancelLabel}
        </label>
        <button
          type="button"
          data-testid="join-waitlist-submit"
          disabled={!canJoin}
          onClick={onSubmit}
          className="mt-6 w-full rounded-full bg-neutral-200 py-3.5 text-sm font-extrabold tracking-wide text-neutral-400 disabled:cursor-not-allowed enabled:bg-[#D3F227] enabled:text-black"
        >
          JOIN WAITLIST
        </button>
      </div>
    </div>
  )
}

function TicketIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current" aria-hidden="true">
      <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h13A2.5 2.5 0 0 1 21 8.5V10a1.5 1.5 0 0 0 0 3v1.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 14.5V13a1.5 1.5 0 0 0 0-3V8.5Z" />
    </svg>
  )
}
