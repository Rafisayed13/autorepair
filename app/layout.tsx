import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://alsuwaidiautorepair.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Car Repair Garage in Al Rashidiya, Dubai | Al Suwaidi Auto',
    template: '%s | Al Suwaidi Auto Repair',
  },

  description:
    'Trusted car repair in Umm Ramool, Al Rashidiya. Engine, AC, brake, transmission & electrical repair. Free pick-up & drop-off across Dubai. Call now.',

  keywords: [
    'car repair Dubai',
    'auto repair Al Rashidiya',
    'car garage Umm Ramool',
    'engine repair Dubai',
    'AC repair Dubai',
    'brake repair Dubai',
    'transmission repair Dubai',
    'BMW service Dubai',
    'Mercedes repair Dubai',
    'Toyota service Dubai',
  ],

  authors: [{ name: 'Al Suwaidi Auto Repair Garage' }],
  creator: 'Al Suwaidi Auto Repair Garage',
  publisher: 'Al Suwaidi Auto Repair Garage',
  category: 'Automotive',

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/logo.png', sizes: '180x180', type: 'image/png' }],
  },

  openGraph: {
    title: 'Car Repair Garage in Al Rashidiya, Dubai | Al Suwaidi Auto',
    description:
      'Trusted car repair in Umm Ramool, Al Rashidiya. Free pick-up & drop-off across Dubai. Call +971 55 4969599.',
    url: siteUrl,
    siteName: 'Al Suwaidi Auto Repair Garage',
    locale: 'en_AE',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Al Suwaidi Auto Repair Garage - car repair workshop in Al Rashidiya Dubai',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Car Repair Garage in Al Rashidiya, Dubai | Al Suwaidi Auto',
    description:
      'Trusted car repair in Umm Ramool, Al Rashidiya. Free pick-up & drop-off across Dubai.',
    images: ['/logo.png'],
  },

  // Uncomment after you get the real code from Google Search Console
  // verification: {
  //   google: 'YOUR_REAL_GOOGLE_SEARCH_CONSOLE_CODE',
  // },
}

// ---- Structured Data ----

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  '@id': `${siteUrl}/#autorepair`,

  name: 'Al Suwaidi Auto Repair Garage',
  alternateName: 'Al Suwaidi Auto Repair',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/logo.png`,

  description:
    'Trusted auto repair workshop in Al Rashidiya, Dubai for all car brands. Engine, AC, brake, transmission, electrical and general auto repair with free pick-up and drop-off across Dubai.',

  telephone: '+971554969599',
  email: 'mdullah163@gmail.com',

  priceRange: 'AED 150 - AED 8000',

  currenciesAccepted: 'AED',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',

  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Umm Ramool, Al Rashidiya',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    postalCode: '00000',
    addressCountry: 'AE',
  },

  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.2261,
    longitude: 55.3585,
  },

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

  sameAs: [
    'https://www.facebook.com/profile.php?id=61583489979902',
    'https://www.instagram.com/al_suwaidigarage',
    'https://www.tiktok.com/@al_suwaidigarage',
  ],

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
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: 'Al Suwaidi Auto Repair Garage',
  publisher: {
    '@id': `${siteUrl}/#autorepair`,
  },
  inLanguage: 'en-AE',
}

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
        text: "In Dubai's extreme heat, we recommend servicing your car every 5,000-10,000 km or every 6 months, whichever comes first.",
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
        text: 'We are located in Umm Ramool, Al Rashidiya, Dubai, UAE. Free pick-up and drop-off is available across all Dubai areas.',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        <meta name="theme-color" content="#10B981" />

        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2261;55.3585" />
        <meta name="ICBM" content="25.2261, 55.3585" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}