import Navbar from "@/components/navbar";
import ContactUsFloatingBtn from "@/components/contact-us-floating-btn";
import Footer from "@/components/footer";
import WhatsappFloatingBtn from "@/components/whatsapp-floating-btn";
import Link from "next/link";
import Image from "next/image";
import type {Metadata} from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
    title: "Battista Trasporti s.a.s. - Servizi di Trasporto a Milano per shooting fotografici",
    description: "Trasporto a Milano per attrezzature fotografiche, materiali di scena e set completi, con massima cura e puntualità per shooting ed eventi.",
};

export default function PhotoPage() {
  return (
      <div className="min-h-screen gap-2">
          <ContactUsFloatingBtn/>
          <Navbar>
              <Link href="/" className="cursor-pointer text-nowrap">Torna alla Home</Link>
          </Navbar>
          <WhatsappFloatingBtn/>

          <main className="my-8 flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div id="photo-transport" className="mt-4 sm:mt-0 px-8 sm:px-16 grid grid-cols-12">
              {/* Trasporti dedicati per shooting fotografici */}
              <div className="col-span-12 leading-[40px]">
                  <h1 className="text-5xl font-bold mb-8">Trasporti dedicati per shooting fotografici</h1>
                  <div className="grid grid-cols-12 gap-6">
                      <div className="col-span-12 sm:col-span-8">
                          <h2 className=" text-gray-600 text-lg leading-[40px]">
                              Nel mondo della fotografia, ogni dettaglio è fondamentale. Per garantire il successo di uno shooting
                              fotografico, è essenziale che abiti, attrezzature e materiali di scena arrivino a destinazione
                              in perfette condizioni e nei tempi previsti. Battista Trasporti offre servizi di trasporto dedicati
                              per shooting fotografici, studiati per rispondere alle esigenze di fotografi, stylist e agenzie.
                          </h2>
                          <h3 className="text-3xl font-bold my-8">Un servizio su misura per il tuo shooting fotografico</h3>
                          <div className="text-gray-600 text-lg leading-[40px]">
                              Che si tratti di uno shooting per una campagna pubblicitaria, un editoriale di moda o un evento speciale, il nostro servizio è progettato per offrire soluzioni rapide e sicure per ogni esigenza. I nostri servizi includono:
                              <ul className="p-4 list-disc">
                                  <li>Trasporto di abiti e accessori: Mezzi attrezzati con barre appendiabiti per trasportare abiti e accessori senza pieghe o danni.
                                  </li>
                                  <li>Movimentazione di attrezzature fotografiche: Garantiamo il trasporto sicuro di fotocamere, luci, obiettivi e materiali delicati.
                                  </li>
                                  <li>Trasporto materiali di scena: Dalle scenografie ai fondali, ci occupiamo di movimentare tutto ciò che serve per creare l’atmosfera perfetta.</li>
                                  <li>Consegne urgenti e flessibili: Disponibili per trasporti last-minute o per rispettare le tempistiche serrate di uno shooting.</li>
                              </ul>
                              Il nostro obiettivo è quello di offrire una soluzione che sia perfettamente in linea con le tue
                              richieste, ottimizzando i tempi e garantendo la massima cura per le tue merci.
                          </div>
                      </div>
                      <div className="col-span-12 sm:col-span-4">
                          <Image
                              src="/servizi/shooting-fotografici.jpg"
                              alt="Battista Trasporti shooting fotografici"
                              width={0}
                              height={0}
                              priority
                              sizes="100vw"
                              className="mt-2 rounded-md w-full h-auto"
                          />
                      </div>
                  </div>

                  <h3 className="text-3xl font-bold my-8">Perché scegliere Battista Trasporti per il tuo shooting fotografico?</h3>
                  <h4 className="text-xl font-bold my-8">1. Veicoli attrezzati per ogni esigenza</h4>
                  <p className="text-gray-600 text-lg leading-[40px]">
                      I nostri mezzi sono progettati per garantire la sicurezza e l’integrità di abiti, accessori e attrezzature delicate, mantenendo tutto in perfette condizioni durante il trasporto.
                  </p>

                  <h4 className="text-xl font-bold my-8">2. Rispetto delle tempistiche</h4>
                  <p className="text-gray-600 text-lg leading-[40px]">
                      Sappiamo quanto sia importante la puntualità per uno shooting. Offriamo consegne rapide e sincronizzate con i tempi della produzione, evitando ritardi che possano compromettere il lavoro.
                  </p>

                  <h4 className="text-xl font-bold my-8">3. Cura dei dettagli</h4>
                  <p className="text-gray-600 text-lg leading-[40px]">
                      Ogni carico è trattato con la massima attenzione. Ci assicuriamo che gli abiti siano pronti per essere utilizzati e che le attrezzature siano protette da urti o danni.
                  </p>

                  <h4 className="text-xl font-bold my-8">4. Supporto dedicato sul set</h4>
                  <p className="text-gray-600 text-lg leading-[40px]">
                      Su richiesta, forniamo assistenza tecnica durante le fasi di carico e scarico, garantendo un servizio completo e senza stress.
                  </p>

                  <h4 className="text-xl font-bold my-8">5. Servizio personalizzato</h4>
                  <p className="text-gray-600 text-lg leading-[40px]">
                      Ogni shooting è diverso e richiede una pianificazione specifica. Adattiamo i nostri servizi alle tue necessità, offrendo soluzioni su misura per ogni progetto fotografico.
                  </p>

                  <h3 className="text-3xl font-bold my-8">Un partner affidabile per i tuoi trasporti</h3>
                  <p className="text-gray-600 text-lg leading-[40px]">
                      La scelta di un servizio di trasporto non è mai banale, e Battista Trasporti lo sa bene. Per questo ci
                      impegniamo ogni giorno a essere il partner ideale per aziende e privati che cercano affidabilità,
                      qualità e flessibilità. Che tu abbia bisogno di un trasporto urgente, di gestire carichi complessi o
                      di trovare una soluzione personalizzata, noi siamo qui per aiutarti.
                  </p>


                  <h3 className="text-3xl font-bold my-8">Contattaci per il tuo trasporto su misura</h3>
                  <p className="text-gray-600 text-lg leading-[40px]">
                      Siamo pronti a trasformare le tue esigenze di trasporto in una soluzione concreta. Contattaci oggi
                      stesso per ricevere una consulenza personalizzata e scoprire come possiamo aiutarti a raggiungere
                      i tuoi obiettivi.
                  </p>

              </div>
          </div>
          <ContactForm />
          </main>
          <Footer/>
      </div>
  );
}
