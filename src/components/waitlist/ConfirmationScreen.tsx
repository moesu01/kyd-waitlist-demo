import { assets, waitlistCopy } from '../../content'

interface ConfirmationScreenProps {
  onGotIt: () => void
}

export function ConfirmationScreen({ onGotIt }: ConfirmationScreenProps) {
  return (
    <div className="flex min-h-dvh flex-col bg-white text-neutral-900">
      <div className="flex flex-1 flex-col items-center px-6 pt-16 text-center md:pt-28">
        <img src={assets.kydDark} alt="kyd labs" className="h-10 w-auto object-contain" />
        <p className="mt-8 flex items-start justify-center gap-2 text-xl font-extrabold md:text-2xl">
          <span className="mt-0.5 text-green-600" aria-hidden="true">✅</span>
          <span>{waitlistCopy.confirmTitle}</span>
        </p>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-500">
          <span aria-hidden="true">👋 </span>
          {waitlistCopy.confirmBody}
        </p>
        <button
          type="button"
          data-testid="got-it"
          onClick={onGotIt}
          className="mt-10 hidden h-11 items-center rounded-lg bg-black px-8 text-sm font-semibold text-white md:inline-flex"
        >
          Got it
        </button>
      </div>
      <div className="px-4 pb-6 md:hidden">
        <button
          type="button"
          data-testid="got-it-mobile"
          onClick={onGotIt}
          className="h-12 w-full rounded-lg bg-black text-base font-semibold text-white"
        >
          Got it
        </button>
      </div>
    </div>
  )
}
