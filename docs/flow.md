# KYD Waitlist Demo Flow

This document describes the user flow for the KYD waitlist demo mock.

## Flow Steps

### Step 01: Event Landing Page
- Dark charcoal background with event details
- Event image banner at top
- Event title, date, time, and venue information
- Ticket types section with "General Admission" showing sold out status
- **JOIN WAITLIST** button (neon lime) on the General Admission ticket type

### Step 02: Get in Line Modal
- Modal overlay appears (centered on desktop, bottom-sheet on mobile)
- Header: "Get in line"
- Quantity stepper component (minus/plus buttons with number input)
- Checkbox: "Auto-cancel if ticket isn't claimed within 10 minutes"
- **JOIN WAITLIST** primary CTA button
- Close button (X) in top-right corner

### Step 03: Payment Form (Fake Stripe-style)
- Full-page payment form appearance
- Header: "GET ON THE LIST"
- Form fields:
  - Card number (with card icon)
  - Expiration date
  - CVC/CVV
  - Cardholder name
  - Billing zip code
- Order summary showing waitlist fee
- **Pay Now** button
- Note: This is a sandbox/fake UI only - no real payment processing

### Step 04: Processing State
- Brief loading/processing indicator
- Transitional state between payment and confirmation

### Step 05: Confirmation Modal
- Success checkmark icon
- Header: "You've been added to the waitlist!"
- Confirmation message with position info
- Details about what happens when tickets become available
- **Done** button to close

### Step 06: On-List State (Wallet View)
- Event page now shows updated state
- Ticket area displays: "YOU ARE ON THE LIST"
- Shows waitlist position
- **LEAVE WAITLIST** button available (red/destructive style)
- Option to manage notification preferences

### Step 07: Leave Waitlist Confirmation
- Confirmation dialog for leaving the waitlist
- Warning about losing position
- Cancel and Confirm buttons

## Visual Design Notes

- **Background**: Dark charcoal (#1a1a1a)
- **Cards**: White (#ffffff)
- **Primary CTA**: Neon lime (#D3F227)
- **Typography**: Work Sans or similar
- **Mobile**: Bottom-sheet modal style
- **Desktop**: Centered modal with backdrop

## Component Structure

```
src/components/
├── event/
│   ├── EventPage.tsx       # Main event landing page
│   ├── EventBanner.tsx     # Event image/banner
│   ├── EventDetails.tsx    # Title, date, venue info
│   └── TicketCard.tsx      # Individual ticket type card
├── waitlist/
│   ├── JoinWaitlistModal.tsx    # Step 02: Quantity selection
│   ├── PaymentForm.tsx          # Step 03: Fake payment form
│   ├── ConfirmationModal.tsx    # Step 05: Success confirmation
│   └── OnListStatus.tsx         # Step 06: Waitlist status display
└── ui/
    ├── Modal.tsx           # Base modal component
    ├── Button.tsx          # Reusable button
    ├── QuantityStepper.tsx # Plus/minus quantity input
    └── Checkbox.tsx        # Styled checkbox
```

## Screenshot Reference Mapping

| Step | Desktop Screenshot | Mobile Screenshot |
|------|-------------------|-------------------|
| 01   | `capture/screenshots/desktop/01-event-page.png` | - |
| 02   | `capture/screenshots/desktop/02-get-in-line.png` | `capture/screenshots/mobile/02-get-in-line.png` |
| 03   | `capture/screenshots/desktop/03-payment.png` | - |
| 04   | `capture/screenshots/desktop/04-processing.png` | - |
| 05   | `capture/screenshots/desktop/05-confirmation.png` | - |
| 06   | `capture/screenshots/desktop/06-on-list.png` | `capture/screenshots/mobile/06-on-list.png` |
| 07   | `capture/screenshots/desktop/07-leave-waitlist.png` | - |
