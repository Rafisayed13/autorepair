'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function AboutPage() {
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [servicesTimeout, setServicesTimeout] = useState<NodeJS.Timeout | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleServicesEnter = () => {
    if (servicesTimeout) clearTimeout(servicesTimeout)
    setServicesDropdown(true)
  }

  const handleServicesLeave = () => {
    const timeout = setTimeout(() => setServicesDropdown(false), 300)
    setServicesTimeout(timeout)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div>
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logo.png" 
                  alt="Al Suwaidi Auto Repair Garage" 
                  width={180} 
                  height={60}
                  className="h-10 sm:h-12 w-auto"
                />
              </Link>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-700 hover:text-red-600 focus:outline-none"
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

              <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-red-600 font-medium">HOME</Link>
              <Link href="/about" className="text-red-600 font-medium">ABOUT</Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <button className="text-gray-700 hover:text-red-600 font-medium flex items-center gap-1">
                  SERVICES
                  <span className="text-red-600">+</span>
                </button>
                <div className={`absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-200 ${servicesDropdown ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`} style={{zIndex: 1000}}>
                    <Link href="/services/suspension" className="block px-6 py-3 text-gray-700 hover:bg-red-600 hover:text-white transition border-b border-gray-100">
                      Suspension Repair
                    </Link>
                    <Link href="/services/engine" className="block px-6 py-3 text-gray-700 hover:bg-red-600 hover:text-white transition border-b border-gray-100">
                      Car Engine Repair
                    </Link>
                    <Link href="/services/transmission" className="block px-6 py-3 text-gray-700 hover:bg-red-600 hover:text-white transition border-b border-gray-100">
                      Transmission Repair
                    </Link>
                    <Link href="/services/ac" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition border-b border-gray-100">
                      Car AC Repair
                    </Link>
                    <Link href="/services/oil" className="block px-6 py-3 text-gray-700 hover:bg-red-600 hover:text-white transition border-b border-gray-100">
                      Oil Change
                    </Link>
                    <Link href="/services/brake" className="block px-6 py-3 text-gray-700 hover:bg-red-600 hover:text-white transition border-b border-gray-100">
                      Brake Repair
                    </Link>
                    <Link href="/services/battery" className="block px-6 py-3 text-gray-700 hover:bg-red-600 hover:text-white transition border-b border-gray-100">
                      Battery Replacement
                    </Link>
                    <Link href="/services/electrical" className="block px-6 py-3 text-gray-700 hover:bg-red-600 hover:text-white transition border-b border-gray-100">
                      Electrical Repairing & Programming
                    </Link>
                    <Link href="/services/exhaust" className="block px-6 py-3 text-gray-700 hover:bg-red-600 hover:text-white transition">
                      Exhaust Services
                    </Link>
                  </div>
              </div>

              <Link href="/gallery" className="text-gray-700 hover:text-red-600 font-medium">GALLERY</Link>
              <Link href="/contact" className="text-gray-700 hover:text-red-600 font-medium">CONTACT</Link>
              <a 
                href="tel:+971554969599" 
                className="bg-red-600 text-white px-4 lg:px-6 py-2 rounded font-semibold hover:bg-red-700 transition"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3 pt-4">
                <Link href="/" className="text-gray-700 hover:text-red-600 font-medium py-2 px-2" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
                <Link href="/about" className="text-gray-700 hover:text-red-600 font-medium py-2 px-2" onClick={() => setMobileMenuOpen(false)}>ABOUT</Link>
                
                <div className="border-t border-gray-200 pt-3">
                  <p className="text-gray-500 text-sm font-semibold mb-2 px-2">OUR SERVICES</p>
                  <Link href="/services/suspension" className="block text-gray-700 hover:text-red-600 py-2 pl-6" onClick={() => setMobileMenuOpen(false)}>Suspension Repair</Link>
                  <Link href="/services/engine" className="block text-gray-700 hover:text-red-600 py-2 pl-6" onClick={() => setMobileMenuOpen(false)}>Car Engine Repair</Link>
                  <Link href="/services/transmission" className="block text-gray-700 hover:text-red-600 py-2 pl-6" onClick={() => setMobileMenuOpen(false)}>Transmission Repair</Link>
                  <Link href="/services/ac" className="block text-gray-700 hover:text-red-600 py-2 pl-6" onClick={() => setMobileMenuOpen(false)}>Car AC Repair</Link>
                  <Link href="/services/oil" className="block text-gray-700 hover:text-red-600 py-2 pl-6" onClick={() => setMobileMenuOpen(false)}>Oil Change</Link>
                  <Link href="/services/brake" className="block text-gray-700 hover:text-red-600 py-2 pl-6" onClick={() => setMobileMenuOpen(false)}>Brake Repair</Link>
                  <Link href="/services/battery" className="block text-gray-700 hover:text-red-600 py-2 pl-6" onClick={() => setMobileMenuOpen(false)}>Battery Replacement</Link>
                  <Link href="/services/electrical" className="block text-gray-700 hover:text-red-600 py-2 pl-6" onClick={() => setMobileMenuOpen(false)}>Electrical Repair</Link>
                  <Link href="/services/exhaust" className="block text-gray-700 hover:text-red-600 py-2 pl-6" onClick={() => setMobileMenuOpen(false)}>Exhaust Services</Link>
                </div>
                
                <Link href="/gallery" className="text-gray-700 hover:text-red-600 font-medium py-2 px-2 border-t border-gray-200 pt-3" onClick={() => setMobileMenuOpen(false)}>GALLERY</Link>
                <Link href="/contact" className="text-gray-700 hover:text-red-600 font-medium py-2 px-2" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
                <a 
                  href="tel:+971554969599" 
                  className="bg-red-600 text-white px-6 py-3 rounded font-semibold hover:bg-red-700 transition text-center mx-2"
                >
                  📞 Call Now
                </a>
              </div>
            </div>
          )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">About Al Suwaidi Auto Repair Garage</h1>
          <p className="text-xl text-gray-300">Your trusted automotive partner in Dubai for over 3 generations</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For over three generations, Al Suwaidi Auto Repair Garage has been Dubai's trusted name in automotive repair and maintenance. What started as a small family workshop has evolved into one of the most respected auto repair facilities in Umm Ramool, Al Rashidiya.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our journey began with a simple mission: to provide honest, reliable, and professional car repair services to the Dubai community. Today, we've serviced over 2,000 vehicles and maintained a 97% customer satisfaction rate.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We specialize in all car brands including BMW, Mercedes-Benz, Audi, Porsche, Range Rover, Toyota, Honda, Nissan, and more. Our team combines traditional craftsmanship with modern diagnostic technology.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-red-600 mb-2">3 Generations</h3>
                  <p className="text-gray-700">Family-owned automotive expertise</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-red-600 mb-2">2000+</h3>
                  <p className="text-gray-700">Cars serviced and repaired</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-red-600 mb-2">97%</h3>
                  <p className="text-gray-700">Customer satisfaction rate</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-red-600 mb-2">24/7</h3>
                  <p className="text-gray-700">Emergency breakdown service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-red-600 text-4xl mb-4">🎯</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To provide exceptional automotive repair and maintenance services that exceed customer expectations. We are committed to honest diagnostics, transparent pricing, quality workmanship, and building long-term relationships with every customer who trusts us with their vehicle.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-red-600 text-4xl mb-4">👁️</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be Dubai's most trusted and respected automotive service provider, known for our integrity, expertise, and customer-first approach. We aim to set the standard for quality auto repair services while staying true to our family values and commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Al Suwaidi?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Technicians</h3>
              <p className="text-gray-700">
                Highly trained and certified mechanics with years of experience servicing all car brands
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Parts</h3>
              <p className="text-gray-700">
                We use only genuine or high-quality aftermarket parts for all repairs and replacements
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Service</h3>
              <p className="text-gray-700">
                Quick turnaround times without compromising on quality or attention to detail
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fair Pricing</h3>
              <p className="text-gray-700">
                Transparent, competitive pricing with no hidden charges or surprise costs
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Warranty Support</h3>
              <p className="text-gray-700">
                All our repairs come with warranty coverage for your peace of mind
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">📍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Convenient Location</h3>
              <p className="text-gray-700">
                Easy to find in Umm Ramool, Al Rashidiya with ample parking space
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Meet Our Expert Team</h2>
          <p className="text-center text-gray-300 mb-12">Passionate professionals dedicated to keeping your car in perfect condition</p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-800 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-5xl">👨‍🔧</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Master Mechanics</h3>
              <p className="text-gray-400">20+ years experience</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-5xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Diagnostic Specialists</h3>
              <p className="text-gray-400">Advanced training certified</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-5xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Engine Experts</h3>
              <p className="text-gray-400">All brands specialists</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-5xl">💻</span>
              </div>
              <h3 className="text-xl font-bold mb-2">ECU Programmers</h3>
              <p className="text-gray-400">Latest technology experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Experience the Al Suwaidi Difference</h2>
          <p className="text-xl mb-8">Visit us today and discover why thousands trust us with their vehicles</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+971554969599" className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              📞 Call +971 55 4969599
            </a>
            <a href="https://wa.me/971551010341" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition">
              Book Appointment
            </a>
          </div>
          <div className="mt-8 space-y-2">
            <p className="text-lg">📍 Umm Ramool, Al Rashidiya Dubai</p>
            <p className="text-lg">⏰ Open everyday from 8:00AM - 9:00PM</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Al Suwaidi Auto Repair</h3>
              <p className="text-gray-400">Your trusted automotive partner in Dubai for over 3 generations.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-400 hover:text-white">Home</Link>
                <Link href="/about" className="block text-gray-400 hover:text-white">About Us</Link>
                <Link href="/services" className="block text-gray-400 hover:text-white">Services</Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <div className="space-y-2">
                <Link href="/services/engine" className="block text-gray-400 hover:text-white">Engine Repair</Link>
                <Link href="/services/transmission" className="block text-gray-400 hover:text-white">Transmission</Link>
                <Link href="/services/brake" className="block text-gray-400 hover:text-white">Brake Service</Link>
                <Link href="/services/ac" className="block text-gray-400 hover:text-white">AC Repair</Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>📞 +971 55 4969599</p>
                <p>📍 Umm Ramool, Al Rashidiya Dubai</p>
                <p>⏰ 8:00AM - 9:00PM Daily</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Al Suwaidi Auto Repair Garage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
