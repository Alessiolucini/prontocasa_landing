import PageLayout from './PageLayout';

const reviews = [
    { name: 'Marco R.', city: 'Milano', rating: 5, service: 'Idraulica', text: 'Servizio eccezionale! Il professionista è arrivato in 20 minuti e ha risolto il problema del rubinetto in poco tempo. Prezzi trasparenti e lavoro impeccabile.', date: 'Gennaio 2026' },
    { name: 'Laura B.', city: 'Roma', rating: 5, service: 'Elettricità', text: 'Avevo un problema elettrico urgente e ProntoCasa mi ha trovato un elettricista disponibile in meno di un\'ora. Professionale e cortese. Consigliatissimo!', date: 'Gennaio 2026' },
    { name: 'Giuseppe M.', city: 'Napoli', rating: 5, service: 'Lavori Generici', text: 'Ho usato ProntoCasa per montare dei mobili e riparare una porta. Il tuttofare era competente e ha lasciato tutto pulito. Ottima esperienza.', date: 'Dicembre 2025' },
    { name: 'Francesca L.', city: 'Torino', rating: 4, service: 'Climatizzazione', text: 'Buon servizio per la manutenzione del climatizzatore. Il tecnico era preparato e ha spiegato tutto in modo chiaro. Unica nota: i tempi di attesa un po\' lunghi.', date: 'Dicembre 2025' },
    { name: 'Andrea P.', city: 'Firenze', rating: 5, service: 'Tinteggiatura', text: 'Fantastico! Il pittore ha fatto un lavoro perfetto. La casa sembra nuova. Ho già prenotato un altro intervento per la cameretta dei bambini.', date: 'Novembre 2025' },
    { name: 'Chiara S.', city: 'Bologna', rating: 5, service: 'Idraulica', text: 'Perdita al bagno risolta in 30 minuti. Il professionista era gentilissimo e il prezzo era esattamente quello del preventivo. Top!', date: 'Novembre 2025' },
];

function StarRating({ rating }) {
    return (
        <div className="review-stars">
            {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: i < rating ? '#f48c25' : '#ddd', fontSize: '1.1rem' }}>★</span>
            ))}
        </div>
    );
}

export default function Recensioni() {
    return (
        <PageLayout title="Recensioni" subtitle="Scopri cosa pensano i nostri clienti del servizio ProntoCasa.">
            <div className="page-section">
                <div className="values-grid" style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
                    <div className="value-card">
                        <div className="value-card__icon">4.9 ⭐</div>
                        <h3 className="value-card__title">Valutazione Media</h3>
                        <p className="value-card__text">Basata su oltre 3.000 recensioni</p>
                    </div>
                    <div className="value-card">
                        <div className="value-card__icon">98%</div>
                        <h3 className="value-card__title">Clienti Soddisfatti</h3>
                        <p className="value-card__text">Raccomanderebbe ProntoCasa</p>
                    </div>
                    <div className="value-card">
                        <div className="value-card__icon">10.000+</div>
                        <h3 className="value-card__title">Interventi Completati</h3>
                        <p className="value-card__text">In tutta Italia</p>
                    </div>
                </div>
            </div>

            <div className="page-section">
                <h2 className="page-section__title">
                    <span className="page-section__title-icon">💬</span>
                    Ultime Recensioni
                </h2>
                <div className="cards-grid">
                    {reviews.map((review, i) => (
                        <div className="card" key={i}>
                            <StarRating rating={review.rating} />
                            <p className="card__text" style={{ margin: 'var(--space-md) 0', fontStyle: 'italic' }}>"{review.text}"</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'var(--space-md)' }}>
                                <div>
                                    <strong style={{ color: 'var(--color-text-primary)' }}>{review.name}</strong>
                                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{review.city} · {review.service}</div>
                                </div>
                                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{review.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
}
