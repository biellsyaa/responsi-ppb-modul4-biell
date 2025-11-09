import React from "react";
import taripiring from "../assets/taripiring.png";
import batik from "../assets/batik.jpg";
import ngaben from "../assets/ngaben.jpg";

const kultur = [
  { id: 1, title: "Tari Piring", desc: "Tari Piring adalah tarian tradisional Minangkabau yang berasal dari Sumatera Barat. Tarian ini ditampilkan dengan menggunakan piring sebagai properti utama, yang dipegang oleh penari sambil melakukan gerakan-gerakan lincah dan dinamis.", img: taripiring },
  { id: 2, title: "Kerajinan Lokal Batik", desc: "Kerajinan batik adalah seni membatik kain dengan menggunakan lilin malam untuk membuat pola, yang memiliki nilai seni tinggi dan telah menjadi bagian dari budaya Indonesia. ", img:batik},
  { id: 3, title: "Upacara Ngaben", desc: "Ngaben adalah upacara kremasi atau pembakaran jenazah umat Hindu di Bali untuk menyucikan dan membebaskan roh agar dapat kembali ke Sang Pencipta dan mencapai nirwana.", img: ngaben}
];

export default function Budaya(){
  return (
    <section>
      <h1>Budaya & Tradisi</h1>
      <p style={{color:"#6b7280"}}>Pelajari warisan budaya lokal yang unik.</p>
      <div className="grid" style={{marginTop:16}}>
        {kultur.map(k => (
          <div className="card" key={k.id}>
            <img src={k.img} alt={k.title} />
            <h3>{k.title}</h3>
            <p style={{color:"#6b7280"}}>{k.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
