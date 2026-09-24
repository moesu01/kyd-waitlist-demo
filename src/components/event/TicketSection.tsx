import { useState } from 'react'
import { ticketTiers, type TicketTier } from '../../content'
import { QuantityStepper } from '../ui/QuantityStepper'

interface TicketSectionProps {
  onJoinWaitlist: () => void
}

export function TicketSection({ onJoinWaitlist }: TicketSectionProps) {
  const [quantities, setQuantities] = useState<Record<string, number>>({})

  const handleQuantity = (id: string, value: number) => {
    setQuantities((current) => ({ ...current, [id]: value }))
  }

  return (
    <section className="mt-6 md:mt-0">
      <div className="md:text-neutral-900">
        <h2 className="text-xl font-bold text-white md:text-neutral-900">Get Your Tickets</h2>
        <div className="mt-1 flex items-start justify-between gap-3 text-sm">
          <p className="text-white/70 md:text-neutral-500">All-In Pricing. No surprises later.</p>
          <button type="button" className="shrink-0 font-medium text-white underline md:text-neutral-900">
            Got a code?
          </button>
        </div>
      </div>

      <div className="mt-4 hidden md:block">
        <table className="w-full text-left text-sm text-neutral-900">
          <thead>
            <tr className="border-b border-neutral-200 text-xs text-neutral-500">
              <th className="py-2 font-medium">Ticket Type</th>
              <th className="py-2 font-medium">Price</th>
              <th className="py-2 text-right font-medium">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {ticketTiers.map((tier) => (
              <tr key={tier.id} className="border-b border-neutral-100">
                <td className="py-3 pr-3 font-medium">{tier.name}</td>
                <td className="py-3">{tier.price ?? ''}</td>
                <td className="py-3">
                  <div className="flex justify-end">
                    <TierAction
                      tier={tier}
                      quantity={quantities[tier.id] ?? 0}
                      tone="light"
                      onJoinWaitlist={onJoinWaitlist}
                      onQuantity={(value) => handleQuantity(tier.id, value)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 space-y-3 md:hidden">
        {ticketTiers.map((tier) => (
          <article key={tier.id} className="rounded-xl border border-white/70 px-4 py-3 text-white">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-semibold">{tier.name}</p>
                {tier.price ? <p className="mt-1 text-sm">{tier.price}</p> : null}
              </div>
              <TierAction
                tier={tier}
                quantity={quantities[tier.id] ?? 0}
                tone="dark"
                onJoinWaitlist={onJoinWaitlist}
                onQuantity={(value) => handleQuantity(tier.id, value)}
              />
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        disabled
        className="mx-auto mt-5 block w-full cursor-not-allowed rounded-full bg-neutral-200 py-3 text-sm font-semibold text-neutral-400 md:w-56"
      >
        Get Tickets
      </button>
    </section>
  )
}

interface TierActionProps {
  tier: TicketTier
  quantity: number
  tone: 'light' | 'dark'
  onJoinWaitlist: () => void
  onQuantity: (value: number) => void
}

function TierAction({ tier, quantity, tone, onJoinWaitlist, onQuantity }: TierActionProps) {
  if (tier.kind === 'listed') {
    return (
      <span className="inline-flex items-center gap-1 text-sm font-medium text-green-600">
        <span aria-hidden="true">✓</span> Tickets listed
      </span>
    )
  }

  if (tier.kind === 'soldout') {
    return <span className={tone === 'dark' ? 'text-sm text-white/60' : 'text-sm text-neutral-400'}>Sold Out</span>
  }

  if (tier.kind === 'waitlist') {
    const buttonClass = tone === 'dark'
      ? 'rounded-full bg-white px-4 py-2 text-xs font-bold tracking-wide text-black'
      : 'rounded-full bg-black px-4 py-2 text-xs font-bold tracking-wide text-white'
    return (
      <button type="button" data-testid="join-waitlist-tier" onClick={onJoinWaitlist} className={buttonClass}>
        JOIN WAITLIST
      </button>
    )
  }

  return <QuantityStepper value={quantity} onChange={onQuantity} tone={tone} />
}
