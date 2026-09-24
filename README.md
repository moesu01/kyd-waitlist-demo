# KYD Waitlist Demo

A Vite + React + TypeScript + Tailwind recreation of the captured KYD Labs waitlist flow for Peggy Gou at The Brooklyn Monarch. The waitlist UI lives in `src/components/waitlist/` so demo copy and steps can be edited without touching the event page.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

The payment step is a fake Stripe-style form. It does not call Stripe and it does not charge a card.

## Capture map

Each step below matches the live capture in `capture/`. Prefer the PNGs when they disagree with the slim HTML dumps. Step 07 HTML is the fuller page dump (asset URLs and wallet copy).

| Step | What you see | Desktop PNG | Mobile PNG | HTML |
|------|----------------|-------------|------------|------|
| 01 | Event landing. General Admission shows JOIN WAITLIST. Advance Tickets Pre Sale is listed. Tier 2 and 6 - Tier 2 have prices. Tier 1 rows are sold out. Get Tickets is disabled. | [capture/screenshots/desktop/step-01-event-page.png](capture/screenshots/desktop/step-01-event-page.png) | [capture/screenshots/mobile/step-01-event-page.png](capture/screenshots/mobile/step-01-event-page.png) | [capture/html/step-01-event-page.html](capture/html/step-01-event-page.html) |
| 02 | Get in line modal, quantity 0. Minus and JOIN WAITLIST are disabled. | [capture/screenshots/desktop/step-02-waitlist-modal.png](capture/screenshots/desktop/step-02-waitlist-modal.png) | [capture/screenshots/mobile/step-02-waitlist-modal.png](capture/screenshots/mobile/step-02-waitlist-modal.png) | [capture/html/step-02-waitlist-modal.html](capture/html/step-02-waitlist-modal.html) |
| 03 | Same modal with quantity 1. JOIN WAITLIST is neon lime `#D3F227`. | [capture/screenshots/desktop/step-03-quantity-selected.png](capture/screenshots/desktop/step-03-quantity-selected.png) | [capture/screenshots/mobile/step-03-quantity-selected.png](capture/screenshots/mobile/step-03-quantity-selected.png) | [capture/html/step-03-quantity-selected.html](capture/html/step-03-quantity-selected.html) |
| 04 | GET ON THE LIST payment page. Saved card + CVC. Join waitlist is disabled. | [capture/screenshots/desktop/step-04-waitlist-payment.png](capture/screenshots/desktop/step-04-waitlist-payment.png) | [capture/screenshots/mobile/step-04-waitlist-payment.png](capture/screenshots/mobile/step-04-waitlist-payment.png) | [capture/html/step-04-waitlist-payment.html](capture/html/step-04-waitlist-payment.html) |
| 05 | Use a different card. Sandbox card `4242 4242 4242 4242`, `12/34`, `123`, United States, ZIP `11206`. Join waitlist is enabled. | [capture/screenshots/desktop/step-05-payment-filled.png](capture/screenshots/desktop/step-05-payment-filled.png) | [capture/screenshots/mobile/step-05-payment-filled.png](capture/screenshots/mobile/step-05-payment-filled.png) | [capture/html/step-05-payment-filled.html](capture/html/step-05-payment-filled.html) |
| 06 | White confirmation screen. kyd labs logo, waitlist message, wave line, black Got it. | [capture/screenshots/desktop/step-06-confirmation.png](capture/screenshots/desktop/step-06-confirmation.png) | [capture/screenshots/mobile/step-06-confirmation.png](capture/screenshots/mobile/step-06-confirmation.png) | [capture/html/step-06-confirmation.html](capture/html/step-06-confirmation.html) |
| 07 | YOU ARE ON THE LIST. Desktop table or mobile card. LEAVE returns to the event landing. | [capture/screenshots/desktop/step-07-on-list.png](capture/screenshots/desktop/step-07-on-list.png) | [capture/screenshots/mobile/step-07-on-list.png](capture/screenshots/mobile/step-07-on-list.png) | [capture/html/step-07-on-list.html](capture/html/step-07-on-list.html) |

Journey notes, URLs, and CTAs are in [capture/docs/flow.md](capture/docs/flow.md).

## Demo flow

1. On General Admission, choose **JOIN WAITLIST**.
2. The Get in line dialog opens at quantity 0 (centered on desktop, bottom sheet on mobile). Increase the quantity to enable the lime **JOIN WAITLIST** button.
3. The payment page starts on the saved card and CVC, with **Join waitlist** disabled.
4. **Use a different card** reveals the filled sandbox card and enables **Join waitlist**.
5. **Got it** on the white confirmation screen opens the on-list wallet state.
6. **LEAVE WAITLIST** (desktop) or **LEAVE** (mobile) returns to the event landing.

## Project structure

```
src/
├── components/
│   ├── event/        # Header, event details, ticket table
│   ├── waitlist/     # Modal, payment, confirmation, on-list
│   └── ui/           # Quantity stepper
├── content.ts        # Capture copy, prices, and asset URLs
├── App.tsx
└── index.css         # Gradient, body color, Work Sans, lime
```

## Theme

| Token | Value |
|-------|--------|
| Page gradient | `linear-gradient(322.9deg, #8B8B8B -32.49%, #000000 30.1%, #332E38 97.31%)` |
| Body | `#2D2931` |
| Primary lime | `#D3F227` |
| Font | Work Sans |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server |
| `npm run build` | Typecheck and build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run oxlint |
