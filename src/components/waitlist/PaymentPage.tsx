import type { FormEvent } from 'react'
import { sandboxCard, waitlistCopy } from '../../content'
import { DottedBanner } from './DottedBanner'

interface PaymentPageProps {
  useDifferentCard: boolean
  onUseDifferentCard: () => void
  onJoin: () => void
}

export function PaymentPage({ useDifferentCard, onUseDifferentCard, onJoin }: PaymentPageProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!useDifferentCard) return
    onJoin()
  }

  return (
    <section id="waitlist-payment" className="mx-auto mt-4 w-full max-w-[1100px] px-4 pb-8 md:px-6">
      <form
        onSubmit={handleSubmit}
        className="rounded-[24px] bg-white p-4 text-neutral-900 shadow-sm md:p-6"
      >
        <DottedBanner title={waitlistCopy.payTitle} />
        <p className="mt-4 text-sm leading-relaxed text-neutral-700">{waitlistCopy.payIntro}</p>
        <p className="mt-3 text-sm font-bold leading-relaxed">{waitlistCopy.payCharge}</p>
        <h2 className="mt-6 text-lg font-bold">Pay</h2>
        <div className="mt-3 rounded-lg border border-neutral-200 p-3">
          <p className="text-xs text-neutral-500">Express Checkout</p>
          <button
            type="button"
            className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#00D66F] text-sm font-bold text-[#011E0F]"
          >
            <span className="text-base">▶</span> Link
          </button>
        </div>
        <div className="my-4 flex items-center gap-3 text-xs text-neutral-400">
          <span className="h-px flex-1 bg-neutral-200" />
          Or
          <span className="h-px flex-1 bg-neutral-200" />
        </div>
        <p className="text-sm font-medium">{waitlistCopy.attendeeName}</p>
        <p className="text-sm text-neutral-500">{waitlistCopy.attendeeEmail}</p>
        {useDifferentCard ? <FilledCardForm /> : <SavedCardFields onUseDifferentCard={onUseDifferentCard} />}
        <p className="mt-4 text-center text-xs text-neutral-500">{waitlistCopy.cardCharge}</p>
        <button
          type="submit"
          data-testid="join-waitlist-pay"
          disabled={!useDifferentCard}
          className="mt-3 w-full rounded-lg bg-neutral-200 py-3 text-sm font-semibold text-neutral-400 disabled:cursor-not-allowed enabled:bg-black enabled:text-white"
        >
          Join waitlist
        </button>
      </form>
    </section>
  )
}

function SavedCardFields({ onUseDifferentCard }: { onUseDifferentCard: () => void }) {
  return (
    <div className="mt-4">
      <div className="rounded-md border border-neutral-200">
        <p className="border-b border-neutral-200 px-3 py-2 text-sm font-medium">Saved Cards</p>
        <label className="flex items-center gap-3 px-3 py-3 text-sm">
          <span>
            CVC <span className="text-red-500">*</span>
          </span>
          <input
            aria-label="CVC"
            inputMode="numeric"
            className="h-10 flex-1 rounded-md border border-neutral-300 px-3 outline-none focus:border-[#0570de] focus:ring-1 focus:ring-[#0570de]"
          />
        </label>
      </div>
      <button type="button" data-testid="use-different-card" onClick={onUseDifferentCard} className="mt-3 text-sm font-medium text-[#0570de]">
        Use a different card
      </button>
    </div>
  )
}

function FilledCardForm() {
  return (
    <div className="mt-4">
      <div role="tablist" aria-label="Payment method" className="flex border-b border-neutral-200 text-sm font-medium">
        <button type="button" role="tab" aria-selected="true" className="border-b-2 border-[#0570de] px-4 py-2 text-[#0570de]">
          Card
        </button>
        <button type="button" role="tab" aria-selected="false" className="px-4 py-2 text-neutral-500">
          Bank
        </button>
      </div>
      <label className="mt-3 block text-xs text-neutral-500">
        Card number
        <input
          readOnly
          value={sandboxCard.number}
          aria-label="Card number"
          className="mt-1 h-11 w-full rounded-md border border-neutral-300 px-3 text-sm text-neutral-900 outline-none"
        />
      </label>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <label className="text-xs text-neutral-500">
          Expiration (MM/YY)
          <input
            readOnly
            value={sandboxCard.expiry}
            aria-label="Expiration"
            className="mt-1 h-11 w-full rounded-md border border-neutral-300 px-3 text-sm text-neutral-900 outline-none"
          />
        </label>
        <label className="text-xs text-neutral-500">
          Security code
          <input
            readOnly
            value={sandboxCard.cvc}
            aria-label="Security code"
            className="mt-1 h-11 w-full rounded-md border border-neutral-300 px-3 text-sm text-neutral-900 outline-none"
          />
        </label>
      </div>
      <label className="mt-3 block text-xs text-neutral-500">
        Country
        <select aria-label="Country" value={sandboxCard.country} disabled className="mt-1 h-11 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900">
          <option>{sandboxCard.country}</option>
        </select>
      </label>
      <label className="mt-3 block text-xs text-neutral-500">
        ZIP code
        <input
          readOnly
          value={sandboxCard.zip}
          aria-label="ZIP code"
          className="mt-1 h-11 w-full rounded-md border border-neutral-300 px-3 text-sm text-neutral-900 outline-none"
        />
      </label>
      <p className="mt-3 text-xs leading-relaxed text-neutral-500">{waitlistCopy.stripeLegal}</p>
    </div>
  )
}
