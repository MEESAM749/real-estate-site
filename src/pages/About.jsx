import React from 'react';
import '../styles/about.css';

const About = () => {
    return (
        <>
            <section className="about-intro">
                <div className="intro-header">
                    <h2 className="est-title">ESTABLISHED IN 2000</h2>
                    <p className="cursive-subtitle">and serving 24 years of excellence</p>
                </div>

                <div className="stats-row">
                    <div className="stat-item">
                        <div className="stat-badge">100+</div>
                        <div className="stat-label">Satisfied Clients</div>
                        <div className="stat-brackets"></div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-badge">100+</div>
                        <div className="stat-label">Satisfied Clients</div>
                        <div className="stat-brackets"></div>
                    </div>
                </div>
            </section>

            <section className="about-feature">
                <div className="feature-image-box">
                    <img src="https://placehold.co/1200x600/cccccc/999999" alt="Al Rafay Office" />
                </div>
            </section>

            <section className="founder-section">
                <div className="founder-grid">
                    <div className="founder-image">
                        <img src="https://placehold.co/400x500/black/white?text=Founder+Photo" alt="Malik Mustaqeem Tamman" />
                    </div>
                    <div className="founder-info">
                        <span className="role-badge">FOUNDER:</span>
                        <h2 className="founder-name">Malik Mustaqeem Tamman</h2>
                        <p className="founder-bio">
                            Visionary leader with over two decades of experience in the real estate sector. Dedicated to bringing transparency and excellence to every transaction.
                        </p>
                    </div>
                </div>
            </section>

            <section className="team-section">
                <div className="team-grid">
                    <div className="team-card">
                        <div className="team-img-col">
                            <img src="https://placehold.co/300x300/black/white?text=Photo" alt="Team Member" />
                        </div>
                        <div className="team-info-col">
                            <h3>Full Name</h3>
                            <span className="designation">Designation</span>
                            <div className="team-contact">
                                <p>Contact Info</p>
                                <p>Email Address</p>
                            </div>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="team-img-col">
                            <img src="https://placehold.co/300x300/black/white?text=Photo" alt="Team Member" />
                        </div>
                        <div className="team-info-col">
                            <h3>Full Name</h3>
                            <span className="designation">Designation</span>
                            <div className="team-contact">
                                <p>Contact Info</p>
                                <p>Email Address</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
