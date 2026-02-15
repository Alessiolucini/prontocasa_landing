import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Download from './components/Download';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';

// Pages
import ChiSiamo from './pages/ChiSiamo';
import Recensioni from './pages/Recensioni';
import DiventaProfessionista from './pages/DiventaProfessionista';

import Blog from './pages/Blog';
import CentroAssistenza from './pages/CentroAssistenza';
import Contattaci from './pages/Contattaci';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TerminiCondizioni from './pages/TerminiCondizioni';
import CookiePolicy from './pages/CookiePolicy';

// Blog Articles
import ArticoloIdraulico from './pages/articles/ArticoloIdraulico';
import ArticoloElettricista from './pages/articles/ArticoloElettricista';
import ArticoloClimatizzatore from './pages/articles/ArticoloClimatizzatore';
import ArticoloRistrutturazione from './pages/articles/ArticoloRistrutturazione';
import ArticoloRisparmio from './pages/articles/ArticoloRisparmio';
import ArticoloTinteggiatura from './pages/articles/ArticoloTinteggiatura';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Stats />
        <Testimonials />
        <Download />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/recensioni" element={<Recensioni />} />
        <Route path="/diventa-professionista" element={<DiventaProfessionista />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/come-scegliere-idraulico-affidabile" element={<ArticoloIdraulico />} />
        <Route path="/blog/problemi-elettrici-comuni" element={<ArticoloElettricista />} />
        <Route path="/blog/manutenzione-climatizzatore" element={<ArticoloClimatizzatore />} />
        <Route path="/blog/ristrutturare-casa" element={<ArticoloRistrutturazione />} />
        <Route path="/blog/risparmiare-bollette-casa" element={<ArticoloRisparmio />} />
        <Route path="/blog/guida-tinteggiatura-fai-da-te" element={<ArticoloTinteggiatura />} />

        <Route path="/centro-assistenza" element={<CentroAssistenza />} />
        <Route path="/contattaci" element={<Contattaci />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/termini-condizioni" element={<TerminiCondizioni />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
      <CookieConsent />
    </>
  );
}
