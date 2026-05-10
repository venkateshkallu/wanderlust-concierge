import { Routes, Route } from 'react-router-dom';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { StickyWhatsApp } from '@/components/site/StickyWhatsApp';
import { RevealRoot } from '@/components/site/Reveal';
import HomePage from '@/pages/HomePage';
import ToursPage from '@/pages/ToursPage';
import InternationalToursPage from '@/pages/InternationalToursPage';
import CarRentalsPage from '@/pages/CarRentalsPage';
import BusRentalsPage from '@/pages/BusRentalsPage';
import BlogsPage from '@/pages/BlogsPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  return (
    <RevealRoot>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tours" element={<ToursPage />} />
          <Route path="/international-tours" element={<InternationalToursPage />} />
          <Route path="/car-rentals" element={<CarRentalsPage />} />
          <Route path="/bus-rentals" element={<BusRentalsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <StickyWhatsApp />
    </RevealRoot>
  );
}

export default App;
