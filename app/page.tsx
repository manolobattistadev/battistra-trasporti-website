'use client'
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import Navbar from "@/components/navbar";
import WhatsappIcon from "@/components/whatsapp-icon";
import {useState} from "react";
import ContactUsFloatingBtn from "@/components/contact-us-floating-btn";
import Footer from "@/components/footer";

export default function Home() {
    const [name, setName] = useState<string>("");
    const [company, setCompany] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [notes, setNotes] = useState<string>("");

  const services = [
      {icon: '🚚', title: 'Trasporti su misura', description: 'Ogni spedizione è progettata intorno alle tue necessità'},
      {icon: '👗', title: 'Moda', description: 'Da anni siamo specializzati nei servizi moda'},
      {icon: '📷', title: 'Shooting fotografici', description: 'Trasportiamo attrezzatura fotografica con cura e precisione'},
      {icon: '🔒', title: 'Sicurezza garantita', description: 'Monitoraggio costante e cura massima del tuo carico'},
      {icon: '⏱️', title: 'Rapidità e puntualità', description: 'Ogni spedizione è progettata intorno alle tue necessità'},
      {icon: '🌍', title: 'Copertura estesa', description: 'Operiamo a Milano e su tutto il territorio nazionale'},
      {icon: '🚪', title: 'Door-to-door', description: 'Ritiro e consegna direttamente presso le sedi richieste'},
      {icon: '📦', title: 'Gestione carichi speciali', description: 'Attenzione e cura per merci delicate, ingombranti o preziose'},
      // {icon: '🔄', title: 'Servizi di logistica', description: 'Supporto nella gestione completa della catena di distribuzione'},
  ];

  function onMailRequest(){
      const mailto = "battistatrasporti1963@gmail.com";
      const subject = 'Richiesta preventivo'
      let body = "Ciao Roberto,\r\r{notes}\r\rGrazie,\r{name}\r{phone}\r{email}\r{company}"
      body = body.replace(`{notes}`, notes ?? '');
      body = body.replace(`{name}`, name?? '');
      body = body.replace(`{phone}`, phone?? '');
      body = body.replace(`{email}`, email?? '');
      body = body.replace(`{company}`, company ?? '');
      window.location.href = `mailto:${mailto}?subject=${subject}&body=${encodeURIComponent(body)}`;
  }


  return (
      <div className="min-h-screen gap-2">
        <ContactUsFloatingBtn/>
          <Navbar>
              <a href="#who-we-are" className="cursor-pointer text-nowrap">Chi siamo</a>
              <a href="#services" className="cursor-pointer text-nowrap">Servizi</a>
              <a href="#contact-us" className="cursor-pointer text-nowrap">Contattaci</a>
          </Navbar>
          <div
              className="shadow-xl cursor-pointer fixed bottom-8 right-8 bg-black p-2 px-4 rounded-full text-white flex gap-2">
              <a href="https://wa.me/+39335453733" className="flex gap-4" target="_blank">
                  <WhatsappIcon />
              </a>
          </div>

          <main className="mt-8 flex flex-col gap-8 row-start-2 items-center sm:items-start">
              {/* Intro */}
              <div className="px-8 sm:px-16 py-0 pb-0 grid grid-cols-12 items-center">
                  <div className="col-span-12 sm:col-span-7 flex flex-col gap-4">
                      <h3 className="mt-8 sm:mt-0 text-gray-600 uppercase ml-1">Battista Trasporti s.a.s</h3>
                      <h1 className="text-4xl md:text-7xl font-bold leading-[50px] md:leading-[100px]">
                          Ritiri e consegne<br/> per Milano e hinterland
                      </h1>
                      <h2 className="text-gray-600 text-lg leading-[40px] sm:w-2/3">
                          Servizi di Trasporto Dedicato su misura in tutta italia: Consegne Veloci,
                          Sicure e Puntuali per Moda, Traslochi e Shooting Fotografici.
                      </h2>

                      <div className="flex gap-4">
                          <a href="#contact-us">
                              <Button variant="default" className="w-40">Contattaci adesso</Button>
                          </a>
                          <a href="#services">
                              <Button variant="ghost" className="w-40">Scopri di più</Button>
                          </a>
                      </div>
                  </div>
                  <div className="hidden sm:flex sm:col-span-5 justify-center">
                      <Image
                          src="/battista_home.png"
                          alt="Battista Trasporti"
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-full h-auto"
                          priority
                      />
                  </div>
              </div>


              <div id="who-we-are" className="mt-4 sm:mt-0 px-8 sm:px-16 grid grid-cols-12">
                  {/* Who we are */}
                  <div className="col-span-12">
                      <p className="text-5xl font-bold mb-8">Chi siamo</p>
                      <p className="text-gray-600 text-lg leading-[40px]">
                          Cerchi un servizio di trasporto dedicato professionale, sicuro e su misura? <b>Battista
                          Trasporti s.a.s</b> è il tuo partner ideale per spedizioni rapide, precise e personalizzate.
                          Con oltre <b>30 anni di esperienza</b> nel settore e una <b>flotta moderna</b>, garantiamo
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
                      />
                      <p className="mt-8 text-gray-600 text-lg leading-[40px]">
                          Specializzati in <b>trasporti dedicati</b> per aziende di ogni settore, offriamo servizi
                          door-to-door,
                          gestione
                          urgente delle spedizioni e <b>massima flessibilità</b> per soddisfare ogni tua esigenza logistica. La
                          nostra
                          missione è portare il tuo carico al successo!<br/>
                          Affidati alla professionalità e all’<b>attenzione al dettaglio</b> di Roberto Battista e del suo
                          team. Richiedi subito un preventivo personalizzato: la tua soddisfazione è il nostro obiettivo!
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
              <div className="mt-8 px-8 sm:px-16 sm:grid sm:grid-cols-12 gap-8">
                  <div className="col-span-12 sm:col-span-7">
                      <p className="text-5xl font-bold mb-8">Servizi speciali</p>
                      <p className="text-gray-600 text-lg leading-[40px]">
                          Offriamo una vasta gamma di servizi speciali, progettati per rispondere alle esigenze più
                          specifiche dei nostri clienti. Grazie alla collaborazione con partner esperti e affidabili,
                          garantiamo soluzioni logistiche efficienti e sicure. I nostri servizi includono:
                      </p>
                      <ul className="p-4 list-disc">
                          <li className="text-gray-600">
                              <i className="font-bold">Trasporti con bilici e mezzi pesanti</i>: ideali per gestire
                              carichi di grandi dimensioni
                              e volumi elevati, assicurando puntualità e affidabilità.
                          </li>
                          <li className="text-gray-600 mt-2">
                              <i className="font-bold">Furgoni dotati di termoregistratori:</i>: perfetti per il trasporto
                              sicuro a temperatura controllata fino a -20°C di alimenti, farmaci e altri prodotti deperibili.
                              Manteniamo la catena del freddo intatta durante ogni spostamento.
                          </li>
                          <li className="text-gray-600 mt-2">
                              <i className="font-bold">Assistenza tecnica al carico e scarico</i>: supporto
                              qualificato per garantire la massima
                              cura e sicurezza in ogni fase del trasporto, riducendo al minimo il rischio di danni.
                          </li>
                          <li className="text-gray-600 mt-2">
                              <i className="font-bold">Trasporto merci delicate</i>: soluzioni dedicate per beni
                              fragili o di alto valore, con un
                              trattamento personalizzato per ogni esigenza.
                          </li>
                      </ul>

                      <p>Con Battista Trasporti, ogni carico è in mani sicure! 🚛</p>
                  </div>
                  <div className="hidden sm:flex sm:col-span-5 justify-center">
                      <Image
                          src="/battista_servizi_speciali.png"
                          alt="Battista servizi speciali"
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="rounded-2xl w-2/3 h-auto max-h-[460px]"
                          priority
                      />
                  </div>
              </div>

              {/* Contact us */}
              <div id="contact-us" className="w-full mt-8 px-8 sm:px-16">
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
                                  onChange={(e) => setName(e.target.value)}
                              />
                          </div>
                          <div className="w-full items-center gap-1.5">
                              <Label htmlFor="name">Ragione sociale</Label>
                              <Input
                                  className="w-full"
                                  type="name"
                                  id="company"
                                  onChange={(e) => setCompany(e.target.value)}
                                  placeholder="Inserisci la ragione sociale"
                              />
                          </div>
                          <div className="w-full items-center gap-1.5">
                              <Label htmlFor="name">Email</Label>
                              <Input
                                  className="w-full"
                                  type="email"
                                  id="email"
                                  onChange={(e) => setEmail(e.target.value)}
                                  placeholder="Inserisci la tua email"
                              />
                          </div>
                          <div className="w-full items-center gap-1.5">
                              <Label htmlFor="name">Numero di telefono</Label>
                              <Input
                                  className="w-full"
                                  type="tel"
                                  id="phone"
                                  onChange={(e) => setPhone(e.target.value)}
                                  placeholder="Inserisci il tuo numero di telefono"
                              />
                          </div>
                          <div className="w-full items-center gap-1.5">
                              <Label htmlFor="name">Descrivi la tua necessità</Label>
                              <Textarea
                                  className="w-full"
                                  id="notes"
                                  onChange={(e) => setNotes(e.target.value)}
                                  placeholder="Ho bisogno di trasportare..."
                              />
                          </div>
                          <div className="mt-4 sm:flex gap-8 items-center">
                              <Button variant="default" className="w-full sm:w-60"
                              onClick={() => onMailRequest()}>Invia richiesta</Button>
                              <p className="mt-4 sm:mt-0">Hai un’esigenza particolare? Parliamone telefonicamente 😉</p>
                          </div>
                      </div>
                  </div>
              </div>
          </main>

          <div className="flex justify-center mt-12 h-40">
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
          <Footer/>
      </div>
  );
}
