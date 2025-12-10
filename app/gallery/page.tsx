'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function GalleryPage() {
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [servicesTimeout, setServicesTimeout] = useState<NodeJS.Timeout | null>(null)
  const [activeCategory, setActiveCategory] = useState('all')

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
      {/* Top Contact Bar */}
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

      {/* Navigation */}
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

              <Link href="/gallery" className="text-red-600 font-medium">GALLERY</Link>
              <Link href="/contact" className="text-gray-700 hover:text-red-600 font-medium">CONTACT</Link>
              <Link href="/bookings" className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition">
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Our Work Gallery</h1>
          <p className="text-xl text-gray-300">See the quality of our automotive repair and maintenance services</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${activeCategory === 'all' ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              All Work
            </button>
            <button 
              onClick={() => setActiveCategory('engine')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${activeCategory === 'engine' ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Engine Repairs
            </button>
            <button 
              onClick={() => setActiveCategory('body')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${activeCategory === 'body' ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Body Work
            </button>
            <button 
              onClick={() => setActiveCategory('luxury')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${activeCategory === 'luxury' ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Luxury Cars
            </button>
            <button 
              onClick={() => setActiveCategory('workshop')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${activeCategory === 'workshop' ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              Our Workshop
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Gallery Item 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer h-80">
              <Image 
                src="/gallery/engine1.jpg" 
                alt="Engine Overhaul"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-xl font-bold mb-2">Engine Overhaul</h3>
                  <p className="text-sm">Engine Repair</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer h-80">
              <Image 
                src="/gallery/transmission1.jpg" 
                alt="Transmission Service"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-xl font-bold mb-2">Transmission Service</h3>
                  <p className="text-sm">Gearbox Repair</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer h-80">
              <Image 
                src="/gallery/ac1.jpg" 
                alt="AC System Repair"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-xl font-bold mb-2">AC System Repair</h3>
                  <p className="text-sm">Toyota Camry AC Restoration</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer h-80">
              <Image 
                src="/gallery/brake1.jpg" 
                alt="Brake Service"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-xl font-bold mb-2">Brake Service</h3>
                  <p className="text-sm">Audi Q7 Brake System Upgrade</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 5 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer h-80">
              <Image 
                src="/gallery/electrical1.jpg" 
                alt="Electrical Diagnostics"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-xl font-bold mb-2">Electrical Diagnostics</h3>
                  <p className="text-sm">Range Rover ECU Programming</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 6 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer h-80">
              <Image 
                src="/gallery/workshop1.jpg" 
                alt="Our Workshop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-xl font-bold mb-2">Our Workshop</h3>
                  <p className="text-sm">State-of-the-art Equipment</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 7 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer h-80">
              <Image 
                src="/gallery/suspension1.jpg" 
                alt="Suspension Work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-xl font-bold mb-2">Suspension Work</h3>
                  <p className="text-sm">Porsche Cayenne Suspension Repair</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 8 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer h-80">
              <Image 
                src="/gallery/exhaust1.jpg" 
                alt="Exhaust System"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-xl font-bold mb-2">Exhaust System</h3>
                  <p className="text-sm">Honda Accord Exhaust Replacement</p>
                </div>
              </div>
            </div>

            {/* Gallery Item 9 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer h-80">
              <Image 
                src="/gallery/technicians1.jpg" 
                alt="Expert Technicians"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-xl font-bold mb-2">Expert Technicians</h3>
                  <p className="text-sm">Our Professional Team at Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">2000+</div>
              <p className="text-xl text-gray-300">Cars Serviced</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">97%</div>
              <p className="text-xl text-gray-300">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">3</div>
              <p className="text-xl text-gray-300">Generations</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">20+</div>
              <p className="text-xl text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Want Your Car to Look Like These?</h2>
          <p className="text-xl mb-8">Book an appointment today and experience the Al Suwaidi difference</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+971554969599" className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              📞 Call +971 55 4969599
            </a>
            <a href="https://wa.me/971551010341" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition">
              Book Appointment
            </a>
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
