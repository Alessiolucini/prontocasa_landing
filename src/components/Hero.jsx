import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('hero--visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="hero" id="hero" ref={sectionRef}>
            {/* Decorative elements */}
            <div className="hero__bg-circle hero__bg-circle--1" />
            <div className="hero__bg-circle hero__bg-circle--2" />
            <div className="hero__bg-dot hero__bg-dot--1" />
            <div className="hero__bg-dot hero__bg-dot--2" />
            <div className="hero__bg-dot hero__bg-dot--3" />

            <div className="hero__container container">
                <div className="hero__content">
                    <div className="hero__badge">
                        <span className="hero__badge-dot" />
                        Ora disponibile in tutta Italia
                    </div>

                    <h1 className="hero__title">
                        Ripara la tua Casa<br />
                        in <span className="hero__highlight">Minuti.</span>
                    </h1>

                    <p className="hero__subtitle">
                        Non lasciare che un rubinetto che perde rovini la tua giornata.
                        Connettiti con idraulici, elettricisti e tuttofare di fiducia
                        della tua zona, istantaneamente con un solo tap.
                    </p>

                    <div className="hero__actions">
                        <a href="#" className="hero__store-btn" id="appstore-btn">
                            <svg className="hero__store-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            <div className="hero__store-text">
                                <span className="hero__store-label">Disponibile su</span>
                                <span className="hero__store-name">App Store</span>
                            </div>
                        </a>
                        <a href="#" className="hero__store-btn" id="playstore-btn">
                            <svg className="hero__store-icon" viewBox="0 0 24 24" fill="none">
                                <path d="M4 2.65V21.35C4 21.54 4.09 21.72 4.24 21.84L13.13 12L4.24 2.16C4.09 2.28 4 2.46 4 2.65Z" fill="#4BBBF5" />
                                <path d="M4.24 2.16L13.13 12L16.18 8.65L6.52 3.02C5.94 2.68 5.38 2.54 4.9 2.56C4.62 2.57 4.39 2.66 4.24 2.16Z" fill="#3EAF51" />
                                <path d="M4.24 21.84C4.39 21.96 4.62 22.05 4.9 22.06C5.38 22.08 5.94 21.94 6.52 21.6L16.18 15.97L13.13 12L4.24 21.84Z" fill="#E84335" />
                                <path d="M20.05 11.04L16.18 8.65L13.13 12L16.18 15.35L20.05 12.96C20.65 12.6 20.95 12.16 20.95 11.7C20.95 11.24 20.65 10.8 20.05 11.04Z" fill="#FAD405" />
                            </svg>
                            <div className="hero__store-text">
                                <span className="hero__store-label">Disponibile su</span>
                                <span className="hero__store-name">Google Play</span>
                            </div>
                        </a>
                    </div>

                    <div className="hero__social-proof">
                        <div className="hero__avatars">
                            <div className="hero__avatar" style={{ background: '#f48c25' }}>M</div>
                            <div className="hero__avatar" style={{ background: '#3b82f6' }}>L</div>
                            <div className="hero__avatar" style={{ background: '#22c55e' }}>A</div>
                        </div>
                        <span className="hero__trust-text">
                            Scelto da <strong>10.000+</strong> proprietari di casa
                        </span>
                    </div>
                </div>

                <div className="hero__visual">
                    <div className="hero__phone-wrapper">
                        <img
                            src="/phone-mockup.png"
                            alt="ProntoCasa App - Traccia i professionisti in tempo reale"
                            className="hero__phone-img"
                        />
                        <div className="hero__phone-glow" />
                    </div>
                </div>
            </div>

            {/* Trust bar */}
            <div className="hero__trust-bar">
                <div className="container">
                    <p className="hero__trust-title">SCELTO DAI MIGLIORI</p>
                    <div className="hero__trust-logos">
                        <span className="hero__trust-logo">🏠 ImmobiliSicuri</span>
                        <span className="hero__trust-logo">🛡️ CasaProtetta</span>
                        <span className="hero__trust-logo">⭐ QualitàCasa</span>
                        <span className="hero__trust-logo">✅ CertCasa</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
