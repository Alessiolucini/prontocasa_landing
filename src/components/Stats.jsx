import { useEffect, useRef, useState } from 'react';
import './Stats.css';

const stats = [
    {
        value: 10000, suffix: '+', label: 'Clienti Soddisfatti',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
    },
    {
        value: 500, suffix: '+', label: 'Professionisti Verificati',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
            </svg>
        ),
    },
    {
        value: 4.9, suffix: '', label: 'Valutazione Media', isDecimal: true,
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0.5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ),
    },
    {
        value: 30, suffix: ' min', prefix: '<', label: 'Tempo Risposta',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
    },
];

function AnimatedCounter({ value, suffix, prefix = '', visible, isDecimal = false }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!visible) return;
        let start = 0;
        const duration = 2000;
        const increment = value / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [visible, value]);

    return (
        <span className="stats__value">
            {prefix}{isDecimal ? count.toFixed(1) : count.toLocaleString()}{suffix}
        </span>
    );
}

export default function Stats() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        entry.target.classList.add('stats--visible');
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="stats" id="stats" ref={sectionRef}>
            <div className="container">
                <div className="stats__grid">
                    {stats.map((stat, index) => (
                        <div
                            className="stats__item"
                            key={index}
                            style={{ '--stat-delay': `${index * 0.1}s` }}
                            id={`stat-${index}`}
                        >
                            <div className="stats__icon">{stat.icon}</div>
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix || ''} visible={isVisible} isDecimal={stat.isDecimal} />
                            <span className="stats__label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
