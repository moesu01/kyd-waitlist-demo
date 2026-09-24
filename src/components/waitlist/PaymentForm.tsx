import { useState } from 'react'
import { Button } from '../ui'

interface PaymentFormProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: () => void
  amount: number
  description: string
}

export function PaymentForm({
  isOpen,
  onClose,
  onSubmit,
  amount,
  description,
}: PaymentFormProps) {
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [name, setName] = useState('')
  const [zip, setZip] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  if (!isOpen) return null

  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, '')
    const groups = digits.match(/.{1,4}/g) || []
    return groups.join(' ').slice(0, 19)
  }

  const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, '')
    if (digits.length >= 2) {
      return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`
    }
    return digits
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsProcessing(false)
    onSubmit()
  }

  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="min-h-screen flex flex-col">
        <header className="bg-kyd-charcoal text-white px-4 py-4 flex items-center">
          <button
            onClick={onClose}
            className="p-2 -ml-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Go back"
            tabIndex={0}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-lg font-semibold ml-2">GET ON THE LIST</h1>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="max-w-md mx-auto px-4 py-6">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-4 mb-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-sm font-medium">Sandbox Mode</span>
              </div>
              <p className="text-xs opacity-80">
                This is a demo payment form. No real charges will be made.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-kyd-charcoal mb-1">
                  Card number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 border-2 border-kyd-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-kyd-lime focus:border-transparent"
                    maxLength={19}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                    <svg className="w-8 h-5 text-kyd-gray" viewBox="0 0 32 20" fill="currentColor">
                      <rect width="32" height="20" rx="2" fill="#1A1F36" />
                      <circle cx="12" cy="10" r="6" fill="#EB001B" />
                      <circle cx="20" cy="10" r="6" fill="#F79E1B" />
                      <path d="M16 5.5a6 6 0 010 9" fill="#FF5F00" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-kyd-charcoal mb-1">
                    Expiration
                  </label>
                  <input
                    type="text"
                    value={expiry}
                    onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 border-2 border-kyd-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-kyd-lime focus:border-transparent"
                    maxLength={5}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-kyd-charcoal mb-1">
                    CVC
                  </label>
                  <input
                    type="text"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').slice(0, 4))}
                    placeholder="123"
                    className="w-full px-4 py-3 border-2 border-kyd-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-kyd-lime focus:border-transparent"
                    maxLength={4}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-kyd-charcoal mb-1">
                  Cardholder name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border-2 border-kyd-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-kyd-lime focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-kyd-charcoal mb-1">
                  Billing ZIP code
                </label>
                <input
                  type="text"
                  value={zip}
                  onChange={(e) => setZip(e.target.value.replace(/\D/g, '').slice(0, 5))}
                  placeholder="90210"
                  className="w-full px-4 py-3 border-2 border-kyd-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-kyd-lime focus:border-transparent"
                  maxLength={5}
                />
              </div>

              <div className="border-t border-kyd-light-gray pt-4 mt-6">
                <div className="flex justify-between mb-2">
                  <span className="text-kyd-gray">{description}</span>
                  <span className="font-semibold text-kyd-charcoal">${amount.toFixed(2)}</span>
                </div>
              </div>

              <Button
                type="submit"
                fullWidth
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  `Pay $${amount.toFixed(2)}`
                )}
              </Button>
            </form>

            <p className="text-xs text-center text-kyd-gray mt-4">
              Your payment info is secured. This is a demo form only.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
