// src/components/Events.js
import React from 'react';
import './Events.css';

const Events = () => {
    const events = [
        { title: "Startup Workshop", date: "Sept 15, 2024" },
        { title: "Pitch Fest", date: "Oct 22, 2024" },
        { title: "Hackathon 2024", date: "Nov 10, 2024" }
    ];

    return (
        <div className="section events">
            <h2>Upcoming Events</h2>
            <div className="event-list">
                {events.map((event, index) => (
                    <div className="card event-card fade-in" key={index}>
                        <h3>{event.title}</h3>
                        <p>{event.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
