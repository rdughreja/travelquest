import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import DestinationPage from './pages/DestinationPage';
import Packages from './pages/Packages';
import BookingPage from './pages/BookingPage';
import PaymentScreen from './pages/PaymentScreen';
import ThankYouScreen from './pages/ThankYouScreen';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/travelquest" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:destination" element={<DestinationPage />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/book/:id" element={<BookingPage />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/thank-you" element={<ThankYouScreen />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

