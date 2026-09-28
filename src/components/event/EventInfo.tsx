import { useState } from 'react'
import { assets, eventCopy } from '../../content'

export function EventInfo() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [isArtistOpen, setIsArtistOpen] = useState(false)

  return (
    <div className="md:flex md:gap-5">
      <img
        src={assets.poster}
        alt="Peggy Gou - Live poster image"
        className="mx-auto aspect-square w-44 rounded-md object-cover md:mx-0 md:w-40 md:shrink-0"
      />
      <div className="mt-4 min-w-0 text-white md:mt-0 md:text-neutral-900">
        <h1 className="text-[28px] leading-none font-extrabold tracking-tight">{eventCopy.title}</h1>
        <h2 className="mt-2 text-base font-medium">{eventCopy.subtitle}</h2>
        <p className="mt-3 flex items-center gap-2 text-sm font-semibold">
          <CalendarIcon />
          {eventCopy.when}
        </p>
        <div className="mt-3 flex items-start gap-2">
          <PinIcon />
          <div>
            <a
              href={eventCopy.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="text-base font-bold underline decoration-1 underline-offset-2 md:text-blue-700"
            >
              {eventCopy.venue}
            </a>
            <address className="mt-0.5 text-sm not-italic text-white/75 md:text-neutral-500">
              {eventCopy.address}
            </address>
          </div>
        </div>

        <div className="mt-4 hidden md:block">
          <h3 className="text-[15px] font-bold">{eventCopy.detailsLead}</h3>
          <p className={isDetailsOpen ? 'mt-1 text-sm leading-relaxed text-neutral-400' : 'mt-1 line-clamp-1 text-sm leading-relaxed text-neutral-400'}>
            {eventCopy.details[0]}
          </p>
          <button
            type="button"
            className="mt-1 text-sm font-semibold text-blue-700"
            aria-expanded={isDetailsOpen}
            onClick={() => setIsDetailsOpen((open) => !open)}
          >
            See event details
          </button>
          <div className="mt-4 flex items-center justify-between rounded-xl bg-[#eef1f6] px-3 py-2.5">
            <div className="flex items-center gap-3">
              <img src={assets.artist} alt={eventCopy.artist} className="size-9 rounded-full object-cover" />
              <p className="font-semibold">{eventCopy.artist}</p>
            </div>
            <button
              type="button"
              aria-label="Toggle Set times"
              aria-expanded={isArtistOpen}
              onClick={() => setIsArtistOpen((open) => !open)}
              className="grid size-8 place-items-center text-neutral-600"
            >
              <ChevronIcon className={isArtistOpen ? 'rotate-180' : ''} />
            </button>
          </div>
          {isArtistOpen ? <p className="px-3 pt-2 text-sm text-neutral-500">Set times to be announced.</p> : null}
        </div>
      </div>
    </div>
  )
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 448 512" className="size-4 shrink-0 fill-current" aria-hidden="true">
      <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 288 512" className="mt-1 size-4 shrink-0 fill-current" aria-hidden="true">
      <path d="M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z" />
    </svg>
  )
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 448 512" className={`size-3 fill-current ${className ?? ''}`} aria-hidden="true">
      <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
    </svg>
  )
}
