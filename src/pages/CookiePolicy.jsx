import PageLayout from './PageLayout';

export default function CookiePolicy() {
    return (
        <PageLayout title="Cookie Policy" subtitle="Informativa sull'utilizzo dei cookie sul nostro sito web.">
            <div className="legal-content">
                <p className="legal-updated">Ultimo aggiornamento: 15 Febbraio 2026</p>

                <h2>1. Cosa Sono i Cookie</h2>
                <p>I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. Vengono utilizzati per garantire il funzionamento del sito, migliorare l'esperienza di navigazione e fornire informazioni ai proprietari del sito.</p>

                <h2>2. Cookie Utilizzati</h2>

                <h3>Cookie Tecnici (Necessari)</h3>
                <p>Questi cookie sono essenziali per il funzionamento del sito web e non possono essere disattivati. Includono:</p>
                <ul>
                    <li><strong>Cookie di sessione:</strong> necessari per la navigazione e l'utilizzo delle funzionalità del sito.</li>
                    <li><strong>Cookie di preferenze:</strong> memorizzano le tue preferenze (es. consenso cookie, lingua).</li>
                </ul>

                <h3>Cookie Analitici</h3>
                <p>Questi cookie ci aiutano a capire come i visitatori interagiscono con il sito, raccogliendo informazioni in forma aggregata e anonima. Utilizziamo questi dati per migliorare il sito e i nostri servizi.</p>

                <h3>Cookie di Marketing</h3>
                <p>Questi cookie vengono utilizzati per tracciare i visitatori attraverso i siti web, con lo scopo di mostrare annunci pertinenti e coinvolgenti. Vengono attivati solo con il tuo consenso esplicito.</p>

                <h2>3. Come Gestire i Cookie</h2>
                <p>Puoi gestire le tue preferenze sui cookie in diversi modi:</p>
                <ul>
                    <li><strong>Banner cookie:</strong> al primo accesso al sito, puoi scegliere quali cookie accettare tramite il banner dei cookie.</li>
                    <li><strong>Impostazioni del browser:</strong> puoi configurare il tuo browser per bloccare o eliminare i cookie. Tieni presente che la disattivazione di alcuni cookie potrebbe influire sulla funzionalità del sito.</li>
                </ul>

                <h3>Come Disattivare i Cookie nei Principali Browser</h3>
                <ul>
                    <li><strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
                    <li><strong>Firefox:</strong> Opzioni → Privacy e sicurezza → Cookie e dati dei siti web</li>
                    <li><strong>Safari:</strong> Preferenze → Privacy → Gestisci dati siti web</li>
                    <li><strong>Edge:</strong> Impostazioni → Cookie e autorizzazioni del sito</li>
                </ul>

                <h2>4. Cookie di Terze Parti</h2>
                <p>Il nostro sito potrebbe utilizzare cookie di terze parti per i seguenti servizi:</p>
                <ul>
                    <li><strong>Stripe:</strong> per l'elaborazione sicura dei pagamenti.</li>
                    <li><strong>Google Analytics:</strong> per l'analisi del traffico web (cookie analitici).</li>
                </ul>

                <h2>5. Periodo di Conservazione</h2>
                <p>I cookie tecnici vengono eliminati alla chiusura del browser (cookie di sessione) o dopo un massimo di 12 mesi (cookie persistenti). Il consenso ai cookie viene conservato per 12 mesi.</p>

                <h2>6. Aggiornamenti</h2>
                <p>Questa Cookie Policy può essere aggiornata periodicamente. Ti consigliamo di consultarla regolarmente.</p>

                <h2>7. Contatti</h2>
                <p>Per domande sulla nostra Cookie Policy, contattaci a <a href="mailto:support@prontocasa.net">support@prontocasa.net</a>.</p>
            </div>
        </PageLayout>
    );
}
