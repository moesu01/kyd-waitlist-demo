import { EventBanner } from './EventBanner'
import { EventDetails } from './EventDetails'
import { TicketCard } from './TicketCard'

interface EventPageProps {
  isOnWaitlist: boolean
  waitlistPosition?: number
  onJoinWaitlist: () => void
  onLeaveWaitlist: () => void
}

export function EventPage({
  isOnWaitlist,
  waitlistPosition,
  onJoinWaitlist,
  onLeaveWaitlist,
}: EventPageProps) {
  return (
    <div className="min-h-screen bg-kyd-charcoal">
      <div className="max-w-2xl mx-auto px-4 py-6 md:py-10">
        <EventBanner eventName="Summer Beats Festival" />
        
        <div className="mt-6 space-y-4">
          <EventDetails
            name="Summer Beats Festival"
            date="Saturday, October 15, 2026"
            time="7:00 PM - 11:00 PM"
            venue="The Grand Arena"
            location="123 Music Lane, Los Angeles, CA 90001"
          />
          
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-white px-1">
              Tickets
            </h2>
            
            <TicketCard
              name="General Admission"
              price={75.00}
              description="Standing room only. Access to main floor."
              isSoldOut={true}
              isOnWaitlist={isOnWaitlist}
              waitlistPosition={waitlistPosition}
              onJoinWaitlist={onJoinWaitlist}
              onLeaveWaitlist={onLeaveWaitlist}
            />
            
            <TicketCard
              name="VIP Experience"
              price={150.00}
              description="Premium viewing area, complimentary drinks, exclusive merch."
              isSoldOut={true}
              isOnWaitlist={false}
              onJoinWaitlist={() => {}}
              onLeaveWaitlist={() => {}}
            />
          </div>
        </div>
        
        <footer className="mt-10 pt-6 border-t border-kyd-dark text-center">
          <p className="text-kyd-gray text-sm">
            Powered by <span className="text-kyd-lime font-semibold">KYD</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
