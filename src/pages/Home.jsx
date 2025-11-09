import React from "react";
import traveling from "../assets/traveling.jpg";
import niagara from "../assets/niagara.jpg";
import tahura from "../assets/tahura.jpg";
import pantaipink from "../assets/pantaipink.jpeg";

export default function Home(){
  return (
    <section>
      <div className="hero">
        <div className="hero-left">
          <h1>Jelajahi Alam & Destinasi</h1>
          <p>Temukan destinasi wisata alam, keindahan tradisi, dan jadikan perjalananmu lebih berarti.</p>
        </div>
        <div className="hero-right">
          <img src={traveling} alt="hero" />
        </div>
      </div>

      <div>
        <h2>Direkomendasikan</h2>
        <div className="grid">
          <div className="card">
            <img src={tahura} alt="d1" />
            <h3>Taman Hutan Raya</h3>
            <p style={{color:"#6b7280"}}>Keindahan hutan tropis dengan jalur trekking.</p>
          </div>

          <div className="card">
            <img src={niagara} alt="d2" />
            <div className="badge">Air Terjun</div>
            <h3>Air Terjun Niagara</h3>
            <p style={{color:"#6b7280"}}>Air terjun tersembunyi yang segar dan jernih.</p>
          </div>

          <div className="card">
            <img src={pantaipink} alt="d3" />
            <div className="badge">Pantai</div>
            <h3>Pantai Pink</h3>
            <p style={{color:"#6b7280"}}>Pantai dengan pemandangan matahari terbit yang memesona.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
