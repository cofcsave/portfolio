import './WebPort.scss';
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useScreenSize } from '../../hooks/useScreenSize';
import { WEBPORT } from '../../webPortData';
import BoxAnimation from '../Animations/BoxAnimation/BoxAnimation';

const WebPort = () => {
  const [activeTab, setActiveTab] = useState('as-content');
  const [arrowStyle, setArrowStyle] = useState({ left: '0%' });
  const isMobile = useScreenSize(991);
  const sliderRef = useRef(null);
  const [currentHeight, setCurrentHeight] = useState(0);

  const showPortContent = (tabTitle) => {
    setActiveTab(tabTitle);
    let newArrowStyle = {};
    switch (tabTitle) {
      case 'as-content':
        newArrowStyle = { left: '0%' };
        break;
      case 'lm-content':
        newArrowStyle = { left: 'calc(20% - 15px)' };
        break;
      case 'c-content':
        newArrowStyle = { left: 'calc((20% * 2) - 30px)' };
        break;
      case 'n-content':
        newArrowStyle = { left: 'calc((20% * 3) - 45px)' };
        break;
      case 'd-content':
        newArrowStyle = { left: 'calc((20% * 4) - 60px)' };
        break;
      case 'qf-content':
        newArrowStyle = { left: 'calc((20% * 5) - 75px)' };
        break;
      default:
        newArrowStyle = {};
        break;
    }
    setArrowStyle(newArrowStyle);
  };

  const updateHeight = () => {
    if (sliderRef.current && sliderRef.current.innerSlider) {
      const activeSlide = sliderRef.current.innerSlider.list.querySelector('.slick-active');
      if (activeSlide) {
        setCurrentHeight(activeSlide.offsetHeight);
      }
    }
  };

  useEffect(() => {
    if (isMobile) {
      setTimeout(updateHeight, 100); // Small delay to ensure slider renders correctly
      window.addEventListener('resize', updateHeight);
      return () => {
        window.removeEventListener('resize', updateHeight);
      };
    }
  }, [isMobile]);

  useEffect(() => {
    setTimeout(updateHeight, 100); // Small delay to ensure slider renders correctly
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: updateHeight,
  };

  return (
    <section className="webPortfolio" id="portfolio">
      <div className="headerWDivide">
        <div className="divider"></div>
        <h2>My Web Portfolio</h2>
        <p>Some of my biggest and brightest web&nbsp;moments</p>
      </div>
      {!isMobile && (
        <>
          <div className="webPortTabsContainer">
            <div className="wpTabs">
              <div className="tabsContainer">
                {WEBPORT.map((site) => (
                  <div
                    key={site.identity}
                    className={`tab ${activeTab === site.identity ? 'active' : ''}`}
                    onClick={() => showPortContent(site.identity)}
                  >
                    <p dangerouslySetInnerHTML={{ __html: site.company }}></p>
                  </div>
                ))}
                <div className="arrowIndicator" style={arrowStyle}>
                  <svg
                    width="41"
                    height="22"
                    viewBox="0 0 41 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="arrowBack"
                      d="M20.5 20L41 -3.8147e-06L-1.74846e-06 -2.30363e-07L20.5 20Z"
                    />
                    <path
                      className="arrowStroke"
                      d="M38 3L20.5 20L3 3"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="webContentContainer">
            <div className="webPort">
              {WEBPORT.map((site) => (
                <div
                  key={site.company}
                  className={`webPotDesc ${site.identity} ${
                    activeTab === site.identity ? 'active' : ''
                  }`}
                >
                  <div className="leftContent">
                    <h2 className="projectName">
                      {site.company.replace(/<br\s*\/?>/gi, ' ')}
                    </h2>
                    <p className="usedTech">{site.skillsUsed}</p>
                    <p className="description">{site.copy}</p>
                    <a href="" className="btn">
                      Visit Site{' '}
                      <svg
                        width="10"
                        height="13"
                        viewBox="0 0 10 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11.5L7 6.5L2 1.5"
                          stroke="#C107E3"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </a>
                    {site.updated && (
                      <p className="newSite">{site.updateCopy}</p>
                    )}
                  </div>
                  <div className="rightContent">
                    <h2 className="projectName">{site.company}</h2>
                    <img src={site.img} alt="Luminant Music Screens" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {isMobile && (
        <div className="webContentContainer" style={{ height: `${currentHeight}px` }}>
          <div className="webPortMobile">
            <div className="arrowsMobile">
              <div onClick={() => sliderRef?.current?.slickPrev()}>
                <svg
                  width="25"
                  height="60"
                  viewBox="0 0 25 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.2586 56.4141L4 29.8623L21.2586 3.31061"
                    stroke="#07DBE3"
                    strokeWidth="5.97414"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div onClick={() => sliderRef?.current?.slickNext()}>
                <svg
                  width="24"
                  height="60"
                  viewBox="0 0 24 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.00017 3L20.2588 29.5517L3.00017 56.1034"
                    stroke="#07DBE3"
                    strokeWidth="5.97414"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <Slider ref={sliderRef} {...settings}>
              {WEBPORT.map((site) => (
                <div key={site.company} className="webPortMobile">
                  <h2 className="projectName">
                    {site.company.replace(/<br\s*\/?>/gi, ' ')}
                  </h2>
                  <img
                    src={site.img}
                    alt={`${site.company.replace(/<br\s*\/?>/gi, ' ')} screens`}
                  />
                  <p className="usedTech">{site.skillsUsed}</p>
                  <p className="description">{site.copy}</p>
                  <a href={site.link} className="btn">
                    Visit Site{' '}
                    <svg
                      width="10"
                      height="13"
                      viewBox="0 0 10 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11.5L7 6.5L2 1.5"
                        stroke="#C107E3"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                  {site.updated && (
                    <p className="newSite">{site.updateCopy}</p>
                  )}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
      <BoxAnimation color="blue" size="sm" />
    </section>
  );
};

export default WebPort;
