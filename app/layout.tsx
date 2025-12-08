import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.benjiepersonal.space'),
  title: {
    default: 'Benjie Nonato | Full Stack Developer & Team Leader',
    template: '%s | Benjie Nonato',
  },
  description:
    'Full Stack Developer leading teams to build comprehensive mobile and web platforms using React, React Native, Supabase, and AWS. Specializing in clean code, mentoring, and AI-powered development.',
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'React Native',
    'TypeScript',
    'Next.js',
    'Supabase',
    'AWS',
    'Firebase',
    'Team Leader',
    'Davao City',
    'Philippines',
    'Mobile App Development',
    'Web Development',
    'AI Development',
  ],
  authors: [{ name: 'Benjie Louise T. Nonato' }],
  creator: 'Benjie Louise T. Nonato',
  publisher: 'Benjie Louise T. Nonato',
  alternates: {
    canonical: 'https://portfolio.benjiepersonal.space',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio.benjiepersonal.space',
    title: 'Benjie Nonato | Full Stack Developer & Team Leader',
    description:
      'Full Stack Developer leading teams to build comprehensive mobile and web platforms using React, React Native, Supabase, and AWS.',
    siteName: 'Benjie Nonato Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Benjie Nonato - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Benjie Nonato | Full Stack Developer & Team Leader',
    description:
      'Full Stack Developer leading teams to build comprehensive mobile and web platforms using React, React Native, Supabase, and AWS.',
    images: ['/images/og-image.jpg'],
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
    google: 'your-google-verification-code', // Add your verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Benjie Louise T. Nonato',
              url: 'https://portfolio.benjiepersonal.space',
              image: 'https://portfolio.benjiepersonal.space/images/profile.jpg',
              jobTitle: 'Full Stack Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'Comptrolla Technologies Inc.',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Davao City',
                addressRegion: 'Davao del Sur',
                postalCode: '8000',
                addressCountry: 'PH',
              },
              email: 'benjiepersonal1095@gmail.com',
              telephone: '+639566122219',
              sameAs: [
                'https://www.linkedin.com/in/natzkie2',
              ],
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'University of Mindanao',
              },
              knowsAbout: [
                'JavaScript',
                'TypeScript',
                'React',
                'React Native',
                'Node.js',
                'Next.js',
                'Firebase',
                'Supabase',
                'AWS',
                'Docker',
                'PostgreSQL',
                'MongoDB',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

