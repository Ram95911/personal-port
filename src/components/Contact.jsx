import "./Contact.css";
import { Element } from "react-scroll";
import useScrollReveal from "./useScrollReveal";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  useScrollReveal(".contact", {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
    delay: 200,
  });

  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xgsx7sh",       // e.g., "service_abc123"
        "template_jh53s3n",      // e.g., "template_xyz789"
        e.target,
        "vowbh2VA6-HPuWTkX"        // e.g., "XyZ123_ABcDEF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          // console.error(error.text);
          console.error("EmailsJS error:",error);
          setStatusMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <Element name="contact" className="section">
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>Reach out for collaborations or just to say hi!</p>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-form" name="cntact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>

        {statusMessage && <p className="status-message">{statusMessage}</p>}

        {/* <a href="mailto:ramchandrakoli545@gmail.com" className="btn secondary-btn">
          Or Email Me Directly
        </a> */}
      </section>
    </Element>
  );
}
