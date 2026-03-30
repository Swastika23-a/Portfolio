import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="site-shell">
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>
      <div className="bg-glow glow-3"></div>

      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">ST</div>
          <div className="brand-name">Swastika</div>
        </div>

        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <NavLink to="/contact" className="nav-cta">
          Hire Me
        </NavLink>
      </header>

      <main className="page-container">
        <Outlet />
      </main>
    </div>
  );
}