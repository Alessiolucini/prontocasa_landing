import PageLayout from './PageLayout';

export default function TerminiCondizioni() {
    return (
        <PageLayout title="Termini e Condizioni" subtitle="Condizioni generali di utilizzo del servizio ProntoCasa.">
            <div className="legal-content">
                <p className="legal-updated">Ultimo aggiornamento: 15 Febbraio 2026</p>

                <h2>1. Definizioni</h2>
                <p>"ProntoCasa" si riferisce alla piattaforma (applicazione mobile e sito web) gestita da ProntoCasa S.r.l. "Utente" si riferisce a chiunque utilizzi il servizio. "Professionista" si riferisce agli artigiani e tecnici registrati sulla piattaforma. "Servizio" si riferisce alla connessione tra Utenti e Professionisti per interventi di riparazione e manutenzione domestica.</p>

                <h2>2. Accettazione dei Termini</h2>
                <p>Utilizzando ProntoCasa, accetti integralmente i presenti Termini e Condizioni. Se non accetti, ti preghiamo di non utilizzare il servizio.</p>

                <h2>3. Descrizione del Servizio</h2>
                <p>ProntoCasa è una piattaforma tecnologica che facilita il contatto tra proprietari di case e professionisti per servizi di riparazione e manutenzione domestica. ProntoCasa agisce come intermediario e non esegue direttamente i lavori.</p>

                <h2>4. Registrazione e Account</h2>
                <p>Per utilizzare il servizio è necessario creare un account fornendo informazioni veritiere e aggiornate. L'utente è responsabile della riservatezza delle proprie credenziali di accesso. È vietato creare account multipli o con dati falsi.</p>

                <h2>5. Utilizzo del Servizio</h2>
                <p>L'utente si impegna a:</p>
                <ul>
                    <li>Utilizzare il servizio in modo lecito e in conformità con le leggi vigenti.</li>
                    <li>Fornire informazioni accurate sulla richiesta di intervento.</li>
                    <li>Rispettare gli appuntamenti confermati.</li>
                    <li>Effettuare il pagamento per i servizi ricevuti.</li>
                    <li>Non utilizzare il servizio per scopi fraudolenti o illegali.</li>
                </ul>

                <h2>6. Prenotazione e Cancellazione</h2>
                <p>Le prenotazioni possono essere cancellate gratuitamente fino a 2 ore prima dell'orario confermato dell'intervento. Cancellazioni tardive o mancate presentazioni possono comportare l'applicazione di penali.</p>

                <h2>7. Prezzi e Pagamenti</h2>
                <p>I prezzi indicati nell'app sono preventivi stimati. Il costo finale può variare in base alla complessità effettiva dell'intervento. L'utente verrà informato di eventuali variazioni prima dell'inizio dei lavori. I pagamenti sono processati in modo sicuro tramite Stripe.</p>

                <h2>8. Garanzia e Contestazioni</h2>
                <p>ProntoCasa offre una garanzia di soddisfazione. In caso di problemi con un intervento, l'utente può aprire una contestazione entro 48 ore dal completamento. Il team ProntoCasa medierà tra le parti per trovare una soluzione equa.</p>

                <h2>9. Responsabilità</h2>
                <p>ProntoCasa non è responsabile per:</p>
                <ul>
                    <li>La qualità del lavoro eseguito dai professionisti (pur impegnandosi a verificarne le competenze).</li>
                    <li>Danni derivanti da interventi eseguiti dai professionisti.</li>
                    <li>Interruzioni del servizio dovute a cause di forza maggiore o manutenzione.</li>
                </ul>
                <p>ProntoCasa si impegna a risolvere eventuali problemi attraverso il proprio sistema di contestazione e mediazione.</p>

                <h2>10. Proprietà Intellettuale</h2>
                <p>Tutti i contenuti dell'app e del sito web (testi, grafica, loghi, icone, immagini, software) sono di proprietà di ProntoCasa S.r.l. ed è vietata la riproduzione senza autorizzazione.</p>

                <h2>11. Modifica dei Termini</h2>
                <p>ProntoCasa si riserva il diritto di modificare i presenti Termini in qualsiasi momento. Le modifiche saranno comunicati tramite l'app o via email e saranno effettive dalla data di pubblicazione.</p>

                <h2>12. Legge Applicabile</h2>
                <p>I presenti Termini sono regolati dalla legge italiana. Per qualsiasi controversia sarà competente il foro di residenza del consumatore.</p>

                <h2>13. Contatti</h2>
                <p>Per domande sui Termini e Condizioni, scrivi a <a href="mailto:support@prontocasa.net">support@prontocasa.net</a>.</p>
            </div>
        </PageLayout>
    );
}
