# KYD Waitlist Demo Mock

A static demo of the KYD event page and waitlist modal flow built with Vite, React, TypeScript, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Demo Flow

The demo walks through the complete KYD waitlist experience:

| Step | Description | Screenshot Reference |
|------|-------------|---------------------|
| 01 | Event landing page with "SOLD OUT" General Admission | `capture/screenshots/desktop/01-event-page.png` |
| 02 | "Get in line" modal with quantity stepper | `capture/screenshots/desktop/02-get-in-line.png` |
| 03 | Fake payment form (Stripe-style sandbox UI) | `capture/screenshots/desktop/03-payment.png` |
| 04 | Payment processing state | `capture/screenshots/desktop/04-processing.png` |
| 05 | Confirmation: "You've been added to the waitlist!" | `capture/screenshots/desktop/05-confirmation.png` |
| 06 | On-list state showing waitlist position | `capture/screenshots/desktop/06-on-list.png` |
| 07 | Leave waitlist confirmation dialog | `capture/screenshots/desktop/07-leave-waitlist.png` |

See [`docs/flow.md`](docs/flow.md) for the complete flow documentation.

## Project Structure

```
src/
├── components/
│   ├── event/           # Event page components
│   │   ├── EventPage.tsx
│   │   ├── EventBanner.tsx
│   │   ├── EventDetails.tsx
│   │   └── TicketCard.tsx
│   ├── waitlist/        # Waitlist modal components (easily editable for demos)
│   │   ├── JoinWaitlistModal.tsx
│   │   ├── PaymentForm.tsx
│   │   ├── ConfirmationModal.tsx
│   │   └── LeaveWaitlistModal.tsx
│   └── ui/              # Reusable UI primitives
│       ├── Button.tsx
│       ├── Modal.tsx
│       ├── QuantityStepper.tsx
│       └── Checkbox.tsx
├── App.tsx              # Main app with flow state management
├── main.tsx             # Entry point
└── index.css            # Tailwind + KYD theme
```

## Customizing for Demos

The waitlist modals are designed to be easily customizable:

1. **Modal copy**: Edit text directly in `src/components/waitlist/*.tsx`
2. **Colors**: Update theme values in `src/index.css` (look for `@theme`)
3. **Event details**: Modify `EventPage.tsx` and `EventDetails.tsx`
4. **Ticket info**: Update the `ticketInfo` object in `App.tsx`

### Key Theme Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-kyd-charcoal` | `#1a1a1a` | Page background |
| `--color-kyd-lime` | `#D3F227` | Primary CTA buttons |
| `--color-kyd-white` | `#ffffff` | Card backgrounds |

## Important Notes

### ⚠️ Payment Form is Fake

The payment form in this demo is purely for UI demonstration purposes:

- **No real payment processing** occurs
- **No connection to Stripe** or any payment provider
- Card information entered is **not validated or stored**
- The "sandbox mode" banner is always visible

This is intentional — the demo is meant to showcase the UI/UX flow, not handle real transactions.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Tech Stack

- **React 19** with functional components and hooks
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Vite** for fast development and builds

## License

Demo purposes only.
