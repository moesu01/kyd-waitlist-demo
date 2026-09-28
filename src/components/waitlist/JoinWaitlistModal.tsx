import { useEffect, useState } from 'react'
import { waitlistCopy } from '../../content'

type CancelUnit = 'hours' | 'days' | 'week'

interface JoinWaitlistModalProps {
  isOpen: boolean
  quantity: number
  onQuantityChange: (quantity: number) => void
  onClose: () => void
  onSubmit: () => void
}

const UNIT_MAX: Record<CancelUnit, number> = {
  hours: 48,
  days: 30,
  week: 12,
}

const DEFAULT_CANCEL_AMOUNT = 1
const DEFAULT_CANCEL_UNIT: CancelUnit = 'days'

function clampCancelAmount(amount: number, unit: CancelUnit) {
  return Math.min(Math.max(1, amount), UNIT_MAX[unit])
}

function amountOptionsFor(unit: CancelUnit) {
  return Array.from({ length: UNIT_MAX[unit] }, (_, index) => index + 1)
}

function isCancelUnit(value: string): value is CancelUnit {
  return value === 'hours' || value === 'days' || value === 'week'
}

export function JoinWaitlistModal({
  isOpen,
  quantity,
  onQuantityChange,
  onClose,
  onSubmit,
}: JoinWaitlistModalProps) {
  const [cancelAmount, setCancelAmount] = useState(DEFAULT_CANCEL_AMOUNT)
  const [cancelUnit, setCancelUnit] = useState<CancelUnit>(DEFAULT_CANCEL_UNIT)
  const [neverCancel, setNeverCancel] = useState(false)
  const [wasOpen, setWasOpen] = useState(isOpen)

  if (isOpen !== wasOpen) {
    setWasOpen(isOpen)
    if (isOpen) {
      setCancelAmount(DEFAULT_CANCEL_AMOUNT)
      setCancelUnit(DEFAULT_CANCEL_UNIT)
      setNeverCancel(false)
    }
  }

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
  const selectsDisabled = neverCancel

  const handleUnitChange = (value: string) => {
    if (!isCancelUnit(value)) return
    setCancelUnit(value)
    setCancelAmount((current) => clampCancelAmount(current, value))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 md:items-center" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="get-in-line-title"
        data-testid="join-modal"
        onClick={(event) => event.stopPropagation()}
        className="max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-white px-5 pt-5 pb-6 text-neutral-900 shadow-2xl md:max-w-[420px] md:rounded-2xl md:px-6"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="get-in-line-title" className="text-2xl font-bold">{waitlistCopy.modalTitle}</h2>
          <button type="button" aria-label="Close" onClick={onClose} className="text-2xl leading-none text-neutral-700">
            ×
          </button>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-neutral-500">{waitlistCopy.modalBody}</p>
        <div className="mt-4 overflow-hidden rounded-2xl bg-black text-white">
          <div className="flex items-center justify-between px-4 py-3">
            <p className="flex items-center gap-2 text-sm font-extrabold tracking-wide">
              <span aria-hidden="true">🎟</span>
              {waitlistCopy.tierName}
            </p>
            <p className="text-lg font-extrabold text-[#D3F227]">{waitlistCopy.price}</p>
          </div>
          <div className="grid grid-cols-3 items-center bg-[#141414] px-6 py-5">
            <button
              type="button"
              aria-label="Decrease quantity"
              disabled={quantity === 0}
              onClick={() => onQuantityChange(Math.max(0, quantity - 1))}
              className="justify-self-center text-3xl text-white/80 disabled:text-white/25"
            >
              −
            </button>
            <span className="grid size-14 justify-self-center place-items-center rounded-full bg-[#4a4a4a] text-2xl font-semibold tabular-nums">
              {quantity}
            </span>
            <button
              type="button"
              aria-label="Add icon"
              onClick={() => onQuantityChange(Math.min(8, quantity + 1))}
              className="grid size-12 justify-self-center place-items-center rounded-full bg-[#5a5a5a] text-2xl"
            >
              +
            </button>
          </div>
        </div>
        <div className="mt-4 space-y-3 rounded-xl border border-neutral-200 px-3 py-3">
          <p className="text-sm font-medium text-neutral-700">{waitlistCopy.cancelBeforeLabel}</p>
          <div className={`flex flex-wrap items-center gap-2 text-sm ${selectsDisabled ? 'opacity-40' : ''}`}>
            <label className="sr-only" htmlFor="cancel-amount">
              Cancel amount
            </label>
            <select
              id="cancel-amount"
              value={cancelAmount}
              disabled={selectsDisabled}
              onChange={(event) => setCancelAmount(Number(event.target.value))}
              className="rounded-xl border border-neutral-200 bg-white px-3 py-2 tabular-nums disabled:cursor-not-allowed"
            >
              {amountOptionsFor(cancelUnit).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <label className="sr-only" htmlFor="cancel-unit">
              Cancel unit
            </label>
            <select
              id="cancel-unit"
              value={cancelUnit}
              disabled={selectsDisabled}
              onChange={(event) => handleUnitChange(event.target.value)}
              className="rounded-xl border border-neutral-200 bg-white px-3 py-2 disabled:cursor-not-allowed"
            >
              <option value="hours">{waitlistCopy.cancelUnitHours}</option>
              <option value="days">{waitlistCopy.cancelUnitDays}</option>
              <option value="week">{waitlistCopy.cancelUnitWeek}</option>
            </select>
            <span className="text-neutral-600">{waitlistCopy.cancelBeforeEvent}</span>
          </div>
          <label className="flex cursor-pointer items-center gap-3 text-sm">
            <input
              type="checkbox"
              checked={neverCancel}
              onChange={(event) => setNeverCancel(event.target.checked)}
              className="size-4 accent-neutral-900"
            />
            {waitlistCopy.neverCancelLabel}
          </label>
        </div>
        <button
          type="button"
          data-testid="join-waitlist-submit"
          disabled={!canJoin}
          onClick={onSubmit}
          className="mt-4 h-14 w-full rounded-xl text-sm font-extrabold tracking-[0.12em] uppercase disabled:cursor-not-allowed disabled:bg-[#E7F6A4] disabled:text-neutral-400 enabled:bg-[#D3F227] enabled:text-black"
        >
          Join Waitlist
        </button>
      </div>
    </div>
  )
}
