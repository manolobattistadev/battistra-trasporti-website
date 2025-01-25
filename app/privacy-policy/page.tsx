'use client'
import Navbar from "@/components/navbar";
import ContactUsFloatingBtn from "@/components/contact-us-floating-btn";
import Footer from "@/components/footer";
import WhatsappFloatingBtn from "@/components/whatsapp-floating-btn";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
      <div className="min-h-screen gap-2">
        <ContactUsFloatingBtn/>
          <Navbar>
              <Link href="/" className="cursor-pointer text-nowrap">Torna alla Home</Link>
          </Navbar>
          <WhatsappFloatingBtn/>

          <main className="my-8 flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div id="privacy-policy" className="mt-4 sm:mt-0 px-8 sm:px-16 grid grid-cols-12">
              {/* Privacy */}
              <div className="col-span-12 leading-[52px]">
                  <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>
                  <p>Questa Privacy Policy descrive come raccogliamo, utilizziamo e proteggiamo i dati personali dei
                      visitatori del nostro sito web <strong>Battista Trasporti s.a.s.</strong>.</p>

                  <h2>1. Informazioni raccolte</h2>
                  <p>Raccogliamo i seguenti tipi di informazioni:</p>
                  <ul>
                      <li><strong>Informazioni fornite dall&apos;utente:</strong> Nome, email, numero di telefono e
                          altri
                          dati forniti volontariamente attraverso i moduli di contatto o registrazione.
                      </li>
                      <li><strong>Dati di navigazione:</strong> Informazioni raccolte automaticamente, come indirizzo
                          IP, tipo di browser, pagine visitate e tempi di permanenza.
                      </li>
                  </ul>

                  <h2>2. Finalità del trattamento</h2>
                  <p>Utilizziamo i dati raccolti per:</p>
                  <ul>
                      <li>Fornire i nostri servizi e rispondere alle richieste degli utenti.</li>
                      <li>Migliorare il sito web e l&apos;esperienza di navigazione.</li>
                      <li>Inviare comunicazioni commerciali, previo consenso esplicito.</li>
                  </ul>

                  <h2>3. Base giuridica del trattamento</h2>
                  <p>Il trattamento dei dati personali è basato su:</p>
                  <ul>
                      <li>L&apos;esecuzione di un contratto o di misure precontrattuali richieste
                          dall&apos;interessato.
                      </li>
                      <li>Il consenso esplicito dell&apos;utente.</li>
                      <li>Il rispetto di obblighi legali.</li>
                  </ul>

                  <h2>4. Condivisione dei dati</h2>
                  <p>Non condividiamo i tuoi dati personali con terze parti, salvo quando necessario per fornire i
                      nostri servizi o rispettare obblighi di legge.</p>

                  <h2>5. Conservazione dei dati</h2>
                  <p>I dati personali vengono conservati per il tempo necessario a soddisfare le finalità per cui sono
                      stati raccolti, salvo diversamente richiesto dalla legge.</p>

                  <h2>6. Diritti degli interessati</h2>
                  <p>In conformità al Regolamento Generale sulla Protezione dei Dati (GDPR), hai il diritto di:</p>
                  <ul>
                      <li>Accedere ai tuoi dati personali.</li>
                      <li>Richiedere la rettifica o la cancellazione dei dati.</li>
                      <li>Opporsi al trattamento o richiederne la limitazione.</li>
                      <li>Richiedere la portabilità dei dati.</li>
                      <li>Presentare un reclamo all&apos;autorità di controllo.</li>
                  </ul>

                  <h2>7. Contatti</h2>
                  <p>Per qualsiasi domanda sulla presente Privacy Policy o per esercitare i tuoi diritti, puoi
                      contattarci a:</p>
                  <p>
                      <strong>Email:</strong> <a
                      href="mailto:battistatrasporti1963@gmail.com">battistatrasporti1963@gmail.com</a><br/>
                      <strong>Telefono:</strong> +39 335 353733<br/>
                      <strong>Indirizzo:</strong> Via Felice Cavallotti, 134 - 26841 - Casalpusterlengo (LO)
                  </p>

                  <h2>8. Modifiche alla Privacy Policy</h2>
                  <p>Ci riserviamo il diritto di aggiornare questa Privacy Policy in qualsiasi momento. Eventuali
                      modifiche saranno pubblicate su questa pagina con una data di aggiornamento.</p>

                  <p><em>Ultimo aggiornamento: {new Date().getFullYear()}</em></p>
              </div>
          </div>
          </main>

          <Footer/>
      </div>
  );
}
