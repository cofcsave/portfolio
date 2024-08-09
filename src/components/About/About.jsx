import './About.scss';
import BoxAnimation from '../Animations/BoxAnimation/BoxAnimation';

export default function About () {
    return (
        <section className="aboutMe" id="aboutMe">
            <div className="headerWDivide">
                <div className="divider"></div>
                <h2>A little about me</h2>
            </div>
            <div className="aboutContainer">
                <p>Hi, I'm Cassy and I'm a Front End Web Developer with UI/UX experience based in Dallas, TX. I've been coding for over 8 years now and the more I learn the more I want to know. The challenge that it presents and the problem solving it requires, there's nothing like it.<br/><br/>

                    I started my career as a print designer working on anything from Nascar Wraps to sales flyers and everything in-between. I started looking for a different kind of challenge and worked my way into email design/coding which, with Outlook, was definitely a challenge. I then worked my way into front end web development where I've been working for the last 8-9 years. In many of my positions I was a renaissance woman responsible for all the design and coding of website pages and emails, as well as all website updates and the occasional print pieces.</p>
            </div>
            <BoxAnimation color='blue' size='lg' />
            <BoxAnimation color='purple' size='md' />
        </section>
    )
}