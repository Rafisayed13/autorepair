export default function StructuredData() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': 'https://alsuwaidiautorepair.com/#business',
    name: 'Al Suwaidi Auto Repair Garage',
    image: 'https://alsuwaidiautorepair.com/og-image.jpg',
    logo: 'https://alsuwaidiautorepair.com/logo.png',
    url: 'https://alsuwaidiautorepair.com',
    telephone: '+971554969599',
    email: 'mdullah163@gmail.com',
    priceRange: 'AED 150 - AED 8000',
    description:
      'Trusted auto repair workshop in Dubai for all car brands. Engine, AC, brake, transmission, electrical and general auto repair with free pick-up and drop-off across Dubai.',

    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Umm Ramool',
      addressLocality: 'Al Rashidiya',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },

    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.2261,
      longitude: 55.3585,
    },

    areaServed: [
      { '@type': 'City', name: 'Dubai' },
      { '@type': 'Place', name: 'Al Rashidiya' },
      { '@type': 'Place', name: 'Umm Ramool' },
      { '@type': 'Place', name: 'Deira' },
      { '@type': 'Place', name: 'Al Qusais' },
      { '@type': 'Place', name: 'Al Nahda' },
      { '@type': 'Place', name: 'Dubai Marina' },
      { '@type': 'Place', name: 'Jumeirah' },
      { '@type': 'Place', name: 'Downtown Dubai' },
    ],

    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:00',
        closes: '21:00',
      },
    ],

    sameAs: [
      'https://www.facebook.com/profile.php?id=61583489979902',
      'https://www.instagram.com/al_suwaidigarage',
      'https://www.tiktok.com/@al_suwaidigarage',
    ],

    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '52',
    },

    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Car Repair Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Engine Repair' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transmission Repair' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AC Repair' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brake Repair' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Oil Change' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Battery Replacement' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Suspension Repair' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Electrical Repair' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Exhaust Repair' } },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What car brands do you service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We service all car brands including BMW, Mercedes, Audi, Porsche, Range Rover, Toyota, Honda, Nissan, Ford, and more. Our expert mechanics have specialized training on German cars and extensive experience with all major brands sold in the UAE.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer free pick up and drop off service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We offer complimentary pick up and drop off service across Dubai. Our team will collect your vehicle from your home or office, service it at our workshop, and deliver it back to you at no extra charge.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide warranty on repairs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide a 1-year warranty on most repairs and services. We use genuine or top-quality parts to ensure longevity and reliability.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should I service my car in Dubai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In Dubai\'s extreme heat, we recommend servicing your car every 5,000-10,000 km or every 6 months, whichever comes first.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are your opening hours?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are open every day from 8:00 AM to 9:00 PM, including weekends and public holidays.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Al Suwaidi Auto Repair located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are located in Umm Ramool, Al Rashidiya, Dubai, UAE. Free pick-up and drop-off available across all Dubai areas.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}