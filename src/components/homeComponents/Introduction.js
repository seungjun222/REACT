import React, { useRef } from "react";
import intro from '../../videos/intro.mp4'
import useOnScreen from '../../hooks/useOnScreen';
import './css/Introduction.css'

const Introduction = () => {
  const imageRef = useRef(null);
  const isVisible = useOnScreen(imageRef);

    return(
        <>
            <section className="introduction" id="section__introduction" ref={imageRef}>
                <div className="introduction__inner">
                    <video
                    muted
                    autoPlay
                    loop
                    playsInline
                    className={`introduction__bg ${isVisible ? 'scroll' : ''}`}
                    >
                    <source src={intro} type="video/mp4"></source>
                    </video>
                    <ul>
                    <li className={`introduction__title ${isVisible ? 'scroll' : ''}`}>
                        <h2>피아노의 세계로 초대합니다</h2>
                    </li>
                    <li className={`introduction__keyword ${isVisible ? 'scroll' : ''}`}>
                        <>
                            <span>#PIANO</span>
                            <span>#MUSIC_IS_MY_LIFE</span>
                            <span>#CLASSIC</span>
                            <span>#HOBBY</span>
                        </>
                    </li>
                    <li className={`introduction__logos ${isVisible ? 'scroll' : ''}`}>
                        <div>
                        <img src="/images/piano.png" alt="Piano" />
                        <p>Piano</p>
                        </div>
                        <div>
                        <img src="/images/music.png" alt="Music" />
                        <p>Music</p>
                        </div>
                        <div>
                        <img src="/images/hobby.png" alt="Hobby" />
                        <p>Hobby</p>
                        </div>
                    </li>
                    <li className={`introduction__dsc ${isVisible ? 'scroll' : ''}`}>
                        <>
                            <p>
                            피아노 페어리는 피아노의 모든 것에 대해 친절하게 소개합니다.
                            <br />
                            또한 재미있는 테스트를 통해 자신과 어울리는 클래식 작곡가가 누군지 확인해보세요.
                            </p>
                        </>
                    </li>
                    </ul>
                    <a className={`material-icons ${isVisible ? 'scroll' : ''}`} href="#section__movie">
                    expand_more
                    </a>
                </div>
            </section>
        </>
    )
}

export default Introduction;