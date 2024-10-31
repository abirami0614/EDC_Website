import React from "react";
import "./Timeline.css";

const milestones = [
  { year: "2022", description: "EDC Cell Founded" },
  { year: "2023", description: "First Startup Bootcamp" },
  // More milestones
];

function Timeline() {
  return (
    <section className="timeline">
      <h2>Timeline</h2>
      <ul>
        {milestones.map((milestone, index) => (
          <li key={index}>
            <strong>{milestone.year}</strong>: {milestone.description}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Timeline;
