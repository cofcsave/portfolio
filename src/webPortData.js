import Cybernetic from './assets/Cybernetic.png';
import Atlantis from './assets/Atlantis.png';
import Axxess from './assets/Axxess.png';
import Cavista from './assets/Cavista.png';
import Nextiva from './assets/Nextiva.png';
import Density from './assets/Density.png';
import Insurance from './assets/Insurance.png';

//keep at 6 objects

export const WEBPORT = [
    {
        company: 'Atlantis<br/>Scuba',
        skillsUsed: 'React, HTML, SCSS, Javascript, Figma, Git',
        copy: 'The goal was to create a fun, easy to navigate website with all the essential information in an easy to digest layout. Originally created in vanilla HTML, SCSS and Javascript and then rebuilt into a simple React web app.',
        img: Atlantis,
        link: 'https://atlantisscuba.com/',
        updated: false,
        updateCopy: '',
        identity: 'as-content'
    },
    {
        company: 'Luminant<br/>Music',
        skillsUsed: 'HTML, SCSS, JavaScript, Git',
        copy: 'This website was a complete overhaul for a startup I worked for called Cybernetic Entertainment. I was going for a more visual eye catching experience to go along with what the product offers, visual eye candy for your music.',
        img: Cybernetic,
        link: 'https://cassykdesign.com/websites/cybernetic/index',
        updated: true,
        updateCopy: 'They are no longer around unfortunately but this is what I originally created.',
        identity: 'lm-content'
    },
    {
        company: 'Cavista',
        skillsUsed: 'HTML, SCSS, Javascript, AdobeXD, Git, Bitbucket',
        copy: 'This was another website overhaul. their goal was to create a new look that would mainly attract more talent. I had 2 weeks to design and code this new website. Luckily the design didn\'t require too many edits and the website was fairly simple.',
        img: Cavista,
        link: 'https://cassykdesign.com/websites/cavistatech/index.html',
        updated: true,
        updateCopy: 'They have since updated the website and changed their name to Cavista Holdings. Here is a link to what I originally created.',
        identity: 'c-content'
    },
    {
        company: 'Nextiva',
        skillsUsed: 'HTML, SCSS, PHP, JavaScript, Figma, GSAP and tiny bit of WordPress',
        copy: 'I learned a lot from working on this website. It\'s mainly php modules and vanilla javascript, html and css. Their were also the previous Lottie animations that I needed to optimize for low web performance scores. I was able to recreate the animations by using GSAP to greatly improve our scores (see link for one such animation).',
        img: Nextiva,
        link: 'https://web.archive.org/web/20231203114356/https://www.nextiva.com/products/productivity.html',
        updated: true,
        updateCopy: 'They have since ported fully to Wordpress and redesigned the entire site but above is the link to what I originally created via Wayback Machine',
        identity: 'n-content'
    },
    {
        company: 'Density',
        skillsUsed: 'This was a smaller newer company that needed help with a WebFlow site. I had not previously used WebFlow as I prefer coding websites. Though, I have to admit the problems solving opportunities this presented was fun to work through. I was able to really dive in and understand WebFlow\'s limitations and tricks and how to work around them.',
        img: Density,
        link: 'https://atlantisscuba.com/',
        updated: false,
        updateCopy: 'stuff',
        identity: 'd-content'
    },
    {
        company: 'Quote<br/>Friendly',
        skillsUsed: 'HTML, SCSS, JavaScript, AdobeXD',
        copy: 'This website was originally for an insurance company based out of Florida. The goal of this website was to get information for potential customers and an online presence that they could use for advertisements. The client wanted to gather information quickly and easily so the agents had a starting point and the user did not get bored and leave.',
        img: Insurance,
        link: 'https://cassykdesign.com/websites/quotefriendly/index',
        updated: true,
        updateCopy: 'They have since sold their branch and the buyer had their own site so this one was taken down. The above link is the fully built site before it was taken down.',
        identity: 'qf-content'
    }
  ];
  
