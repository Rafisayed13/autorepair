'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function BookingsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Booking submitted! We will contact you shortly to confirm.')
    // In a real app, this would send data to an API
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-primary">🔧 AutoRepair Pro</Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-primary">Home</Link>
              <Link href="/services" className="text-gray-700 hover:text-primary">Services</Link>
              <Link href="/bookings" className="text-primary font-semibold">Bookings</Link>
              <Link href="/about" className="text-gray-700 hover:text-primary">About</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Book an Appointment</h1>
          <p className="text-xl text-gray-600 mb-8">
            Fill out the form below and we'll get back to you shortly
          </p>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Vehicle *</label>
                <input
                  type="text"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="2020 Toyota Camry"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Service Required *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a service</option>
                <option value="oil-change">Oil Change</option>
                <option value="brake-service">Brake Service</option>
                <option value="engine-diagnostic">Engine Diagnostic</option>
                <option value="tire-service">Tire Service</option>
                <option value="general-repair">General Repair</option>
                <option value="maintenance">Maintenance</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Preferred Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Preferred Time *</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Additional Notes</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Tell us more about your vehicle's issues or special requirements..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Submit Booking Request
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
