import "./About.css";
import { Element } from "react-scroll";
import useScrollReveal from "./useScrollReveal"; // adjust path if needed

export default function About() {
  useScrollReveal(".about", {
    origin: "left",
    distance: "60px",
    duration: 1000,
    delay: 200,
  });

  return (
    <Element name="about" className="section">
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer with experience in java,html,css,jdbc,hibernate. 
          I love solving real-world problems and building scalable applications.
        </p>
      </section>
    </Element>
  );
}
