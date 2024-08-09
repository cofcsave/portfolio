import { useState, useEffect } from "react";
import "./Header.scss";

export default function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);

            const sections = document.querySelectorAll("section");
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    setActiveSection(section.id);
                }
            });
        };

        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const expandNav = scrollPosition >= 100;

    return (
        <nav className={expandNav ? 'fullWidth' : undefined }>
            <div className="navLinks">
                <a href="#skills" className={`navLink ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a>
                <a href="#portfolio" className={`navLink ${activeSection === 'portfolio' ? 'active' : ''}`}>Web Work</a>
                <a href="#designPortfolio" className={`navLink ${activeSection === 'designPortfolio' ? 'active' : ''}`}>Designs</a>
                <a href="#aboutMe" className={`navLink ${activeSection === 'aboutMe' ? 'active' : ''}`}>About Me</a>
            </div>
            {/* <a href="" className="modeLink">View in light mode 
                <svg viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12L7 7L2 2" strokeWidth="3" strokeLinecap="round"/>
                </svg>
            </a> */}
        </nav>
    );
}
