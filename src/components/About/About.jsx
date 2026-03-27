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
                <p>Hi, I'm Cassy, a Front End Web Developer and UI/UX Designer based in Dallas, TX with over 9 years of coding under my belt and absolutely no plans to stop learning.
The thing that hooked me on development? The problem solving. There's genuinely nothing like that moment when everything clicks. I started my career in print design, we're talking NASCAR wraps, sales flyers, the works, then chased a new challenge into email design and coding (shoutout to Outlook for truly humbling me), and eventually found my home in front end web development. Along the way I've been a bit of a renaissance woman: designing, coding, updating, and occasionally still saving the day with a last-minute print piece.
<br/>
These days I'm expanding my toolkit by learning React and React Native, adding component-based development to a front end foundation I've been building for years.
<br/>
I'm also staying current with AI and how it's shaping the way we build for the web. I think it's a genuinely powerful tool, especially in the hands of someone who already understands the craft. Pair it with solid technical knowledge and it seriously levels up what you can build and how fast you can build it. I'm all about using every good tool available, and right now AI is absolutely one of them.
</p>
            </div>
            <BoxAnimation color='blue' size='lg' />
            <BoxAnimation color='purple' size='md' />
        </section>
    )
}