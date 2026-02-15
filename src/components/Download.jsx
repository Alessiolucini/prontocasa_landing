import { useEffect, useRef } from 'react';
import './Download.css';

export default function Download() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('download--visible');
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="download" id="download" ref={sectionRef}>
            <div className="download__bg-glow download__bg-glow--1" />
            <div className="download__bg-glow download__bg-glow--2" />

            <div className="container">
                <div className="download__content">
                    <div className="download__text">
                        <div className="download__badge">
                            🎉 Sconto 20% sulla prima riparazione
                        </div>
                        <h2 className="download__title">
                            Pronto a risolvere i<br />
                            problemi di casa?
                        </h2>
                        <p className="download__subtitle">
                            Scarica ProntoCasa gratuitamente e connettiti con i migliori
                            professionisti della tua zona. La prima riparazione è scontata del 20%!
                        </p>

                        <div className="download__actions">
                            <a href="#" className="download__store-btn download__store-btn--primary" id="download-appstore">
                                <svg className="download__store-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                <div className="download__store-text">
                                    <span className="download__store-label">Disponibile su</span>
                                    <span className="download__store-name">App Store</span>
                                </div>
                            </a>
                            <a href="#" className="download__store-btn download__store-btn--primary" id="download-playstore">
                                <svg className="download__store-icon" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 2.65V21.35C4 21.54 4.09 21.72 4.24 21.84L13.13 12L4.24 2.16C4.09 2.28 4 2.46 4 2.65Z" fill="#4BBBF5" />
                                    <path d="M4.24 2.16L13.13 12L16.18 8.65L6.52 3.02C5.94 2.68 5.38 2.54 4.9 2.56C4.62 2.57 4.39 2.66 4.24 2.16Z" fill="#3EAF51" />
                                    <path d="M4.24 21.84C4.39 21.96 4.62 22.05 4.9 22.06C5.38 22.08 5.94 21.94 6.52 21.6L16.18 15.97L13.13 12L4.24 21.84Z" fill="#E84335" />
                                    <path d="M20.05 11.04L16.18 8.65L13.13 12L16.18 15.35L20.05 12.96C20.65 12.6 20.95 12.16 20.95 11.7C20.95 11.24 20.65 10.8 20.05 11.04Z" fill="#FAD405" />
                                </svg>
                                <div className="download__store-text">
                                    <span className="download__store-label">Disponibile su</span>
                                    <span className="download__store-name">Google Play</span>
                                </div>
                            </a>
                        </div>

                        <div className="download__features">
                            <div className="download__feature">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                <span>100% Gratuito</span>
                            </div>
                            <div className="download__feature">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                <span>Pagamenti Sicuri</span>
                            </div>
                            <div className="download__feature">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                <span>Supporto 24/7</span>
                            </div>
                        </div>
                    </div>

                    <div className="download__visual">
                        <img
                            src="/phone-mockup.png"
                            alt="Scarica ProntoCasa"
                            className="download__phone"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
