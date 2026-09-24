import { EventInfo } from './EventInfo'
import { TicketSection } from './TicketSection'

interface EventPageProps {
  showTickets: boolean
  onJoinWaitlist: () => void
}

export function EventPage({ showTickets, onJoinWaitlist }: EventPageProps) {
  const layoutClass = showTickets
    ? 'md:grid md:grid-cols-2 md:items-start md:gap-5'
    : 'md:grid md:grid-cols-[minmax(0,280px)_1fr] md:items-start md:gap-6'

  return (
    <div className="mx-auto w-full max-w-[1100px] px-4 pb-4 md:px-6">
      <div className={`md:rounded-[24px] md:bg-white md:p-5 ${layoutClass}`}>
        <EventInfo />
        {showTickets ? <TicketSection onJoinWaitlist={onJoinWaitlist} /> : null}
      </div>
    </div>
  )
}
