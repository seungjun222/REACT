import React, { useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import './css/Others.css';

const Others = () => {
  const imageRef = useRef(null);
  const isVisible = useOnScreen(imageRef);

  return (
    <>
      <section className="others">
        <div className="others__inner">
          <div className="others__title">
            <h2>CHECK OUT THE OTHER BRAND</h2>
          </div>
          <div className="others__img" ref={imageRef}>
            <div className="img__line1">
              <a href="/piano/yamaha">
                <img
                  className={`img1 ${isVisible ? 'scroll' : ''}`}
                  src="/images/logo_y.jpeg"
                  alt="YAMAHA"
                />
              </a>
              <a href="/piano/steinway">
                <img
                  className={`img2 ${isVisible ? 'scroll' : ''}`}
                  src="/images/logo_s.jpg"
                  alt="STEINWAY"
                />
              </a>
            </div>
            <div className="img__line2">
              <a href="/piano/boesendorfer">
                <img
                  className={`img3 ${isVisible ? 'scroll' : ''}`}
                  src="/images/logo_b.jpg"
                  alt="BOESENDORFER"
                />
              </a>
              <a href="https://luxury-pianos.com/best-piano-brands-in-the-world" target={'_blank'} rel={'noopener noreferrer'}>
                <img
                  className={`img4 ${isVisible ? 'scroll' : ''}`}
                  src="/images/logo_others.png"
                  alt="OTHERS"
                />
              </a> 
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Others;
