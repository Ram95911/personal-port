import "./Footer.css";
import { Element } from "react-scroll";
import useScrollReveal from "./useScrollReveal"; // adjust path if needed

export default function Footer() {
  useScrollReveal(".footer", {
    origin: "bottom",
    distance: "30px",
    duration: 800,
    delay: 150,
  });

  return (
    <Element name="footer" className="section">
      <footer className="footer">
        <p>© {new Date().getFullYear()} Ram D koli. All rights reserved.</p>
      </footer>
    </Element>
  );
}
