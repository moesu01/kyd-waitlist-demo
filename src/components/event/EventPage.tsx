import type { ReactNode } from 'react'
import { EventInfo } from './EventInfo'

interface EventPageProps {
  children?: ReactNode
}

export function EventPage({ children }: EventPageProps) {
  return (
    <main className="mx-auto flex w-full max-w-[760px] flex-col gap-4 px-4 pb-10 md:gap-5 md:px-6">
      <section className="md:rounded-2xl md:bg-white md:p-6 md:shadow-sm">
        <EventInfo />
      </section>
      {children}
    </main>
  )
}
