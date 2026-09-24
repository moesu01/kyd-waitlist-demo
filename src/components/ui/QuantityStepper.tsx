interface QuantityStepperProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  label?: string
}

export function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 10,
  label = 'Quantity',
}: QuantityStepperProps) {
  const handleDecrement = () => {
    if (value > min) onChange(value - 1)
  }

  const handleIncrement = () => {
    if (value < max) onChange(value + 1)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10)
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onChange(newValue)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-kyd-gray">{label}</label>
      )}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleDecrement}
          disabled={value <= min}
          className="w-10 h-10 rounded-full border-2 border-kyd-light-gray flex items-center justify-center text-kyd-charcoal hover:bg-kyd-light-gray transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Decrease quantity"
          tabIndex={0}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
        
        <input
          type="number"
          value={value}
          onChange={handleInputChange}
          min={min}
          max={max}
          className="w-16 h-10 text-center text-xl font-semibold text-kyd-charcoal border-2 border-kyd-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-kyd-lime focus:border-transparent"
          aria-label="Quantity"
        />
        
        <button
          type="button"
          onClick={handleIncrement}
          disabled={value >= max}
          className="w-10 h-10 rounded-full border-2 border-kyd-light-gray flex items-center justify-center text-kyd-charcoal hover:bg-kyd-light-gray transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Increase quantity"
          tabIndex={0}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  )
}
