import React from "react";
import everest from "../assets/everest.jpeg";
import samosir from "../assets/samosir.jpeg";
import amazon from "../assets/amazon.avif";

const data = [
  { id: 1, title: "Gunung Everest", tag: "Gunung", img: everest},
  { id: 2, title: "Pulau Samosir", tag: "Pulau", img: samosir},
  { id: 3, title: "Hutan Amazon", tag: "Hutan", img: amazon},
];

export default function Destinasi(){
  return (
    <section>
      <h1>Destinasi</h1>
      <p style={{color:"#6b7280"}}>Kumpulan tempat wisata alam yang direkomendasikan.</p>
      <div className="grid" style={{marginTop:16}}>
        {data.map(d => (
          <div className="card" key={d.id}>
            <img src={d.img} alt={d.title} />
            <div className="badge">{d.tag}</div>
            <h3>{d.title}</h3>
            <p style={{color:"#6b7280"}}>Traveling is the movement of people between distant geographical locations, done by various means like car, plane, or foot, for purposes such as leisure, business, or education. </p>
          </div>
        ))}
      </div>
    </section>
  );
}
