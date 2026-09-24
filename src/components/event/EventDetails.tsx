interface EventDetailsProps {
  name: string
  date: string
  time: string
  venue: string
  location: string
}

export function EventDetails({
  name,
  date,
  time,
  venue,
  location,
}: EventDetailsProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h1 className="text-2xl md:text-3xl font-bold text-kyd-charcoal mb-4">
        {name}
      </h1>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-kyd-gray">
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="font-medium">{date}</span>
        </div>
        
        <div className="flex items-center gap-3 text-kyd-gray">
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-medium">{time}</span>
        </div>
        
        <div className="flex items-start gap-3 text-kyd-gray">
          <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <p className="font-medium">{venue}</p>
            <p className="text-sm">{location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
