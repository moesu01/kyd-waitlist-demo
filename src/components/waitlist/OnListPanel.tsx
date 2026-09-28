import { waitlistCopy } from '../../content'
import { DottedBanner } from './DottedBanner'

interface OnListPanelProps {
  onLeave: () => void
}

export function OnListPanel({ onLeave }: OnListPanelProps) {
  return (
    <section id="on-list" className="overflow-hidden rounded-t-3xl bg-white px-4 pt-4 pb-6 text-neutral-900 md:rounded-2xl md:px-6 md:pt-5 md:shadow-sm">
      <DottedBanner title={waitlistCopy.onListTitle} />

      <div className="mt-5 hidden overflow-x-auto md:block">
        <div className="grid min-w-[680px] grid-cols-[70px_1.2fr_90px_80px_110px_90px_150px] border-b border-neutral-200 pb-2 text-[11px] font-semibold tracking-[0.12em] text-neutral-400 uppercase">
          <span>Quantity</span>
          <span>Ticket type</span>
          <span>Total price</span>
          <span>Status</span>
          <span>Joined</span>
          <span>Expires</span>
          <span />
        </div>
        <div className="grid min-w-[680px] grid-cols-[70px_1.2fr_90px_80px_110px_90px_150px] items-center py-4 text-sm">
          <span className="tabular-nums">1</span>
          <span>General Admission</span>
          <span>{waitlistCopy.price}</span>
          <span>
            <span className="rounded bg-[#E7F6A4] px-1.5 py-0.5 text-[11px] font-bold text-black">{waitlistCopy.status}</span>
          </span>
          <span className="text-xs leading-tight whitespace-pre-line">{'Thu Sep\n24\n06:27PM'}</span>
          <span className="text-xs">{waitlistCopy.expires}</span>
          <button
            type="button"
            data-testid="leave-waitlist"
            onClick={onLeave}
            className="h-10 rounded-lg bg-[#e10600] px-3 text-xs font-extrabold tracking-wide text-white"
          >
            LEAVE WAITLIST
          </button>
        </div>
      </div>

      <div className="mt-5 md:hidden">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-lg font-extrabold">1x General Admission</p>
            <p className="text-sm text-neutral-600">Joined: {waitlistCopy.joined}</p>
          </div>
          <p className="text-lg font-bold">{waitlistCopy.price}</p>
        </div>
        <button
          type="button"
          data-testid="leave-waitlist-mobile"
          onClick={onLeave}
          className="mt-4 h-12 w-full rounded-lg bg-[#e10600] text-sm font-extrabold tracking-[0.14em] text-white"
        >
          LEAVE
        </button>
      </div>

      <div className="mt-5 border-t border-neutral-200 pt-4 text-sm leading-relaxed text-neutral-700">
        {waitlistCopy.notify} <strong>{waitlistCopy.notATicket}</strong>
        <p className="mt-2">{waitlistCopy.chargeLater}</p>
      </div>
    </section>
  )
}
