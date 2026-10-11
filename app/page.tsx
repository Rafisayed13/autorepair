'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import StructuredData from './components/StructuredData'

export default function Home() {
  const [activeTab, setActiveTab] = useState('services')
  const [activeService, setActiveService] = useState('engine')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [brandsDropdown, setBrandsDropdown] = useState(false)
  const [servicesTimeout, setServicesTimeout] = useState<NodeJS.Timeout | null>(null)
  const [brandsTimeout, setBrandsTimeout] = useState<NodeJS.Timeout | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleServicesEnter = () => {
    if (servicesTimeout) clearTimeout(servicesTimeout)
    setServicesDropdown(true)
  }

  const handleServicesLeave = () => {
    const timeout = setTimeout(() => setServicesDropdown(false), 300)
    setServicesTimeout(timeout)
  }

  const handleBrandsEnter = () => {
    if (brandsTimeout) clearTimeout(brandsTimeout)
    setBrandsDropdown(true)
  }

  const handleBrandsLeave = () => {
    const timeout = setTimeout(() => setBrandsDropdown(false), 300)
    setBrandsTimeout(timeout)
  }

  const handleScroll = () => {
    setServicesDropdown(false)
    setBrandsDropdown(false)
  }

  return (
    <>
      <StructuredData />
      <main className="min-h-screen bg-white" onScroll={handleScroll} onWheel={handleScroll}>
        {/* Top Contact Bar */}
        <div className="bg-white/80 backdrop-blur-md border-b border-green-100 text-sm">
          <div className="container mx-auto px-4 sm:px-6 py-2 sm:py-2.5">
            <div className="flex flex-wrap justify-center sm:justify-between items-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-gray-700">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 text-[10px]">⏰</span>
                <span className="hidden sm:inline">Open everyday </span>
                <span className="sm:hidden">8AM - 9PM Daily</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 text-[10px]">📞</span>
                <a href="tel:+971554969599" className="hover:text-green-600 transition font-medium">
                  <span className="hidden sm:inline">Schedule Appointment </span>+971 55 4969599
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 text-[10px]">📍</span>
                <span className="hidden md:inline">Umm Ramool, Al Rashidiya Dubai</span>
                <span className="md:hidden">Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Al Suwaidi Auto Repair Garage logo - car repair workshop in Al Rashidiya Dubai"
                  width={180}
                  height={60}
                  className="h-10 sm:h-12 lg:h-14 w-auto"
                  priority
                />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-green-500 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                <Link href="/" className="text-gray-700 hover:text-green-500 font-medium transition">HOME</Link>
                <Link href="/about" className="text-gray-700 hover:text-green-500 font-medium transition">ABOUT</Link>

                {/* Services Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <button className="text-gray-700 hover:text-green-500 font-medium flex items-center gap-1 transition">
                    SERVICES
                    <span className="text-green-500">+</span>
                  </button>
                  <div className={`absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-200 ${servicesDropdown ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`} style={{ zIndex: 1000 }}>
                    <Link href="/services/suspension" className="block px-6 py-3 text-gray-700 hover:bg-green-500 hover:text-white transition border-b border-gray-100">
                      Suspension Repair
                    </Link>
                    <Link href="/services/engine" className="block px-6 py-3 text-gray-700 hover:bg-green-500 hover:text-white transition border-b border-gray-100">
                      Car Engine Repair
                    </Link>
                    <Link href="/services/transmission" className="block px-6 py-3 text-gray-700 hover:bg-green-500 hover:text-white transition border-b border-gray-100">
                      Transmission Repair
                    </Link>
                    <Link href="/services/ac" className="block px-6 py-3 text-gray-700 hover:bg-green-500 hover:text-white transition border-b border-gray-100">
                      Car AC Repair
                    </Link>
                    <Link href="/services/oil" className="block px-6 py-3 text-gray-700 hover:bg-green-500 hover:text-white transition border-b border-gray-100">
                      Oil Change
                    </Link>
                    <Link href="/services/brake" className="block px-6 py-3 text-gray-700 hover:bg-green-500 hover:text-white transition border-b border-gray-100">
                      Brake Repair
                    </Link>
                    <Link href="/services/battery" className="block px-6 py-3 text-gray-700 hover:bg-green-500 hover:text-white transition border-b border-gray-100">
                      Battery Replacement
                    </Link>
                    <Link href="/services/electrical" className="block px-6 py-3 text-gray-700 hover:bg-green-500 hover:text-white transition border-b border-gray-100">
                      Electrical Repairing & Programming
                    </Link>
                    <Link href="/services/exhaust" className="block px-6 py-3 text-gray-700 hover:bg-green-500 hover:text-white transition">
                      Exhaust Services
                    </Link>
                  </div>
                </div>

                <Link href="/gallery" className="text-gray-700 hover:text-green-500 font-medium transition">GALLERY</Link>
                <Link href="/blog" className="text-gray-700 hover:text-green-500 font-medium transition">BLOG</Link>
                <Link href="/contact" className="text-gray-700 hover:text-green-500 font-medium transition">CONTACT</Link>
                <a
                  href="tel:+971554969599"
                  className="bg-green-500 text-white px-4 lg:px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition shadow-md"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
                <div className="flex flex-col space-y-3 pt-4">
                  <Link href="/" className="text-gray-700 hover:text-green-500 font-medium py-2 px-2" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
                  <Link href="/about" className="text-gray-700 hover:text-green-500 font-medium py-2 px-2" onClick={() => setMobileMenuOpen(false)}>ABOUT</Link>

                  <div className="border-t border-gray-200 pt-3">
                    <p className="text-gray-500 text-sm font-semibold mb-2 px-2">OUR SERVICES</p>
                    <Link href="/services/suspension" className="block text-gray-700 hover:text-green-500 py-2 pl-6" onClick={() => setMobileMenuOpen(false)}>Suspension Repair</Link>
                    <Link href="/services/engine" className="block text-gray-700 hover:text-green-500 py-2 pl-6" onClick={() => setMobileMenuOpen(false)}>Car Engine Repair</Link>
                    <Link href="/services/transmission" className="block text-gray-700 hover:text-green-500 py-2 pl-6" onClick={() => setMobileMenuOpen(false)}>Transmission Repair</Link>
                    <Link href="/services/ac" className="block text-gray-700 hover:text-green-500 py-2 pl-6" onClick={() => setMobileMenuOpen(false)}>Car AC Repair</Link>
                    <Link href="/services/oil" className="block text-gray-700 hover:text-green-500 py-2 pl-6" onClick={() => setMobileMenuOpen(false)}>Oil Change</Link>
                    <Link href="/services/brake" className="block text-gray-700 hover:text-green-500 py-2 pl-6" onClick={() => setMobileMenuOpen(false)}>Brake Repair</Link>
                    <Link href="/services/battery" className="block text-gray-700 hover:text-green-500 py-2 pl-6" onClick={() => setMobileMenuOpen(false)}>Battery Replacement</Link>
                    <Link href="/services/electrical" className="block text-gray-700 hover:text-green-500 py-2 pl-6" onClick={() => setMobileMenuOpen(false)}>Electrical Repair</Link>
                    <Link href="/services/exhaust" className="block text-gray-700 hover:text-green-500 py-2 pl-6" onClick={() => setMobileMenuOpen(false)}>Exhaust Services</Link>
                  </div>

                  <Link href="/gallery" className="text-gray-700 hover:text-green-500 font-medium py-2 px-2 border-t border-gray-200 pt-3" onClick={() => setMobileMenuOpen(false)}>GALLERY</Link>
                  <Link href="/blog" className="text-gray-700 hover:text-green-500 font-medium py-2 px-2" onClick={() => setMobileMenuOpen(false)}>BLOG</Link>
                  <Link href="/contact" className="text-gray-700 hover:text-green-500 font-medium py-2 px-2" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
                  <a
                    href="tel:+971554969599"
                    className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition text-center mx-2"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-white via-white to-green-50 overflow-hidden pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-20 flex items-center">
          {/* Dot Pattern */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #10B981 1.5px, transparent 0)',
              backgroundSize: '50px 50px'
            }}
          ></div>

          {/* Soft Glow Blob */}
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-green-200 to-blue-100 rounded-full blur-3xl opacity-40 -translate-y-1/3 translate-x-1/4"></div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* Left: Text */}
              <div className="space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-3 bg-white border border-green-500/30 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
                  <span className="flex items-center gap-1.5 text-green-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    OPEN NOW
                  </span>
                  <span className="w-px h-4 bg-gray-200"></span>
                  <span className="text-gray-700">TRUSTED AUTO REPAIR IN DUBAI</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight">
                  <span className="text-gray-900">Car Repair Garage</span><br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                    in Dubai
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-gray-600 max-w-lg leading-relaxed">
                  Professional car repair and maintenance in Umm Ramool, Dubai. We handle engine, AC, brake, transmission, electrical and general auto repair — with <span className="font-semibold text-green-600"> free pick-up and drop-off</span>.
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
                  <a
                    href="https://wa.me/971551010341"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-bold hover:bg-green-600 transition shadow-lg shadow-green-200"
                  >
                    Get A Quote
                  </a>
                  <a
                    href="tel:+971554969599"
                    className="bg-white text-gray-900 border-2 border-gray-200 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-bold hover:border-green-500 hover:text-green-600 transition"
                  >
                    Call Now
                  </a>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-3 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span>20+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span>1 Year Warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span>All Car Brands</span>
                  </div>
                </div>
              </div>

              {/* Right: 3D Car Image */}
              <div className="relative h-[340px] sm:h-[480px] lg:h-[620px] w-full flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/3d-car-render.png"
                    alt="Car repair workshop Dubai - Al Suwaidi Auto Repair Garage Umm Ramool Al Rashidiya"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />

                  {/* Floating rating card - Top Left */}
                  <div className="absolute top-[15%] sm:top-[20%] -left-2 sm:-left-6 bg-white rounded-2xl shadow-xl p-3 sm:p-4 flex items-center gap-3 animate-[bounce_3s_ease-in-out_infinite] z-20">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center text-xl sm:text-2xl">
                      ⭐
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-bold text-gray-900">4.9/5.0</p>
                      <p className="text-xs text-gray-500">500+ Reviews</p>
                    </div>
                  </div>

                  {/* Floating badge card - Bottom Right */}
                  <div className="absolute bottom-[15%] sm:bottom-[20%] -right-2 sm:-right-6 bg-white rounded-2xl shadow-xl p-3 sm:p-4 flex items-center gap-3 z-20">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                      ✓
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-bold text-gray-900">24/7 Service</p>
                      <p className="text-xs text-gray-500">Always Available</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Why Dubai Chooses Excellence Section */}
        <section className="bg-white py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">

            {/* Heading */}
            <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                Why Dubai
              </h2>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-green-500 leading-tight mt-1">
                Chooses Excellence
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-5 leading-relaxed">
                20 years of perfecting automotive care with uncompromising standards<br className="hidden sm:block" />
                and innovative solutions.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">

              {/* LEFT: Image Card with overlays */}
              <div className="relative h-[450px] sm:h-[550px] lg:h-[720px] rounded-3xl overflow-hidden shadow-xl group">
                <Image
                  src="/mechanic-customer.jpg"
                  alt="Mechanic consulting customer about car repair at Al Suwaidi Auto Repair Dubai"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

                <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5">
                  <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-[10px]">
                    ✓
                  </span>
                  <span className="text-white text-xs font-medium">Certified Excellence</span>
                </div>

                <div className="absolute top-[42%] right-5 flex flex-col gap-2.5 items-end">
                  <div className="bg-black/70 backdrop-blur-md text-white text-xs font-bold rounded-md px-3 py-1.5">
                    10K+ Repaired
                  </div>
                  <div className="bg-black/70 backdrop-blur-md text-white text-xs font-bold rounded-md px-3 py-1.5">
                    4.9 ★ Rating
                  </div>
                  <div className="bg-black/70 backdrop-blur-md text-white text-xs font-bold rounded-md px-3 py-1.5">
                    98% Client Retention
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      ✓
                    </span>
                    <span className="text-green-400 font-bold text-xs sm:text-sm tracking-wide uppercase">
                      Dubai's Most Trusted
                    </span>
                  </div>
                  <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">
                    Premium Automotive<br />Care Perfected
                  </h3>
                </div>
              </div>

              {/* RIGHT: Stats + Feature Cards */}
              <div className="space-y-5">

                <div className="grid grid-cols-3 gap-3 sm:gap-4">

                  <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 text-center shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 3l9 4v5c0 5.25-3.75 9.75-9 11-5.25-1.25-9-5.75-9-11V7l9-4z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-xl sm:text-2xl font-black text-gray-900">20+</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 mt-1">Years Excellence</p>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 text-center shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-5.13a4 4 0 11-8 0 4 4 0 018 0zm6 0a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-xl sm:text-2xl font-black text-gray-900">10K+</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 mt-1">Clients Served</p>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 text-center shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-xl sm:text-2xl font-black text-gray-900">24/7</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 mt-1">Always Available</p>
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

                  <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-300 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="w-11 h-11 bg-green-50 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1.5 text-sm">20+ Years of Experience</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Skilled mechanics with deep expertise in all major brands
                    </p>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-300 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="w-11 h-11 bg-green-50 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1.5 text-sm">Free Pick-Up & Drop-Off</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      We collect and return your car anywhere in Dubai — free
                    </p>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-300 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="w-11 h-11 bg-green-50 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1.5 text-sm">1 Year Warranty</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      All repairs backed by our 12-month guarantee
                    </p>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-300 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="w-11 h-11 bg-green-50 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1.5 text-sm">Transparent Pricing</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Clear quotes upfront — no hidden costs, ever
                    </p>
                  </div>

                </div>

                <div className="bg-green-50/60 border border-green-100 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <p className="font-bold text-gray-900 text-sm flex items-center gap-2">
                      <span className="text-green-500">✦</span>
                      Ready for Premium Care?
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      Experience Dubai's finest automotive service.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/971551010341"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full text-xs font-bold transition shadow-md whitespace-nowrap flex items-center gap-1.5"
                  >
                    Book Premium Service
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Featured Car Repair Services Section */}
        <section className="relative bg-gradient-to-b from-white via-green-50/40 to-white py-16 sm:py-20 overflow-hidden">
          <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-green-200/40 to-emerald-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-gradient-to-tl from-emerald-200/30 to-green-100/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">

            <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-green-200 rounded-full px-4 py-1.5 mb-5 shadow-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-bold text-green-600 tracking-wide uppercase">
                  Our Services
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Featured{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                  Car Repair
                </span>{" "}
                Services
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
                Professional automotive solutions tailored to Dubai's climate and driving conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">

              <ServiceCard
                image="/mechanic2.jpg"
                icon="🔧"
                title="Engine Repair Dubai"
                bullets={[
                  "Full engine diagnostics & repair",
                  "Timing belt & chain replacement",
                  "Cylinder head & valve service",
                  "All car brands supported",
                ]}
                detailsHref="/services/engine"
              />

              <ServiceCard
                image="/batteries.png"
                icon="🔋"
                title="Battery Replacement Dubai"
                bullets={[
                  "Computerized battery health test",
                  "Premium new battery installation",
                  "Terminal & cable inspection",
                  "Complete charging system check",
                ]}
                detailsHref="/services/battery"
              />

              <ServiceCard
                image="/diagnoses.png"
                icon="❄️"
                title="Car AC Repair Dubai"
                bullets={[
                  "Complete AC system repair",
                  "Cooling system diagnostics",
                  "Refrigerant recharge & leak fix",
                  "Compressor & condenser service",
                ]}
                detailsHref="/services/ac"
              />

              <ServiceCard
                image="/brake-repair.jpg"
                icon="🛞"
                title="Brake Pad Repair Dubai"
                bullets={[
                  "Brake pad replacement",
                  "Brake disc & rotor service",
                  "Brake fluid flush & bleed",
                  "ABS system diagnostics",
                ]}
                detailsHref="/services/brake"
              />

              <ServiceCard
                image="/transmission-repair.jpg"
                icon="⚙️"
                title="Transmission Repair Dubai"
                bullets={[
                  "Automatic & manual transmission",
                  "Complete transmission rebuild",
                  "Fluid change & filter service",
                  "Clutch repair & replacement",
                ]}
                detailsHref="/services/transmission"
              />

              <ServiceCard
                image="/oil-lube-filters.png"
                icon="🛢️"
                title="Oil Change Dubai"
                bullets={[
                  "Premium engine oil change",
                  "Oil filter replacement",
                  "Fluid level top-up",
                  "Multi-point safety check",
                ]}
                detailsHref="/services/oil"
              />

              <ServiceCard
                image="/tyres-suspension.png"
                icon="🚙"
                title="Suspension Repair Dubai"
                bullets={[
                  "Shock absorber replacement",
                  "Struts & springs service",
                  "Steering system repair",
                  "Wheel alignment check",
                ]}
                detailsHref="/services/suspension"
              />

              <ServiceCard
                image="/electrical-repair.jpg"
                icon="⚡"
                title="Electrical Repair Dubai"
                bullets={[
                  "Computer diagnostics",
                  "Wiring & fuse repair",
                  "ECU programming",
                  "Starting & charging systems",
                ]}
                detailsHref="/services/electrical"
              />

              

              <ServiceCard
                image="/emergency-towing.jpg"
                icon="🚨"
                title="Emergency Contact 24/7"
                bullets={[
                  "24/7 availability",
                  "Fast response across Dubai",
                  "Roadside breakdown recovery",
                  "All emergencies handled",
                ]}
                detailsHref="/services/emergency"
                emergency
              />

              <ServiceCard
                image="/exhaust-repair.jpg"
                icon="🔊"
                title="Exhaust & Muffler Repair"
                bullets={[
                  "Exhaust system diagnostics",
                  "Muffler repair & replacement",
                  "Catalytic converter service",
                  "Pipe & welding repairs",
                ]}
                detailsHref="/services/exhaust"
              />

              {/* CTA Card */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 p-6 shadow-lg shadow-green-200 flex flex-col justify-between min-h-[420px]">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                      backgroundSize: '20px 20px',
                    }}
                  ></div>
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-5">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3 className="text-white text-xl font-black leading-tight mb-2">
                    Need Something Else?
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Explore our complete list of services or talk to us about any car issue.
                  </p>
                </div>

                <a
                  href="https://wa.me/971551010341"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 bg-white text-green-600 hover:bg-gray-50 px-5 py-3 rounded-xl font-bold text-sm text-center transition shadow-lg flex items-center justify-center gap-2 mt-6"
                >
                  View All Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Need Custom Service Package Section */}
        <section className="bg-white py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl overflow-hidden shadow-2xl px-6 sm:px-12 lg:px-16 py-12 sm:py-16">
              <div className="absolute -top-20 -right-20 w-64 h-64 sm:w-80 sm:h-80 bg-blue-900/40 rounded-full"></div>
              <div className="absolute -bottom-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 bg-blue-900/40 rounded-full"></div>
              <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>

              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                  Need Custom Service Package?
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-blue-100 leading-relaxed mb-8 max-w-2xl mx-auto">
                  Get a personalized quote for multiple services or fleet maintenance. Our experts will create the perfect solution for your needs.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <a
                    href="https://wa.me/971551010341"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold transition shadow-lg shadow-green-900/30"
                  >
                    <span className="text-lg">📞</span>
                    Get Custom Quote
                  </a>
                  <a
                    href="tel:+971554969599"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-green-500/50 hover:border-green-500 hover:bg-green-500/10 text-green-400 hover:text-green-300 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold transition"
                  >
                    <span className="text-lg">📞</span>
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book Now Section */}
        <section className="bg-gradient-to-b from-white via-blue-50/30 to-white py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">

            <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                Book <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Now</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-4">
                Limited time offers — get the best deals on premium car services in Dubai.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">

              <div className="bg-white rounded-2xl border-t-4 border-cyan-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 sm:p-7 flex flex-col">
                <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-wide mb-2">
                  AC Repair Service
                </h3>
                <p className="text-green-600 font-bold text-sm mb-6">
                  AC Repair — Stay Cool This Summer
                </p>

                <ul className="space-y-3 text-xs text-gray-600 flex-1">
                  {[
                    "Computerized AC System Diagnosis — We scan for any faults or error codes.",
                    "AC Cooling Performance Test — Checking temperature output and cooling efficiency.",
                    "Refrigerant Level Check — Ensuring optimal gas levels for proper cooling.",
                    "AC Compressor & Condenser Inspection — Verifying if key components are working correctly.",
                    "Cabin Air Filter Check — Assessing if a clogged filter is affecting airflow.",
                    "Leaks & Blockages Detection — Identifying refrigerant leaks or system blockages.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 mt-7">
                  <a
                    href="https://wa.me/971551010341"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xs font-bold py-3 rounded-xl transition shadow-md shadow-green-200"
                  >
                    Get This Offer →
                  </a>
                  <a
                    href="tel:+971554969599"
                    className="flex-1 text-center border-2 border-green-500 text-green-600 hover:bg-green-50 text-xs font-bold py-3 rounded-xl transition"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl border-t-4 border-blue-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 sm:p-7 flex flex-col">
                <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-wide mb-2">
                  Engine Repair Service
                </h3>
                <p className="text-green-600 font-bold text-sm mb-6">
                  Diagnostics, Repairs & Performance Restore
                </p>

                <ul className="space-y-3 text-xs text-gray-600 flex-1">
                  {[
                    "Computerized Engine Diagnostic Scan — We identify faults, warning lights, and performance issues.",
                    "Engine Overheating Check — We inspect cooling components, coolant levels, and temperature behavior.",
                    "Oil Leak & Fluid Inspection — We check for leaks, contamination, and low fluid levels.",
                    "Ignition & Misfire Diagnosis — We test spark, sensors, and combustion-related issues.",
                    "Engine Mount & Noise Check — We assess vibration, unusual noise, and mounting condition.",
                    "Repair Recommendations & On-Site Support — We explain the issue clearly and guide the next fix.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 mt-7">
                  <a
                    href="https://wa.me/971551010341"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xs font-bold py-3 rounded-xl transition shadow-md shadow-green-200"
                  >
                    Get This Offer →
                  </a>
                  <a
                    href="tel:+971554969599"
                    className="flex-1 text-center border-2 border-green-500 text-green-600 hover:bg-green-50 text-xs font-bold py-3 rounded-xl transition"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl border-t-4 border-green-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 sm:p-7 flex flex-col">
                <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-wide mb-2">
                  Transmission Repair Service
                </h3>
                <p className="text-green-600 font-bold text-sm mb-6">
                  Smooth Gear Shifts & Gearbox Solutions
                </p>

                <ul className="space-y-3 text-xs text-gray-600 flex-1">
                  {[
                    "Transmission Diagnostic Scan — We detect gearbox faults, sensor issues, and warning codes.",
                    "Gear Shift & Clutch Performance Check — We inspect rough shifting, slipping, and delayed engagement.",
                    "Transmission Fluid Inspection — We check fluid quality, level, and signs of overheating.",
                    "Leak Detection & Seal Check — We look for fluid loss, damaged seals, and related issues.",
                    "Internal Component Assessment — We evaluate gearbox condition for wear and damage.",
                    "Repair, Rebuild & Replacement Guidance — We recommend the best fix based on the fault found.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 mt-7">
                  <a
                    href="https://wa.me/971551010341"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xs font-bold py-3 rounded-xl transition shadow-md shadow-green-200"
                  >
                    Get This Offer →
                  </a>
                  <a
                    href="tel:+971554969599"
                    className="flex-1 text-center border-2 border-green-500 text-green-600 hover:bg-green-50 text-xs font-bold py-3 rounded-xl transition"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Ready to Service Your Car — Contact Section */}
        <section className="bg-gradient-to-b from-white via-green-50/30 to-white py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">

            <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-bold text-green-600 tracking-wide uppercase">
                  Get In Touch
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Ready to Service{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                  Your Car?
                </span>
              </h2>

              <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
                Choose the easiest way to connect with us.<br className="hidden sm:block" />
                Most customers prefer calling or WhatsApp!
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-12 sm:mb-14">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">🚙</span>
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-900">100% Free</p>
                  <p className="text-[10px] text-gray-500">Pickup & Drop Service</p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-10 bg-gray-200"></div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">📍</span>
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-900">We Come to You</p>
                  <p className="text-[10px] text-gray-500">Free collection & delivery within Dubai</p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-10 bg-gray-200"></div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">🕐</span>
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-900">24/7 Available</p>
                  <p className="text-[10px] text-gray-500">Emergency service round the clock</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-200 hover:-translate-y-1 transition-all duration-300 p-6 text-center flex flex-col">
                <span className="self-center bg-gradient-to-r from-green-500 to-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4">
                  Available 24/7
                </span>
                <div className="w-14 h-14 mx-auto bg-green-50 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-black text-gray-900 text-base mb-1.5">Call Now</h3>
                <p className="text-xs text-gray-500 leading-relaxed flex-1">
                  Speak directly with our car repair experts
                </p>
                <a
                  href="tel:+971554969599"
                  className="mt-5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xs font-bold py-2.5 rounded-xl transition shadow-md shadow-green-200"
                >
                  Call Us
                </a>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-200 hover:-translate-y-1 transition-all duration-300 p-6 text-center flex flex-col">
                <span className="self-center bg-gradient-to-r from-green-500 to-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4">
                  Fastest Reply
                </span>
                <div className="w-14 h-14 mx-auto bg-green-50 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <h3 className="font-black text-gray-900 text-base mb-1.5">WhatsApp</h3>
                <p className="text-xs text-gray-500 leading-relaxed flex-1">
                  Quick messages & photos of your car issue
                </p>
                <a
                  href="https://wa.me/971551010341"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xs font-bold py-2.5 rounded-xl transition shadow-md shadow-green-200"
                >
                  Chat Now
                </a>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-200 hover:-translate-y-1 transition-all duration-300 p-6 text-center flex flex-col">
                <span className="self-center bg-gradient-to-r from-green-500 to-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4">
                  Detailed Enquiries
                </span>
                <div className="w-14 h-14 mx-auto bg-green-50 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-black text-gray-900 text-base mb-1.5">Email</h3>
                <p className="text-xs text-gray-500 leading-relaxed flex-1">
                  Send detailed enquiry about your vehicle
                </p>
                <a
                  href="mailto:mdullah163@gmail.com"
                  className="mt-5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xs font-bold py-2.5 rounded-xl transition shadow-md shadow-green-200"
                >
                  Email Us
                </a>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-200 hover:-translate-y-1 transition-all duration-300 p-6 text-center flex flex-col">
                <span className="self-center bg-gradient-to-r from-green-500 to-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4">
                  Walk-in Welcome
                </span>
                <div className="w-14 h-14 mx-auto bg-green-50 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-black text-gray-900 text-base mb-1.5">Visit Us</h3>
                <p className="text-xs text-gray-500 leading-relaxed flex-1">
                  Umm Ramool, Al Rashidiya, Dubai
                </p>
                <a
                  href="https://www.google.com/maps/place/Al+Suwaidi+Auto+Repair+Garage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xs font-bold py-2.5 rounded-xl transition shadow-md shadow-green-200"
                >
                  Get Directions
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Google Reviews Section */}
        <section className="bg-gradient-to-b from-white via-blue-50/30 to-white py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">

              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center">
                  <svg className="w-9 h-9" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
                Rated <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">5 Stars</span> on Google
              </h2>

              <div className="flex justify-center gap-1.5 mb-5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400 drop-shadow-sm"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto">
                Trusted by hundreds of happy car owners in Dubai. See our real reviews and rate your own experience on Google.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <a
                  href="https://search.google.com/local/reviews?placeid=ChIJ7WxV0LhdXz4RMwQpddBPo9A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 px-6 sm:px-8 py-3.5 rounded-full text-sm sm:text-base font-bold transition shadow-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Read Our Reviews
                </a>
                <a
                  href="https://search.google.com/local/writereview?placeid=ChIJ7WxV0LhdXz4RMwQpddBPo9A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 sm:px-8 py-3.5 rounded-full text-sm sm:text-base font-bold transition shadow-lg shadow-green-200"
                >
                  ⭐ Leave a Review
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-12 sm:py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              <div className="text-center group">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <h3 className="text-7xl font-bold text-white group-hover:scale-110 transition-transform duration-300">3</h3>
                  <div className="w-1 h-16 bg-green-500"></div>
                  <div className="text-left">
                    <p className="text-xl font-semibold text-white">Generation of</p>
                    <p className="text-xl font-semibold text-white">Experience</p>
                  </div>
                </div>
              </div>

              <div className="text-center group">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <h3 className="text-7xl font-bold text-white group-hover:scale-110 transition-transform duration-300">2,000<span className="text-green-500">+</span></h3>
                  <div className="w-1 h-16 bg-green-500"></div>
                  <div className="text-left">
                    <p className="text-xl font-semibold text-white">Car</p>
                    <p className="text-xl font-semibold text-white">Repaired</p>
                  </div>
                </div>
              </div>

              <div className="text-center group">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <h3 className="text-7xl font-bold text-white group-hover:scale-110 transition-transform duration-300">97<span className="text-green-500">%</span></h3>
                  <div className="w-1 h-16 bg-green-500"></div>
                  <div className="text-left">
                    <p className="text-xl font-semibold text-white">Satisfied</p>
                    <p className="text-xl font-semibold text-white">Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">Diagnostics, Repairs & Servicing</h2>

                <div className="space-y-4">
                  <div className="border border-gray-200 rounded">
                    <button
                      onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                      className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50"
                    >
                      <span className="font-semibold text-gray-800">Vehicle repair and auto repair services in Dubai at affordable rates</span>
                      <span className="text-2xl text-green-500">{openFaq === 1 ? '−' : '+'}</span>
                    </button>
                    {openFaq === 1 && (
                      <div className="p-4 bg-gray-50 text-gray-700">
                        Al Suwaidi Auto Repair offers comprehensive vehicle repair services at competitive prices in Dubai. We handle all types of repairs from minor fixes to major overhauls, ensuring quality workmanship without breaking your budget. Our transparent pricing means no hidden costs.
                      </div>
                    )}
                  </div>

                  <div className="border border-gray-200 rounded">
                    <button
                      onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                      className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50"
                    >
                      <span className="font-semibold text-gray-800">Why is vehicle maintenance important?</span>
                      <span className="text-2xl text-green-500">{openFaq === 2 ? '−' : '+'}</span>
                    </button>
                    {openFaq === 2 && (
                      <div className="p-4 bg-gray-50 text-gray-700">
                        Regular vehicle maintenance prevents costly breakdowns, extends your car's lifespan, improves fuel efficiency, and ensures your safety on the road. It helps identify potential problems early before they become major issues. Well-maintained vehicles also have better resale value.
                      </div>
                    )}
                  </div>

                  <div className="border border-gray-200 rounded">
                    <button
                      onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                      className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50"
                    >
                      <span className="font-semibold text-gray-800">How often should I service my car in Dubai?</span>
                      <span className="text-2xl text-green-500">{openFaq === 3 ? '−' : '+'}</span>
                    </button>
                    {openFaq === 3 && (
                      <div className="p-4 bg-gray-50 text-gray-700">
                        In Dubai's extreme heat, we recommend servicing your car every 5,000-10,000 km or every 6 months, whichever comes first. The harsh climate puts extra stress on your vehicle's cooling system, battery, and fluids, making regular maintenance crucial for optimal performance.
                      </div>
                    )}
                  </div>

                  <div className="border border-gray-200 rounded">
                    <button
                      onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                      className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50"
                    >
                      <span className="font-semibold text-gray-800">Do you provide warranty on repairs?</span>
                      <span className="text-2xl text-green-500">{openFaq === 4 ? '−' : '+'}</span>
                    </button>
                    {openFaq === 4 && (
                      <div className="p-4 bg-gray-50 text-gray-700">
                        Yes, we provide a 1-year warranty on most repairs and services. We use genuine or top-quality parts to ensure longevity and reliability. Our warranty covers both parts and labor, giving you complete peace of mind with your repair investment.
                      </div>
                    )}
                  </div>

                  <div className="border border-gray-200 rounded">
                    <button
                      onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                      className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50"
                    >
                      <span className="font-semibold text-gray-800">What car brands do you service?</span>
                      <span className="text-2xl text-green-500">{openFaq === 5 ? '−' : '+'}</span>
                    </button>
                    {openFaq === 5 && (
                      <div className="p-4 bg-gray-50 text-gray-700">
                        We service all car brands including BMW, Mercedes, Audi, Porsche, Range Rover, Toyota, Honda, Nissan, Ford, and more. Our expert mechanics have specialized training on German cars and extensive experience with all major brands sold in the UAE.
                      </div>
                    )}
                  </div>

                  <div className="border border-gray-200 rounded">
                    <button
                      onClick={() => setOpenFaq(openFaq === 6 ? null : 6)}
                      className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50"
                    >
                      <span className="font-semibold text-gray-800">Do you offer pick up and drop off service?</span>
                      <span className="text-2xl text-green-500">{openFaq === 6 ? '−' : '+'}</span>
                    </button>
                    {openFaq === 6 && (
                      <div className="p-4 bg-gray-50 text-gray-700">
                        Absolutely! We offer complimentary pick up and drop off service across Dubai. Our team will collect your vehicle from your home or office, service it at our workshop, and deliver it back to you at no extra charge. This saves you time and hassle.
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="https://wa.me/971551010341"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-green-600 border-2 border-green-500 px-8 py-3 rounded-full font-semibold hover:bg-green-500 hover:text-white transition"
                  >
                    Get A Quote
                  </a>
                </div>
              </div>

              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/mechanic-customer.jpg"
                  alt="Mechanic consulting with customer about car AC repair in Dubai at Al Suwaidi Auto"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 24 Hour Breakdown Service */}
        <section className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 py-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, white 35px, white 70px)' }}>
            </div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6 flex-1">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                  <span className="text-5xl">🚛</span>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">24 Hour Breakdown Service</h2>
                  <p className="text-gray-300 text-lg">To order a Breakdown Recovery Service now or if you require a quote, please contact us</p>
                </div>
              </div>

              <div className="text-center md:text-right flex-shrink-0">
                <div className="flex items-center gap-3 mb-3 justify-center md:justify-end">
                  <span className="text-3xl text-green-500">📞</span>
                  <a href="tel:+971554969599" className="text-4xl font-bold text-white hover:text-green-500 transition-colors">
                    +971 55 4969599
                  </a>
                </div>
                <p className="text-gray-300 text-lg">Whether you're the driver of your own car or a rental,<br />you're covered 24/7, 365 days a year</p>
              </div>
            </div>
          </div>
        </section>

        {/* Car Brands Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-4">We Repair All Makes of Engine</h2>
            <p className="text-center text-gray-700 mb-12 text-xl">Although are specialists with the Japanese manufacturers</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center group">
                <div className="text-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/brands/audi.png"
                    alt="Audi repair Dubai - Al Suwaidi Auto Repair Garage"
                    width={150}
                    height={80}
                    className="mx-auto"
                  />
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center group">
                <div className="text-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/brands/landrover.png"
                    alt="Land Rover repair Dubai - Al Suwaidi Auto Repair Garage"
                    width={150}
                    height={80}
                    className="mx-auto"
                  />
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center group">
                <div className="text-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/brands/bmw.png"
                    alt="BMW repair Dubai - Al Suwaidi Auto Repair Garage"
                    width={150}
                    height={80}
                    className="mx-auto"
                  />
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center group">
                <div className="text-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/brands/porsche.png"
                    alt="Porsche repair Dubai - Al Suwaidi Auto Repair Garage"
                    width={150}
                    height={80}
                    className="mx-auto"
                  />
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center group">
                <div className="text-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/brands/mercedes.png"
                    alt="Mercedes-Benz repair Dubai - Al Suwaidi Auto Repair Garage"
                    width={150}
                    height={80}
                    className="mx-auto"
                  />
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center group">
                <div className="text-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/brands/toyota.png"
                    alt="Toyota repair Dubai - Al Suwaidi Auto Repair Garage"
                    width={150}
                    height={80}
                    className="mx-auto"
                  />
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center group">
                <div className="text-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/brands/honda.png"
                    alt="Honda repair Dubai - Al Suwaidi Auto Repair Garage"
                    width={150}
                    height={80}
                    className="mx-auto"
                  />
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center group">
                <div className="text-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/brands/nissan.png"
                    alt="Nissan repair Dubai - Al Suwaidi Auto Repair Garage"
                    width={150}
                    height={80}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serving Every Corner of Dubai Section */}
        <section className="bg-gradient-to-b from-white via-green-50/30 to-white py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">

            <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Serving Every Corner of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                  Dubai
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
                Premium mobile car repair services delivered directly to your location across all Dubai neighborhoods.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

                {[
                  "Al Mankhool",
                  "Zaa'beel First",
                  "Al Raffa",
                  "Al Satwa",
                  "Deira",
                  "Al Hudaiaba",
                  "Al Quoz",
                  "Jumeirah 1",
                  "Jumeirah 2",
                  "Jumeirah 3",
                  "Dubai Silicon Oasis",
                  "City Walk",
                  "Dubai Marina",
                  "Downtown Dubai",
                  "Al Jafiliya",
                ].map((area, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl border-2 border-green-500/20 hover:border-green-500 hover:shadow-md transition-all duration-300 p-3.5 flex items-center gap-3"
                  >
                    <div className="w-9 h-9 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-gray-900 text-sm truncate">{area}</p>
                      <p className="text-[11px] text-gray-500">Dubai, UAE</p>
                    </div>
                  </div>
                ))}

              </div>

              <div className="bg-white rounded-2xl border-2 border-green-500/30 shadow-md p-6 lg:sticky lg:top-24">

                <div className="flex items-center gap-3 pb-5 border-b border-gray-100 mb-5">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-black text-gray-900">Operating Hours</h3>
                </div>

                <div className="space-y-2.5">
                  {[
                    "Saturday",
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ].map((day, i) => (
                    <div key={i} className="flex items-center justify-between py-1.5">
                      <span className="text-sm font-semibold text-gray-700">{day}</span>
                      <span className="inline-flex items-center gap-1.5 bg-green-500 text-white text-[11px] font-bold px-3 py-1 rounded-full">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        24 Hours
                      </span>
                    </div>
                  ))}
                </div>

              </div>

            </div>

            <div className="text-center mt-12 sm:mt-16 max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
                Don't See Your Area Listed?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                We're constantly expanding our coverage to serve every neighborhood in Dubai. Contact us to check availability for your specific location.
              </p>
              <a
                href="https://wa.me/971551010341"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-7 sm:px-9 py-3.5 rounded-full text-sm sm:text-base font-bold transition shadow-lg shadow-green-200"
              >
                📞 Contact Us
              </a>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-green-950 text-white overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative border-b border-white/5 py-12 sm:py-14">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">

                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-3xl blur opacity-50 group-hover:opacity-80 transition duration-500"></div>
                  <div className="relative rounded-2xl overflow-hidden h-[280px] sm:h-[320px] border border-white/10">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.320128474846!2d55.35851757437792!3d25.226140430529686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5db8d0556ced%3A0xd0a34fd075290433!2sAl%20Suwaidi%20Auto%20Repair%20Garage!5e0!3m2!1sen!2sae!4v1765308128250!5m2!1sen!2sae"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Al Suwaidi Auto Repair Garage location in Al Rashidiya Dubai"
                    ></iframe>
                  </div>
                </div>

                <div className="space-y-6">

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-green-400 uppercase tracking-wider mb-1">Address</p>
                      <p className="text-gray-300 text-sm sm:text-base">Umm Ramool, Al Rashidiya Dubai</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-green-400 uppercase tracking-wider mb-1">Phone</p>
                      <a href="tel:+971554969599" className="text-gray-300 hover:text-green-400 text-sm sm:text-base transition font-medium">
                        +971 55 4969599
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-green-400 uppercase tracking-wider mb-1">Open Hours</p>
                      <p className="text-gray-300 text-sm sm:text-base">Everyday</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="relative py-14 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                <div className="lg:col-span-1">
                  <h3 className="text-xl font-black text-white mb-1">
                    Al Suwaidi
                  </h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 text-sm font-bold tracking-wide uppercase mb-5">
                    Auto Repair Garage
                  </p>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    A fusion of trusted expertise and modern technology — delivering premium automotive care that stands the test of time.
                  </p>

                  <div className="flex gap-3">
                    <a
                      href="https://www.facebook.com/profile.php?id=61583489979902"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-110 transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/al_suwaidigarage?igsh=eXJqaHZjb2J6NHk3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 hover:text-white hover:border-pink-500 hover:scale-110 transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.tiktok.com/@al_suwaidigarage?_r=1&_t=ZS-9276QoRZl25"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white hover:border-black hover:scale-110 transition-all duration-300"
                      aria-label="TikTok"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                    <a
                      href="https://wa.me/971551010341"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white hover:border-green-500 hover:scale-110 transition-all duration-300"
                      aria-label="WhatsApp"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-wider mb-5 flex items-center gap-2">
                    <span className="w-1 h-4 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full"></span>
                    Quick Links
                  </h4>
                  <div className="space-y-3">
                    {[
                      { label: "Home", href: "/" },
                      { label: "About Us", href: "/about" },
                      { label: "Blog", href: "/blog" },
                      { label: "Gallery", href: "/gallery" },
                      { label: "Contact Us", href: "/contact" },
                    ].map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        className="group flex items-center gap-2 text-gray-400 hover:text-green-400 text-sm transition-all duration-300"
                      >
                        <span className="w-0 group-hover:w-3 h-px bg-green-400 transition-all duration-300"></span>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-wider mb-5 flex items-center gap-2">
                    <span className="w-1 h-4 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full"></span>
                    Our Services
                  </h4>
                  <div className="space-y-3">
                    {[
                      { label: "Suspension Repair", href: "/services/suspension" },
                      { label: "Engine Repair", href: "/services/engine" },
                      { label: "Transmission Repair", href: "/services/transmission" },
                      { label: "Oil Change", href: "/services/oil" },
                      { label: "Car AC Repair", href: "/services/ac" },
                      { label: "Brake Repair", href: "/services/brake" },
                    ].map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        className="group flex items-center gap-2 text-gray-400 hover:text-green-400 text-sm transition-all duration-300"
                      >
                        <span className="w-0 group-hover:w-3 h-px bg-green-400 transition-all duration-300"></span>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-wider mb-5 flex items-center gap-2">
                    <span className="w-1 h-4 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full"></span>
                    Get In Touch
                  </h4>
                  <div className="space-y-4">

                    <a
                      href="mailto:mdullah163@gmail.com"
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-green-500 group-hover:border-green-500 transition-all duration-300">
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-gray-400 group-hover:text-green-400 text-sm transition break-all">
                        mdullah163@gmail.com
                      </span>
                    </a>

                    <a
                      href="tel:+971554969599"
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-green-500 group-hover:border-green-500 transition-all duration-300">
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span className="text-gray-400 group-hover:text-green-400 text-sm transition">
                        +971 55 4969599
                      </span>
                    </a>

                    <a
                      href="https://wa.me/971551010341"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-green-500 group-hover:border-green-500 transition-all duration-300">
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </div>
                      <span className="text-gray-400 group-hover:text-green-400 text-sm transition">
                        Chat with us
                      </span>
                    </a>

                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="relative border-t border-white/5 py-6">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <p className="text-gray-500 text-xs sm:text-sm">
                  &copy; 2025 <span className="text-gray-300 font-semibold">Al Suwaidi Auto Repair Garage</span>. All rights reserved.
                </p>
                <p className="text-gray-600 text-xs">
                  Built with 💚 in Dubai
                </p>
              </div>
            </div>
          </div>
        </footer>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          <a
            href="https://wa.me/971551010341"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            aria-label="Chat on WhatsApp - Al Suwaidi Auto Repair Garage Dubai"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Chat on WhatsApp
            </span>
          </a>

          <a
            href="tel:+971554969599"
            className="group relative bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            aria-label="Call Al Suwaidi Auto Repair Garage Dubai"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
            </svg>
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Call +971 55 4969599
            </span>
          </a>
        </div>
      </main>
    </>
  )
}

{/* === Reusable Service Card Component === */}
function ServiceCard({
  image,
  icon,
  title,
  bullets,
  detailsHref,
  emergency = false,
}: {
  image: string;
  icon: string;
  title: string;
  bullets: string[];
  detailsHref: string;
  emergency?: boolean;
}) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-green-200 hover:-translate-y-1 transition-all duration-300 flex flex-col">

      <div className="relative h-44 overflow-hidden">
        <Image
          src={image}
          alt={`${title} - Al Suwaidi Auto Repair Garage Dubai`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent mix-blend-multiply"></div>

        <span
          className={`absolute top-3 left-3 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md ${
            emergency
              ? 'bg-gradient-to-r from-red-500 to-red-600'
              : 'bg-gradient-to-r from-green-500 to-emerald-600'
          }`}
        >
          {emergency ? '🚨 24/7' : '★ Popular'}
        </span>
        <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-gray-800 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
          🕐 24/7
        </span>

        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg border border-white/50">
            <span className="text-xl">{icon}</span>
          </div>
          <h3 className="text-white font-bold text-sm leading-tight drop-shadow-md">
            {title}
          </h3>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <ul className="space-y-2.5 text-xs text-gray-600 flex-1">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-4 h-4 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-2.5 h-2.5 text-green-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 mt-5">
          <a
            href={detailsHref}
            className="flex-1 text-center border-2 border-gray-200 hover:border-green-500 hover:text-green-600 text-gray-700 text-xs font-bold py-2.5 rounded-xl transition"
          >
            Details
          </a>
          <a
            href="https://wa.me/971551010341"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xs font-bold py-2.5 rounded-xl transition shadow-md shadow-green-200 flex items-center justify-center gap-1"
          >
            Book Now →
          </a>
        </div>
      </div>
    </div>
  );
}