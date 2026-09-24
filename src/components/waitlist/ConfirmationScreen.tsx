import { assets, waitlistCopy } from '../../content'

interface ConfirmationScreenProps {
  onGotIt: () => void
}

export function ConfirmationScreen({ onGotIt }: ConfirmationScreenProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-900">
      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <img src={assets.kydDark} alt="kyd labs" className="mb-10 w-28 object-contain" />
        <h1 className="text-2xl font-bold md:text-3xl">{waitlistCopy.confirmTitle}</h1>
        <p className="mt-4 max-w-md text-base">
          <span aria-hidden="true">👋 </span>
          {waitlistCopy.confirmBody}
        </p>
        <button
          type="button"
          data-testid="got-it"
          onClick={onGotIt}
          className="mt-8 hidden rounded-full bg-black px-12 py-3 text-sm font-semibold text-white md:inline-flex"
        >
          Got it
        </button>
      </div>
      <div className="px-4 pb-6 md:hidden">
        <button
          type="button"
          data-testid="got-it-mobile"
          onClick={onGotIt}
          className="w-full rounded-full bg-black py-3.5 text-sm font-semibold text-white"
        >
          Got it
        </button>
      </div>
    </div>
  )
}
