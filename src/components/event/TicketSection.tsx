import { ticketTiers, type TicketTier } from '../../content'

interface TicketSectionProps {
  onJoinWaitlist: () => void
}

export function TicketSection({ onJoinWaitlist }: TicketSectionProps) {
  return (
    <section className="md:rounded-2xl md:bg-white md:p-6 md:text-neutral-900 md:shadow-sm">
      <div className="mb-3 flex justify-end md:hidden">
        <button type="button" className="text-[15px] font-bold text-white">
          Got a code?
        </button>
      </div>
      <div className="hidden items-start justify-between md:flex">
        <div>
          <h2 className="text-[22px] font-extrabold">Get Your Tickets</h2>
          <p className="mt-1 text-sm font-semibold">All-In Pricing. No surprises later.</p>
        </div>
        <button type="button" className="text-sm text-neutral-500">
          Got a code?
        </button>
      </div>

      <div className="mt-6 hidden md:block">
        <div className="grid grid-cols-[1fr_110px_170px] border-b border-neutral-200 pb-2 text-[11px] font-semibold tracking-[0.14em] text-neutral-400 uppercase">
          <span>Ticket type</span>
          <span className="text-right">Price</span>
          <span className="text-right">Quantity</span>
        </div>
        <ul>
          {ticketTiers.map((tier) => (
            <li key={tier.id} className="grid grid-cols-[1fr_110px_170px] items-center border-b border-neutral-100 py-4">
              <div>
                <p className="font-extrabold">{tier.name}</p>
                {tier.detail ? <p className="text-sm text-neutral-500">{tier.detail}</p> : null}
              </div>
              <p className="text-right text-sm font-semibold">{tier.price}</p>
              <div className="flex justify-end">
                <TierAction tier={tier} onJoinWaitlist={onJoinWaitlist} />
              </div>
            </li>
          ))}
        </ul>
        <button
          type="button"
          disabled
          className="mt-5 h-12 w-full cursor-not-allowed rounded-lg bg-neutral-200 text-sm font-bold tracking-wide text-neutral-400 uppercase"
        >
          Get Tickets
        </button>
      </div>

      <ul className="flex flex-col gap-3 md:hidden">
        {ticketTiers.map((tier) => (
          <li key={tier.id} className="flex items-center justify-between gap-3 rounded-2xl border border-white/30 px-4 py-4 text-white">
            <div className="min-w-0">
              <p className="text-[17px] leading-tight font-extrabold">{tier.name}</p>
              {tier.detail ? <p className="mt-1 text-sm text-white/70">{tier.detail}</p> : null}
            </div>
            <TierAction tier={tier} onJoinWaitlist={onJoinWaitlist} mobile />
          </li>
        ))}
      </ul>
    </section>
  )
}

function TierAction({ tier, onJoinWaitlist, mobile = false }: TierActionProps) {
  if (tier.kind === 'listed') {
    return (
      <span className="inline-flex min-w-[108px] items-center justify-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-3 py-2 text-center text-xs leading-tight font-semibold text-neutral-800">
        <span className="text-green-600" aria-hidden="true">✓</span>
        Tickets listed
      </span>
    )
  }

  if (tier.kind === 'waitlist') {
    return (
      <button
        type="button"
        data-testid="join-waitlist-tier"
        onClick={onJoinWaitlist}
        className="min-w-[108px] rounded-lg border border-neutral-200 bg-white px-3 py-3 text-center text-[13px] leading-tight font-extrabold tracking-wide text-black uppercase"
      >
        Join
        <br />
        Waitlist
      </button>
    )
  }

  if (tier.kind === 'soldout') {
    return <span className="text-sm font-semibold text-neutral-400">Sold Out</span>
  }

  if (mobile) {
    return (
      <div className="text-right">
        <p className="text-sm font-bold">{tier.price}</p>
        <p className="text-[10px] text-white/60">All-in price.</p>
        <p className="text-3xl leading-none font-light tabular-nums">0</p>
        <p className="text-[10px] text-white/60">⌄ Qty</p>
        <p className="text-[10px] text-white/50">No surprises.</p>
      </div>
    )
  }

  return (
    <div className="text-right">
      <p className="text-2xl leading-none font-light tabular-nums">0</p>
      <p className="text-[11px] text-neutral-400">Qty ⌄</p>
    </div>
  )
}

interface TierActionProps {
  tier: TicketTier
  onJoinWaitlist: () => void
  mobile?: boolean
}
