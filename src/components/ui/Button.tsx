interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'destructive' | 'ghost'
  disabled?: boolean
  fullWidth?: boolean
  type?: 'button' | 'submit'
  className?: string
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  fullWidth = false,
  type = 'button',
  className = '',
}: ButtonProps) {
  const baseStyles = 'font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantStyles = {
    primary: 'bg-kyd-lime text-kyd-charcoal hover:bg-kyd-lime-hover focus:ring-kyd-lime disabled:opacity-50',
    secondary: 'bg-kyd-dark text-white border border-kyd-gray hover:bg-kyd-charcoal focus:ring-kyd-gray',
    destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    ghost: 'bg-transparent text-kyd-gray hover:text-white hover:bg-kyd-dark focus:ring-kyd-gray',
  }

  const widthStyles = fullWidth ? 'w-full' : ''

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
      aria-disabled={disabled}
    >
      {children}
    </button>
  )
}
