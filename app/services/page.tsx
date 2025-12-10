import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      category: "Engine Services",
      items: [
        { name: "Engine Diagnostics", price: "$89" },
        { name: "Engine Tune-Up", price: "$199" },
        { name: "Timing Belt Replacement", price: "$399" },
        { name: "Engine Overhaul", price: "From $1,500" },
      ]
    },
    {
      category: "Brake Services",
      items: [
        { name: "Brake Inspection", price: "$49" },
        { name: "Brake Pad Replacement", price: "$149" },
        { name: "Brake Rotor Replacement", price: "$299" },
        { name: "Complete Brake System", price: "$599" },
      ]
    },
    {
      category: "Maintenance",
      items: [
        { name: "Oil Change", price: "$39" },
        { name: "Tire Rotation", price: "$29" },
        { name: "Wheel Alignment", price: "$79" },
        { name: "Full Service", price: "$199" },
      ]
    },
    {
      category: "Electrical",
      items: [
        { name: "Battery Testing", price: "$19" },
        { name: "Battery Replacement", price: "$149" },
        { name: "Alternator Repair", price: "$299" },
        { name: "Electrical Diagnostics", price: "$99" },
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-primary">🔧 AutoRepair Pro</Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-primary">Home</Link>
              <Link href="/services" className="text-primary font-semibold">Services</Link>
              <Link href="/bookings" className="text-gray-700 hover:text-primary">Bookings</Link>
              <Link href="/about" className="text-gray-700 hover:text-primary">About</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 mb-12">
          Comprehensive auto repair and maintenance services for all vehicle types
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{service.category}</h2>
              <div className="space-y-3">
                {service.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-700">{item.name}</span>
                    <span className="text-primary font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/bookings" 
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </main>
  )
}
