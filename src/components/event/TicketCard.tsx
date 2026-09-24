import { Button } from '../ui'

interface TicketCardProps {
  name: string
  price: number
  description?: string
  isSoldOut: boolean
  isOnWaitlist: boolean
  waitlistPosition?: number
  onJoinWaitlist: () => void
  onLeaveWaitlist: () => void
}

export function TicketCard({
  name,
  price,
  description,
  isSoldOut,
  isOnWaitlist,
  waitlistPosition,
  onJoinWaitlist,
  onLeaveWaitlist,
}: TicketCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold text-kyd-charcoal">{name}</h3>
            {isSoldOut && !isOnWaitlist && (
              <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-medium rounded">
                SOLD OUT
              </span>
            )}
          </div>
          
          <p className="text-2xl font-bold text-kyd-charcoal mb-1">
            ${price.toFixed(2)}
          </p>
          
          {description && (
            <p className="text-sm text-kyd-gray">{description}</p>
          )}
        </div>
        
        <div className="flex flex-col items-stretch md:items-end gap-2">
          {isOnWaitlist ? (
            <>
              <div className="bg-kyd-lime/20 border border-kyd-lime rounded-lg px-4 py-3 text-center">
                <p className="text-xs font-medium text-kyd-charcoal uppercase tracking-wide">
                  You are on the list
                </p>
                {waitlistPosition && (
                  <p className="text-lg font-bold text-kyd-charcoal">
                    Position #{waitlistPosition}
                  </p>
                )}
              </div>
              <Button
                variant="destructive"
                onClick={onLeaveWaitlist}
                className="text-sm"
              >
                LEAVE WAITLIST
              </Button>
            </>
          ) : isSoldOut ? (
            <Button onClick={onJoinWaitlist}>
              JOIN WAITLIST
            </Button>
          ) : (
            <Button>
              GET TICKETS
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
