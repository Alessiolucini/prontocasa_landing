import { useEffect, useRef, useState } from 'react';
import './Testimonials.css';

const testimonials = [
    {
        name: 'Maria Rossi',
        role: 'Proprietaria, Milano',
        text: 'ProntoCasa mi ha salvato! Il rubinetto della cucina perdeva alle 10 di sera e in 20 minuti avevo un idraulico a casa. Servizio incredibile!',
        rating: 5,
        color: '#f48c25',
    },
    {
        name: 'Luca Benedetti',
        role: 'Proprietario, Roma',
        text: 'Uso ProntoCasa da mesi ormai. Ogni volta il professionista è puntuale, competente e il prezzo è sempre quello stimato dall\'app. Fantastico!',
        rating: 5,
        color: '#3b82f6',
    },
    {
        name: 'Anna Conti',
        role: 'Inquilina, Firenze',
        text: 'L\'intelligenza artificiale ha riconosciuto subito il problema dal una semplice foto. Il preventivo era preciso e il lavoro perfetto. Consigliatissimo!',
        rating: 5,
        color: '#22c55e',
    },
    {
        name: 'Marco Ferrari',
        role: 'Proprietario, Torino',
        text: 'Finalmente un\'app che funziona davvero. Nessuna attesa infinita, nessun preventivo gonfiato. Il tracking in tempo reale è una chicca!',
        rating: 5,
        color: '#8b5cf6',
    },
    {
        name: 'Sofia Martini',
        role: 'Proprietaria, Napoli',
        text: 'Ho fatto riparare l\'impianto elettrico tramite ProntoCasa. L\'elettricista era certificato e il lavoro è stato impeccabile. Super affidabile!',
        rating: 5,
        color: '#ec4899',
    },
    {
        name: 'Giuseppe Rizzo',
        role: 'Proprietario, Bologna',
        text: 'Servizio eccellente! La cosa che apprezzo di più è il pagamento sicuro tramite app. Nessun rischio, massima trasparenza.',
        rating: 5,
        color: '#14b8a6',
    },
];

export default function Testimonials() {
    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('testimonials--visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="testimonials" id="professionals" ref={sectionRef}>
            <div className="container">
                <div className="testimonials__header">
                    <span className="testimonials__label">Recensioni</span>
                    <h2 className="testimonials__title">
                        Cosa dicono i nostri <span className="testimonials__accent">clienti</span>
                    </h2>
                    <p className="testimonials__subtitle">
                        Migliaia di proprietari di casa si fidano di ProntoCasa ogni giorno.
                    </p>
                </div>

                <div className="testimonials__grid">
                    {testimonials.map((testimonial, index) => (
                        <div
                            className={`testimonials__card ${index === activeIndex ? 'testimonials__card--active' : ''}`}
                            key={index}
                            style={{ '--card-delay': `${index * 0.1}s`, '--card-color': testimonial.color }}
                            onClick={() => setActiveIndex(index)}
                            id={`testimonial-${index}`}
                        >
                            <div className="testimonials__card-stars">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="testimonials__star">★</span>
                                ))}
                            </div>
                            <p className="testimonials__card-text">&ldquo;{testimonial.text}&rdquo;</p>
                            <div className="testimonials__card-author">
                                <div
                                    className="testimonials__card-avatar"
                                    style={{ background: testimonial.color }}
                                >
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="testimonials__card-name">{testimonial.name}</p>
                                    <p className="testimonials__card-role">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="testimonials__dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`testimonials__dot ${index === activeIndex ? 'testimonials__dot--active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Vai alla recensione ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
