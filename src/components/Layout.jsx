import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="site">
      <header className="navbar">
        <div className="logo"> Swastika</div>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <NavLink to="/contact" className="hire-btn">
          Hire Me
        </NavLink>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}