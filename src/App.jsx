import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import Home from "./pages/Home";
import Destinasi from "./pages/Destinasi";
import Budaya from "./pages/Budaya";
import Profile from "./pages/Profile";

export default function App() {
  const [page, setPage] = useState("home");
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 1500);
    return () => clearTimeout(t);
  }, []);

  if (showSplash) return <Splash />;

  return (
    <div className="app-root">
      <Navbar current={page} onNavigate={setPage} />
      <main className="container">
        {page === "home" && <Home />}
        {page === "destinasi" && <Destinasi />}
        {page === "budaya" && <Budaya />}
        {page === "profile" && <Profile />}
      </main>
      <footer className="footer">Travel Guide • Offline-ready PWA</footer>
    </div>
  );
}
