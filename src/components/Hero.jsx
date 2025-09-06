import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';
import { Element } from 'react-scroll';
import useScrollReveal from './useScrollReveal';
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
        
        <a href="#projects" className="btn">View My Work</a>
      </section>
    </Element>
  );
}
