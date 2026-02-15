import { useEffect, useRef } from 'react';
import './HowItWorks.css';

const steps = [
    {
        number: '01',
        title: 'Scatta una Foto',
        description: 'Fotografa il problema. La nostra AI lo analizzerà automaticamente e identificherà il tipo di intervento necessario.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
                <circle cx="12" cy="13" r="4" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Ricevi il Preventivo',
        description: 'In pochi secondi riceverai un preventivo preciso basato sull\'analisi AI. Nessuna sorpresa, prezzi trasparenti.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Professionista Assegnato',
        description: 'Un professionista verificato e più vicino a te viene assegnato immediatamente. Traccialo in tempo reale sulla mappa.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        ),
    },
    {
        number: '04',
        title: 'Problema Risolto!',
        description: 'Il professionista arriva e risolve il problema. Pagamento sicuro tramite l\'app. Semplice e veloce!',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
        ),
    },
];

export default function HowItWorks() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('how--visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="how" id="how-it-works" ref={sectionRef}>
            <div className="container">
                <div className="how__header">
                    <span className="how__label">Come Funziona</span>
                    <h2 className="how__title">
                        Semplice come <span className="how__accent">1, 2, 3, 4</span>
                    </h2>
                    <p className="how__subtitle">
                        Dal problema alla soluzione in pochi minuti. Nessuna complicazione.
                    </p>
                </div>

                <div className="how__steps">
                    {steps.map((step, index) => (
                        <div
                            className="how__step"
                            key={index}
                            style={{ '--step-delay': `${index * 0.15}s` }}
                            id={`step-${index}`}
                        >
                            <div className="how__step-number">{step.number}</div>
                            <div className="how__step-icon">{step.icon}</div>
                            <h3 className="how__step-title">{step.title}</h3>
                            <p className="how__step-desc">{step.description}</p>
                            {index < steps.length - 1 && (
                                <div className="how__step-connector">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Coverage Section - inspired by Stitch design */}
                <div className="how__coverage">
                    <div className="how__coverage-badge">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>Copertura in tutta Italia</span>
                    </div>
                    <p className="how__coverage-text">
                        Dalle grandi città ai piccoli centri, la nostra rete di professionisti certificati
                        è pronta ad intervenire in meno di 2 ore per le emergenze.
                    </p>
                    <div className="how__coverage-stats">
                        <div className="how__coverage-stat">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="13 17 18 12 13 7" />
                                <polyline points="6 17 11 12 6 7" />
                            </svg>
                            <span>Interventi Rapidi</span>
                        </div>
                        <div className="how__coverage-stat">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                <polyline points="9 12 11 14 15 10" />
                            </svg>
                            <span>Esperti Certificati</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
