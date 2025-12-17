import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Al Suwaidi Auto Repair Garage Dubai | Best Car Repair Services in UAE',
  description: 'Al Suwaidi Auto Repair Garage offers expert car repair services in Dubai - Engine repair, transmission, AC service, brake repair, battery replacement. Trusted for 3 generations in Umm Ramool, Al Rashidiya.',
  keywords: 'car repair dubai, auto repair dubai, car service dubai, engine repair dubai, transmission repair dubai, brake repair dubai, AC repair dubai, car maintenance dubai, Al Suwaidi garage, Umm Ramool car repair, Al Rashidiya auto service, BMW repair dubai, Mercedes repair dubai, Audi service dubai, Toyota repair dubai',
  authors: [{ name: 'Al Suwaidi Auto Repair Garage' }],
  creator: 'Al Suwaidi Auto Repair Garage',
  publisher: 'Al Suwaidi Auto Repair Garage',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  metadataBase: new URL('https://alsuwaidiautorepair.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Al Suwaidi Auto Repair Garage Dubai | Best Car Repair Services',
    description: 'Expert car repair services in Dubai - Engine, transmission, AC, brake repair. Trusted for 3 generations. Open 8AM-9PM daily in Umm Ramool.',
    url: 'https://alsuwaidiautorepair.com',
    siteName: 'Al Suwaidi Auto Repair Garage',
    locale: 'en_AE',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Al Suwaidi Auto Repair Garage Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Al Suwaidi Auto Repair Garage Dubai',
    description: 'Expert car repair services in Dubai - All brands serviced',
    images: ['/logo.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#DC2626" />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2891;55.3656" />
        <meta name="ICBM" content="25.2891, 55.3656" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
