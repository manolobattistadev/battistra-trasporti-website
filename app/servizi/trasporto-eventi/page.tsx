import Navbar from "@/components/navbar";
import ContactUsFloatingBtn from "@/components/contact-us-floating-btn";
import Footer from "@/components/footer";
import WhatsappFloatingBtn from "@/components/whatsapp-floating-btn";
import Link from "next/link";
import Image from "next/image";
import type {Metadata} from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
    title: "Battista Trasporti - Servizi per eventi a Milano",
    description: "Trasporto ecosostenibile a Milano: comfort, eleganza e sostenibilità per spostamenti privati, eventi e trasferimenti aziendali.",
};


export default function EventTransportPage() {
  return (
      <div className="min-h-screen gap-2">
          <ContactUsFloatingBtn/>
          <Navbar>
              <Link href="/" className="cursor-pointer text-nowrap">Torna alla Home</Link>
          </Navbar>
          <WhatsappFloatingBtn/>

          <main className="my-8 flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div id="photo-transport" className="mt-4 sm:mt-0 px-8 sm:px-16 grid grid-cols-12">
              {/* Trasporti eventi */}
              <div className="col-span-12 leading-[40px]">
                  <h1 className="text-5xl font-bold mb-8">Trasporti Ecosostenibili con Auto: Comfort, Stile e Sostenibilità</h1>
                  <div className="grid grid-cols-12 gap-6">
                      <div className="col-span-12 sm:col-span-8">
                          <h2 className=" text-gray-600 text-lg leading-[40px]">
                              Nel mondo dei trasporti, l’eleganza e la sostenibilità non sono mai state così ben integrate.
                              Con il nostro servizio esclusivo di trasporto attraverso auto, offriamo un’esperienza unica
                              che combina lusso, innovazione e rispetto per l’ambiente. Che si tratti di eventi, trasferimenti
                              privati o servizi aziendali, la nostra auto elettrica è la scelta perfetta per chi cerca il
                              massimo della qualità senza compromessi.
                          </h2>
                          <h3 className="text-3xl font-bold my-8">Un nuovo standard di trasporto: perché scegliere Tesla?</h3>
                          <div className="text-gray-600 text-lg leading-[40px]">
                              La nostra auto Tesla non è solo un veicolo, ma una vera e propria esperienza di viaggio. Ecco cosa la rende speciale:
                              <ul className="p-4 list-disc">
                                  <li>Eleganza senza pari: Design moderno e interni premium per un viaggio all’insegna del comfort e dello stile.</li>
                                  <li>Zero emissioni: Grazie alla tecnologia 100% elettrica, offriamo trasporti ecosostenibili, riducendo l’impatto ambientale.</li>
                                  <li>Prestazioni avanzate: Accelerazione fluida, silenziosità e tecnologie all’avanguardia garantiscono un’esperienza di viaggio indimenticabile.</li>
                                  <li>Spazio e comfort: Gli interni spaziosi sono perfetti per chi desidera viaggiare in totale relax.</li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-span-12 sm:col-span-4">
                          <Image
                              src="/servizi/trasporto-eventi.jpg"
                              alt="Battista Trasporti eventi"
                              width={0}
                              height={0}
                              priority
                              sizes="100vw"
                              className="mt-2 rounded-md w-full max-w-[390px] h-auto"
                          />
                      </div>
                  </div>

                  <h3 className="text-3xl font-bold my-8">Servizi dedicati</h3>
                  <h4 className="text-xl font-bold my-8">1. Trasporti per eventi esclusivi</h4>
                  <p className="text-gray-600 text-lg leading-[40px]">
                      Perfetto per serate di gala o eventi aziendali. Arrivare con eleganza e modernità.
                  </p>

                  <h4 className="text-xl font-bold my-8">2. Trasferimenti privati</h4>
                  <p className="text-gray-600 text-lg leading-[40px]">
                      Offriamo servizi di trasporto personalizzati per spostamenti giornalieri, viaggi di lavoro o trasferimenti verso aeroporti e stazioni.
                  </p>

                  <h4 className="text-xl font-bold my-8">3. Trasporti aziendali</h4>
                  <p className="text-gray-600 text-lg leading-[40px]">
                      Ideale per manager, delegazioni o ospiti importanti. Le nostre auto combina comfort e professionalità, garantendo la migliore impressione possibile.
                  </p>

                  <h3 className="text-3xl font-bold my-8">Perché scegliere noi?</h3>
                  <p className="text-gray-600 text-lg leading-[40px]">
                      La nostra missione è ridefinire il concetto di trasporto, offrendo un servizio che non sia solo un mezzo per spostarsi,
                      ma un’esperienza di lusso e innovazione. Siamo in grado di unire comfort, estetica e sostenibilità in un unico servizio di
                      altissimo livello.
                  </p>


                  <h3 className="text-3xl font-bold my-8">Contattaci per il tuo prossimo spostamento</h3>
              </div>
          </div>
          <ContactForm />
          </main>
          <Footer/>
      </div>
  );
}
