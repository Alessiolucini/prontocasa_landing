import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';

const articles = [
    { slug: 'come-scegliere-idraulico-affidabile', title: 'Come Scegliere un Idraulico Affidabile', category: 'Consigli', date: '10 Febbraio 2026', excerpt: 'Scopri i 5 criteri fondamentali per trovare un idraulico di fiducia nella tua zona e evitare brutte sorprese.', emoji: '🔧' },
    { slug: 'problemi-elettrici-comuni', title: '10 Problemi Elettrici Comuni e Come Risolverli', category: 'Guide', date: '5 Febbraio 2026', excerpt: 'Dai cortocircuiti alle prese difettose: ecco i problemi più frequenti e quando è il momento di chiamare un esperto.', emoji: '⚡' },
    { slug: 'manutenzione-climatizzatore', title: 'Manutenzione del Climatizzatore: Guida Completa', category: 'Manutenzione', date: '28 Gennaio 2026', excerpt: 'Una corretta manutenzione del climatizzatore ti fa risparmiare sulla bolletta e allunga la vita dell\'apparecchio.', emoji: '❄️' },
    { slug: 'ristrutturare-casa', title: 'Ristrutturare Casa: Da Dove Iniziare?', category: 'Ristrutturazione', date: '20 Gennaio 2026', excerpt: 'Pianifica la ristrutturazione della tua casa passo dopo passo, dal budget ai permessi necessari.', emoji: '🏗️' },
    { slug: 'risparmiare-bollette-casa', title: 'Come Risparmiare sulle Bollette di Casa', category: 'Risparmio', date: '15 Gennaio 2026', excerpt: 'Piccoli interventi domestici che possono farti risparmiare centinaia di euro all\'anno sulle bollette.', emoji: '💡' },
    { slug: 'guida-tinteggiatura-fai-da-te', title: 'La Guida alla Tinteggiatura Fai-da-Te', category: 'Guide', date: '8 Gennaio 2026', excerpt: 'Tutto quello che devi sapere per tinteggiare una stanza: strumenti, tecniche e errori da evitare.', emoji: '🎨' },
];

export default function Blog() {
    return (
        <PageLayout title="Blog" subtitle="Consigli, guide e novità dal mondo delle riparazioni domestiche.">
            <div className="page-section">
                <div className="cards-grid">
                    {articles.map((article, i) => (
                        <Link to={`/blog/${article.slug}`} className="card" key={i} style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
                            <div style={{ fontSize: '2rem', marginBottom: 'var(--space-md)' }}>{article.emoji}</div>
                            <div style={{ display: 'flex', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)', fontSize: 'var(--font-size-xs)' }}>
                                <span style={{ background: 'var(--color-primary-glow)', padding: '0.15rem 0.6rem', borderRadius: 'var(--radius-full)', color: 'var(--color-primary-dark)', fontWeight: 600 }}>
                                    {article.category}
                                </span>
                                <span style={{ color: 'var(--color-text-muted)' }}>{article.date}</span>
                            </div>
                            <h3 className="card__title">{article.title}</h3>
                            <p className="card__text">{article.excerpt}</p>
                            <div style={{ marginTop: 'var(--space-md)', color: 'var(--color-primary)', fontWeight: 600, fontSize: 'var(--font-size-sm)' }}>
                                Leggi di più →
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
}
