'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function SuspensionRepair() {
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
              <Link href="/about" className="text-gray-700 hover:text-red-600 font-medium">ABOUT</Link>
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <button className="text-red-600 font-medium flex items-center gap-1">
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
                  <Link href="/services/ac" className="block px-6 py-3 text-gray-700 hover:bg-red-600 hover:text-white transition border-b border-gray-100">
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
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Suspension Repair Services in Dubai</h1>
          <p className="text-xl text-gray-300">Expert suspension repair for all car brands including BMW, Mercedes, Audi, Toyota, Honda, Nissan, and more</p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Suspension Repair in Dubai</h2>
              <p className="text-gray-700 mb-4">
                Al Suwaidi Auto Repair Garage offers comprehensive suspension repair services in Dubai for all car brands. Our expert mechanics specialize in diagnosing and fixing suspension problems for BMW, Mercedes-Benz, Audi, Porsche, Range Rover, Toyota, Honda, Nissan, Ford, and all other makes.
              </p>
              <p className="text-gray-700 mb-4">
                A properly functioning suspension system ensures smooth rides, better handling, and safety on Dubai roads. Our state-of-the-art facility in Umm Ramool, Al Rashidiya is equipped with modern diagnostic tools to identify suspension issues accurately.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">What We Fix:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✓</span>
                  <span>Shock absorbers and struts replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✓</span>
                  <span>Ball joints and control arms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✓</span>
                  <span>Tie rods and steering linkage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✓</span>
                  <span>Bushings and mounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✓</span>
                  <span>Air suspension systems (Mercedes, Range Rover, Audi)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✓</span>
                  <span>Coil springs and leaf springs</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us for Suspension Repair?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Expert Technicians</h4>
                      <p className="text-gray-600 text-sm">Over 20 years of experience repairing German and Japanese car suspensions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Genuine Parts</h4>
                      <p className="text-gray-600 text-sm">We use OEM or high-quality aftermarket parts for all brands</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Free Pick & Drop</h4>
                      <p className="text-gray-600 text-sm">Complimentary vehicle collection and delivery across Dubai</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">1 Year Warranty</h4>
                      <p className="text-gray-600 text-sm">All suspension repairs come with warranty coverage</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-red-600 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Book Your Suspension Repair Today</h3>
                <p className="mb-4">Call us or visit our workshop in Dubai</p>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <span>📞</span>
                    <a href="tel:+971554969599" className="hover:underline">+971 55 4969599</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📍</span>
                    <span>Umm Ramool, Al Rashidiya Dubai</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Car Brands We Service */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Suspension Repair for All Car Brands</h2>
          <p className="text-center text-gray-600 mb-12">We service suspension systems for all makes and models</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {['BMW', 'Mercedes', 'Audi', 'Porsche', 'Range Rover', 'Toyota', 'Honda', 'Nissan'].map((brand) => (
              <div key={brand} className="bg-white p-4 rounded-lg shadow text-center hover:shadow-lg transition">
                <p className="font-semibold text-gray-800">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
