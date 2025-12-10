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

  // Close dropdowns on scroll
  const handleScroll = () => {
    setServicesDropdown(false)
    setBrandsDropdown(false)
  }

  return (
    <>
      <StructuredData />
      <main className="min-h-screen bg-gray-900" onScroll={handleScroll} onWheel={handleScroll}>
        {/* Top Contact Bar */}
        <div className="bg-gray-800 text-white text-sm">
          <div className="container mx-auto px-4 sm:px-6 py-2 sm:py-3">
            <div className="flex flex-wrap justify-center sm:justify-between items-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-1 sm:gap-2">
                <span>⏰</span>
                <span className="hidden sm:inline">Open everyday from 8:00AM - 9:00PM</span>
                <span className="sm:hidden">8AM - 9PM Daily</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <span>📞</span>
                <a href="tel:+971554969599" className="hover:text-red-400">
                  <span className="hidden sm:inline">Schedule Appointment </span>+971 55 4969599
                </a>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <span>📍</span>
                <span className="hidden md:inline">Umm Ramool, Al Rashidiya Dubai</span>
                <span className="md:hidden">Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logo.png" 
                  alt="Al Suwaidi Auto Repair Garage" 
                  width={180} 
                  height={60}
                  className="h-10 sm:h-12 w-auto"
                  priority
                />
              </Link>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-red-600 focus:outline-none"
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
                <Link href="/" className="text-gray-700 hover:text-red-600 font-medium transition">HOME</Link>
                <Link href="/about" className="text-gray-700 hover:text-red-600 font-medium transition">ABOUT</Link>
                
                {/* Services Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <button className="text-gray-700 hover:text-red-600 font-medium flex items-center gap-1 transition">
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

                <Link href="/gallery" className="text-gray-700 hover:text-red-600 font-medium transition">GALLERY</Link>
                <Link href="/contact" className="text-gray-700 hover:text-red-600 font-medium transition">CONTACT</Link>
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
        <section className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center bg-cover bg-center" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/Mechanic.jpg')"}}>
          <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
            <div className="max-w-3xl">
              <p className="text-white text-base sm:text-lg mb-3 sm:mb-4">Expert Services, Professional Level Repairs</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                <span className="text-white">Best </span>
                <span className="text-red-600">Car Repair Workshop</span>
              </h1>
              <h2 className="text-red-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Dubai</h2>
              <p className="text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
                Your trusted auto repair workshop for all car brands in Dubai.
              </p>
              <a 
                href="https://wa.me/971551010341" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white px-6 sm:px-8 py-3 rounded font-semibold hover:bg-red-700 transition text-sm sm:text-base"
              >
                Book Appointment
              </a>
            </div>
          </div>
      </section>

      {/* Additional Services / Our Advantages / About Company Tabs Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8 sm:mb-12 border-b overflow-x-auto">
            <button 
              onClick={() => setActiveTab('services')}
              className={`pb-3 sm:pb-4 px-3 sm:px-6 font-semibold flex flex-col items-center text-xs sm:text-base ${activeTab === 'services' ? 'border-b-4 border-red-600 text-gray-800' : 'text-gray-600 hover:text-gray-800'}`}
            >
              <div className={`text-2xl sm:text-4xl mb-1 sm:mb-2 ${activeTab === 'services' ? 'text-red-600' : ''}`}>⚙️</div>
              <span className="whitespace-nowrap">Additional Services</span>
            </button>
            <button 
              onClick={() => setActiveTab('advantages')}
              className={`pb-3 sm:pb-4 px-3 sm:px-6 font-semibold flex flex-col items-center text-xs sm:text-base ${activeTab === 'advantages' ? 'border-b-4 border-red-600 text-gray-800' : 'text-gray-600 hover:text-gray-800'}`}
            >
              <div className={`text-2xl sm:text-4xl mb-1 sm:mb-2 ${activeTab === 'advantages' ? 'text-red-600' : ''}`}>✨</div>
              <span className="whitespace-nowrap">Our Advantages</span>
            </button>
            <button 
              onClick={() => setActiveTab('about')}
              className={`pb-3 sm:pb-4 px-3 sm:px-6 font-semibold flex flex-col items-center text-xs sm:text-base ${activeTab === 'about' ? 'border-b-4 border-red-600 text-gray-800' : 'text-gray-600 hover:text-gray-800'}`}
            >
              <div className={`text-2xl sm:text-4xl mb-1 sm:mb-2 ${activeTab === 'about' ? 'text-red-600' : ''}`}>👥</div>
              <span className="whitespace-nowrap">About Us</span>
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Left side - Image */}
            <div className="relative h-[300px] sm:h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              <Image 
                src={activeTab === 'advantages' ? '/maci1.png' : activeTab === 'about' ? '/frontgarage.jpg' : '/mechanic2.jpg'}
                alt="Mechanic at work" 
                fill
                className="object-cover"
              />
            </div>
            
            {/* Right side - Additional Services Content */}
            {activeTab === 'services' && (
              <div className="bg-gray-800 text-white p-8 rounded-lg min-h-[400px]">
                <h3 className="text-2xl font-bold mb-4">Below are some of the many auto repair services we offer:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">⚡</span>
                    <span>Courtesy car (subject to availability)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">⚡</span>
                    <span>Computer Diagnostic Testing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">⚡</span>
                    <span>Pickup / Drop off service</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">⚡</span>
                    <span>Manufacturer Recommended Service</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">⚡</span>
                    <span>General Auto Repair & Maintenance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">⚡</span>
                    <span>Air Conditioning A/C Repair</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">⚡</span>
                    <span>Transmission Repair & Replacement</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">⚡</span>
                    <span>Tire Repair and Replacement</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">⚡</span>
                    <span>Fuel System Repair</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">⚡</span>
                    <span>Vehicle Preventative Maintenance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">⚡</span>
                    <span>Exhaust System Repair</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">⚡</span>
                    <span>Oil and filter change</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">⚡</span>
                    <span>Engine Cooling System Maintenance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">⚡</span>
                    <span>Brake Job / Brake Service</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">⚡</span>
                    <span>Electrical Diagnostics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">⚡</span>
                    <span>Starting and Charging Repair</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Right side - Our Advantages Content */}
            {activeTab === 'advantages' && (
              <div className="bg-gray-800 text-white p-8 rounded-lg min-h-[400px]">
                <div className="grid gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 border-2 border-red-600 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-2xl">✓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Expert Car Mechanics</h4>
                      <p className="text-gray-300">Our team has over 20 years of experience and special training on German cars plus all other brands. We know every model inside out and fix it right the first time with genuine parts.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 border-2 border-red-600 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-2xl">✓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Fast Honest Service</h4>
                      <p className="text-gray-300">Most repairs finish same day or next day. We check your car fast, tell you exactly what is wrong and give clear price before we touch anything.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 border-2 border-red-600 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-2xl">✓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Free Pick & Drop</h4>
                      <p className="text-gray-300">No need to waste your time. We come to your home office or anywhere in Dubai, pick your car, fix it and bring it back clean and ready. Totally free every time.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 border-2 border-red-600 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-2xl">✓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Fair Price Always</h4>
                      <p className="text-gray-300">No surprise bills. We show you the problem and price first. You only pay for what your car really needs. Same price for everyone no hidden charges ever.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Right side - About Us Content */}
            {activeTab === 'about' && (
              <div className="bg-gray-800 text-white p-8 rounded-lg min-h-[400px]">
                <h3 className="text-2xl font-bold mb-4">About Al Suwaidi Auto Repair Garage</h3>
                <p className="text-gray-300 mb-4">
                  We are a trusted auto repair workshop serving Dubai for over 20 years. Our commitment to excellence and customer satisfaction has made us one of the most reliable names in automotive service.
                </p>
                <p className="text-gray-300 mb-4">
                  Located in Umm Ramool, Al Rashidiya Dubai, we specialize in all car brands with a particular expertise in German vehicles. Our state-of-the-art facility is equipped with the latest diagnostic tools and equipment.
                </p>
                <p className="text-gray-300">
                  Open everyday from 8:00AM - 9:00PM, we're here to serve you with honest pricing, expert service, and a dedication to getting you back on the road safely and quickly.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Al Suwaidi Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-3 sm:mb-4">Why Choose Al Suwaidi Auto Repair Garage</h2>
          <p className="text-center text-sm sm:text-base text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto">
            Al Suwaidi Auto is the car mechanic Dubai drivers call when they want honest and quality work. We repair BMW, Mercedes, Audi, Porsche, Range Rover, Toyota, Honda, Nissan, Ford and every other brand. Our workshop has all modern tools, big lifts and diagnostic machines to handle any job. Customers keep coming back because we never do extra work just to charge more.
          </p>
          <p className="text-center text-sm sm:text-base text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto">
            You only pay for what your car really needs. Most repairs come with 1 year warranty and we always use genuine or top quality parts. Same-day service for most jobs, free collection & delivery across Dubai and 24/7 emergency help make everything easy. Once you try Al Suwaidi Auto you will never look for another car workshop again.
          </p>
        </div>
      </section>

      {/* Need Your Car Fixed Section */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-3 sm:mb-4">Need Your Car Fixed?</h2>
          <p className="text-center text-lg sm:text-xl font-semibold text-gray-800 mb-6 sm:mb-8">We offer full service auto repair & maintenance</p>
          <p className="text-center text-sm sm:text-base text-gray-700 mb-8 sm:mb-12 max-w-4xl mx-auto">
            Our team picks up the phone fast, listens to your problem and gives you a clear time slot the same day or next day. No long waiting and no confusing talk. Just tell us what is wrong and we take care of everything from pick up to drop off. Your car will be back on the road before you know it.
          </p>

          {/* Service Icons Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 mb-8 sm:mb-12">
            <button 
              onClick={() => setActiveService('diagnoses')}
              className={`bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center ${activeService === 'diagnoses' ? 'border-b-4 border-red-600' : ''}`}
            >
              <div className={`text-5xl mb-3 ${activeService === 'diagnoses' ? 'text-red-600' : ''}`}>🔍</div>
              <h4 className="font-semibold text-gray-800">Diagnoses</h4>
            </button>
            <button 
              onClick={() => setActiveService('engine')}
              className={`bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center ${activeService === 'engine' ? 'border-b-4 border-red-600' : ''}`}
            >
              <div className={`text-5xl mb-3 ${activeService === 'engine' ? 'text-red-600' : ''}`}>🔧</div>
              <h4 className="font-semibold text-gray-800">Engine Repair</h4>
            </button>
            <button 
              onClick={() => setActiveService('oil')}
              className={`bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center ${activeService === 'oil' ? 'border-b-4 border-red-600' : ''}`}
            >
              <div className={`text-5xl mb-3 ${activeService === 'oil' ? 'text-red-600' : ''}`}>💧</div>
              <h4 className="font-semibold text-gray-800">Oil / Lube / Filters</h4>
            </button>
            <button 
              onClick={() => setActiveService('tyres')}
              className={`bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center ${activeService === 'tyres' ? 'border-b-4 border-red-600' : ''}`}
            >
              <div className={`text-5xl mb-3 ${activeService === 'tyres' ? 'text-red-600' : ''}`}>🚙</div>
              <h4 className="font-semibold text-gray-800">Tyres Suspension</h4>
            </button>
            <button 
              onClick={() => setActiveService('transmission')}
              className={`bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center ${activeService === 'transmission' ? 'border-b-4 border-red-600' : ''}`}
            >
              <div className={`text-5xl mb-3 ${activeService === 'transmission' ? 'text-red-600' : ''}`}>⚙️</div>
              <h4 className="font-semibold text-gray-800">Transmission</h4>
            </button>
            <button 
              onClick={() => setActiveService('batteries')}
              className={`bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center ${activeService === 'batteries' ? 'border-b-4 border-red-600' : ''}`}
            >
              <div className={`text-5xl mb-3 ${activeService === 'batteries' ? 'text-red-600' : ''}`}>🔋</div>
              <h4 className="font-semibold text-gray-800">Batteries</h4>
            </button>
          </div>

          {/* Car Cutaway Image Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-700 rounded-lg overflow-hidden">
            <div className="p-8 text-white">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-700 text-xl">ℹ️</span>
                </div>
                {activeService === 'diagnoses' && (
                  <p className="text-gray-100 leading-relaxed">
                    Our advanced diagnostic equipment can quickly identify any issues with your vehicle. We use the latest computer scanning tools to read error codes and pinpoint problems accurately, saving you time and money on unnecessary repairs.
                  </p>
                )}
                {activeService === 'engine' && (
                  <p className="text-gray-100 leading-relaxed">
                    Al Suwaidi Auto Repair is a trusted car garage in Dubai specializing in all kinds of engine repair, service and maintenance. It also offers tailored preventative engine maintenance services that enhance the lifespan, efficiency and functionality of your car's engine.
                  </p>
                )}
                {activeService === 'oil' && (
                  <p className="text-gray-100 leading-relaxed">
                    Regular oil changes are essential for your engine's health. We provide complete oil change services including high-quality oil, filter replacement, and fluid level checks. Our team ensures your engine runs smoothly and efficiently with the right grade of oil for your vehicle.
                  </p>
                )}
                {activeService === 'tyres' && (
                  <p className="text-gray-100 leading-relaxed">
                    From tire rotation and balancing to complete suspension repairs, we handle all aspects of your vehicle's tire and suspension system. Proper maintenance ensures better handling, fuel efficiency, and a safer, smoother ride on Dubai roads.
                  </p>
                )}
                {activeService === 'transmission' && (
                  <p className="text-gray-100 leading-relaxed">
                    Transmission problems require expert attention. Our experienced mechanics can diagnose and repair both automatic and manual transmissions. We handle everything from fluid changes to complete transmission rebuilds using quality parts and proven techniques.
                  </p>
                )}
                {activeService === 'batteries' && (
                  <p className="text-gray-100 leading-relaxed">
                    Don't get stuck with a dead battery. We test, service, and replace car batteries of all types. Our team can quickly diagnose battery and charging system issues, ensuring your vehicle starts reliably every time, even in Dubai's extreme heat.
                  </p>
                )}
              </div>
            </div>
            <div className="relative h-[400px]">
              {activeService === 'diagnoses' && (
                <Image 
                  src="/diagnoses.png" 
                  alt="Car diagnostics" 
                  fill
                  className="object-contain"
                />
              )}
              {activeService === 'engine' && (
                <Image 
                  src="/engine-repair.png" 
                  alt="Engine repair" 
                  fill
                  className="object-contain"
                />
              )}
              {activeService === 'oil' && (
                <Image 
                  src="/oil-lube-filters.png" 
                  alt="Oil and filters service" 
                  fill
                  className="object-contain"
                />
              )}
              {activeService === 'tyres' && (
                <Image 
                  src="/tyres-suspension.png" 
                  alt="Tyres and suspension" 
                  fill
                  className="object-contain"
                />
              )}
              {activeService === 'transmission' && (
                <Image 
                  src="/transmission.png" 
                  alt="Transmission repair" 
                  fill
                  className="object-contain"
                />
              )}
              {activeService === 'batteries' && (
                <Image 
                  src="/batteries.png" 
                  alt="Car batteries" 
                  fill
                  className="object-contain"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Workshop Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8">Visit Our Car Workshop Dubai</h2>
          <p className="text-center text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 max-w-4xl mx-auto">
            Come to the best auto repair workshop in town where every car gets top care from start to finish. Our team treats your car like their own and fixes it right the first time. No matter what brand or problem you have we are ready to help.
          </p>
        </div>
      </section>

      {/* Best Garage Section */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 sm:mb-6">Best Car Repair Garage in Dubai under your Budget</h2>
          
          <p className="text-center text-gray-700 mb-6 max-w-5xl mx-auto">
            Regular car maintenance is crucial but can be costly too. But at Al Suwaidi Auto, we are running the best garage in Dubai that has affordable packages. We want you to be on the road in a comfortable and efficient vehicle. Our low prices and quality services go hand in hand making it easier for everyone to get their car serviced whenever.
          </p>
          
          <p className="text-center text-gray-700 max-w-5xl mx-auto">
            We are the best car repair garage in Dubai as we understand every aspect of customers' needs. Our experts not just give your vehicle a top-notch service but we also offer pick and drop too. With our service you can save the cost that will take you to bring the car to our garage. So don't wait up. Connect with the best car repair garage in Dubai today.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-4">How It Works</h2>
          <p className="text-center text-gray-700 mb-12 text-lg">These few steps will help return your car to a working condition</p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-64 h-64 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-9xl text-gray-200 font-bold absolute">01</span>
                  <div className="relative z-10 text-8xl">📋</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Your Service</h3>
              <p className="text-gray-600">Select from our wide range of auto repair and maintenance services</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-64 h-64 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-9xl text-gray-200 font-bold absolute">02</span>
                  <div className="relative z-10 text-8xl">📅</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Make an Appointment</h3>
              <p className="text-gray-600">Book your preferred time slot online or give us a call</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-64 h-64 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-9xl text-gray-200 font-bold absolute">03</span>
                  <div className="relative z-10 text-8xl">🚗</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">We'll take Your Car for Service</h3>
              <p className="text-gray-600">Our team picks up your vehicle from your location</p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-64 h-64 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-9xl text-gray-200 font-bold absolute">04</span>
                  <div className="relative z-10 text-8xl">🔑</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pick Up your car Keys</h3>
              <p className="text-gray-600">Get your fully serviced car delivered back to you</p>
            </div>
          </div>

          {/* Get A Quote Button */}
          <div className="text-center mt-12">
            <a 
              href="https://wa.me/971551010341" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-red-600 border-2 border-red-600 px-12 py-4 rounded text-lg font-semibold hover:bg-red-600 hover:text-white transition"
            >
              Get A Quote
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {/* Stat 1 */}
            <div className="text-center group">
              <div className="flex items-center justify-center gap-4 mb-2">
                <h3 className="text-7xl font-bold text-white group-hover:scale-110 transition-transform duration-300">3</h3>
                <div className="w-1 h-16 bg-red-600"></div>
                <div className="text-left">
                  <p className="text-xl font-semibold text-white">Generation of</p>
                  <p className="text-xl font-semibold text-white">Experience</p>
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="text-center group">
              <div className="flex items-center justify-center gap-4 mb-2">
                <h3 className="text-7xl font-bold text-white group-hover:scale-110 transition-transform duration-300">2,000<span className="text-red-600">+</span></h3>
                <div className="w-1 h-16 bg-red-600"></div>
                <div className="text-left">
                  <p className="text-xl font-semibold text-white">Car</p>
                  <p className="text-xl font-semibold text-white">Repaired</p>
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="text-center group">
              <div className="flex items-center justify-center gap-4 mb-2">
                <h3 className="text-7xl font-bold text-white group-hover:scale-110 transition-transform duration-300">97<span className="text-red-600">%</span></h3>
                <div className="w-1 h-16 bg-red-600"></div>
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
            {/* Left side - Questions */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">Diagnostics, Repairs & Servicing</h2>
              
              <div className="space-y-4">
                {/* FAQ 1 */}
                <div className="border border-gray-200 rounded">
                  <button 
                    onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                    className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50"
                  >
                    <span className="font-semibold text-gray-800">Vehicle repair and auto repair services in Dubai at affordable rates</span>
                    <span className="text-2xl text-red-600">{openFaq === 1 ? '−' : '+'}</span>
                  </button>
                  {openFaq === 1 && (
                    <div className="p-4 bg-gray-50 text-gray-700">
                      Al Suwaidi Auto Repair offers comprehensive vehicle repair services at competitive prices in Dubai. We handle all types of repairs from minor fixes to major overhauls, ensuring quality workmanship without breaking your budget. Our transparent pricing means no hidden costs.
                    </div>
                  )}
                </div>

                {/* FAQ 2 */}
                <div className="border border-gray-200 rounded">
                  <button 
                    onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                    className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50"
                  >
                    <span className="font-semibold text-gray-800">Why is vehicle maintenance important?</span>
                    <span className="text-2xl text-red-600">{openFaq === 2 ? '−' : '+'}</span>
                  </button>
                  {openFaq === 2 && (
                    <div className="p-4 bg-gray-50 text-gray-700">
                      Regular vehicle maintenance prevents costly breakdowns, extends your car's lifespan, improves fuel efficiency, and ensures your safety on the road. It helps identify potential problems early before they become major issues. Well-maintained vehicles also have better resale value.
                    </div>
                  )}
                </div>

                {/* FAQ 3 */}
                <div className="border border-gray-200 rounded">
                  <button 
                    onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                    className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50"
                  >
                    <span className="font-semibold text-gray-800">How often should I service my car in Dubai?</span>
                    <span className="text-2xl text-red-600">{openFaq === 3 ? '−' : '+'}</span>
                  </button>
                  {openFaq === 3 && (
                    <div className="p-4 bg-gray-50 text-gray-700">
                      In Dubai's extreme heat, we recommend servicing your car every 5,000-10,000 km or every 6 months, whichever comes first. The harsh climate puts extra stress on your vehicle's cooling system, battery, and fluids, making regular maintenance crucial for optimal performance.
                    </div>
                  )}
                </div>

                {/* FAQ 4 */}
                <div className="border border-gray-200 rounded">
                  <button 
                    onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                    className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50"
                  >
                    <span className="font-semibold text-gray-800">Do you provide warranty on repairs?</span>
                    <span className="text-2xl text-red-600">{openFaq === 4 ? '−' : '+'}</span>
                  </button>
                  {openFaq === 4 && (
                    <div className="p-4 bg-gray-50 text-gray-700">
                      Yes, we provide a 1-year warranty on most repairs and services. We use genuine or top-quality parts to ensure longevity and reliability. Our warranty covers both parts and labor, giving you complete peace of mind with your repair investment.
                    </div>
                  )}
                </div>

                {/* FAQ 5 */}
                <div className="border border-gray-200 rounded">
                  <button 
                    onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                    className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50"
                  >
                    <span className="font-semibold text-gray-800">What car brands do you service?</span>
                    <span className="text-2xl text-red-600">{openFaq === 5 ? '−' : '+'}</span>
                  </button>
                  {openFaq === 5 && (
                    <div className="p-4 bg-gray-50 text-gray-700">
                      We service all car brands including BMW, Mercedes, Audi, Porsche, Range Rover, Toyota, Honda, Nissan, Ford, and more. Our expert mechanics have specialized training on German cars and extensive experience with all major brands sold in the UAE.
                    </div>
                  )}
                </div>

                {/* FAQ 6 */}
                <div className="border border-gray-200 rounded">
                  <button 
                    onClick={() => setOpenFaq(openFaq === 6 ? null : 6)}
                    className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50"
                  >
                    <span className="font-semibold text-gray-800">Do you offer free pick up and drop off service?</span>
                    <span className="text-2xl text-red-600">{openFaq === 6 ? '−' : '+'}</span>
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
                  className="inline-block bg-white text-red-600 border-2 border-red-600 px-8 py-3 rounded font-semibold hover:bg-red-600 hover:text-white transition"
                >
                  Get A Quote
                </a>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/mechanic-customer.jpg" 
                alt="Mechanic consulting with customer" 
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
          <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, white 35px, white 70px)'}}>
          </div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left side - Icon and Title */}
            <div className="flex items-center gap-6 flex-1">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                <span className="text-5xl">🚛</span>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">24 Hour Breakdown Service</h2>
                <p className="text-gray-300 text-lg">To order a Breakdown Recovery Service now or if you require a quote, please contact us</p>
              </div>
            </div>

            {/* Right side - Phone and Info */}
            <div className="text-center md:text-right flex-shrink-0">
              <div className="flex items-center gap-3 mb-3 justify-center md:justify-end">
                <span className="text-3xl text-red-500">📞</span>
                <a href="tel:+971554969599" className="text-4xl font-bold text-white hover:text-red-500 transition-colors">
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
            {/* Audi */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center group">
              <div className="text-center group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/brands/audi.png" 
                  alt="Audi" 
                  width={150} 
                  height={80}
                  className="mx-auto"
                />
              </div>
            </div>

            {/* Land Rover */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center group">
              <div className="text-center group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/brands/landrover.png" 
                  alt="Land Rover" 
                  width={150} 
                  height={80}
                  className="mx-auto"
                />
              </div>
            </div>

            {/* BMW */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center group">
              <div className="text-center group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/brands/bmw.png" 
                  alt="BMW" 
                  width={150} 
                  height={80}
                  className="mx-auto"
                />
              </div>
            </div>

            {/* Porsche */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center group">
              <div className="text-center group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/brands/porsche.png" 
                  alt="Porsche" 
                  width={150} 
                  height={80}
                  className="mx-auto"
                />
              </div>
            </div>

            {/* Mercedes */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center group">
              <div className="text-center group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/brands/mercedes.png" 
                  alt="Mercedes" 
                  width={150} 
                  height={80}
                  className="mx-auto"
                />
              </div>
            </div>

            {/* Toyota */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center group">
              <div className="text-center group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/brands/toyota.png" 
                  alt="Toyota" 
                  width={150} 
                  height={80}
                  className="mx-auto"
                />
              </div>
            </div>

            {/* Honda */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center group">
              <div className="text-center group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/brands/honda.png" 
                  alt="Honda" 
                  width={150} 
                  height={80}
                  className="mx-auto"
                />
              </div>
            </div>

            {/* Nissan */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center group">
              <div className="text-center group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/brands/nissan.png" 
                  alt="Nissan" 
                  width={150} 
                  height={80}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Why Choose Us</h2>
          <p className="text-center text-gray-600 mb-12">Your trusted partner for automotive excellence</p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-3">✓</div>
              <h4 className="font-semibold text-lg mb-2">Certified Mechanics</h4>
              <p className="text-gray-600 text-sm">Expert technicians with years of experience</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-semibold text-lg mb-2">Fast Service</h4>
              <p className="text-gray-600 text-sm">Quick turnaround without compromising quality</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">💰</div>
              <h4 className="font-semibold text-lg mb-2">Fair Pricing</h4>
              <p className="text-gray-600 text-sm">Competitive rates with transparent quotes</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🛡️</div>
              <h4 className="font-semibold text-lg mb-2">Warranty</h4>
              <p className="text-gray-600 text-sm">All repairs backed by our guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        {/* Map and Contact Section */}
        <div className="bg-gray-800 py-8">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left - Map */}
              <div className="bg-gray-700 rounded-lg overflow-hidden h-[300px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.320128474846!2d55.35851757437792!3d25.226140430529686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5db8d0556ced%3A0xd0a34fd075290433!2sAl%20Suwaidi%20Auto%20Repair%20Garage!5e0!3m2!1sen!2sae!4v1765308128250!5m2!1sen!2sae" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Right - Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Address</h4>
                    <p className="text-gray-300">Umm Ramool, Al Rashidiya Dubai</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Phone</h4>
                    <p className="text-gray-300">+971 55 4969599</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="bg-gray-900 py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Company Info */}
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-4">Al Suwaidi Auto Repair Garage</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Al Suwaidi Auto Repair is a fusion of trusted expertise and modern technology, delivering premium automotive care that stands the test of time—restoring performance, reliability, and confidence in every drive.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61583489979902" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/al_suwaidigarage?igsh=eXJqaHZjb2J6NHk3" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.tiktok.com/@al_suwaidigarage?_r=1&_t=ZS-9276QoRZl25" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-black transition"
                    aria-label="TikTok"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
                <div className="space-y-2">
                  <Link href="/" className="block text-gray-400 hover:text-red-600 text-sm transition">Home</Link>
                  <Link href="/about" className="block text-gray-400 hover:text-red-600 text-sm transition">About Us</Link>
                  <Link href="/gallery" className="block text-gray-400 hover:text-red-600 text-sm transition">Gallery</Link>
                  <Link href="/contact" className="block text-gray-400 hover:text-red-600 text-sm transition">Contact Us</Link>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-semibold mb-4 text-lg">Services</h4>
                <div className="space-y-2 text-gray-400 text-sm">
                  <Link href="/services/suspension" className="block hover:text-red-600 transition">Suspension Repair</Link>
                  <Link href="/services/engine" className="block hover:text-red-600 transition">Car Engine Repair</Link>
                  <Link href="/services/transmission" className="block hover:text-red-600 transition">Transmission Repair</Link>
                  <Link href="/services/oil" className="block hover:text-red-600 transition">Oil Change</Link>
                  <Link href="/services/ac" className="block hover:text-red-600 transition">Car AC Repair</Link>
                  <Link href="/services/brake" className="block hover:text-red-600 transition">Brake Repair</Link>
                </div>
              </div>

              {/* Get In Touch */}
              <div>
                <h4 className="font-semibold mb-4 text-lg">Get In Touch</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-red-600">✉️</span>
                    <a href="mailto:mdullah163@gmail.com" className="text-gray-400 text-sm hover:text-red-600 transition">mdullah163@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-600">📞</span>
                    <a href="tel:+971554969599" className="text-gray-400 text-sm hover:text-red-600 transition">+971 55 4969599</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-black py-4">
          <div className="container mx-auto px-6 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Al Suwaidi Auto Repair Garage. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/971551010341"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>

        {/* Call Button */}
        <a
          href="tel:+971554969599"
          className="group relative bg-red-600 hover:bg-red-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Call us"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
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
