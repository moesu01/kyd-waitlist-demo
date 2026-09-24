export const assets = {
  orgLogo:
    'https://content.kydlabsdemo.com/organizations/OR11247303-06fb-49a5-9978-a85a403831c6/Frame+505.png',
  poster:
    'https://kydlabs-staging.imgix.net/s/EVec93ff35-4f8d-409e-a8e0-f844fbefcde3/54efba5f-a360-40c9-abba-f1ae5b6d02c3.jpeg?auto=format,compress&q=40&h=1080',
  artist:
    'https://assets.soundcharts.com/artist/7/5/9/11e81bba-5957-0eb8-9d8b-a0369fe50396.jpg',
  kydDark: 'https://kydlabsdemo.com/static/png/darksmall-BbosdBVx.png',
  kydLight: 'https://kydlabsdemo.com/static/png/lightsmall-DlMUQbuY.png',
}

export const eventCopy = {
  title: 'Peggy Gou - Live',
  subtitle: 'For The World Tour',
  when: 'Fri, Oct 2 at 2:00AM',
  venue: 'The Brooklyn Monarch',
  address: '23 Meadow St, New York City, New York 11206, United States',
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=23%20Meadow%20St%2C%20New%20York%20City%2C%20New%20York%2011206%2C%20United%20States',
  artist: 'Peggy Gou',
  detailsLead: 'Peggy Gou Live: An Intimate Night At The Brooklyn Monarch',
  details: [
    'Peggy Gou, one of the most exciting names in electronic music, is coming to The Brooklyn Monarch for a rare and intimate show. Celebrated for her distinctive mix of house, techno, and irresistible grooves, Peggy has headlined some of the biggest stages around the world. This event offers fans a special opportunity to experience her sound in a closer setting where her energy and creativity can truly take over the room. Expect a night filled with deep rhythms, hypnotic beats, and the kind of atmosphere that has made her an international favorite.',
    'This performance is designed to connect Peggy directly with the fans who have supported her journey from the underground to global recognition. Known for her magnetic presence and ability to create unforgettable dance floor moments, she will bring The Brooklyn Monarch to life with a set that feels both personal and powerful. Every track will draw the crowd deeper into the experience, making this an evening that captures everything people love about Peggy Gou.',
    'This is working',
  ],
}

export const waitlistCopy = {
  modalTitle: 'Get in line',
  modalBody:
    'How many tickets do you need? Pro-tip: The fewer tickets you request, the higher your chances we’ll be able find you tickets as they become available!',
  tierName: 'GENERAL ADMISSION',
  price: '$63.35',
  cancelLabel: 'Automatically cancel my request',
  payTitle: 'GET ON THE LIST',
  payIntro:
    "When you add your credit card, you're giving us the ability to instantly secure tickets for you as soon as they become available.",
  payCharge:
    'The $63.35 charge (including sales tax) will only be applied if we successfully obtain tickets for you prior to the event.',
  attendeeName: 'mohamed suliman',
  attendeeEmail: 'moe@kydlabs.com',
  cardCharge: 'Your card will be charged $63.35 if we get your tickets.',
  stripeLegal:
    'By providing your card information, you allow KYD Labs Inc to charge your card for future payments in accordance with their terms.',
  confirmTitle: "You've been added to the waitlist!",
  confirmBody:
    'You will be notified if tickets become available and charged on your card.',
  onListTitle: 'YOU ARE ON THE LIST',
  notify:
    'We will notify you via email if we are able to find tickets for you for the show.',
  notATicket: 'This is not a ticket.',
  chargeLater:
    'If we are able to find you tickets, your card will be charged the amount above.',
  joined: 'Thu Sep 24 06:27PM',
  expires: 'No expiration',
  status: 'OPEN',
}

export interface TicketTier {
  id: string
  name: string
  price?: string
  kind: 'listed' | 'waitlist' | 'quantity' | 'soldout'
}

export const ticketTiers: TicketTier[] = [
  { id: 'advance', name: 'Advance Tickets Pre Sale', kind: 'listed' },
  { id: 'ga', name: 'General Admission', kind: 'waitlist' },
  { id: 'tier-2', name: 'Tier 2', price: '$26.78', kind: 'quantity' },
  { id: 'tier-1', name: 'Tier 1', kind: 'soldout' },
  { id: 'six-tier-2', name: '6 - Tier 2', price: '$13.49', kind: 'quantity' },
  { id: 'six-tier-1', name: '6 - Tier 1', kind: 'soldout' },
]

export const sandboxCard = {
  number: '4242 4242 4242 4242',
  expiry: '12 / 34',
  cvc: '123',
  country: 'United States',
  zip: '11206',
}
