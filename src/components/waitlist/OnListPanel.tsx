import { waitlistCopy } from '../../content'
import { DottedBanner } from './DottedBanner'

interface OnListPanelProps {
  onLeave: () => void
}

export function OnListPanel({ onLeave }: OnListPanelProps) {
  return (
    <section id="on-list" className="mx-auto mt-4 w-full max-w-[1100px] px-4 pb-8 md:px-6">
      <div className="rounded-[24px] bg-white p-4 text-neutral-900 md:p-6">
        <DottedBanner title={waitlistCopy.onListTitle} />
        <div className="mt-4 hidden md:block">
          <table className="w-full text-left text-sm">
            <thead className="text-xs text-neutral-500">
              <tr>
                <th className="py-2 font-medium">Quantity</th>
                <th className="py-2 font-medium">Ticket type</th>
                <th className="py-2 font-medium">Total Price</th>
                <th className="py-2 font-medium">Status</th>
                <th className="py-2 font-medium">Joined</th>
                <th className="py-2 font-medium">Expires</th>
                <th className="py-2 font-medium" />
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-neutral-200">
                <td className="py-4">1</td>
                <td className="py-4">General Admission</td>
                <td className="py-4">{waitlistCopy.price}</td>
                <td className="py-4 font-semibold text-green-600">{waitlistCopy.status}</td>
                <td className="py-4">{waitlistCopy.joined}</td>
                <td className="py-4">{waitlistCopy.expires}</td>
                <td className="py-4 text-right">
                  <button type="button" data-testid="leave-waitlist" onClick={onLeave} className="rounded-md bg-[#E53E3E] px-3 py-2 text-xs font-bold tracking-wide text-white">
                    LEAVE WAITLIST
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 md:hidden">
          <div className="flex items-start justify-between gap-3 font-semibold">
            <p>1x General Admission</p>
            <p>{waitlistCopy.price}</p>
          </div>
          <p className="mt-2 text-sm text-neutral-600">Joined: {waitlistCopy.joined}</p>
          <button type="button" data-testid="leave-waitlist-mobile" onClick={onLeave} className="mt-4 w-full rounded-md bg-[#E53E3E] py-3 text-sm font-bold tracking-wide text-white">
            LEAVE
          </button>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-neutral-700">
          {waitlistCopy.notify} <span className="font-semibold">{waitlistCopy.notATicket}</span>
        </p>
        <p className="mt-2 text-sm text-neutral-700">{waitlistCopy.chargeLater}</p>
      </div>
    </section>
  )
}
