interface QuantityStepperProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  tone?: 'light' | 'dark' | 'pill'
}

export function QuantityStepper({
  value,
  onChange,
  min = 0,
  max = 10,
  tone = 'light',
}: QuantityStepperProps) {
  const isMin = value <= min
  const isMax = value >= max
  const numberClass = tone === 'light' ? 'text-neutral-900' : 'text-white'
  const minusClass = tone === 'pill'
    ? 'bg-white/25 text-white/50 enabled:bg-white enabled:text-black'
    : 'bg-neutral-200 text-neutral-400 enabled:bg-black enabled:text-white'
  const plusClass = tone === 'pill'
    ? 'bg-white text-black disabled:bg-white/25 disabled:text-white/50'
    : 'bg-black text-white disabled:bg-neutral-300'

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        aria-label="Decrease quantity"
        disabled={isMin}
        onClick={() => onChange(value - 1)}
        className={`flex h-8 w-8 items-center justify-center rounded-full text-lg leading-none disabled:cursor-not-allowed ${minusClass}`}
      >
        −
      </button>
      <span className={`w-5 text-center text-sm font-semibold tabular-nums ${numberClass}`}>
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        disabled={isMax}
        onClick={() => onChange(value + 1)}
        className={`flex h-8 w-8 items-center justify-center rounded-full text-lg leading-none disabled:cursor-not-allowed ${plusClass}`}
      >
        +
      </button>
    </div>
  )
}
