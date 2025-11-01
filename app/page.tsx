import Link from 'next/link'
import { getStoreSettings } from '@/lib/store-settings'
import { Clock, Shield, Star, CheckCircle, Phone } from 'lucide-react'

export default async function LandingPage() {
  const settings = await getStoreSettings()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-neutral-50 to-white pt-20 pb-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold text-neutral-900 mb-4">
              Flash Gift Delivery
            </h1>
          </div>

          {/* Main Headline */}
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            Saved By Flowers In 2 Hours Or Less
          </h2>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-neutral-700 mb-8 max-w-3xl mx-auto">
            Premium roses delivered fast. When you need to be the hero, not the guy who forgot.
          </p>

          {/* Hook and Promise */}
          <div className="max-w-2xl mx-auto mb-12 space-y-4 text-lg text-neutral-600">
            <p>
              Forgot your anniversary? Need to make up after an argument? We've all been there.
            </p>
            <p className="font-semibold text-neutral-900">
              In just 2 hours, you can go from "in trouble" to "thank you, baby" with our luxury rose arrangements.
            </p>
            <p>
              Unlike drugstore bouquets or 3-day delivery services, Flash Gift Delivery brings premium, florist-quality arrangements to {settings.metroArea} in 2 hours or less.
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="#packages"
            className="inline-block bg-[#d4af37] hover:bg-[#b8941f] text-neutral-900 font-bold text-xl px-12 py-5 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Choose Your Arrangement & Delivery Time
          </a>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <Shield className="w-5 h-5 text-[#d4af37]" />
              <span className="font-semibold">Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <Clock className="w-5 h-5 text-[#d4af37]" />
              <span className="font-semibold">2-Hour Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <Star className="w-5 h-5 text-[#d4af37]" />
              <span className="font-semibold">Premium Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* As Seen On Section */}
      <section className="py-12 bg-neutral-100">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-sm text-neutral-500 mb-6 uppercase tracking-wider">
            As Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-2xl font-bold text-neutral-700">CNN</div>
            <div className="text-2xl font-bold text-neutral-700">Forbes</div>
            <div className="text-2xl font-bold text-neutral-700">GQ</div>
            <div className="text-2xl font-bold text-neutral-700">Bloomberg</div>
            <div className="text-2xl font-bold text-neutral-700">Entrepreneur</div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-neutral-900 mb-8 text-center">
            You're Busy. Life Gets Hectic. We Get It.
          </h3>
          <div className="prose prose-lg max-w-none text-neutral-700 space-y-6">
            <p>
              You run a company. You're closing deals. You're on back-to-back calls. And somehow, you forgot the most important date of the year. Or maybe you said something you shouldn't have. Or maybe you just want to show her she's still your priority.
            </p>
            <p>
              The truth? <span className="font-semibold text-neutral-900">Generic flowers from the grocery store won't cut it.</span> And 3-day delivery from those big online services? Too slow and too basic for someone who deserves the best.
            </p>
            <p className="text-xl font-semibold text-neutral-900">
              That's where we come in.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution Section - Continued in next part due to length */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <h3 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-neutral-900 mb-6 text-center">
            Premium Roses. Delivered In 2 Hours. Right To Her Door.
          </h3>
          <p className="text-xl text-neutral-700 mb-12 text-center max-w-3xl mx-auto">
            Flash Gift Delivery isn't just another flower service. We're your emergency relationship backup plan. Your "make her smile today" solution. Your secret weapon for being the partner she deserves.
          </p>

          <h4 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            Here's what makes us different:
          </h4>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-[#d4af37] flex-shrink-0 mt-1" />
                <div>
                  <h5 className="text-xl font-bold text-neutral-900 mb-2">2-Hour Delivery</h5>
                  <p className="text-neutral-700">
                    Order now, delivered in 2 hours or less. No waiting, no excuses.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <Star className="w-8 h-8 text-[#d4af37] flex-shrink-0 mt-1" />
                <div>
                  <h5 className="text-xl font-bold text-neutral-900 mb-2">Premium Quality</h5>
                  <p className="text-neutral-700">
                    These aren't gas station roses. Every arrangement is hand-crafted with fresh, luxury blooms.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-[#d4af37] flex-shrink-0 mt-1" />
                <div>
                  <h5 className="text-xl font-bold text-neutral-900 mb-2">Concierge Service</h5>
                  <p className="text-neutral-700">
                    We handle everything. You just choose your arrangement and delivery time. We'll make you look good.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <Phone className="w-8 h-8 text-[#d4af37] flex-shrink-0 mt-1" />
                <div>
                  <h5 className="text-xl font-bold text-neutral-900 mb-2">Operating Hours</h5>
                  <p className="text-neutral-700">
                    7 AM - 7 PM daily, so you can fix things fast, any day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Selection - Will continue with remaining sections */}
      <section id="packages" className="py-20 px-4 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-neutral-900 mb-16 text-center">
            Choose Your Power Move
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Package 1 - Premium */}
            <div className="bg-neutral-50 rounded-lg p-8 shadow-lg border-2 border-neutral-200">
              <h4 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-neutral-900 mb-2">50 Red Roses</h4>
              <p className="text-lg text-[#d4af37] font-semibold mb-4">The Grand Gesture</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-neutral-900">$399</span>
              </div>
              <p className="text-neutral-600 mb-6 italic">
                When "I'm sorry" needs to be LOUD
              </p>
              <div className="mb-6 text-sm text-neutral-600">
                <p className="mb-2">Includes: 50 premium red roses, baby's breath, luxury wrapping</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-neutral-700">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span>Make an unforgettable statement</span>
                </li>
                <li className="flex items-start gap-2 text-neutral-700">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span>The arrangement people talk about for years</span>
                </li>
                <li className="flex items-start gap-2 text-neutral-700">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span>For the big moments that matter</span>
                </li>
              </ul>
              <Link
                href="/checkout?package=50_roses"
                className="block w-full text-center bg-[#d4af37] hover:bg-[#b8941f] text-neutral-900 font-bold py-4 px-6 rounded-lg transition-all"
              >
                Order The Grand Gesture
              </Link>
            </div>

            {/* Package 2 - Most Popular */}
            <div className="bg-[#d4af37] rounded-lg p-8 shadow-2xl border-4 border-[#b8941f] transform md:scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-[#d4af37] px-4 py-1 rounded-full text-sm font-bold">
                ⭐ MOST POPULAR
              </div>
              <h4 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-neutral-900 mb-2">2 Dozen Red Roses</h4>
              <p className="text-lg text-neutral-900 font-semibold mb-4">The Classic</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-neutral-900">$299</span>
              </div>
              <p className="text-neutral-800 mb-6 italic">
                Perfect balance of impressive and elegant
              </p>
              <div className="mb-6 text-sm text-neutral-800">
                <p className="mb-2">Includes: 24 premium red roses, baby's breath, luxury wrapping</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-neutral-900">
                  <CheckCircle className="w-5 h-5 text-neutral-900 flex-shrink-0 mt-0.5" />
                  <span>Trusted by 1,000+ smart men</span>
                </li>
                <li className="flex items-start gap-2 text-neutral-900">
                  <CheckCircle className="w-5 h-5 text-neutral-900 flex-shrink-0 mt-0.5" />
                  <span>Impressive without going overboard</span>
                </li>
                <li className="flex items-start gap-2 text-neutral-900">
                  <CheckCircle className="w-5 h-5 text-neutral-900 flex-shrink-0 mt-0.5" />
                  <span>Makes her feel special, guaranteed</span>
                </li>
              </ul>
              <Link
                href="/checkout?package=24_roses"
                className="block w-full text-center bg-neutral-900 hover:bg-neutral-800 text-[#d4af37] font-bold py-4 px-6 rounded-lg transition-all text-lg"
              >
                Order The Classic
              </Link>
            </div>

            {/* Package 3 - Entry */}
            <div className="bg-neutral-50 rounded-lg p-8 shadow-lg border-2 border-neutral-200">
              <h4 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-neutral-900 mb-2">1 Dozen Red Roses</h4>
              <p className="text-lg text-[#d4af37] font-semibold mb-4">The Essential</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-neutral-900">$249</span>
              </div>
              <p className="text-neutral-600 mb-6 italic">
                Timeless elegance for any occasion
              </p>
              <div className="mb-6 text-sm text-neutral-600">
                <p className="mb-2">Includes: 12 premium red roses, baby's breath, luxury wrapping</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-neutral-700">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span>Classic beauty that never fails</span>
                </li>
                <li className="flex items-start gap-2 text-neutral-700">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span>Perfect for "just because" moments</span>
                </li>
                <li className="flex items-start gap-2 text-neutral-700">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span>Quality that speaks for itself</span>
                </li>
              </ul>
              <Link
                href="/checkout?package=12_roses"
                className="block w-full text-center bg-[#d4af37] hover:bg-[#b8941f] text-neutral-900 font-bold py-4 px-6 rounded-lg transition-all"
              >
                Order The Essential
              </Link>
            </div>
          </div>

          <div className="text-center space-y-4 text-neutral-600">
            <p className="text-lg">All arrangements come with FREE baby's breath and luxury presentation</p>
            <p className="text-lg font-semibold text-neutral-900">All orders backed by our 100% Satisfaction Guarantee</p>
          </div>
        </div>
      </section>

      {/* Remaining sections truncated for brevity - will be added in separate component or continued */}

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#d4af37] mb-4">
                Flash Gift Delivery
              </h4>
              <p className="text-sm">
                Premium roses delivered in 2 hours or less. Serving {settings.metroArea} with pride.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-white mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="/track" className="hover:text-[#d4af37]">Track Order</Link></li>
                <li><Link href="/terms" className="hover:text-[#d4af37]">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-[#d4af37]">Privacy Policy</Link></li>
                <li><Link href="/refund" className="hover:text-[#d4af37]">Refund Policy</Link></li>
                <li><Link href="/contact" className="hover:text-[#d4af37]">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-white mb-4">Contact</h5>
              <p className="text-sm mb-2">Phone: {settings.phoneNumber}</p>
              <p className="text-sm">Hours: 7 AM - 7 PM Daily</p>
            </div>
          </div>
          <div className="border-t border-neutral-700 pt-8 text-center text-sm">
            <p>&copy; 2025 Flash Gift Delivery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
