// src/components/Committee.js
import React from 'react';
import committeeData from './CommitteeData';
import './Committee.css';

const Committee = () => {
  // Separate President and Vice President
  const leaders = committeeData.filter(
    member => member.role === 'President' || member.role === 'Vice President'
  );
  const otherMembers = committeeData.filter(
    member => member.role !== 'President' && member.role !== 'Vice President'
  );

  // Separate Treasurer and Event Manager for special row
  const specialMembers = otherMembers.filter(
    member => member.role === 'Treasurer' || member.role === 'Event Manager'
  );
  const remainingMembers = otherMembers.filter(
    member => member.role !== 'Treasurer' && member.role !== 'Event Manager'
  );

  return (
    <div className="section committee">
      <h2>Meet the Committee</h2>
      
      {/* Leaders Row */}
      <div className="leaders-row">
        {leaders.map((member, index) => (
          <div key={index} className="committee-card leader-card">
            <img src={member.photo} alt={member.name} className="committee-photo" />
            <div className="card-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Special Members Row (Treasurer and Event Manager) */}
      <div className="special-members-row">
        {specialMembers.map((member, index) => (
          <div key={index} className="committee-card">
            <img src={member.photo} alt={member.name} className="committee-photo" />
            <div className="card-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Remaining Members Row */}
      <div className="committee-grid">
        {remainingMembers.map((member, index) => (
          <div key={index} className="committee-card">
            <img src={member.photo} alt={member.name} className="committee-photo" />
            <div className="card-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committee;
