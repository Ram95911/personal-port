import "./cnt.css";
import { Element } from "react-scroll";
import useScrollReveal from "./useScrollReveal"; // adjust path if needed

export default function Contact() {
  useScrollReveal(".contact", {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
    delay: 200,
  });

  return (
    <Element name="contact" className="section">
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>Reach out for collaborations or just to say hi!</p>
        <a href="mailto:ramchandrakoli545@gmail.com" className="btn">
          Email Me
        </a>
      </section>
    </Element>
  );
}
