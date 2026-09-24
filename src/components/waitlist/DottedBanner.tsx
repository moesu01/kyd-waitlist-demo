interface DottedBannerProps {
  title: string
}

export function DottedBanner({ title }: DottedBannerProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border-2 border-dotted border-black bg-[#D3F227] px-4 py-3 text-black">
      <CardGlyph />
      <p className="text-sm font-extrabold tracking-wide">{title}</p>
    </div>
  )
}

function CardGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M2 10h20" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}
