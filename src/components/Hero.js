// src/components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-overlay">
                <h1 className="hero-title fade-in">Welcome to EDC</h1>
                <p className="hero-text fade-in">Empowering Entrepreneurs of Tomorrow</p>
            </div>
        </div>
    );
};

export default Hero;
