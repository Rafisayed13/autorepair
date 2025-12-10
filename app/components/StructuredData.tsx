export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'Al Suwaidi Auto Repair Garage',
    image: 'https://alsuwaidigarage.com/logo.png',
    '@id': 'https://alsuwaidigarage.com',
    url: 'https://alsuwaidigarage.com',
    telephone: '+971554969599',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Umm Ramool',
      addressLocality: 'Al Rashidiya',
      addressRegion: 'Dubai',
      postalCode: '',
      addressCountry: 'AE'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.2891,
      longitude: 55.3656
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '08:00',
      closes: '21:00'
    },
    sameAs: [
      'https://www.facebook.com/alsuwaidigarage',
      'https://www.instagram.com/alsuwaidigarage'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '2000'
    },
    areaServed: {
      '@type': 'City',
      name: 'Dubai'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Auto Repair Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Engine Repair',
            description: 'Professional engine repair and diagnostics for all car brands'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Transmission Repair',
            description: 'Expert transmission repair and maintenance services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Brake Repair',
            description: 'Complete brake system repair and replacement'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AC Repair',
            description: 'Car air conditioning repair and recharge services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Suspension Repair',
            description: 'Suspension system diagnosis and repair'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Battery Replacement',
            description: 'Car battery testing and replacement services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Electrical Repair',
            description: 'Electrical system diagnostics and programming'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Oil Change',
            description: 'Engine oil change and filter replacement'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Exhaust Services',
            description: 'Exhaust system repair and replacement'
          }
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
