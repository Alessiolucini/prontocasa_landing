import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';

export default function DiventaProfessionista() {
    return (
        <PageLayout title="Diventa Professionista" subtitle="Unisciti alla rete di professionisti ProntoCasa e fai crescere la tua attività.">
            <div className="page-section">
                <h2 className="page-section__title">
                    <span className="page-section__title-icon">🚀</span>
                    Perché Unirti a ProntoCasa?
                </h2>
                <div className="cards-grid">
                    <div className="card">
                        <div className="card__icon">📱</div>
                        <h3 className="card__title">Nuovi Clienti Ogni Giorno</h3>
                        <p className="card__text">Ricevi richieste di lavoro nella tua zona direttamente sull'app. Scegli i lavori che preferisci e gestisci la tua agenda.</p>
                    </div>
                    <div className="card">
                        <div className="card__icon">💳</div>
                        <h3 className="card__title">Pagamenti Sicuri</h3>
                        <p className="card__text">Pagamenti garantiti tramite la piattaforma. Niente più rincorsa ai pagamenti: ricevi il compenso in modo rapido e sicuro.</p>
                    </div>
                    <div className="card">
                        <div className="card__icon">⭐</div>
                        <h3 className="card__title">Costruisci la Tua Reputazione</h3>
                        <p className="card__text">Le recensioni dei clienti ti aiutano a distinguerti. Più lavori completati con successo, più visibilità ottieni.</p>
                    </div>
                    <div className="card">
                        <div className="card__icon">📊</div>
                        <h3 className="card__title">Dashboard Dedicata</h3>
                        <p className="card__text">Gestisci i tuoi lavori, monitora i guadagni e analizza le prestazioni con strumenti professionali integrati.</p>
                    </div>
                    <div className="card">
                        <div className="card__icon">🛡️</div>
                        <h3 className="card__title">Assicurazione Inclusa</h3>
                        <p className="card__text">Ogni intervento prenotato tramite ProntoCasa è coperto dalla nostra assicurazione professionale.</p>
                    </div>
                    <div className="card">
                        <div className="card__icon">🎓</div>
                        <h3 className="card__title">Formazione Gratuita</h3>
                        <p className="card__text">Accedi a corsi e materiali formativi per migliorare le tue competenze e restare aggiornato.</p>
                    </div>
                </div>
            </div>

            <div className="page-section">
                <h2 className="page-section__title">
                    <span className="page-section__title-icon">📋</span>
                    Come Funziona
                </h2>
                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-card__icon">1️⃣</div>
                        <h3 className="value-card__title">Registrati</h3>
                        <p className="value-card__text">Compila il modulo con i tuoi dati e le tue specializzazioni.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-card__icon">2️⃣</div>
                        <h3 className="value-card__title">Verifica</h3>
                        <p className="value-card__text">Il nostro team verifica le tue certificazioni e la tua esperienza.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-card__icon">3️⃣</div>
                        <h3 className="value-card__title">Inizia a Lavorare</h3>
                        <p className="value-card__text">Ricevi le prime richieste e inizia a guadagnare con ProntoCasa.</p>
                    </div>
                </div>
            </div>

            <div className="page-section">
                <div className="cta-banner">
                    <h2 className="cta-banner__title">Pronto a Iniziare?</h2>
                    <p className="cta-banner__text">Unisciti a oltre 500 professionisti che hanno scelto ProntoCasa per far crescere la propria attività.</p>
                    <Link to="/contattaci" className="cta-banner__btn">Contattaci →</Link>
                </div>
            </div>
        </PageLayout>
    );
}
