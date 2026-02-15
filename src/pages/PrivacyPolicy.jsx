import PageLayout from './PageLayout';

export default function PrivacyPolicy() {
    return (
        <PageLayout title="Privacy Policy" subtitle="Informativa sul trattamento dei dati personali ai sensi del GDPR.">
            <div className="legal-content">
                <p className="legal-updated">Ultimo aggiornamento: 15 Febbraio 2026</p>

                <h2>1. Titolare del Trattamento</h2>
                <p>Il titolare del trattamento dei dati personali è ProntoCasa S.r.l., con sede in Italia. Per qualsiasi domanda relativa al trattamento dei tuoi dati, puoi contattarci all'indirizzo <a href="mailto:support@prontocasa.net">support@prontocasa.net</a>.</p>

                <h2>2. Dati Raccolti</h2>
                <p>Raccogliamo le seguenti categorie di dati personali:</p>
                <ul>
                    <li><strong>Dati di registrazione:</strong> nome, cognome, indirizzo email, numero di telefono.</li>
                    <li><strong>Dati di localizzazione:</strong> indirizzo di intervento, geolocalizzazione (con il tuo consenso).</li>
                    <li><strong>Dati di pagamento:</strong> informazioni della carta di credito/debito (gestite da Stripe, non conservate sui nostri server).</li>
                    <li><strong>Dati di utilizzo:</strong> informazioni sull'utilizzo dell'app, preferenze, cronologia interventi.</li>
                    <li><strong>Dati tecnici:</strong> indirizzo IP, tipo di dispositivo, sistema operativo, dati di navigazione.</li>
                </ul>

                <h2>3. Finalità del Trattamento</h2>
                <p>I tuoi dati vengono trattati per le seguenti finalità:</p>
                <ol>
                    <li>Fornitura del servizio di connessione con professionisti per riparazioni domestiche.</li>
                    <li>Gestione del tuo account e delle prenotazioni.</li>
                    <li>Elaborazione dei pagamenti.</li>
                    <li>Comunicazioni relative al servizio (conferme, aggiornamenti, notifiche).</li>
                    <li>Miglioramento del servizio e analisi statistiche aggregate.</li>
                    <li>Invio di comunicazioni marketing (solo con il tuo consenso esplicito).</li>
                </ol>

                <h2>4. Base Giuridica</h2>
                <p>Il trattamento dei tuoi dati si basa su:</p>
                <ul>
                    <li><strong>Esecuzione del contratto:</strong> per fornirti il servizio richiesto.</li>
                    <li><strong>Consenso:</strong> per marketing e geolocalizzazione.</li>
                    <li><strong>Interesse legittimo:</strong> per migliorare il servizio e prevenire frodi.</li>
                    <li><strong>Obbligo legale:</strong> per adempiere a obblighi di legge.</li>
                </ul>

                <h2>5. Condivisione dei Dati</h2>
                <p>I tuoi dati possono essere condivisi con:</p>
                <ul>
                    <li><strong>Professionisti:</strong> limitatamente ai dati necessari per eseguire l'intervento (nome, indirizzo, descrizione del problema).</li>
                    <li><strong>Fornitori di servizi:</strong> Stripe (pagamenti), servizi di hosting e analitici.</li>
                    <li><strong>Autorità:</strong> quando richiesto dalla legge.</li>
                </ul>
                <p>Non vendiamo mai i tuoi dati personali a terzi.</p>

                <h2>6. Conservazione dei Dati</h2>
                <p>I dati personali vengono conservati per il tempo necessario alle finalità per cui sono stati raccolti e comunque non oltre i termini previsti dalla normativa vigente. I dati dell'account vengono eliminati entro 30 giorni dalla richiesta di cancellazione.</p>

                <h2>7. I Tuoi Diritti</h2>
                <p>In conformità al GDPR, hai il diritto di:</p>
                <ul>
                    <li>Accedere ai tuoi dati personali.</li>
                    <li>Rettificare dati inesatti o incompleti.</li>
                    <li>Cancellare i tuoi dati ("diritto all'oblio").</li>
                    <li>Limitare il trattamento dei tuoi dati.</li>
                    <li>Portabilità dei dati.</li>
                    <li>Opporti al trattamento.</li>
                    <li>Revocare il consenso in qualsiasi momento.</li>
                </ul>
                <p>Per esercitare i tuoi diritti, scrivi a <a href="mailto:support@prontocasa.net">support@prontocasa.net</a>.</p>

                <h2>8. Cookie</h2>
                <p>Per informazioni sull'utilizzo dei cookie, consulta la nostra <a href="/cookie-policy">Cookie Policy</a>.</p>

                <h2>9. Sicurezza</h2>
                <p>Adottiamo misure tecniche e organizzative adeguate per proteggere i tuoi dati personali da accessi non autorizzati, perdita o distruzione. Utilizziamo connessioni criptate (HTTPS/TLS) e i dati di pagamento sono gestiti da Stripe in conformità agli standard PCI-DSS.</p>

                <h2>10. Modifiche alla Privacy Policy</h2>
                <p>Ci riserviamo il diritto di modificare questa informativa. In caso di modifiche sostanziali, ti avviseremo tramite l'app o via email.</p>

                <h2>11. Contatti</h2>
                <p>Per qualsiasi domanda relativa alla privacy, contattaci a <a href="mailto:support@prontocasa.net">support@prontocasa.net</a>.</p>
            </div>
        </PageLayout>
    );
}
