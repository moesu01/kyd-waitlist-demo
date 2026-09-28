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
    <section id="waitlist-payment" className="overflow-hidden rounded-t-3xl bg-white text-neutral-900 md:rounded-2xl md:shadow-sm">
      <form onSubmit={handleSubmit} className="px-4 pt-4 pb-6 md:px-6 md:pt-5">
        <DottedBanner title={waitlistCopy.payTitle} />
        <p className="mt-4 text-[15px] leading-relaxed text-neutral-800">
          {waitlistCopy.payIntro} <strong>{waitlistCopy.payCharge}</strong>{' '}
          <em>{waitlistCopy.payReassure}</em>
        </p>

        <div className="mt-6 border-t border-neutral-100 pt-6">
          <p className="text-center text-sm text-neutral-600">Express Checkout</p>
          <div className="mx-auto mt-3 max-w-md rounded-lg border border-neutral-200 p-3">
            <button
              type="button"
              className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#00D66F] text-[15px] font-semibold text-black"
            >
              Pay securely with
              <span className="inline-flex items-center gap-1 font-extrabold">
                <span className="grid size-4 place-items-center rounded-full bg-black text-[9px] text-[#00D66F]">▶</span>
                link
              </span>
            </button>
          </div>
          <div className="mx-auto mt-4 flex max-w-md items-center gap-3 text-xs tracking-[0.2em] text-neutral-400">
            <span className="h-px flex-1 bg-neutral-200" />
            OR
            <span className="h-px flex-1 bg-neutral-200" />
          </div>

          <div className="mx-auto mt-6 max-w-md">
            <h2 className="text-lg font-bold">Pay</h2>
            <p className="mt-3 text-[15px]">{waitlistCopy.attendeeName}</p>
            <p className="text-sm text-neutral-700">{waitlistCopy.attendeeEmail}</p>
            <button type="button" className="mt-2 text-sm font-medium text-[#0570de]">
              ✎ Change attendee
            </button>
            {useDifferentCard ? <FilledCardForm /> : <SavedCardFields onUseDifferentCard={onUseDifferentCard} />}
            <p className="mt-4 text-sm text-neutral-700">{waitlistCopy.cardCharge}</p>
            <button
              type="submit"
              data-testid="join-waitlist-pay"
              disabled={!useDifferentCard}
              className="mt-4 h-12 w-full rounded-lg text-[15px] font-semibold disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-400 enabled:bg-black enabled:text-white"
            >
              Join waitlist
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

function SavedCardFields({ onUseDifferentCard }: { onUseDifferentCard: () => void }) {
  return (
    <div className="mt-5">
      <p className="text-sm font-semibold">
        Saved Cards <span className="font-normal text-neutral-500">· CVC *</span>
      </p>
      <div className="mt-2 flex items-center gap-3 rounded-lg border border-[#0570de] px-3 py-3">
        <span className="rounded bg-[#1a1f71] px-1.5 py-0.5 text-[10px] font-bold text-white">VISA</span>
        <span className="flex-1 text-sm">•••• 4242</span>
        <input
          aria-label="CVC"
          inputMode="numeric"
          placeholder="CVC"
          className="h-9 w-20 rounded-md border border-neutral-300 px-2 text-sm outline-none focus:border-[#0570de]"
        />
      </div>
      <button
        type="button"
        data-testid="use-different-card"
        onClick={onUseDifferentCard}
        className="mt-3 text-sm font-medium text-[#0570de]"
      >
        Use a different card
      </button>
    </div>
  )
}

function FilledCardForm() {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-[1.2fr_1fr] gap-2" role="tablist" aria-label="Payment method">
        <div className="rounded-md border-2 border-[#0570de] px-3 py-2 text-[#0570de]" role="tab" aria-selected="true">
          <p className="text-lg" aria-hidden="true">💳</p>
          <p className="text-sm font-semibold">Card</p>
        </div>
        <div className="relative rounded-md border border-neutral-200 px-3 py-2 text-neutral-500" role="tab" aria-selected="false">
          <span className="absolute top-2 right-2 rounded bg-[#d7f7e4] px-1.5 py-0.5 text-[10px] font-bold text-[#0a7a32]">
            $5 back
          </span>
          <p className="text-lg" aria-hidden="true">🏦</p>
          <p className="text-sm font-semibold">Bank</p>
        </div>
      </div>
      <label className="mt-4 block text-sm text-neutral-700">
        Card number
        <span className="mt-1 flex h-11 items-center rounded-md border border-neutral-300 px-3">
          <input readOnly value={sandboxCard.number} aria-label="Card number" className="w-full bg-transparent text-sm outline-none" />
          <span className="rounded bg-[#1a1f71] px-1.5 py-0.5 text-[10px] font-bold text-white">VISA</span>
        </span>
      </label>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <label className="block text-sm text-neutral-700">
          Expiration (MM/YY)
          <input readOnly value={sandboxCard.expiry} aria-label="Expiration" className="mt-1 h-11 w-full rounded-md border border-neutral-300 px-3 text-sm outline-none" />
        </label>
        <label className="block text-sm text-neutral-700">
          Security code
          <span className="mt-1 flex h-11 items-center rounded-md border border-neutral-300 px-3">
            <input readOnly value={sandboxCard.cvc} aria-label="Security code" className="w-full bg-transparent text-sm outline-none" />
            <span className="text-[10px] text-neutral-400">123</span>
          </span>
        </label>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <label className="block text-sm text-neutral-700">
          Country
          <select aria-label="Country" defaultValue={sandboxCard.country} className="mt-1 h-11 w-full rounded-md border border-neutral-300 bg-white px-2 text-sm">
            <option>{sandboxCard.country}</option>
          </select>
        </label>
        <label className="block text-sm text-neutral-700">
          ZIP code
          <input readOnly value={sandboxCard.zip} aria-label="ZIP code" className="mt-1 h-11 w-full rounded-md border-2 border-[#0570de] px-3 text-sm outline-none" />
        </label>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-neutral-500">{waitlistCopy.stripeLegal}</p>
      <label className="mt-3 flex items-center gap-2 text-sm text-neutral-600">
        <input type="checkbox" className="size-4" />
        Save my information for faster checkout
      </label>
    </div>
  )
}
