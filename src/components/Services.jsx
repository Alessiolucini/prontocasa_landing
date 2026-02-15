import { useEffect, useRef } from 'react';
import './Services.css';

const services = [
    {
        icon: '🔧',
        title: 'Idraulica',
        description: 'Riparazioni rubinetti, tubature, scarichi e impianti idraulici. Intervento rapido per ogni emergenza.',
        color: '#3b82f6',
    },
    {
        icon: '⚡',
        title: 'Elettricità',
        description: 'Impianti elettrici, prese, interruttori, illuminazione e messa a norma. Sicurezza garantita.',
        color: '#f48c25',
    },
    {
        icon: '🔨',
        title: 'Lavori Generici',
        description: 'Montaggio mobili, piccole riparazioni, manutenzione generale. Il tuttofare di cui hai bisogno.',
        color: '#22c55e',
    },
    {
        icon: '❄️',
        title: 'Climatizzazione',
        description: 'Installazione, manutenzione e riparazione condizionatori e riscaldamento. Comfort tutto l\'anno.',
        color: '#8b5cf6',
    },
    {
        icon: '🎨',
        title: 'Tinteggiatura',
        description: 'Pittura interni ed esterni, decorazioni murali e ripristino pareti. Nuova vita alla tua casa.',
        color: '#ec4899',
    },
    {
        icon: '🚪',
        title: 'Serramenti',
        description: 'Riparazione e installazione porte, finestre, serrature e infissi. Sicurezza e isolamento.',
        color: '#14b8a6',
    },
];

export default function Services() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('services--visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="services" id="services" ref={sectionRef}>
            <div className="container">
                <div className="services__header">
                    <span className="services__label">Servizi</span>
                    <h2 className="services__title">
                        Tutto ciò di cui la tua casa ha <span className="services__accent">bisogno</span>
                    </h2>
                    <p className="services__subtitle">
                        Professionisti verificati e qualificati per ogni tipo di intervento domestico.
                        Prenota in pochi secondi.
                    </p>
                </div>

                <div className="services__grid">
                    {services.map((service, index) => (
                        <div
                            className="services__card"
                            key={index}
                            style={{ '--card-delay': `${index * 0.1}s`, '--card-color': service.color }}
                            id={`service-card-${index}`}
                        >
                            <div className="services__card-icon">
                                {service.icon}
                            </div>
                            <h3 className="services__card-title">{service.title}</h3>
                            <p className="services__card-desc">{service.description}</p>
                            <div className="services__card-arrow">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
