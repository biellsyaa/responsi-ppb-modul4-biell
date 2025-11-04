import React from "react";

export default function Splash(){
  return (
    <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:18,background:"linear-gradient(180deg,#f3fff3,#ffffff)"}}>
      <div style={{width:120,height:120,borderRadius:18,background:"linear-gradient(135deg,#8bd39b,#2b8a3e)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:28,fontWeight:700}}>TG</div>
      <h2 style={{margin:0}}>Travel Guide</h2>
      <p style={{color:"#6b7280"}}>Nature Edition — preparing your offline content...</p>
    </div>
  );
}
