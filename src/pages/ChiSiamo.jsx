import PageLayout from './PageLayout';

export default function ChiSiamo() {
    return (
        <PageLayout title="Chi Siamo" subtitle="Scopri la storia, la missione e il team dietro ProntoCasa.">
            <div className="page-section">
                <h2 className="page-section__title">
                    <span className="page-section__title-icon">🏠</span>
                    La Nostra Storia
                </h2>
                <div className="page-section__text">
                    <p>
                        ProntoCasa nasce dall'idea di rendere le riparazioni domestiche <strong>semplici, veloci e affidabili</strong>.
                        Stanchi di perdere ore a cercare professionisti di fiducia, abbiamo creato una piattaforma che connette
                        proprietari di casa con gli artigiani migliori della zona, in pochi tap.
                    </p>
                    <p>
                        Fondata nel 2024, ProntoCasa è rapidamente diventata il punto di riferimento per le riparazioni
                        domestiche in Italia, servendo migliaia di clienti soddisfatti in tutte le principali città.
                    </p>
                </div>
            </div>

            <div className="page-section">
                <h2 className="page-section__title">
                    <span className="page-section__title-icon">🎯</span>
                    La Nostra Missione
                </h2>
                <div className="page-section__text">
                    <p>
                        La nostra missione è eliminare lo stress delle riparazioni domestiche. Crediamo che tutti
                        meritino un servizio professionale, trasparente e a portata di mano. Per questo, ogni
                        professionista sulla nostra piattaforma è <strong>verificato, assicurato e recensito</strong> dalla comunità.
                    </p>
                </div>
            </div>

            <div className="page-section">
                <h2 className="page-section__title">
                    <span className="page-section__title-icon">💡</span>
                    I Nostri Valori
                </h2>
                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-card__icon">⚡</div>
                        <h3 className="value-card__title">Rapidità</h3>
                        <p className="value-card__text">Interventi in tempi record. I nostri professionisti arrivano quando ne hai bisogno.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-card__icon">🛡️</div>
                        <h3 className="value-card__title">Affidabilità</h3>
                        <p className="value-card__text">Tutti i professionisti sono verificati, assicurati e con esperienza certificata.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-card__icon">💰</div>
                        <h3 className="value-card__title">Trasparenza</h3>
                        <p className="value-card__text">Prezzi chiari e preventivi prima dell'intervento. Nessuna sorpresa.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-card__icon">❤️</div>
                        <h3 className="value-card__title">Cliente al Centro</h3>
                        <p className="value-card__text">Supporto dedicato e garanzia di soddisfazione su ogni intervento.</p>
                    </div>
                </div>
            </div>

            <div className="page-section">
                <h2 className="page-section__title">
                    <span className="page-section__title-icon">📊</span>
                    I Numeri di ProntoCasa
                </h2>
                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-card__icon" style={{ fontSize: '2.5rem' }}>10.000+</div>
                        <h3 className="value-card__title">Clienti Soddisfatti</h3>
                        <p className="value-card__text">Famiglie che si fidano di noi per le loro riparazioni.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-card__icon" style={{ fontSize: '2.5rem' }}>500+</div>
                        <h3 className="value-card__title">Professionisti Verificati</h3>
                        <p className="value-card__text">Artigiani esperti pronti a intervenire nella tua zona.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-card__icon" style={{ fontSize: '2.5rem' }}>15 min</div>
                        <h3 className="value-card__title">Tempo Medio di Risposta</h3>
                        <p className="value-card__text">Dal primo contatto alla conferma dell'intervento.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-card__icon" style={{ fontSize: '2.5rem' }}>4.9 ⭐</div>
                        <h3 className="value-card__title">Valutazione Media</h3>
                        <p className="value-card__text">Basata su migliaia di recensioni verificate.</p>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
