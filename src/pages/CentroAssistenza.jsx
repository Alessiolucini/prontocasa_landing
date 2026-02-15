import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';

const categories = [
    {
        icon: '🔧', title: 'Gestire un Intervento',
        items: [
            { q: 'Come prenoto un intervento?', a: 'Apri l\'app ProntoCasa, descrivi il problema con foto o testo, e riceverai un preventivo entro pochi minuti.' },
            { q: 'Posso annullare un intervento?', a: 'Sì, puoi annullare gratuitamente fino a 2 ore prima dell\'appuntamento confermato.' },
            { q: 'Come seguo lo stato del mio intervento?', a: 'Nella sezione "I Miei Interventi" dell\'app puoi seguire in tempo reale lo stato del lavoro.' },
        ]
    },
    {
        icon: '💳', title: 'Pagamenti e Fatturazione',
        items: [
            { q: 'Quali metodi di pagamento accettate?', a: 'Accettiamo carte di credito/debito (Visa, Mastercard, American Express) e Apple Pay.' },
            { q: 'Il pagamento è sicuro?', a: 'Sì, utilizziamo Stripe per processare i pagamenti in modo sicuro. I dati della carta non vengono mai salvati sui nostri server.' },
            { q: 'Come ricevo la fattura?', a: 'La fattura viene inviata automaticamente via email dopo il completamento dell\'intervento.' },
        ]
    },
    {
        icon: '👤', title: 'Account e Profilo',
        items: [
            { q: 'Come creo un account?', a: 'Scarica l\'app ProntoCasa e registrati con il tuo numero di telefono o email.' },
            { q: 'Come modifico i miei dati?', a: 'Vai su Profilo > Impostazioni per modificare i tuoi dati personali e l\'indirizzo.' },
            { q: 'Come elimino il mio account?', a: 'Contattaci a support@prontocasa.net e provvederemo alla cancellazione entro 48 ore.' },
        ]
    },
];

export default function CentroAssistenza() {
    return (
        <PageLayout title="Centro Assistenza" subtitle="Trova risposte rapide alle domande più comuni.">
            <div className="page-section">
                <div className="cards-grid">
                    <div className="card" style={{ textAlign: 'center' }}>
                        <div className="card__icon" style={{ margin: '0 auto var(--space-md)' }}>📧</div>
                        <h3 className="card__title">Email</h3>
                        <p className="card__text">
                            <a href="mailto:support@prontocasa.net" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                                support@prontocasa.net
                            </a>
                        </p>
                    </div>
                    <div className="card" style={{ textAlign: 'center' }}>
                        <div className="card__icon" style={{ margin: '0 auto var(--space-md)' }}>💬</div>
                        <h3 className="card__title">Chat In-App</h3>
                        <p className="card__text">Apri l'app e avvia una chat con il nostro team di supporto.</p>
                    </div>
                    <div className="card" style={{ textAlign: 'center' }}>
                        <div className="card__icon" style={{ margin: '0 auto var(--space-md)' }}>📋</div>
                        <h3 className="card__title">Modulo di Contatto</h3>
                        <p className="card__text">
                            <Link to="/contattaci" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Compila il modulo →</Link>
                        </p>
                    </div>
                </div>
            </div>

            {categories.map((cat, i) => (
                <div className="page-section" key={i}>
                    <h2 className="page-section__title">
                        <span className="page-section__title-icon">{cat.icon}</span>
                        {cat.title}
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                        {cat.items.map((item, j) => (
                            <div className="card" key={j}>
                                <h4 className="card__title" style={{ fontSize: 'var(--font-size-base)' }}>{item.q}</h4>
                                <p className="card__text" style={{ marginTop: 'var(--space-sm)' }}>{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div className="page-section">
                <div className="cta-banner">
                    <h2 className="cta-banner__title">Non Hai Trovato la Risposta?</h2>
                    <p className="cta-banner__text">Il nostro team di supporto è disponibile per aiutarti con qualsiasi domanda.</p>
                    <Link to="/contattaci" className="cta-banner__btn">Contattaci →</Link>
                </div>
            </div>
        </PageLayout>
    );
}
