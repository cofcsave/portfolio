import { useState, useEffect } from "react";
import "./Header.scss";


export default function Header() {
        let expandNav = false;
        const [scrollPosition, setScrollPosition] = useState(0);
      
        useEffect(() => {
          const handleScroll = () => {
            setScrollPosition(window.scrollY);
          };
      
          // Add the scroll event listener
          window.addEventListener('scroll', handleScroll);
      
          // Clean up the event listener on component unmount
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
        scrollPosition >= 100 ? expandNav = true : expandNav = false;

    return (
        <nav className={expandNav ? 'fullWidth' : undefined }>
            <div className="navLinks">
                <a href="#aboutMe" className="navLink">About Me</a>
                <a href="#skills" className="navLink">Skills</a>
                <a href="#portfolio" className="navLink">Portfolio</a>
            </div>
            <a href="" className="modeLink">View in light modes 
                <svg viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12L7 7L2 2" strokeWidth="3" strokeLinecap="round"/>
                </svg>
            </a>
        </nav>
    )
}