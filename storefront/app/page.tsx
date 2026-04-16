'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {
  ArrowRight,
  Truck,
  Shield,
  RotateCcw,
  Star,
  Zap,
  TrendingUp,
  Clock,
  Package,
  CheckCircle2,
  ChevronRight,
  FlameIcon,
} from 'lucide-react'
import CollectionSection from '@/components/marketing/collection-section'
import { useCollections } from '@/hooks/use-collections'
import { useProducts } from '@/hooks/use-products'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=90&fit=crop'
const LIFESTYLE_IMAGE = 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1400&q=90&fit=crop'
const PRODUCT_1_IMAGE = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80&fit=crop'
const PRODUCT_2_IMAGE = 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80&fit=crop'
const PRODUCT_3_IMAGE = 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80&fit=crop'

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 47, seconds: 23 })

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) { seconds = 59; minutes-- }
        if (minutes < 0) { minutes = 59; hours-- }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59 }
        return { hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="flex items-center gap-2">
      {[timeLeft.hours, timeLeft.minutes, timeLeft.seconds].map((val, i) => (
        <span key={i} className="flex items-center gap-1">
          <span className="font-heading font-bold text-white text-lg tabular-nums w-8 text-center">
            {pad(val)}
          </span>
          {i < 2 && <span className="text-white/60 font-bold">:</span>}
        </span>
      ))}
    </div>
  )
}

const trendingProducts = [
  {
    title: 'LED Infinity Mirror Clock',
    price: '$49.99',
    badge: 'Viral',
    image: PRODUCT_1_IMAGE,
    href: '/products/led-infinity-mirror-clock',
    stars: 4.9,
    reviews: 2341,
  },
  {
    title: 'Viral Glow Serum',
    price: 'From $29.99',
    badge: 'Trending',
    image: PRODUCT_2_IMAGE,
    href: '/products/viral-glow-serum-hyaluronic-niacinamide',
    stars: 4.8,
    reviews: 5872,
  },
  {
    title: 'The Trending Duo Bundle',
    price: '$79.99',
    badge: 'Save 20%',
    image: PRODUCT_3_IMAGE,
    href: '/products/infinity-clock-glow-serum-the-trending-duo-bundle',
    stars: 5.0,
    reviews: 1093,
  },
]

const trustFeatures = [
  { icon: Truck, title: 'Free Fast Shipping', sub: 'On all orders over $50' },
  { icon: RotateCcw, title: '30-Day Returns', sub: 'No questions asked' },
  { icon: Shield, title: 'Secure Checkout', sub: '256-bit SSL encryption' },
  { icon: Package, title: 'Tracked Delivery', sub: 'Real-time order updates' },
]

const tickerItems = [
  'FREE SHIPPING ON $50+',
  'NEW DROPS EVERY WEEK',
  'OVER 50,000 HAPPY CUSTOMERS',
  'TRENDING PRODUCTS CURATED DAILY',
  '30-DAY HASSLE-FREE RETURNS',
]

export default function HomePage() {
  const { data: collections, isLoading: collectionsLoading } = useCollections()

  return (
    <>
      {/* Announcement Ticker */}
      <div style={{ backgroundColor: 'var(--brand-primary)' }} className="py-2 overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-6 text-xs font-bold uppercase tracking-widest text-white">
              <Zap className="h-3 w-3 flex-shrink-0" fill="white" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1A1A2E 0%, #16213e 60%, #0f3460 100%)' }}>
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, var(--brand-primary) 0%, transparent 70%)' }} />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)' }} />
        </div>

        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-10 items-center py-20 lg:py-28">
          {/* Text */}
          <div className="space-y-7 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
              <FlameIcon className="h-3.5 w-3.5 text-orange-400" fill="rgb(251, 146, 60)" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/80">Trending Now</span>
            </div>

            <h1 className="font-heading font-bold text-white leading-[1.08]" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.03em' }}>
              Products the
              <br />
              <span style={{ color: 'var(--brand-primary)' }} className="relative">
                Internet Loves
              </span>
              <br />
              — Delivered.
            </h1>

            <p className="text-lg text-white/60 max-w-md leading-relaxed">
              Curated viral products, trending across TikTok and Instagram, shipped straight to your door.
            </p>

            {/* Flash sale countdown */}
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-5 py-3">
              <Clock className="h-4 w-4 text-orange-400 flex-shrink-0" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-0.5">Flash Sale Ends In</p>
                <CountdownTimer />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white rounded-sm transition-opacity hover:opacity-90 animate-pulse-glow"
                style={{ backgroundColor: 'var(--brand-primary)' }}
              >
                Shop Trending Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/products/infinity-clock-glow-serum-the-trending-duo-bundle"
                className="inline-flex items-center gap-2 border border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white rounded-sm hover:bg-white/10 transition-colors"
              >
                View Bundle Deal
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {['photo-1534528741775-53994a69daeb', 'photo-1506794778202-cad84cf45f1d', 'photo-1494790108377-be9c29b29330', 'photo-1517841905240-472988babdf9'].map((id, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1A1A2E] overflow-hidden bg-muted">
                    <Image
                      src={`https://images.unsplash.com/${id}?w=80&h=80&fit=crop&crop=face`}
                      alt=""
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-white/50 mt-0.5">50,000+ happy customers</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={HERO_IMAGE}
                alt="Trending Products at TRENDORA"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Floating badge */}
              <div className="absolute top-5 left-5 bg-white rounded-xl shadow-xl px-4 py-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-xs font-bold text-gray-800">+312% this week</span>
                </div>
              </div>
              <div className="absolute bottom-5 right-5 text-white rounded-xl px-4 py-3" style={{ backgroundColor: 'var(--brand-primary)' }}>
                <p className="text-[10px] font-bold uppercase tracking-wide opacity-80">Flash Sale</p>
                <p className="text-lg font-bold leading-tight">Up to 30% Off</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 border-b bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustFeatures.map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-brand-light flex items-center justify-center flex-shrink-0">
                  <Icon className="h-4 w-4 text-brand-primary" style={{ color: 'var(--brand-primary)' }} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{title}</p>
                  <p className="text-xs text-muted-foreground">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="py-section bg-white">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FlameIcon className="h-4 w-4 text-orange-500" fill="rgb(249, 115, 22)" />
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Trending Right Now</span>
              </div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl" style={{ letterSpacing: '-0.02em' }}>
                What Everyone&apos;s Buying
              </h2>
            </div>
            <Link href="/products" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: 'var(--brand-primary)' }}>
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingProducts.map((product) => (
              <Link key={product.title} href={product.href} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted mb-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="badge-trending">{product.badge}</span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-foreground group-hover:text-[var(--brand-primary)] transition-colors">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviews.toLocaleString()})</span>
                  </div>
                  <p className="font-bold text-lg">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--brand-primary)' }}>
              View All Products <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Collections */}
      {!collectionsLoading && collections && collections.length > 0 && (
        <>
          {collections.map((collection: { id: string; handle: string; title: string; metadata?: Record<string, unknown> }, index: number) => (
            <CollectionSection key={collection.id} collection={collection} alternate={index % 2 === 1} />
          ))}
        </>
      )}

      {/* Editorial / Why TRENDORA */}
      <section className="py-section" style={{ backgroundColor: 'var(--brand-light)' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={LIFESTYLE_IMAGE}
                  alt="TRENDORA — Curated for you"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -right-4 bottom-12 bg-white rounded-xl shadow-xl p-4 w-44">
                <div className="text-2xl font-bold font-heading" style={{ color: 'var(--brand-primary)' }}>50K+</div>
                <p className="text-xs text-muted-foreground mt-0.5">Customers trust us every month</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider" style={{ backgroundColor: 'var(--brand-primary)', color: 'white' }}>
                <Zap className="h-3 w-3" fill="white" />
                Why TRENDORA
              </div>
              <h2 className="font-heading font-bold text-4xl" style={{ letterSpacing: '-0.02em' }}>
                We Find What&apos;s Trending.
                <br />
                <span style={{ color: 'var(--brand-primary)' }}>You Just Shop It.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our team monitors viral trends across social media 24/7, so you never miss the products everyone is talking about — from home tech to skincare.
              </p>

              <div className="space-y-4">
                {[
                  { icon: TrendingUp, text: 'Products curated from viral TikTok, Instagram & Reddit trends' },
                  { icon: CheckCircle2, text: 'Every product vetted for quality before hitting our store' },
                  { icon: Truck, text: 'Fast, tracked shipping — most orders arrive in 3-5 days' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'var(--brand-primary)' }}>
                      <Icon className="h-3.5 w-3.5 text-white" />
                    </div>
                    <p className="text-sm text-foreground font-medium">{text}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white rounded-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--brand-primary)' }}
              >
                Shop All Trending Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle CTA Banner */}
      <section className="py-section-sm relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1A1A2E 0%, #16213e 100%)' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, var(--brand-primary), transparent 70%)' }} />
        </div>
        <div className="container-custom relative z-10 text-center">
          <span className="badge-trending">Limited Time</span>
          <h2 className="mt-4 font-heading font-bold text-3xl lg:text-4xl text-white" style={{ letterSpacing: '-0.02em' }}>
            Get the Trending Duo Bundle
          </h2>
          <p className="mt-3 text-white/60 max-w-md mx-auto">
            Our LED Clock + Glow Serum — the two most-viral products, bundled. Save $19.98 vs. buying individually.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/products/infinity-clock-glow-serum-the-trending-duo-bundle"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white rounded-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--brand-primary)' }}
            >
              Grab the Bundle — $79.99
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-4 text-xs text-white/30">Free shipping included. Limited stock.</p>
        </div>
      </section>
    </>
  )
}
