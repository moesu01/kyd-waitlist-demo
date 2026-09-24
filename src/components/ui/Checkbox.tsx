interface CheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label: string
  id?: string
}

export function Checkbox({
  checked,
  onChange,
  label,
  id = 'checkbox',
}: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className="flex items-start gap-3 cursor-pointer group"
    >
      <div className="relative flex-shrink-0 mt-0.5">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only peer"
        />
        <div className="w-5 h-5 border-2 border-kyd-gray rounded peer-checked:bg-kyd-lime peer-checked:border-kyd-lime transition-colors peer-focus:ring-2 peer-focus:ring-kyd-lime peer-focus:ring-offset-2">
          {checked && (
            <svg
              className="w-full h-full text-kyd-charcoal p-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </div>
      <span className="text-sm text-kyd-gray group-hover:text-kyd-charcoal transition-colors">
        {label}
      </span>
    </label>
  )
}
