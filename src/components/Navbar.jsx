import React from "react";

export default function Navbar({ current, onNavigate }) {
  const links = [
    { id: "home", label: "Home" },
    { id: "destinasi", label: "Destinasi" },
    { id: "budaya", label: "Budaya" },
    { id: "profile", label: "Profile" }
  ];

  return (
    <header className="navbar">
      <div className="brand">
        <div className="logo">TG</div>
        <div>
          <div style={{fontWeight:700}}>Travel Guide</div>
          <div style={{fontSize:12,color:"#6b7280"}}>Nature Edition</div>
        </div>
      </div>
      <nav className="navlinks">
        {links.map(l => (
          <button
            key={l.id}
            className={current === l.id ? "active" : ""}
            onClick={() => onNavigate(l.id)}
          >
            {l.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
