import type { Metadata } from "next";
import {Roboto} from "next/font/google";
import "./globals.css";

const robotoSans = Roboto({
    subsets: ['latin'],
    weight:["400"],
    variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Battista Trasporti s.a.s. - Servizi di Trasporto Dedicato su Misura",
  description: "Servizi di Trasporto Dedicato su Misura a Milano e Hinterland: Consegne Veloci, Sicure e Puntuali per Moda, Traslochi e Shooting Fotografici.",
};

const domain = 'https://www.battistatrasporti.it'
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
        <meta property="og:url" content={domain}/>
        <meta property="og:image" content={`${domain}/logo.png`}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Ritiri e Consegne in tutta Italia"/>
        <meta name="twitter:description"
              content="Servizi di Trasporto Dedicato su Misura: Consegne Veloci, Sicure e Puntuali per Milano e hinterland."/>
        <meta name="twitter:image" content={`${domain}/logo.png`}/>
    </head>
    <body
        className={`${robotoSans.variable} ${robotoSans.variable} antialiased`}
    >
    {children}
    </body>
    </html>
  );
}
