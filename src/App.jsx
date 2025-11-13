import { motion } from 'framer-motion'; import { Calendar, MapPin, Music } from 'lucide-react'; import './App.css';

export default function App() {
  const events = [{ title: 'DJ Night Blast', date: 'Dec 22, 2025', location: 'Mumbai', image: 'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2', }, { title: 'Comedy Fiesta', date: 'Nov 15, 2025', location: 'Delhi', image: 'https://images.unsplash.com/photo-1553830591-42a1d84f14d2', }, { title: 'Corporate Gala', date: 'Jan 5, 2026', location: 'Bangalore', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0', },];

  return (<div className="container"> <nav className="navbar"> <h1 className="logo">BookMyEvent</h1> <div className="nav-links"> <a href="#">Home</a> <a href="#">Events</a> <a href="#">Host</a> <a href="#">Login</a> </div> </nav>

    <section className="hero">
      <motion.h2 className="hero-title" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
        Book Your Next <span className="highlight">Show</span> or <span className="highlight">Party</span>
      </motion.h2>
      <p className="hero-subtitle">Discover and book the most exciting events, parties, and shows near you.</p>
      <div className="search-bar">
        <input type="text" placeholder="Search events or city..." />
        <button className="search-btn">Search</button>
      </div>
    </section>

    <section className="events-section">
      <h3 className="section-title">Popular Events</h3>
      <div className="events-grid">
        {events.map((event, i) => (
          <motion.div key={i} className="event-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}>
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-content">
              <h4 className="event-title">{event.title}</h4>
              <div className="event-info"><Calendar className="icon" />{event.date}</div>
              <div className="event-info"><MapPin className="icon" />{event.location}</div>
              <button className="book-btn">Book Now</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <footer className="footer">
      <div className="footer-content">
        <Music className="footer-icon" />
        <span>BookMyEvent © 2025</span>
      </div>
      <p>Designed with ❤️ for event lovers</p>
    </footer>
  </div>

  );
}