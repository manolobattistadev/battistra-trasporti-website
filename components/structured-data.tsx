import {MAILTO} from "@/lib/env";

export default function StructuredData({description}: {description: string}){
    return(
        <>
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
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Quali servizi di trasporto offre Battista Trasporti?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Battista Trasporti offre trasporti su misura per moda, shooting fotografici, eventi e materiali scenici."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Battista Trasporti opera solo a Milano?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Sebbene la sede principale sia a Milano, Battista Trasporti offre servizi anche nell'hinterland e altre località su richiesta."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Come posso contattare Battista Trasporti?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Puoi contattare Battista Trasporti tramite il nostro sito ufficiale o chiamando il numero +39 123 456 7890."
                            }
                        }
                    ]
                })}
            </script>
        </>
    )
}
