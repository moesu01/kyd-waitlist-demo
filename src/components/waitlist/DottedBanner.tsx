interface DottedBannerProps {
  title: string
}

export function DottedBanner({ title }: DottedBannerProps) {
  return (
    <div className="kyd-dots flex items-center gap-3 rounded-xl px-3 py-3 text-black">
      <span className="grid size-9 place-items-center rounded-md bg-black text-[#D3F227]">
        <TicketMark />
      </span>
      <span className="grid size-9 place-items-center rounded-md bg-black text-white">
        <LockMark />
      </span>
      <p className="text-lg font-extrabold tracking-wide uppercase">{title}</p>
    </div>
  )
}

function TicketMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
      <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5V9a1.5 1.5 0 0 0 0 3v1.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 13.5V12a1.5 1.5 0 0 0 0-3V7.5Z" />
    </svg>
  )
}

function LockMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
      <path d="M8 10V8a4 4 0 1 1 8 0v2h1.2A1.8 1.8 0 0 1 19 11.8v6.4A1.8 1.8 0 0 1 17.2 20H6.8A1.8 1.8 0 0 1 5 18.2v-6.4A1.8 1.8 0 0 1 6.8 10H8Zm1.4 0h5.2V8a2.6 2.6 0 1 0-5.2 0v2Z" />
    </svg>
  )
}
