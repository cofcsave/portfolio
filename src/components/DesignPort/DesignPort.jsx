import './DesignPort.scss';
import Modal from '../Modal/Modal';
import { useState, useEffect } from 'react';
import { DESIGNPORT } from '../../designPortData';
import BoxAnimation from '../Animations/BoxAnimation/BoxAnimation';

export default function DesignPort () {
    const [loadMore, setLoadMore] = useState(false);
    const [loadMore2, setLoadMore2] = useState(false);
    const [onTop, moveToTop] = useState(false);
    const [modals, setModals] = useState({});
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [touchStartY, setTouchStartY] = useState(0);
    const [touchEndY, setTouchEndY] = useState(0);

    useEffect(() => {
        // Check if the device is a touch device
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        setIsTouchDevice(isTouch);
    }, []);

    const handleTouchStart = (e) => {
        setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
        setTouchEndY(e.touches[0].clientY);
    };

    const handleTouchEnd = (modal) => {
        if (Math.abs(touchStartY - touchEndY) < 10) {
            openModal(modal);
        }
    };
    
      const openModal = (modalName) => {
        setModals({ ...modals, [modalName]: true });
        moveToTop(true)
      };
    
      const closeModal = (modalName) => {
        setModals({ ...modals, [modalName]: false });
        moveToTop(false)
      };
    
      const closeAllModals = () => {
        setModals(Object.keys(modals).reduce((acc, key) => {
          acc[key] = false;
          return acc;
        }, {}));
      };

      useEffect(() => {
        const anyModalOpen = Object.values(modals).some(isOpen => isOpen);
        if (anyModalOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [modals]);
    
      return (
        <section className={`designPort ${onTop ? 'topLayer' : ''}`} id='designPortfolio'>
            <div className="headerWDivide">
                <div className="divider"></div>
                <h2>My Design/Email portfolio</h2>
                <p>I've found time and time again that having a design makes me a better coder. Ask me how.</p>
            </div>
            <div className="designCont">
                {DESIGNPORT.slice(0, 7).map((design, index) => <div key={index} className={`designProject div${index + 1}`}>
                    {!isTouchDevice && (
                        <span
                            className="card-hover modal-button"
                            onClick={() => openModal(design.modal)}
                        >
                            <p className='type'>{design.projectType}</p>
                            <p className='projectName'>{design.project}</p>
                        </span>
                    )}
                    <img src={design.img} alt="" onClick={isTouchDevice ? () => openModal(design.modal) : null}
                        onTouchStart={isTouchDevice ? handleTouchStart : null}
                        onTouchMove={isTouchDevice ? handleTouchMove : null}
                        onTouchEnd={isTouchDevice ? () => handleTouchEnd(design.modal) : null}/>
                </div>
                )}
            </div>
            {loadMore && <div> <div className="designCont">
                {DESIGNPORT.slice(7,14).map((design, index) => <div key={index} className={`designProject div${index + 1}`}>
                {!isTouchDevice && (
                        <span
                            className="card-hover modal-button"
                            onClick={() => openModal(design.modal)}
                        >
                            <p className='type'>{design.projectType}</p>
                            <p className='projectName'>{design.project}</p>
                        </span>
                    )}
                    <img src={design.img} alt="" onClick={isTouchDevice ? () => openModal(design.modal) : null}
                        onTouchStart={isTouchDevice ? handleTouchStart : null}
                        onTouchMove={isTouchDevice ? handleTouchMove : null}
                        onTouchEnd={isTouchDevice ? () => handleTouchEnd(design.modal) : null}/>
                </div>
                )}
               
            </div>
            {!loadMore2 && <div className="bottomBtn" onClick={() => setLoadMore2(true)}>
                    <a className="loadMoreBtn btn">load more</a>
                </div>
                }
            </div>
            }
            {loadMore2 && <div className="designCont">
                {DESIGNPORT.slice(14,22).map((design, index) => <div key={index} className={`designProject div${index + 1}`}>
                {!isTouchDevice && (
                        <span
                            className="card-hover modal-button"
                            onClick={() => openModal(design.modal)}
                        >
                            <p className='type'>{design.projectType}</p>
                            <p className='projectName'>{design.project}</p>
                        </span>
                    )}
                    <img src={design.img} alt="" onClick={isTouchDevice ? () => openModal(design.modal) : null}
                        onTouchStart={isTouchDevice ? handleTouchStart : null}
                        onTouchMove={isTouchDevice ? handleTouchMove : null}
                        onTouchEnd={isTouchDevice ? () => handleTouchEnd(design.modal) : null}/>
                </div>
                )}
                {!loadMore2 && <div className="bottomBtn" onClick={() => setLoadMore2(true)}>
                    <a className="loadMoreBtn btn">load more</a>
                </div>
                }
            </div>
            }
            {!loadMore && <div className="bottomBtn" onClick={() => setLoadMore(true)}>
                <a className="loadMoreBtn btn">load more</a>
            </div>
            }
            
            {DESIGNPORT.map((design, index) => (
                <Modal key={`${design.project} ${index}`} isOpen={modals[design.modal]} onClose={() => closeModal(design.modal)} >
                    <p className='type'>{design.projectType}</p>
                    <h3 className='projectName'>{design.project}</h3> 
                    <img src={design.img} alt={design.project} /> 
                    {/* <p>{design.copy}</p>  */}
                </Modal>
            ))}
            <div className="outside-click-handler" onClick={closeAllModals}></div>
            <BoxAnimation color='white' size='sm' />
        </section>
    )
}