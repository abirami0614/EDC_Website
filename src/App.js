import React from "react";
import Hero from "./components/Hero";
import Events from "./components/Events";
import Statistics from "./components/Statistics";
import Faculty from "./components/Faculty";
import Committee from "./components/Committee";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact"; // Import the new component
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Hero />
      <Events />
      
      <Statistics />
      <Faculty />
      <Committee />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
