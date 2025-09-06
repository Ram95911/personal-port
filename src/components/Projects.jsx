import "./Projects.css";
import { Element } from "react-scroll";
import useScrollReveal from "./useScrollReveal";

const projects = [
  {
    title: "JDBC-Food ordering with Role-Based Access",
    description:
      "This project is a Java JDBC-based user portal that provides role-based access control for Admin and Customer users. It demonstrates real-world features of a food ordering style system, including user authentication, item management (add, delete), order processing, ratings, and secure password recovery.",
    link: "https://github.com/Ram95911/jdbc-food-ordering.git",
  },
  {
    title: "Personal Portfolio website",
    description: "A clean and responsive personal portfolio website built to highlight my skills, projects, and journey as a developer. It features an About section, project showcases , and a contact section for collaboration opportunities. Designed with simplicity and clarity, this portfolio reflects my passion for Java, web technologies.",
    link: "#",
  },

];

export default function Projects() {
  // Apply staggered reveal to each project card
  useScrollReveal(".project-card", {
    origin: "bottom",
    distance: "20px",
    duration: 800,
    interval: 200, // <-- stagger each card by 200ms
  });

  return (
    <Element name="projects" className="section">
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((p, i) => (
            <div
              key={i}
              className="project-card"
              tabIndex={0}
              aria-label={`Project: ${p.title}`}
            >
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View project: ${p.title}`}
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
}
