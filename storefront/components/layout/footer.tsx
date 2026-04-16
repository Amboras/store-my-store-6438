'use client'

import Link from 'next/link'
import { Zap, Instagram, Twitter, Youtube, Mail } from 'lucide-react'
import { clearConsent } from '@/lib/cookie-consent'
import { usePolicies } from '@/hooks/use-policies'

const footerLinks = {
  shop: [
    { label: 'All Products', href: '/products' },
    { label: 'New Arrivals', href: '/products?sort=newest' },
    { label: 'Collections', href: '/collections' },
    { label: 'Best Sellers', href: '/products' },
  ],
  help: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default function Footer() {
  const { policies } = usePolicies()

  const companyLinks = [{ label: 'About', href: '/about' }]
  if (policies?.privacy_policy) companyLinks.push({ label: 'Privacy Policy', href: '/privacy' })
  if (policies?.terms_of_service) companyLinks.push({ label: 'Terms of Service', href: '/terms' })
  if (policies?.refund_policy) companyLinks.push({ label: 'Refund Policy', href: '/refund-policy' })
  if (policies?.cookie_policy) companyLinks.push({ label: 'Cookie Policy', href: '/cookie-policy' })

  return (
    <footer style={{ backgroundColor: 'var(--brand-secondary)' }} className="text-white/80">
      {/* Top CTA strip */}
      <div className="border-b border-white/10">
        <div className="container-custom py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-heading font-bold text-lg">Join 50,000+ trend-setters</p>
            <p className="text-white/60 text-sm mt-0.5">Get notified first about viral drops and exclusive deals.</p>
          </div>
          <form className="flex gap-2 w-full sm:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 sm:w-64 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-4 py-2.5 text-sm rounded-sm focus:outline-none focus:border-[var(--brand-primary)] transition-colors"
            />
            <button
              type="submit"
              className="px-5 py-2.5 text-sm font-semibold text-white rounded-sm whitespace-nowrap transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--brand-primary)' }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="h-8 w-8 gradient-brand rounded-lg flex items-center justify-center">
                <Zap className="h-4 w-4 text-white" fill="white" />
              </div>
              <span className="font-heading text-xl font-bold text-white tracking-tight">TRENDORA</span>
            </Link>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
              The destination for the internet&apos;s most-wanted products — curated daily, shipped fast.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-white/40 hover:text-white transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter / X" className="text-white/40 hover:text-white transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" aria-label="YouTube" className="text-white/40 hover:text-white transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="mailto:hello@trendora.com" aria-label="Email" className="text-white/40 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-5">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-5">Support</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-5">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} TRENDORA. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                clearConsent()
                window.dispatchEvent(new Event('manage-cookies'))
              }}
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Manage Cookies
            </button>
            <span className="text-xs text-white/20">Powered by Amboras</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
