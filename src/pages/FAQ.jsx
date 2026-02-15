import { useState } from 'react';
import PageLayout from './PageLayout';

const faqs = [
    { q: 'Cos\'è ProntoCasa?', a: 'ProntoCasa è un\'applicazione che ti connette istantaneamente con professionisti verificati per riparazioni e manutenzione della casa. Idraulici, elettricisti, tuttofare e molto altro, a portata di tap.' },
    { q: 'Come funziona il servizio?', a: 'È semplicissimo: apri l\'app, descrivi il problema (anche con foto), ricevi un preventivo immediato dall\'IA, conferma l\'intervento e traccia l\'arrivo del professionista in tempo reale.' },
    { q: 'I professionisti sono verificati?', a: 'Sì, ogni professionista sulla nostra piattaforma supera un rigoroso processo di verifica che include controllo dei documenti, certificazioni professionali, referenze e assicurazione.' },
    { q: 'Quanto costa il servizio?', a: 'L\'app è gratuita da scaricare e usare. Paghi solo per l\'intervento effettuato. I prezzi sono trasparenti e ricevi sempre un preventivo prima di confermare.' },
    { q: 'Posso scegliere il professionista?', a: 'Il nostro algoritmo ti assegna il professionista più adatto e vicino disponibile. Puoi vedere il suo profilo, le recensioni e la valutazione prima di confermare.' },
    { q: 'Cosa succede se non sono soddisfatto?', a: 'La tua soddisfazione è la nostra priorità. Se non sei soddisfatto dell\'intervento, puoi aprire una contestazione entro 48 ore e il nostro team medierà per trovare una soluzione.' },
    { q: 'In quali città è disponibile ProntoCasa?', a: 'ProntoCasa è attualmente disponibile in tutta Italia, con copertura nelle principali città e aree urbane. Stiamo espandendo continuamente la nostra rete.' },
    { q: 'Come posso pagare?', a: 'Accettiamo carte di credito/debito (Visa, Mastercard, American Express) e Apple Pay. Il pagamento avviene in modo sicuro tramite Stripe dopo il completamento dell\'intervento.' },
    { q: 'Posso prenotare un intervento per una data specifica?', a: 'Sì, puoi scegliere una data e fascia oraria che preferisci durante la prenotazione. Il professionista confermerà la disponibilità.' },
    { q: 'Come contatto il supporto?', a: 'Puoi contattarci via email a support@prontocasa.net, tramite la chat in-app, o compilando il modulo nella pagina Contattaci. Rispondiamo entro 24 ore.' },
];

function FaqItem({ faq }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
            <button className="faq-question" onClick={() => setOpen(!open)}>
                {faq.q}
                <span className="faq-icon">+</span>
            </button>
            {open && <div className="faq-answer">{faq.a}</div>}
        </div>
    );
}

export default function FAQ() {
    return (
        <PageLayout title="FAQ" subtitle="Domande frequenti su ProntoCasa e il nostro servizio.">
            <div className="page-section">
                <div className="faq-list">
                    {faqs.map((faq, i) => (
                        <FaqItem faq={faq} key={i} />
                    ))}
                </div>
            </div>
        </PageLayout>
    );
}
