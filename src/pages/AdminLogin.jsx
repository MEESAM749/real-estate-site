import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/admin-login.css';

const AdminLogin = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // TODO: Implement actual authentication here
        navigate('/admin-dashboard');
    };

    return (
        <section className="admin-section">
            <SEO title="Admin Login - Al Rafay Associates" />
            <div className="login-container">
                <h1 className="section-title">Admin Login</h1>
                <p className="login-subtitle">Welcome back. Please enter your details.</p>

                <form className="admin-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Username or ID</label>
                        <input type="text" id="username" placeholder="Enter your username" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" />
                    </div>

                    <div className="form-options">
                        <label className="checkbox-label">
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="#" className="forgot-link">Forgot Password?</a>
                    </div>

                    <button type="submit" className="btn-primary full-width-btn">Access Dashboard</button>
                </form>
            </div>
        </section>
    );
};

export default AdminLogin;
