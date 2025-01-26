import type { Metadata } from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import { ToastContainer, Bounce } from "react-toastify";
import {MAILTO} from "@/lib/env";


const robotoSans = Roboto({
    subsets: ['latin'],
    weight:["400"],
    variable: '--font-roboto',
});

const title = "Battista Trasporti s.a.s. - Servizi di Trasporto per Moda, Shooting Fotografici e Fashion Week a Milano";
const description = "Scopri i nostri servizi di trasporto personalizzati a Milano e hinterland: rapidi, sicuri e ideali per moda, traslochi, eventi e shooting fotografici. Precisione e affidabilità garantite.";
export const metadata: Metadata = {
  title,
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
    <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="icon" type="image/ico" href="/favicon.ico"/>
        <link rel="icon" type="image/ico" href="https://battistatrasporti.it/favicon.ico"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://battistatrasporti.it"/>
        <meta property="og:image" content="https://battistatrasporti.it/logo.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={description}/>
        <meta name="twitter:image" content="https://battistatrasporti.it/logo.png"/>
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Battista Trasporti s.a.s.",
                "description": description,
                "url": "https://battistatrasporti.it",
                "email": MAILTO,
                "telephone": "+39 335453733",
                "areaServed": ["Milano", "Hinterland", "Lombardia"],
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Via Felice Cavallotti, 134",
                    "addressLocality": "Casalpusterlengo",
                    "addressRegion": "LO",
                    "postalCode": "26841    ",
                    "addressCountry": "IT"
                },
                "openingHours": "Mo-Fr 08:00-20:00",
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 45.183226,
                    "longitude": 9.643068
                },
                /*"sameAs": [
                    "https://www.facebook.com/BattistaTrasporti",
                    "https://www.instagram.com/BattistaTrasporti",
                    "https://www.linkedin.com/company/battistatrasporti"
                ],*/
                "makesOffer": [
                    {
                        "@type": "Offer",
                        "name": "Servizi di Trasporto per Moda e Shooting Fotografici",
                        "description": "Trasporti dedicati a Milano per abiti appesi, materiali di scena e attrezzature fotografiche. Perfetti per eventi e sfilate.",
                        "priceSpecification": {
                            "@type": "PriceSpecification",
                            "priceCurrency": "EUR",
                            "price": "150.00"
                        },
                        "areaServed": ["Milano", "Hinterland"],
                        "availability": "http://schema.org/InStock",
                        "url": "https://www.battistatrasporti.it/moda-shooting"
                    },
                    {
                        "@type": "Offer",
                        "name": "Trasporto per Eventi e Materiali Scenici",
                        "description": "Servizi di trasporto per eventi, materiali scenici e logistica dedicata a Milano.",
                        "priceSpecification": {
                            "@type": "PriceSpecification",
                            "priceCurrency": "EUR",
                            "price": "200.00"
                        },
                        "areaServed": ["Milano", "Hinterland"],
                        "availability": "http://schema.org/InStock",
                        "url": "https://www.battistatrasporti.it/eventi"
                    }
                ],
                "faq": [
                    {
                        "@type": "Question",
                        "name": "Quali sono le aree servite da Battista Trasporti?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Operiamo principalmente a Milano, nell'hinterland e in tutta la Lombardia, offrendo trasporti su misura."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Come viene garantita la sicurezza degli abiti durante il trasporto?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Gli abiti appesi vengono trasportati con cura in veicoli dotati di supporti dedicati per garantire massima sicurezza e protezione."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Battista Trasporti offre servizi per la Fashion Week?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sì, offriamo trasporti personalizzati per sfilate e shooting durante la Fashion Week a Milano."
                        }
                    }
                ]
            })}
        </script>
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.battistatrasporti.it"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Moda & Fashion",
                    "item": "https://www.battistatrasporti.it/servizi/moda"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Shooting fotografici",
                    "item": "https://www.battistatrasporti.it/servizi/shooting-fotografici"
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Trasporti su misura",
                    "item": "https://www.battistatrasporti.it/servizi/trasporti-su-misura"
                },
                {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Trasporto eventi",
                    "item": "https://www.battistatrasporti.it/servizi/trasporto-eventi"
                }
                ]
            })}
        </script>
    </head>
    <body className={`${robotoSans.variable} ${robotoSans.variable} antialiased`}>
    {children}
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
    />
    </body>
    <GoogleTagManager gtmId="GTM-MMGHRDK8"/>
    </html>
  );
}
