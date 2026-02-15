import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Article.css';

export default function ArticleLayout({ title, category, date, readTime, image, imageAlt, children, metaDescription, keywords }) {

    useEffect(() => {
        document.title = `${title} | ProntoCasa Blog`;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', metaDescription || title);
        else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = metaDescription || title;
            document.head.appendChild(meta);
        }
        const metaKw = document.querySelector('meta[name="keywords"]');
        if (metaKw) metaKw.setAttribute('content', keywords || '');
        else if (keywords) {
            const meta = document.createElement('meta');
            meta.name = 'keywords';
            meta.content = keywords;
            document.head.appendChild(meta);
        }
        return () => { document.title = 'ProntoCasa'; };
    }, [title, metaDescription, keywords]);

    return (
        <div className="page">
            <Navbar />
            <article className="article" itemScope itemType="https://schema.org/BlogPosting">
                <header className="article__hero">
                    <div className="container">
                        <nav className="page__breadcrumb" aria-label="Breadcrumb">
                            <Link to="/">Home</Link>
                            <span className="page__breadcrumb-sep">›</span>
                            <Link to="/blog">Blog</Link>
                            <span className="page__breadcrumb-sep">›</span>
                            <span>{title}</span>
                        </nav>
                        <div className="article__meta">
                            <span className="article__category">{category}</span>
                            <time className="article__date" itemProp="datePublished">{date}</time>
                            <span className="article__read-time">⏱ {readTime}</span>
                        </div>
                        <h1 className="article__title" itemProp="headline">{title}</h1>
                    </div>
                </header>

                <div className="article__image-wrapper">
                    <div className="container">
                        <img src={image} alt={imageAlt || title} className="article__image" itemProp="image" loading="lazy" />
                    </div>
                </div>

                <div className="article__body container" itemProp="articleBody">
                    {children}
                </div>

                <footer className="article__footer">
                    <div className="container">
                        <div className="article__cta">
                            <h3>Hai bisogno di un professionista?</h3>
                            <p>Scarica ProntoCasa e trova il tecnico giusto in pochi minuti.</p>
                            <div className="article__cta-buttons">
                                <a href="https://apps.apple.com/app/prontocasa" className="cta-banner__btn" target="_blank" rel="noopener noreferrer">📱 App Store</a>
                                <a href="https://play.google.com/store/apps/details?id=com.prontocasa" className="cta-banner__btn" target="_blank" rel="noopener noreferrer">🤖 Google Play</a>
                            </div>
                        </div>
                        <Link to="/blog" className="article__back">← Torna al Blog</Link>
                    </div>
                </footer>
            </article>
            <Footer />
        </div>
    );
}
