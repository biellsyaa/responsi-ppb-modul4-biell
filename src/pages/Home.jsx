import React from "react";

export default function Home(){
  return (
    <section>
      <div className="hero">
        <div className="hero-left">
          <h1>Jelajahi Alam & Destinasi</h1>
          <p>Temukan destinasi wisata alam, keindahan tradisi, dan jadikan perjalananmu lebih berarti.</p>
        </div>
        <div className="hero-right">
          <img src="https://liputanislam.com/wp-content/uploads/2017/12/theodysseyonline.jpg" alt="hero" />
        </div>
      </div>

      <div>
        <h2>Direkomendasikan</h2>
        <div className="grid">
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRspFhk4pBiwBS5SiPFtLumkO2LJM4-J6_lLwSnMEFuweCIxlC_Tms5gfpgX298iYTLstBuqi-UcXeEpOMYCM0Ud35vlk1eM8FqDmPDUg&s=10" alt="d1" />
            <div className="badge">Taman Nasional</div>
            <h3>Taman Hutan Raya</h3>
            <p style={{color:"#6b7280"}}>Keindahan hutan tropis dengan jalur trekking.</p>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWscJYbDZXBcCg13CFpeXJsIwKPBJEKx_FQA&s" alt="d2" />
            <div className="badge">Air Terjun</div>
            <h3>Air Terjun Niagara</h3>
            <p style={{color:"#6b7280"}}>Air terjun tersembunyi yang segar dan jernih.</p>
          </div>

          <div className="card">
            <img src="https://indonesiajuara.asia/wp-content/uploads/2023/12/Pink-Beach-di-Indonesia.webp" alt="d3" />
            <div className="badge">Pantai</div>
            <h3>Pantai Pink</h3>
            <p style={{color:"#6b7280"}}>Pantai dengan pemandangan matahari terbit yang memesona.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
