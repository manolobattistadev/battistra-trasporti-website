import type { Metadata } from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import { ToastContainer, Bounce } from "react-toastify";

const robotoSans = Roboto({
    subsets: ['latin'],
    weight:["400"],
    variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Battista Trasporti s.a.s. - Servizi di Trasporto per Moda, Shooting Fotografici e Fashion Week a Milano",
  description: "Scopri i nostri servizi di trasporto personalizzati a Milano e hinterland: rapidi, sicuri e ideali per moda, traslochi, eventi e shooting fotografici. Precisione e affidabilità garantite.",
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
        <link rel="manifest" href="/site.webmanifest"/>
        <meta property="og:title" content="Battista Trasporti s.a.s. - Servizi di Trasporto Dedicato su Misura"/>
        <meta property="og:description"
              content="Servizi di Trasporto Dedicato su Misura: Consegne Veloci, Sicure e Puntuali per Milano e hinterland."/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://battistatrasporti.it"/>
        <meta property="og:image" content="https://battistatrasporti.it/logo.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Ritiri e Consegne in tutta Italia"/>
        <meta name="twitter:description"
              content="Servizi di Trasporto Dedicato su Misura: Consegne Veloci, Sicure e Puntuali per Milano e hinterland."/>
        <meta name="twitter:image" content="https://battistatrasporti.it/logo.png"/>
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Battista Trasporti",
                "url": "https://battistatrasporti.it",
                "telephone": "+39 335453733",
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
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Quali servizi offre Battista Trasporti?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Offriamo trasporti dedicati per moda, shooting fotografici, traslochi e prodotti deperibili a temperatura controllata."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Dove operate?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Operiamo su Milano e hinterland."
                        }
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
    <GoogleTagManager gtmId="GTM-MMGHRDK8" />
    </html>
  );
}
