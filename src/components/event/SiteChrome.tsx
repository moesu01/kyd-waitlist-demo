import { assets } from '../../content'

const footerLinks = [
  { label: 'Terms Of Service', href: 'https://www.iubenda.com/terms-and-conditions/22517592' },
  { label: 'Privacy Policy', href: 'https://www.iubenda.com/privacy-policy/22517592' },
  { label: 'FAQ', href: 'http://help.kydlabs.com/' },
]

export function SiteHeader() {
  return (
    <header className="w-full text-white">
      <div className="flex items-center justify-center gap-6 px-4 pt-4 text-[15px] md:hidden">
        <button type="button">Sign Out</button>
        <button type="button">My Tickets (1)</button>
      </div>
      <div className="flex h-[88px] items-center justify-between px-5 md:h-[130px]">
        <img
          src={assets.orgLogo}
          alt="Apple Review logo"
          className="h-auto max-w-[100px] object-contain object-left md:max-w-[150px]"
        />
        <nav className="hidden items-center gap-6 text-[15px] md:flex">
          <button type="button">Sign Out</button>
          <button type="button">My Tickets (1)</button>
          <button type="button" aria-label="Cart">
            <CartIcon />
          </button>
        </nav>
        <button type="button" aria-label="Cart" className="md:hidden">
          <CartIcon />
        </button>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="mt-auto hidden w-full px-5 py-8 text-white md:block">
      <div className="flex flex-col items-center gap-3">
        <img src={assets.kydDark} alt="KYD labs logo" className="h-8 w-auto object-contain invert" />
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs underline">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
          <button type="button" className="underline">Help</button>
        </div>
        <p className="text-xs text-neutral-300">
          © 2026 KYD Labs Inc. <span className="text-neutral-400">v2.0.6</span>
        </p>
      </div>
    </footer>
  )
}

function CartIcon() {
  return (
    <svg viewBox="0 0 576 512" className="size-6 fill-current" aria-hidden="true">
      <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" />
    </svg>
  )
}
