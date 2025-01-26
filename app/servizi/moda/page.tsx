import Navbar from "@/components/navbar";
import ContactUsFloatingBtn from "@/components/contact-us-floating-btn";
import Footer from "@/components/footer";
import WhatsappFloatingBtn from "@/components/whatsapp-floating-btn";
import Link from "next/link";
import Image from "next/image";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Battista Trasporti s.a.s. - Servizi di Trasporto a Milano per la Moda e Fashion Week",
    description: "Trasporto specializzato a Milano per abiti appesi, sfilate, shooting fotografici e materiali scenici. Puntualità e cura per il settore moda.",
};

export default function FashionPage() {
  return (
      <div className="min-h-screen gap-2">
          <ContactUsFloatingBtn/>
          <Navbar>
              <Link href="/" className="cursor-pointer text-nowrap">Torna alla Home</Link>
          </Navbar>
          <WhatsappFloatingBtn/>

          <main className="my-8 flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div id="fashion" className="mt-4 sm:mt-0 px-8 sm:px-16 grid grid-cols-12">
              {/* Moda */}
              <div className="col-span-12 leading-[40px]">
                  <h1 className="text-5xl font-bold mb-8">Trasporti per il settore moda: precisione e stile</h1>
                  <div className="grid grid-cols-12 gap-6">
                      <div className="col-span-12 sm:col-span-8">
                      <h2 className="text-gray-600 text-lg leading-[40px]">
                          Nel dinamico mondo della moda, ogni dettaglio conta, e il tempismo è tutto. Durante i periodi
                          delle
                          sfilate e gli eventi più importanti, è fondamentale che abiti, accessori e materiali arrivino a
                          destinazione in condizioni perfette e con la massima puntualità. Battista Trasporti offre servizi
                          di trasporto dedicati al settore moda, progettati per rispondere alle esigenze di un’industria che
                          non si ferma mai.
                      </h2>
                      <h3 className="text-3xl font-bold my-8">Un servizio su misura per il settore moda</h3>
                      <div className="text-gray-600 text-lg leading-[40px]">
                          Che si tratti di una consegna per una sfilata, un evento in showroom o un servizio fotografico,
                          il nostro servizio è progettato per garantire che i tuoi capi e accessori viaggino in totale
                          sicurezza.
                          Tra i nostri servizi più richiesti:
                          <ul className="p-4 list-disc">
                              <li>Trasporto di abiti appesi: I nostri mezzi sono attrezzati con barre appendiabiti per
                                  garantire che gli abiti viaggino senza pieghe e pronti per essere indossati.
                              </li>
                              <li>Consegne urgenti per sfilate: Durante le fashion week e gli eventi, offriamo trasporti
                                  rapidi e pianificati per rispettare scadenze serrate.
                              </li>
                              <li>Movimentazione di accessori e materiali scenici: Oltre agli abiti, gestiamo accessori,
                                  scarpe e materiali di scena con la massima cura.
                              </li>
                              <li>Trasporto per shooting fotografici: Servizi dedicati per portare abiti e attrezzature
                                  fotografiche direttamente sul set, pronti per la produzione.
                              </li>
                          </ul>
                      </div>
                      </div>
                      <div className="col-span-12 sm:col-span-4">
                          <Image
                              src="/servizi/moda.jpg"
                              alt="Battista Trasporti Moda"
                              width={0}
                              height={0}
                              priority
                              sizes="100vw"
                              className="mt-2 rounded-md w-full h-auto"
                          />
                      </div>
                  </div>

                  <h3 className="text-3xl font-bold my-8">Perché scegliere Battista Trasporti per il settore moda?</h3>
                  <h4 className="text-xl font-bold my-8">1. Esperienza durante i periodi delle sfilate</h4>
                  <p className="text-gray-600 text-lg leading-[40px]">
                      Conosciamo l’importanza delle fashion week e delle collezioni stagionali. Sappiamo che le consegne
                      devono essere sincronizzate alla perfezione per rispettare i tempi di prova, backstage e
                      presentazione.
                  </p>

                  <h4 className="text-xl font-bold my-8">2. Veicoli attrezzati per il trasporto di abiti appesi</h4>
                  <p className="text-gray-600 text-lg leading-[40px]">
                      I nostri mezzi sono dotati di barre appendiabiti e sistemi di sicurezza che mantengono gli abiti
                      in condizioni perfette, pronti per essere esposti o indossati senza necessità di ulteriori
                      preparazioni.
                  </p>

                  <h4 className="text-xl font-bold my-8">3. Rispetto dei tempi e puntualità</h4>
                  <p className="text-gray-600 text-lg leading-[40px]">
                      Siamo in grado di operare in tempi ridotti, garantendo che ogni consegna arrivi puntuale, anche
                      durante i
                      periodi più intensi come la Milano Fashion Week.
                  </p>

                  <h4 className="text-xl font-bold my-8">4. Cura e professionalità</h4>
                  <p className="text-gray-600 text-lg leading-[40px]">
                      Il nostro team comprende l’importanza di ogni capo. Gestiamo i trasporti con la massima
                      attenzione,
                      proteggendo abiti e accessori da eventuali danni o pieghe.
                  </p>

                  <h4 className="text-xl font-bold my-8">5. Servizi di trasporto riservati</h4>
                  <p className="text-gray-600 text-lg leading-[40px]">
                      Offriamo trasporti dedicati, con veicoli riservati esclusivamente alla tua merce, per garantire
                      privacy e sicurezza.
                  </p>

                  <h3 className="text-3xl font-bold my-8">I nostri punti di forza durante le fashion week</h3>
                  <div className="text-gray-600 text-lg leading-[40px]">
                      <ul className="p-4 list-disc">
                          <li>🚚 Trasporti dedicati per collezioni intere: Perfetto per brand e stilisti che devono
                              consegnare capi per sfilate o showroom.
                          </li>
                          <li>🕒 Disponibilità h24: Siamo disponibili a ogni ora per garantire che i tuoi capi arrivino
                              nei tempi richiesti.
                          </li>
                          <li>📍 Consegne in tutta Italia: Con un focus particolare su Milano, capitale della moda, e
                              hinterland.
                          </li>
                      </ul>
                  </div>


                  <h3 className="text-3xl font-bold my-8">Servizi aggiuntivi</h3>
                  <div className="text-gray-600 text-lg leading-[40px]">
                      <ul className="p-4 list-disc">
                          <li>Gestione dei resi: Dopo le sfilate o gli eventi, organizziamo il ritiro e la restituzione
                              di capi e materiali in modo rapido ed efficiente.
                          </li>
                          <li>Assistenza al carico e scarico: Il nostro personale ti aiuta nella movimentazione dei
                              capi, garantendo una gestione impeccabile.
                          </li>
                          <li>Consegne in tutta Italia: Con un focus particolare su Milano, capitale della moda, e
                              hinterland.
                          </li>
                      </ul>
                  </div>

                  <h3 className="text-3xl font-bold my-8">Per un trasporto all’altezza del tuo stile</h3>
                  <p className="text-gray-600 text-lg leading-[40px]">
                      Nel settore moda, il trasporto è parte integrante del processo creativo e produttivo. Battista Trasporti
                      è il partner ideale per garantire che ogni capo, accessorio e materiale arrivi a destinazione in
                      perfette condizioni e nei tempi previsti. Siamo qui per supportarti durante i periodi più impegnativi,
                      permettendoti di concentrarti su ciò che conta di più: creare.
                  </p>

              </div>
          </div>
          </main>
          <Footer/>
      </div>
  );
}
