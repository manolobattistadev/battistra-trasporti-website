'use client'
import Navbar from "@/components/navbar";
import ContactUsFloatingBtn from "@/components/contact-us-floating-btn";
import Footer from "@/components/footer";
import WhatsappFloatingBtn from "@/components/whatsapp-floating-btn";
import Link from "next/link";

export default function CookiePolicyPage() {
  return (
      <div className="min-h-screen gap-2">
        <ContactUsFloatingBtn/>
          <Navbar>
              <Link href="/" className="cursor-pointer text-nowrap">Torna alla Home</Link>
          </Navbar>
          <WhatsappFloatingBtn/>

          <main className="my-8 flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div id="cookie-policy" className="mt-4 sm:mt-0 px-8 sm:px-16 grid grid-cols-12">
              {/* Cookie */}
              <div className="col-span-12 leading-[52px]">
                  <h1 className="text-5xl font-bold mb-8">Cookie Policy</h1>
                  <p>
                      Questa Cookie Policy descrive come utilizziamo i cookie e tecnologie simili sul nostro sito web.
                      Visitando e utilizzando questo sito, accetti l&apos;uso dei cookie come descritto di seguito.
                  </p>

                  <h2>Cosa sono i cookie?</h2>
                  <p>
                      I cookie sono piccoli file di testo inviati al tuo dispositivo (computer, smartphone o tablet)
                      quando visiti un sito web. Questi file permettono al sito di riconoscere il tuo dispositivo e di
                      migliorare la tua esperienza di navigazione.
                  </p>

                  <h2>Tipologie di cookie che utilizziamo</h2>
                  <ul>
                      <li><strong>Cookie tecnici:</strong> Essenziali per il funzionamento del sito e per permettere la
                          navigazione e l&apos;utilizzo delle sue funzionalità principali.
                      </li>
                      <li><strong>Cookie di performance:</strong> Raccolgono informazioni anonime sull&apos;utilizzo del sito
                          per aiutarci a migliorarne l&apos;efficienza.
                      </li>
                      <li><strong>Cookie di funzionalità:</strong> Permettono al sito di ricordare le tue preferenze
                          (come la lingua o la regione).
                      </li>
                      <li><strong>Cookie di terze parti:</strong> Utilizzati da servizi esterni (come Google Analytics)
                          per fornire funzionalità aggiuntive o raccogliere statistiche anonime.
                      </li>
                  </ul>

                  <h2>Gestione dei cookie</h2>
                  <p>
                      Puoi gestire o disabilitare i cookie direttamente dalle impostazioni del tuo browser. Tieni
                      presente che la disabilitazione di alcuni cookie potrebbe limitare la funzionalità del sito.
                  </p>

                  <h2>Come contattarci</h2>
                  <p>
                      Per ulteriori informazioni sull&apos;uso dei cookie, puoi contattarci tramite email a <a
                      href="mailto:battistatrasporti1963@gmail.com">battistatrasporti1963@gmail.com</a>.
                  </p>
              </div>
          </div>
          </main>

          <Footer/>
      </div>
  );
}
