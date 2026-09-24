import { useState } from 'react'
import { assets, eventCopy } from '../../content'

export function EventInfo() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [isArtistOpen, setIsArtistOpen] = useState(false)

  return (
    <section>
      <img
        src={assets.poster}
        alt="Peggy Gou - Live poster image"
        className="aspect-square w-full rounded-xl object-cover md:aspect-auto md:max-h-[460px]"
      />
      <div className="mt-4 text-white md:text-neutral-900">
        <h1 className="text-[1.65rem] font-bold leading-tight">{eventCopy.title}</h1>
        <h2 className="mt-1 text-lg font-medium text-white/90 md:text-neutral-700">{eventCopy.subtitle}</h2>
        <p className="mt-3 flex items-center gap-2 text-sm">
          <CalendarIcon />
          {eventCopy.when}
        </p>
        <div className="mt-3 flex items-start gap-2 text-sm">
          <PinIcon />
          <div>
            <a href={eventCopy.mapsHref} target="_blank" rel="noreferrer" className="font-semibold underline">
              {eventCopy.venue}
            </a>
            <address className="mt-1 text-white/70 not-italic md:text-neutral-500">{eventCopy.address}</address>
          </div>
        </div>
        <div className={`mt-4 text-sm leading-relaxed text-white/85 md:text-neutral-700 ${isDetailsOpen ? '' : 'line-clamp-3'}`}>
          <p className="font-semibold">{eventCopy.detailsLead}</p>
          {eventCopy.details.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mt-3">{paragraph}</p>
          ))}
        </div>
        <button
          type="button"
          className="mt-2 text-sm font-medium underline"
          aria-expanded={isDetailsOpen}
          onClick={() => setIsDetailsOpen((open) => !open)}
        >
          {isDetailsOpen ? 'Hide event details' : 'See event details'}
        </button>
        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src={assets.artist} alt={eventCopy.artist} className="h-12 w-12 rounded-full object-cover" />
            <p className="font-semibold">{eventCopy.artist}</p>
          </div>
          <button
            type="button"
            aria-label="Toggle Set times"
            aria-expanded={isArtistOpen}
            onClick={() => setIsArtistOpen((open) => !open)}
            className={`flex h-8 w-8 items-center justify-center ${isArtistOpen ? 'rotate-180' : ''}`}
          >
            <ChevronIcon />
          </button>
        </div>
      </div>
    </section>
  )
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 448 512" className="h-4 w-4 shrink-0 fill-current" aria-hidden="true">
      <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 288 512" className="mt-0.5 h-4 w-4 shrink-0 fill-current" aria-hidden="true">
      <path d="M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 448 512" className="h-3 w-3 fill-current" aria-hidden="true">
      <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
    </svg>
  )
}
