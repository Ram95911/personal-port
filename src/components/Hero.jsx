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
              words={['Full Stack Developer', 'AI Enthusiast', 'SQL', 'Git']}
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
        <a href="#projects" className="btn">View My Work</a>
      </section>
    </Element>
  );
}
