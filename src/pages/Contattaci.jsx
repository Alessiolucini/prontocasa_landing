import { useState } from 'react';
import PageLayout from './PageLayout';

// Placeholder webhook URL — will be replaced with the n8n webhook URL
const WEBHOOK_URL = '';

export default function Contattaci() {
    const [form, setForm] = useState({ nome: '', email: '', oggetto: '', messaggio: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            if (WEBHOOK_URL) {
                await fetch(WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(form),
                });
            } else {
                // Simula invio se non c'è webhook
                console.log('Form data (webhook not configured):', form);
                await new Promise(r => setTimeout(r, 1000));
            }
            setStatus('success');
        } catch (err) {
            console.error('Form submission error:', err);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <PageLayout title="Contattaci" subtitle="Siamo qui per aiutarti.">
                <div className="contact-form" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <div className="form-success">
                        <div className="form-success__icon">✅</div>
                        <h3 className="form-success__title">Messaggio Inviato!</h3>
                        <p className="form-success__text">
                            Grazie per averci contattato. Ti risponderemo entro 24 ore all'indirizzo email fornito.
                        </p>
                    </div>
                </div>
            </PageLayout>
        );
    }

    return (
        <PageLayout title="Contattaci" subtitle="Hai domande, suggerimenti o bisogno di assistenza? Scrivici!">
            <div className="contact-grid">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nome">Nome e Cognome *</label>
                        <input type="text" id="nome" name="nome" value={form.nome} onChange={handleChange} required placeholder="Mario Rossi" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="mario@esempio.it" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="oggetto">Oggetto *</label>
                        <select id="oggetto" name="oggetto" value={form.oggetto} onChange={handleChange} required>
                            <option value="">Seleziona...</option>
                            <option value="assistenza">Richiesta di Assistenza</option>
                            <option value="reclamo">Reclamo</option>
                            <option value="partnership">Partnership / Collaborazione</option>
                            <option value="professionista">Diventare Professionista</option>
                            <option value="media">Stampa / Media</option>
                            <option value="altro">Altro</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="messaggio">Messaggio *</label>
                        <textarea id="messaggio" name="messaggio" value={form.messaggio} onChange={handleChange} required placeholder="Descrivi la tua richiesta..." rows={5} />
                    </div>
                    <button type="submit" className="form-submit" disabled={status === 'sending'}>
                        {status === 'sending' ? 'Invio in corso...' : 'Invia Messaggio'}
                    </button>
                    {status === 'error' && (
                        <p style={{ color: '#e53e3e', marginTop: 'var(--space-md)', fontSize: 'var(--font-size-sm)' }}>
                            Si è verificato un errore. Riprova o scrivi a support@prontocasa.net.
                        </p>
                    )}
                </form>

                <div className="contact-info">
                    <div className="contact-info-card">
                        <div className="contact-info-card__icon">📧</div>
                        <div>
                            <h4 className="contact-info-card__title">Email</h4>
                            <p className="contact-info-card__text">
                                <a href="mailto:support@prontocasa.net">support@prontocasa.net</a>
                            </p>
                        </div>
                    </div>
                    <div className="contact-info-card">
                        <div className="contact-info-card__icon">⏰</div>
                        <div>
                            <h4 className="contact-info-card__title">Orari di Supporto</h4>
                            <p className="contact-info-card__text">
                                Lunedì - Venerdì: 9:00 - 18:00<br />
                                Sabato: 9:00 - 13:00
                            </p>
                        </div>
                    </div>
                    <div className="contact-info-card">
                        <div className="contact-info-card__icon">📍</div>
                        <div>
                            <h4 className="contact-info-card__title">Sede</h4>
                            <p className="contact-info-card__text">
                                ProntoCasa S.r.l.<br />
                                Italia
                            </p>
                        </div>
                    </div>
                    <div className="contact-info-card">
                        <div className="contact-info-card__icon">💬</div>
                        <div>
                            <h4 className="contact-info-card__title">Tempo di Risposta</h4>
                            <p className="contact-info-card__text">
                                Rispondiamo a tutte le richieste entro 24 ore lavorative.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
