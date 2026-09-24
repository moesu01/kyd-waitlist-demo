# KYD Labs waitlist capture — Peggy Gou - Live at The Brooklyn Monarch

Captured Thu Sep 24 2026 (UTC-4). Signed-in state remained active; no sign-out performed.

## Ordered journey

1. **Step 01 — signed-in event landing / ticket tiers**  
   URL: `https://kydlabsdemo.com/e/EVec93ff35-4f8d-409e-a8e0-f844fbefcde3?ref=shortlink`  
   Sees Peggy Gou event poster, date/time, venue/address, event details and artist expander, signed-in header (`Sign Out`, `My Tickets (1)`), `Get Your Tickets`, `Got a code?`, and ticket tiers. Full-page review found Advance Tickets Pre Sale (listed), General Admission with **JOIN WAITLIST**, Tier 2 $26.78, Tier 1 Sold Out, 6 - Tier 2 $13.49, 6 - Tier 1 Sold Out, plus disabled `Get Tickets`.  
   CTAs: `JOIN WAITLIST`, `Got a code?`, artist set-times toggle, `See event details`.  
   Desktop: `/workspace/kyd-waitlist-capture/screenshots/desktop/step-01-event-page.png`  
   Mobile: `/workspace/kyd-waitlist-capture/screenshots/mobile/step-01-event-page.png`  
   HTML: `/workspace/kyd-waitlist-capture/html/step-01-event-page.html`

2. **Step 02 — Get in line modal, initial quantity 0**  
   URL: same event URL.  
   White rounded modal titled `Get in line`; quantity guidance, General Admission $63.35, minus disabled, quantity 0, plus, `Automatically cancel my request` checkbox, disabled `JOIN WAITLIST`, and close X.  
   Desktop: `/workspace/kyd-waitlist-capture/screenshots/desktop/step-02-waitlist-modal.png`  
   Mobile: `/workspace/kyd-waitlist-capture/screenshots/mobile/step-02-waitlist-modal.png`  
   HTML (modal markup): `/workspace/kyd-waitlist-capture/html/step-02-waitlist-modal.html`

3. **Step 03 — Get in line modal, quantity selected**  
   URL: same event URL.  
   One ticket selected; quantity shows 1 and `JOIN WAITLIST` becomes enabled.  
   Desktop: `/workspace/kyd-waitlist-capture/screenshots/desktop/step-03-quantity-selected.png`  
   Mobile: `/workspace/kyd-waitlist-capture/screenshots/mobile/step-03-quantity-selected.png`  
   HTML (modal markup): `/workspace/kyd-waitlist-capture/html/step-03-quantity-selected.html`

4. **Step 04 — waitlist payment page, before card entry**  
   URL: `https://kydlabsdemo.com/e/EVec93ff35-4f8d-409e-a8e0-f844fbefcde3/waitlist`  
   `GET ON THE LIST` explains the card authorization and that $63.35 is charged only if tickets are obtained. Payment section shows Express Checkout, attendee identity, saved-card/CVC path, `Use a different card`, and disabled `Join waitlist`.  
   Desktop: `/workspace/kyd-waitlist-capture/screenshots/desktop/step-04-waitlist-payment.png`  
   Mobile: `/workspace/kyd-waitlist-capture/screenshots/mobile/step-04-waitlist-payment.png`  
   HTML: `/workspace/kyd-waitlist-capture/html/step-04-waitlist-payment.html`

5. **Step 05 — Stripe sandbox card form filled**  
   URL: same `/waitlist` URL.  
   Card tab selected; sandbox test card entered (4242 4242 4242 4242), expiration 12/34, CVC 123, United States, ZIP 11206. `Join waitlist` enabled.  
   Desktop: `/workspace/kyd-waitlist-capture/screenshots/desktop/step-05-payment-filled.png`  
   Mobile: `/workspace/kyd-waitlist-capture/screenshots/mobile/step-05-payment-filled.png`  
   HTML: `/workspace/kyd-waitlist-capture/html/step-05-payment-filled.html`

6. **Step 06 — confirmation modal**  
   URL after submission: `https://kydlabsdemo.com/e/EVec93ff35-4f8d-409e-a8e0-f844fbefcde3`  
   Confirmation says `You've been added to the waitlist!` and `You will be notified if tickets become available and charged on your card.` CTA: `Got it`.  
   Desktop: `/workspace/kyd-waitlist-capture/screenshots/desktop/step-06-confirmation.png`  
   Mobile: `/workspace/kyd-waitlist-capture/screenshots/mobile/step-06-confirmation.png`  
   HTML (modal markup): `/workspace/kyd-waitlist-capture/html/step-06-confirmation.html`

7. **Step 07 — post-confirmation wallet / on-list state**  
   URL: `https://kydlabsdemo.com/e/EVec93ff35-4f8d-409e-a8e0-f844fbefcde3/wallet`  
   `YOU ARE ON THE LIST` shows quantity 1, General Admission, total $63.35, status OPEN, joined timestamp, no expiration, and `LEAVE WAITLIST`; copy clarifies this is not a ticket and future charge occurs only if tickets are found.  
   Desktop: `/workspace/kyd-waitlist-capture/screenshots/desktop/step-07-on-list.png`  
   Mobile: `/workspace/kyd-waitlist-capture/screenshots/mobile/step-07-on-list.png`  
   HTML (full current document outerHTML): `/workspace/kyd-waitlist-capture/html/step-07-on-list.html`

## CSS / assets notes

- Desktop page uses a near-black charcoal gradient/background with white rounded content cards; mobile collapses to a single narrow column.
- Primary waitlist branding is a high-contrast neon lime/yellow-green dotted banner with black icon/text; destructive `LEAVE WAITLIST` is red. Primary modal submit is lime; confirmation `Got it` is black.
- Typography is bold rounded sans-serif for headings/CTAs with muted gray body text; payment UI is Stripe-style white cards with blue focus outlines and green Link button.
- Waitlist modal is a white rounded bottom-sheet on mobile / centered dialog on desktop, with darkened backdrop, ticket quantity control, optional cancellation checkbox, and sticky footer CTA.
- Event image/poster and artist avatar are remote image assets; no additional asset files were downloaded.
