import './Skills.scss';
import { SKILLS } from '../../data';
import { useState, useEffect, useRef } from 'react';
import { useScreenSize } from '../../hooks/useScreenSize';
import BoxAnimation from '../Animations/BoxAnimation/BoxAnimation';

export default function Skills () {
    const [animatedElements, setAnimatedElements] = useState(new Set());
    const skillBarsRef = useRef([]);
    const isMobile = useScreenSize(768);

    const handleResize = () => {
        isMobile;
        setAnimatedElements(new Set());
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, []);

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                const index = skillBarsRef.current.indexOf(entry.target);
                if (entry.isIntersecting && !animatedElements.has(index)) {
                    const customSize = entry.target.getAttribute('data-percent') + '%';
                    if(isMobile) {
                        entry.target.style.width = customSize;
                    } else {
                        entry.target.style.height = customSize;
                    }
                    
                    setAnimatedElements((prev) => {
                        const newSet = new Set(prev);
                        newSet.add(index);
                        return newSet;
                });
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1, // Adjust threshold as needed
        });

        skillBarsRef.current.forEach((element) => {
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [isMobile, animatedElements]);

    return (
        <section className="skillset" id="skills">
            <div className="headerWDivide">
                <div className="divider"></div>
                <h2>My skill set</h2>
                <p>My current skills and there level's with many more to come while I also work to improve what I know.</p>
            </div>
        {!isMobile &&
            <div className="skillChart">
                {SKILLS.map((skill, index)=>(
                    <div className="skillLabel" key={skill.skillName}>
                        <p>{skill.skillName}</p>
                        <div className="skillbarContainer">
                     <div
                         className="skillbar"
                         data-percent={skill.level}
                         ref={(el) => (skillBarsRef.current[index] = el)}
                         style={{ height: '0%' }}
                     ></div>
                 </div>
                    </div>
                ))}
            </div>
        }
        {isMobile &&
         <div className="skillChartMobile">
         {SKILLS.map((skill, index) => (
             <div className="skillLabel" key={skill.skillName}>
                 <p>{skill.skillName}</p>
                 <div className="skillbarContainer">
                     <div
                         className="skillbar"
                         data-percent={skill.level}
                         ref={(el) => (skillBarsRef.current[index] = el)}
                         style={{ width: '0%' }}
                     ></div>
                 </div>
             </div>
         ))}
     </div>
        }
        <div className="comingSoon">
            <h3>What skills am I working on adding to my list?</h3>
            <p>React and React Native are my main focus right now. Building real things until it actually sticks. AI-assisted dev tools like Cursor and Claude Code have become a genuine assist in my daily life, and I'm keeping an eye on how LLMs and conversational search are changing the web.</p>
        </div>
        <BoxAnimation color='blue' size='lg' />
        <BoxAnimation color='purple' size='sm' />
    </section>
    )
}