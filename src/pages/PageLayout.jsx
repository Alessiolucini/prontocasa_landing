import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './Pages.css';

export default function PageLayout({ title, subtitle, children }) {
    return (
        <>
            <Navbar />
            <div className="page">
                <div className="page__hero">
                    <div className="container">
                        <nav className="page__breadcrumb">
                            <Link to="/">Home</Link>
                            <span className="page__breadcrumb-sep">›</span>
                            <span>{title}</span>
                        </nav>
                        <h1 className="page__title">{title}</h1>
                        {subtitle && <p className="page__subtitle">{subtitle}</p>}
                    </div>
                </div>
                <div className="page__content">
                    <div className="container">
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
