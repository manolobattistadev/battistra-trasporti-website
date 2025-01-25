'use client'
import { Resend } from 'resend';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import Navbar from "@/components/navbar";
import {useState} from "react";
import ContactUsFloatingBtn from "@/components/contact-us-floating-btn";
import Footer from "@/components/footer";
import WhatsappFloatingBtn from "@/components/whatsapp-floating-btn";
import Link from "next/link";
import { toast } from 'react-toastify';
import {SubmitHandler, useForm} from "react-hook-form";
import {Spinner} from "@/components/ui/spinner";

type Inputs = {
    name: string
    company: string
    email: string
    phone: string
    notes: string
}


export default function Home() {
  const IS_DEV = process.env.NODE_ENV;
  const [loading, setLoading] = useState<boolean>(false);
  const resend = new Resend('re_1PEDH8Yr_Ee3qycNUeHW15k6w5hC99Zoc');
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: {
            name: IS_DEV ? 'Manolo Battista' : '',
            email: IS_DEV ? 'manolo.battista@gmail.com' : '',
            company: IS_DEV ? 'Arkemis S.r.l.' : '',
            phone: IS_DEV ? '3925173932' : '',
            notes: IS_DEV ? 'Test Website email' : '',
        },
    })

  const services = [
      {icon: '🚚', title: 'Trasporti su misura', description: 'Ogni spedizione è progettata intorno alle tue necessità per settori specifici', url: '/servizi/trasporti-su-misura'},
      {icon: '👗', title: 'Moda', description: 'Da anni siamo specializzati nei servizi moda per il trasporto di abiti appesi', url: '/servizi/moda'},
      {icon: '📷', title: 'Shooting fotografici', description: 'Trasporto sicuro di attrezzature fotografiche, props e materiali di scena.', url: '/servizi/shooting-fotografici'},
      {icon: '🤩', title: 'Trasporto persone', description: 'Trasporto per eventi, garantendo comfort, precisione e affidabilità per ogni spostamento.', url: '/servizi/trasporto-eventi'},
  ];

  const strongPoints = [
      {icon: '⏱️', title: 'Rapidità e puntualità', description: 'Garantiamo consegne rapide e puntuali, rispettando ogni scadenza con precisione e affidabilità'},
      {icon: '🌍', title: 'Copertura estesa', description: 'Operiamo a Milano e su tutto il territorio nazionale'},
      {icon: '🏢', title: 'Door-to-door', description: 'Ritiro e consegna direttamente presso le sedi richieste'},
      {icon: '💎', title: 'Gestione carichi speciali', description: 'Attenzione e cura per merci delicate, ingombranti o preziose'},
  ]


    const onMailRequest: SubmitHandler<Inputs> = (data) => {
        setLoading(true)
        const mailto = "battistatrasporti1963@gmail.com";
        const subject = 'Richiesta preventivo'
        let body = "Ciao Roberto,\r\r{notes}\r\rGrazie,\r{name}\r{phone}\r{email}\r{company}"
        body = body.replace(`{notes}`, data.notes ?? '');
        body = body.replace(`{name}`, data.name?? '');
        body = body.replace(`{phone}`, data.phone?? '');
        body = body.replace(`{email}`, data.email?? '');
        body = body.replace(`{company}`, data.company ?? '');

        try {
            const email = resend.emails.send({
                from: 'Battista Trasporti <noreply@battistatrasporti.it>',
                to: [mailto],
                subject: subject,
                html: encodeURIComponent(body)
            })
            console.log('Email sent successfully:', email);
            reset()
            toast("Abbiamo ricevuto la tua richiesta! Ti contatteremo al più presto.")
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        } catch (error: never) {
            console.error('Failed to send email:', error?.response?.data || error.message);
            toast(`Qualcosa è andato storto! Contattaci telefonicamente o all'indirizzo ${mailto}`)
        } finally {
            setLoading(false)
        }
    }

  return (
      <div className="min-h-screen gap-2">
        <ContactUsFloatingBtn/>
          <Navbar>
              <a href="#who-we-are"
                 aria-label="Chi siamo"
                 className="cursor-pointer text-nowrap">Chi siamo</a>
              <a href="#services"
                 aria-label="Servizi"
                 className="cursor-pointer text-nowrap">Servizi</a>
              <a href="#contact-us"
                 aria-label="Contattaci"
                 className="cursor-pointer text-nowrap">Contattaci</a>
          </Navbar>
          <WhatsappFloatingBtn/>

          <main className="mt-8 flex flex-col gap-8 row-start-2 items-center sm:items-start">
              {/* Intro */}
              <div className="px-8 sm:px-16 py-0 pb-0 grid grid-cols-12 items-center">
                  <div className="col-span-12 sm:col-span-7 flex flex-col gap-4">
                      <h3 className="mt-8 sm:mt-0 text-gray-600 uppercase ml-1">Battista Trasporti s.a.s.</h3>
                      <h1 className="text-4xl md:text-7xl font-bold leading-[50px] md:leading-[100px]">
                          Ritiri e consegne<br/> per Milano e hinterland
                      </h1>
                      <h2 className="text-gray-600 text-lg leading-[40px] sm:w-2/3">
                          Servizi di Trasporto Dedicato su misura in tutta italia: Consegne Veloci,
                          Sicure e Puntuali per Moda, Traslochi e Shooting Fotografici.
                      </h2>

                      <div className="flex gap-4">
                          <a href="#contact-us" aria-label="Contattaci">
                              <Button variant="default" className="w-40">Contattaci adesso</Button>
                          </a>
                          <a href="#services" aria-label="Scopri di più">
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
                      <h3 className="text-5xl font-bold mb-8">Chi siamo</h3>
                      <p className="text-gray-600 text-lg leading-[40px]">
                          Cerchi un servizio di trasporto dedicato professionale, sicuro e su misura? <b>Battista
                          Trasporti s.a.s.</b> è il tuo partner ideale per spedizioni rapide, precise e personalizzate.
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
                          urgente delle spedizioni e <b>massima flessibilità</b> per soddisfare ogni tua esigenza
                          logistica. La
                          nostra
                          missione è portare il tuo carico al successo!<br/>
                          Affidati alla professionalità e all’<b>attenzione al dettaglio</b> di Roberto Battista e del
                          suo
                          team. Richiedi subito un preventivo personalizzato: la tua soddisfazione è il nostro
                          obiettivo!
                      </p>
                  </div>
              </div>

              {/* Services */}
              <div id="services" className="p-12 w-full bg-gradient-to-r from-red-500 to-orange-500 grid grid-cols-12">
                  <div className="col-span-12">
                      <h3 className="text-white text-5xl font-bold mb-8">Servizi</h3>
                      <div className="flex flex-wrap gap-6 justify-center">
                          {services.map((service, index) => (
                              <Link key={`service-${index}`} href={service.url}
                                    className="sm:w-[23%] bg-white rounded-2xl p-8 flex flex-col gap-4 items-center
                                    transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white
                                    ">
                                  <p className="text-5xl">
                                      {service.icon}
                                  </p>
                                  <h4 className="text-gray-800 text-lg font-bold text-center">
                                      {service.title}
                                  </h4>
                                  <p className="text-gray-600 text-lg text-center">
                                      {service.description}
                                  </p>
                                  <Button variant="default" className="w-40">Scopri di più</Button>
                              </Link>
                          ))}
                      </div>
                  </div>
              </div>


              {/* Strong points */}
              <div id="strong-points" className="mt-8 px-12 w-full">
                  <h3 className="text-5xl font-bold mb-8">Punti di forza</h3>
                  <div className="flex flex-wrap gap-6 justify-center">
                      {strongPoints.map((service, index) => (
                          <div key={`strong-points-${index}`}
                               className="sm:w-[23%] bg-white rounded-2xl p-8 flex flex-col gap-4 items-center">
                              <p className="text-5xl">
                                  {service.icon}
                              </p>
                              <h4 className="text-gray-800 text-lg font-bold text-center">
                                  {service.title}
                              </h4>
                              <p className="text-gray-600 text-lg text-center">
                                  {service.description}
                              </p>
                          </div>
                      ))}
                  </div>
              </div>


              {/* Special services */}
              <div className="mt-8 px-8 sm:px-12 sm:grid sm:grid-cols-12 gap-8">
                  <div className="col-span-12 sm:col-span-7">
                      <h3 className="text-5xl font-bold mb-8">Servizi speciali</h3>
                      <p className="text-gray-600 text-lg leading-[40px]">
                          Offriamo una vasta gamma di servizi speciali, progettati per rispondere alle esigenze più
                          specifiche dei nostri clienti. Grazie alla collaborazione con partner esperti e
                          affidabili,
                          garantiamo soluzioni logistiche efficienti e sicure. I nostri servizi includono:
                      </p>
                      <ul className="p-4 list-disc">
                          <li className="text-gray-600">
                              <p className="italic font-bold">Trasporti con bilici e mezzi pesanti:</p> ideali per
                              gestire
                              carichi di grandi dimensioni
                              e volumi elevati, assicurando puntualità e affidabilità.
                          </li>
                          <li className="text-gray-600 mt-2">
                              <p className="italic font-bold">Furgoni dotati di termoregistratori:</p> perfetti
                              per il
                              trasporto
                              sicuro a temperatura controllata fino a -20°C di alimenti, farmaci e altri prodotti
                              deperibili.
                              Manteniamo la catena del freddo intatta durante ogni spostamento.
                          </li>
                          <li className="text-gray-600 mt-2">
                              <p className="font-bold">Assistenza tecnica al carico e scarico:</p> supporto
                              qualificato per garantire la massima
                              cura e sicurezza in ogni fase del trasporto, riducendo al minimo il rischio di danni.
                          </li>
                          <li className="text-gray-600 mt-2">
                              <p className="font-bold">Trasporto merci delicate:</p> soluzioni dedicate per beni
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
                          className="sm:mt-12 rounded-2xl w-auto h-auto max-h-[440px]"
                          priority
                      />
                  </div>
              </div>

              {/* Contact us */}
              <form id="contact-us"  onSubmit={handleSubmit(onMailRequest)} className="w-full mt-8 px-8 sm:px-16">
                  <div className="w-full col-span-12">
                          <p className="text-5xl font-bold mb-8">Richiedi preventivo</p>
                          <p className="text-gray-600 text-lg leading-[40px] mb-8">
                              Descrivi le tue necessità, ti contatteremo prima possibile
                          </p>
                          <div className="w-full sm:w-1/2 flex flex-col gap-4">
                              <div className="w-full items-center gap-1.5">
                                  <Label htmlFor="name">Nome</Label>
                                  <Input
                                      {...register("name", { required: "Il campo nome è obbligario" })}
                                      className="w-full"
                                      type="name"
                                      id="name"
                                      placeholder="Inserisci il tuo nome"
                                  />
                              </div>
                              {errors.name && (
                                  <p className="text-xs text-red-500">
                                      {errors.name.message}
                                  </p>
                              )}
                              <div className="w-full items-center gap-1.5">
                                  <Label htmlFor="name">Ragione sociale</Label>
                                  <Input
                                      {...register("company")}
                                      className="w-full"
                                      type="name"
                                      id="company"
                                      placeholder="Inserisci la ragione sociale"
                                  />
                              </div>
                              {errors.company && (
                                  <p className="text-xs text-red-500">
                                      {errors.company.message}
                                  </p>
                              )}
                              <div className="w-full items-center gap-1.5">
                                  <Label htmlFor="name">Email</Label>
                                  <Input
                                      {...register("email")}
                                      {...register("email", {
                                          required: "Il campo email è obbligario",
                                          pattern: {
                                              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                              message: "L'email non è valida",
                                          },
                                      })}
                                      className="w-full"
                                      type="email"
                                      id="email"
                                      placeholder="Inserisci la tua email"
                                  />
                              </div>
                              {errors.email && (
                                  <p className="text-xs text-red-500">
                                      {errors.email.message}
                                  </p>
                              )}
                              <div className="w-full items-center gap-1.5">
                                  <Label htmlFor="name">Numero di telefono</Label>
                                  <Input
                                      {...register("phone")}
                                      className="w-full"
                                      type="tel"
                                      id="phone"
                                      placeholder="Inserisci il tuo numero di telefono"
                                  />
                              </div>
                              {errors.phone && (
                                  <p className="text-xs text-red-500">
                                      {errors.phone.message}
                                  </p>
                              )}
                              <div className="w-full items-center gap-1.5">
                                  <Label htmlFor="name">Descrivi la tua necessità</Label>
                                  <Textarea
                                      {...register("notes", { required: "Il campo è obbligario" })}
                                      className="w-full"
                                      id="notes"
                                      placeholder="Ho bisogno di trasportare..."
                                  />
                              </div>
                              {errors.notes && (
                                  <p className="text-xs text-red-500">
                                      {errors.notes.message}
                                  </p>
                              )}
                              <div className="mt-4 sm:flex gap-8 items-center">
                                  <Button
                                      type="submit"
                                      disabled={loading}
                                      variant="default" className="w-full sm:w-60"
                                  >
                                      Invia richiesta
                                      {loading && <Spinner size="sm" className="bg-white" />}
                                  </Button>
                                  <p className="mt-4 sm:mt-0">Hai un’esigenza particolare? Parliamone
                                      telefonicamente</p>
                              </div>
                          </div>
                      </div>
              </form>
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
