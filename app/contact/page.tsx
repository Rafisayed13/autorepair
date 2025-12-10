'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function ContactPage() {
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [servicesTimeout, setServicesTimeout] = useState<NodeJS.Timeout | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carBrand: '',
    service: '',
    message: ''
  })

  const handleServicesEnter = () => {
    if (servicesTimeout) clearTimeout(servicesTimeout)
    setServicesDropdown(true)
  }

  const handleServicesLeave = () => {
    const timeout = setTimeout(() => setServicesDropdown(false), 300)
    setServicesTimeout(timeout)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create WhatsApp message
    let message = `Hello, I would like to inquire about car repair services.%0A%0A`
    message += `*Name:* ${formData.name}%0A`
    message += `*Phone:* ${formData.phone}%0A`
    if (formData.email) message += `*Email:* ${formData.email}%0A`
    if (formData.carBrand) message += `*Car Brand:* ${formData.carBrand}%0A`
    if (formData.service) message += `*Service Required:* ${formData.service}%0A`
    message += `*Message:* ${formData.message}`
    
    // Open WhatsApp
    window.open(`https://wa.me/971551010341?text=${message}`, '_blank')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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

              <Link href="/gallery" className="text-gray-700 hover:text-red-600 font-medium">GALLERY</Link>
              <Link href="/contact" className="text-red-600 font-medium">CONTACT</Link>
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
          <h1 className="text-5xl font-bold mb-4">Contact Al Suwaidi Auto Repair</h1>
          <p className="text-xl text-gray-300">Get in touch with Dubai's trusted automotive repair experts</p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">📞</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Call Us</h3>
              <a href="tel:+971554969599" className="text-red-600 text-xl font-semibold hover:underline">
                +971 55 4969599
              </a>
              <p className="text-gray-600 mt-2">Available 8:00AM - 9:00PM</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">📍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Visit Us</h3>
              <p className="text-gray-700 font-semibold">Umm Ramool</p>
              <p className="text-gray-700 font-semibold">Al Rashidiya Dubai</p>
              <p className="text-gray-600 mt-2">UAE</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">⏰</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Working Hours</h3>
              <p className="text-gray-700 font-semibold">Every Day</p>
              <p className="text-gray-700">8:00 AM - 9:00 PM</p>
              <p className="text-red-600 font-semibold mt-2">24/7 Emergency Service</p>
            </div>
          </div>

          {/* Map and Contact Form */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Google Map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us on Map</h2>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.394799999999!2d55.3656!3d25.2891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d2a0b0b0b0b%3A0x0!2zMjXCsDE3JzIwLjgiTiA1NcKwMjEnNTYuMiJF!5e0!3m2!1sen!2sae!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How to Reach Us</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">🚗</span>
                    <span>Easy access from Sheikh Mohammed Bin Zayed Road</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">🅿️</span>
                    <span>Free parking available for customers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">🏢</span>
                    <span>Located in Umm Ramool Industrial Area</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="+971 XX XXX XXXX"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Car Brand</label>
                  <select 
                    name="carBrand"
                    value={formData.carBrand}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    <option value="">Select your car brand</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                    <option value="Audi">Audi</option>
                    <option value="Porsche">Porsche</option>
                    <option value="Range Rover">Range Rover</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Honda">Honda</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Service Required</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    <option value="">Select service</option>
                    <option value="Engine Repair">Engine Repair</option>
                    <option value="Transmission Repair">Transmission Repair</option>
                    <option value="AC Repair">AC Repair</option>
                    <option value="Brake Service">Brake Service</option>
                    <option value="Battery Replacement">Battery Replacement</option>
                    <option value="Electrical Repair">Electrical Repair</option>
                    <option value="Suspension Repair">Suspension Repair</option>
                    <option value="Oil Change">Oil Change</option>
                    <option value="Exhaust Service">Exhaust Service</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea 
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Describe the issue or service you need..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> For urgent repairs or emergencies, please call us directly at 
                  <a href="tel:+971554969599" className="text-red-600 font-semibold"> +971 55 4969599</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600">We respond to all inquiries within 1 hour</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">20+ years of automotive experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Service</h3>
              <p className="text-gray-600">97% customer satisfaction rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted Brand</h3>
              <p className="text-gray-600">Serving Dubai for 3 generations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service Banner */}
      <section className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Emergency Assistance?</h2>
          <p className="text-xl mb-6">We offer 24/7 emergency breakdown service across Dubai</p>
          <a 
            href="tel:+971554969599"
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            📞 Call Emergency Line: +971 55 4969599
          </a>
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
