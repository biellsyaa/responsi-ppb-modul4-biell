import React from "react";

export default function Profile(){
  return (
    <section style={{display:"flex",justifyContent:"center",paddingTop:30}}>
      <div className="profile-card" style={{maxWidth:480}}>
        <div className="avatar">PB</div>
        <h2>Putri Bilqis Nasywa A</h2>
        <p style={{color:"#6b7280",margin:6}}>21120123140144 • Kelompok 17</p>
        <p style={{textAlign:"center",color:"#6b7280",marginTop:12}}>Aplikasi PWA travel sederhana — tampil offline lewat service worker.</p>
      </div>
    </section>
  );
}
