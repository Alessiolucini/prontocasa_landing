import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieConsent.css';

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('prontocasa_cookie_consent');
        if (!consent) {
            const timer = setTimeout(() => setVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('prontocasa_cookie_consent', 'accepted');
        setVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('prontocasa_cookie_consent', 'rejected');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="cookie-consent" id="cookie-consent">
            <div className="cookie-consent__content">
                <div className="cookie-consent__icon">🍪</div>
                <div className="cookie-consent__text">
                    <h4 className="cookie-consent__title">Questo sito utilizza i cookie</h4>
                    <p className="cookie-consent__desc">
                        Utilizziamo i cookie per migliorare la tua esperienza di navigazione e analizzare il traffico del sito.
                        Leggi la nostra <Link to="/cookie-policy">Cookie Policy</Link> per saperne di più.
                    </p>
                </div>
                <div className="cookie-consent__actions">
                    <button className="cookie-consent__btn cookie-consent__btn--accept" onClick={handleAccept}>
                        Accetta Tutti
                    </button>
                    <button className="cookie-consent__btn cookie-consent__btn--reject" onClick={handleReject}>
                        Rifiuta
                    </button>
                </div>
            </div>
        </div>
    );
}
