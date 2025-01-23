import Image from "next/image";
import {PhoneIcon} from "@heroicons/react/16/solid";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function Home() {

  const services = [
      {icon: '🚚', title: 'Trasporti su misura', description: 'Ogni spedizione è progettata intorno alle tue necessità.'},
      {icon: '👗', title: 'Moda & Shooting', description: 'Da anni siamo specializzati nei servizi moda & shooting fotografici'},
      {icon: '🔒', title: 'Sicurezza garantita', description: 'Monitoraggio costante e cura massima del tuo carico.'},
      {icon: '⏱️', title: 'Rapidità e puntualità', description: 'Ogni spedizione è progettata intorno alle tue necessità.'},
      {icon: '🌍', title: 'Copertura estesa', description: 'Operiamo a Milano e su tutto il territorio  nazionale.'},
      {icon: '🚪', title: 'Door-to-door', description: 'Ritiro e consegna direttamente presso le sedi richieste.'},
      {icon: '📦', title: 'Gestione carichi speciali', description: 'Attenzione e cura per merci delicate, ingombranti o preziose.'},
      {icon: '🔄', title: 'Servizi di logistica', description: 'Supporto nella gestione completa della catena di distribuzione'},
  ];


  return (
      <div className="min-h-screen gap-2">
          <div
              className="shadow-xl cursor-pointer fixed top-8 right-0 bg-black p-2 px-4 rounded-tl-md rounded-bl-md text-white flex gap-2">
              <a href="tel:+39335453733" className="flex gap-4">
                  <PhoneIcon className="w-6"/>
                  <div className="flex flex-col">
                      Richiedi preventivo
                      <p>+39 335453733</p>
                  </div>
              </a>
          </div>
          <Navbar/>

          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

              {/* Intro */}
              <div className="px-16 py-0 pb-0 grid grid-cols-12 items-center">
                  <div className="col-span-8 flex flex-col gap-4">
                      <p className="text-gray-600">BATTISTA TRASPORTI S.A.S</p>
                      <p className="text-7xl font-bold">Ritiri e consegne<br/> in tutta Italia</p>
                      <p className="text-gray-600 text-lg leading-[40px]">
                          Servizi di Trasporto Dedicato su Misura: Consegne Veloci,<br/>
                          Sicure e Puntuali per Milano e hinterland
                      </p>

                      <div className="flex gap-4">
                          <a href="#quotation">
                              <Button variant="default" className="w-40">Contattaci adesso</Button>
                          </a>
                          <a href="#services">
                              <Button variant="ghost" className="w-40">Scopri di più</Button>
                          </a>
                      </div>
                  </div>
                  <div className="col-span-4 flex justify-center">
                      <Image
                          src="/battista_home.png"
                          alt="Battista Trasporti"
                          width={480}
                          height={38}
                          priority
                          className="mt-8"
                      />
                  </div>
              </div>


              <div id="who-we-are" className="px-16 grid grid-cols-12">
                  {/* Who we are */}
                  <div className="col-span-12">
                      <p className="text-5xl font-bold mb-8">Chi siamo</p>
                      <p className="text-gray-600 text-lg leading-[40px]">
                          Cerchi un servizio di trasporto dedicato professionale, sicuro e su misura? <b>Battista
                          Trasporti s.a.s</b> è il tuo partner ideale per spedizioni rapide, precise e personalizzate.
                          Con oltre <b>20 anni di esperienza</b> nel settore e una <b>flotta moderna</b>, garantiamo
                          consegne efficienti nella zona di Milano e hinterland e su necessità supportiamo la consegna
                          in
                          tutta Italia.
                      </p>
                      <Image
                          src="/battista_flotta.png"
                          alt="Battista Trasporti Flotta"
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-full h-auto"
                          priority
                      />
                      <p className="mt-8 text-gray-600 text-lg leading-[40px]">
                          Specializzati in trasporti dedicati per aziende di ogni settore, offriamo servizi
                          door-to-door,
                          gestione
                          urgente delle spedizioni e massima flessibilità per soddisfare ogni tua esigenza logistica. La
                          nostra
                          missione è portare il tuo carico al successo!<br/>
                          Affidati alla professionalità e all’attenzione al dettaglio di Roberto Battista e del suo
                          team.
                          Richiedi subito un preventivo personalizzato: la tua soddisfazione è il nostro obiettivo!
                      </p>
                  </div>
              </div>

              {/* Services */}
              <div id="services" className="p-12 w-full bg-gradient-to-r from-red-500 to-orange-500 grid grid-cols-12">
                  <div className="col-span-12">
                      <p className="text-white text-5xl font-bold mb-8">Servizi</p>

                      <div className="flex flex-wrap gap-6 justify-center">
                          {services.map((service, index) => (
                              <div key={`service-${index}`}
                                   className="sm:w-[23%] bg-white rounded-2xl p-8 flex flex-col gap-4 items-center">
                                  <p className="text-5xl">
                                      {service.icon}
                                  </p>
                                  <p className="text-gray-800 text-lg font-bold text-center">
                                      {service.title}
                                  </p>
                                  <p className="text-gray-600 text-lg text-center">
                                      {service.description}
                                  </p>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>


              {/* Special services */}
              <div className="mt-8 px-16 grid grid-cols-12 gap-8">
                  <div className="col-span-7">
                      <p className="text-5xl font-bold mb-8">Servizi speciali</p>
                      <p className="text-gray-600 text-lg leading-[40px]">
                          Offriamo una vasta gamma di servizi speciali, progettati per rispondere alle esigenze più
                          specifiche dei nostri clienti. Grazie alla collaborazione con partner esperti e affidabili,
                          garantiamo soluzioni logistiche efficienti e sicure. I nostri servizi includono:
                          <ul className="p-4 list-disc">
                              <li>
                                  <i className="font-bold">Trasporti con bilici e mezzi pesanti</i>: ideali per gestire
                                  carichi di grandi dimensioni
                                  e volumi elevati, assicurando puntualità e affidabilità.
                              </li>
                              <li>
                                  <i className="font-bold">Furgoni refrigerati</i>: perfetti per il trasporto a
                                  temperatura controllata di alimenti,
                                  farmaci e altri prodotti deperibili. Manteniamo la catena del freddo intatta durante
                                  ogni spostamento.
                              </li>
                              <li>
                                  <i className="font-bold">Assistenza tecnica al carico e scarico</i>: supporto
                                  qualificato per garantire la massima
                                  cura e sicurezza in ogni fase del trasporto, riducendo al minimo il rischio di danni.
                              </li>
                              <li>
                                  <i className="font-bold">Trasporto merci delicate</i>: soluzioni dedicate per beni
                                  fragili o di alto valore, con un
                                  trattamento personalizzato per ogni esigenza.
                              </li>
                          </ul>

                          Con Battista Trasporti, ogni carico è in mani sicure! 🚛
                      </p>
                  </div>
                  <div className="col-span-5 flex justify-center">
                      <Image
                          src="/battista_servizi_speciali.png"
                          alt="Battista servizi speciali"
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="rounded-2xl mt-12 w-2/3 h-auto"
                          priority
                      />
                  </div>
              </div>

              {/* Contact us */}
              <div id="contact-us" className="w-full mt-8 px-12 grid grid-cols-12 gap-8">
                  <div className="w-full col-span-12">
                      <p className="text-5xl font-bold mb-8">Richiedi preventivo</p>
                      <p className="text-gray-600 text-lg leading-[40px] mb-8">
                          Descrivi le tue necessità, ti contatteremo prima possibile
                      </p>
                      <div className="w-full sm:w-1/2 flex flex-col gap-4">
                          <div className="w-full items-center gap-1.5">
                              <Label htmlFor="name">Nome</Label>
                              <Input
                                  className="w-full"
                                  type="name"
                                  id="name"
                                  placeholder="Inserisci il tuo nome"
                              />
                          </div>
                          <div className="w-full items-center gap-1.5">
                              <Label htmlFor="name">Ragione sociale</Label>
                              <Input
                                  className="w-full"
                                  type="name"
                                  id="company"
                                  placeholder="Inserisci la ragione sociale"
                              />
                          </div>
                          <div className="w-full items-center gap-1.5">
                              <Label htmlFor="name">Email</Label>
                              <Input
                                  className="w-full"
                                  type="email"
                                  id="email"
                                  placeholder="Inserisci la tua email"
                              />
                          </div>
                          <div className="w-full items-center gap-1.5">
                              <Label htmlFor="name">Numero di telefono</Label>
                              <Input
                                  className="w-full"
                                  type="tel"
                                  id="phone"
                                  placeholder="Inserisci il tuo numero di telefono"
                              />
                          </div>
                          <div className="w-full items-center gap-1.5">
                              <Label htmlFor="name">Descrivi la tua necessità</Label>
                              <Textarea
                                  className="w-full"
                                  id="notes"
                                  placeholder="Ho bisogno di trasportare..."
                              />
                          </div>
                          <div className="mt-4 flex gap-8 items-center">
                              <Button variant="default" className="w-60">Invia richiesta</Button>
                              <p>Hai un’esigenza particolare? Parliamone telefonicamente 😉</p>
                          </div>
                      </div>
                  </div>
              </div>
          </main>

          <div className="flex justify-center h-40">
              <Image
                  src="/logo.png"
                  alt="Battista Trasporti logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-40"
                  priority
              />
          </div>
          <footer
              className="p-4 bg-gradient-to-r from-red-500 to-orange-500">
              <div className="text-white w-full flex justify-center text-center leading-[40px]">
                  <div className="col-span-12">
                      <p className="uppercase">
                          Battista Trasporti s.a.s di Roberto Battista & C.
                      </p>
                      <p className="uppercase">
                          Via Felice Cavallotti 134 - 26841 - Casalpusterlengo (LO)
                      </p>
                      <a href="mailto:battistatrasporti1963@gmail.com" className="underline">
                          battistatrasporti1963@gmail.com
                      </a>
                      <a href="tel:+39335453733" className="underline flex justify-center gap-2">
                          <PhoneIcon className="w-6"/>
                          +39 335453733
                      </a>
                  </div>
              </div>
          </footer>
          <div className="w-full px-8 py-4 flex">
              <div className="flex flex-1 gap-4">
                  <Link href="/cookie-policy" className="underline">
                      Cookie Policy
                  </Link>
                  <Link href="/privacy-policy" className="underline">
                      Privacy Policy
                  </Link>
              </div>
              <div>
                  P.IVA 08229920965
              </div>
          </div>
      </div>
  );
}
