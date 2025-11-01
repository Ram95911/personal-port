import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';
import { Element } from 'react-scroll';
import useScrollReveal from './useScrollReveal';
import { FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { useEffect } from 'react';

export default function Hero() {

  useScrollReveal('.hero', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 200,
  });

  return (
    <Element name="about" className="section">
      <section id="home" className="hero">
        <h1>Hello, I'm Ram D Koli 👋</h1>
        <h2>
          <span style={{ color: '#555', fontSize: '18px' }}>
            <Typewriter
              words={['Full Stack Developer', 'AI Enthusiast', 'SQL', 'Git','Happy Kannda Rajyotsava']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>
        {/* g */}
        <div className="social-icons">
          <a
            href="https://github.com/Ram95911"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            aria-label="GitHub Profile"
          >
            {/* GitHub mark (SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.43c.6.11.82-.26.82-.58
        0-.29-.01-1.07-.02-2.1-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76
        -1.09-.75.08-.74.08-.74 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99
        .11-.78.42-1.3.76-1.6-2.67-.3-5.48-1.33-5.48-5.93
        0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17
        0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23
        .66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22
        0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22
        0 1.6-.02 2.89-.02 3.29 0 .32.21.7.82.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          {/* //email */}
          <a
            href="mailto:ramchandrakoli4231@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            aria-label="GitHub Profile"
          >
            {/* GitHub mark (SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"
            className="icon">
              <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
            </svg>
          </a>
        </div>
        <a href="#projects" className="btn">View My Work</a>
      </section>
    </Element>
  );
}
