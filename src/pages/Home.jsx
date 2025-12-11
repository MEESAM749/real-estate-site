import React from 'react';
import ServiceCard from '../components/ServiceCard';
import DealItem from '../components/DealItem';
import OpportunityCard from '../components/OpportunityCard';

const Home = () => {
    return (
        <>
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Invest In Your Future</h1>
                    <p>Unlocking Value, Maximizing Investments: Al Rafay Associates Your Trusted Partner in Real Estate Excellence</p>
                    <button className="btn-primary">Get Started</button>
                </div>
                <div className="hero-image">
                    <img src="https://placehold.co/637x426" alt="Real Estate" />
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">Our Services</h2>
                <div className="services-grid">
                    <ServiceCard
                        image="https://placehold.co/60x60"
                        title="SELL"
                        description="without any hassle"
                    />
                    <ServiceCard
                        image="https://placehold.co/60x60"
                        title="BUY"
                        description="without any fear"
                    />
                    <ServiceCard
                        image="https://placehold.co/60x60"
                        title="RENT"
                        description="at your ease"
                    />
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">We Deal In</h2>
                <div className="deal-grid">
                    <DealItem image="https://placehold.co/100x100" alt="Deal 1" />
                    <DealItem image="https://placehold.co/100x100" alt="Deal 2" />
                    <DealItem image="https://placehold.co/100x100" alt="Deal 3" />
                    <DealItem image="https://placehold.co/100x100" alt="Deal 4" />
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">Hot Investment Opportunities</h2>
                <div className="opportunities-grid">
                    <OpportunityCard
                        image="https://placehold.co/100x100"
                        alt="Opportunity 1"
                        size="30x60"
                        bookingText={<>BOOKING<br />FOR JUST<br />PKR 999,999</>}
                    />
                    <OpportunityCard
                        image="https://placehold.co/100x100"
                        alt="Opportunity 2"
                        size="30x60"
                        bookingText={<>BOOKING<br />FOR JUST<br />PKR 999,999</>}
                    />
                    <OpportunityCard
                        image="https://placehold.co/100x100"
                        alt="Opportunity 3"
                        size="30x60"
                        bookingText={<>BOOKING<br />FOR JUST<br />PKR 999,999</>}
                    />
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">Get In Touch</h2>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your full name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="me@company.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Your message..."></textarea>
                    </div>
                    <button type="submit" className="btn-send">Send message</button>
                </form>
            </section>
        </>
    );
};

export default Home;
