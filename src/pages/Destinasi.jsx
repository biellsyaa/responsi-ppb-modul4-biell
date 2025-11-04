import React from "react";

const data = [
  { id: 1, title: "Gunung Everest", tag: "Gunung", img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT4wdjh7Mxr9QMB3_0MwNtkOE30ooRJErA-Bsr0NGYkjBi6PIP2QFeUbYKQS00AWueOCjdDwAzKGB7QPcSLDFjIh7E&s=19" },
  { id: 2, title: "Pulau Samosir", tag: "Pulau", img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRZUAPaCnNNlJ4xX1JuGpVWMY80HmVfDAn7tzXb7YIvfM5Qc9YDd6ljHPbkLmoDZVYm7BIrIzLqiRuTmwAeW8EKThT6&s=19" },
  { id: 3, title: "Hutan Amazon", tag: "Taman", img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTfA2fQVDE0NvOiOsOggmxBKybp2LJuKQJp-F3N3-oxmVI6E1oOofzjN-qC0he5Qv6MoqjkQVqOA7MC32G-gzKvwLc&s=19" }
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
