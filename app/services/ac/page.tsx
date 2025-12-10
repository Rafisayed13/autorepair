'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function ACRepair() {
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
      <div className="bg-gray-800 text-white text-sm">
        <div className="container mx-auto px-6 py-3">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span>⏰</span>
              <span>Open everyday from 8:00AM - 9:00PM</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span>Schedule Appointment +971 55 4969599</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Umm Ramool, Al Rashidiya Dubai</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Al Suwaidi Auto Repair Garage" 
                width={180} 
                height={60}
                className="h-12 w-auto"
              />
            </Link>
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
                className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Car AC Repair & Regas Services in Dubai</h1>
          <p className="text-xl text-gray-300">Professional air conditioning repair for BMW, Mercedes, Audi, Toyota, Honda, Nissan, and all car brands in Dubai's heat</p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Car AC Repair Dubai</h2>
              <p className="text-gray-700 mb-4">
                In Dubai's extreme heat, a functioning car AC is essential. Al Suwaidi Auto Repair Garage provides complete air conditioning repair and maintenance services for all vehicle brands including BMW, Mercedes-Benz, Audi, Porsche, Range Rover, Toyota, Honda, Nissan, and more.
              </p>
              <p className="text-gray-700 mb-4">
                Our certified AC technicians at Umm Ramool, Al Rashidiya use specialized equipment to diagnose and repair all AC problems. From gas recharge to compressor replacement, we ensure your car stays cool in Dubai's summer.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">AC Services We Provide:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✓</span>
                  <span>AC gas refill & recharge (R134a, R1234yf)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✓</span>
                  <span>AC compressor repair & replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✓</span>
                  <span>AC condenser & evaporator repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✓</span>
                  <span>AC leak detection & repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✓</span>
                  <span>AC blower motor replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✓</span>
                  <span>AC filter cleaning & replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✓</span>
                  <span>AC system diagnostics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✓</span>
                  <span>AC odor removal & sanitization</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="bg-gray-100 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Common AC Problems in Dubai</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• AC not blowing cold air</p>
                  <p>• Weak airflow from vents</p>
                  <p>• Strange smell from AC</p>
                  <p>• AC making noise</p>
                  <p>• AC compressor not working</p>
                  <p>• AC gas leakage</p>
                  <p>• AC only works on high speed</p>
                  <p>• Water leaking inside car</p>
                </div>
              </div>

              <div className="bg-red-600 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">AC Not Working? Call Us Now!</h3>
                <p className="mb-4">Same-day AC repair service in Dubai</p>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <span>📞</span>
                    <a href="tel:+971554969599" className="hover:underline">+971 55 4969599</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📍</span>
                    <span>Umm Ramool, Al Rashidiya Dubai</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>⏰</span>
                    <span>Open everyday 8:00AM - 9:00PM</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Car Brands */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">AC Repair for All Car Brands</h2>
          <p className="text-center text-gray-600 mb-12">Specialized in European, Japanese, American, and all vehicle AC systems</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {['BMW', 'Mercedes', 'Audi', 'Porsche', 'Range Rover', 'Toyota', 'Honda', 'Nissan', 'Ford', 'Chevrolet', 'Hyundai', 'Kia', 'Mazda', 'Mitsubishi', 'Volkswagen', 'Lexus'].map((brand) => (
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
