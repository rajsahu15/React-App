import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      background: "#0F0E47",
      position: "fixed",
      width: "100%",
      top: 0,
      zIndex: 1000
    }}>
      <h2>TimesheetPro</h2>

      <div style={{ display: "flex", gap: "20px", cursor: "pointer" }}>
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="about" smooth={true} duration={500}>About Us</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
        <Link to="login" smooth={true} duration={500}>Login</Link>
      </div>
    </nav>
  );
}