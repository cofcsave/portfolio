import React from 'react';
import './Modal.scss';

export default function Modal ({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <div className="modal-body">
        <span className="close" onClick={onClose}>
            <svg viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.47487 1.02513C5.10804 -0.341709 2.89196 -0.341709 1.52513 1.02513C0.158291 2.39196 0.158291 4.60804 1.52513 5.97487L16.8003 21.25L1.52513 36.5251C0.158291 37.892 0.158291 40.108 1.52513 41.4749C2.89196 42.8417 5.10804 42.8417 6.47487 41.4749L21.75 26.1997L37.0251 41.4749C38.392 42.8417 40.608 42.8417 41.9749 41.4749C43.3417 40.108 43.3417 37.892 41.9749 36.5251L26.6997 21.25L41.9749 5.97487C43.3417 4.60804 43.3417 2.39196 41.9749 1.02513C40.608 -0.341709 38.392 -0.341709 37.0251 1.02513L21.75 16.3003L6.47487 1.02513Z" fill="#07DBE3"/>
            </svg>
        </span>
        {children}
      </div>
      </div>
    </div>
  );
};

