import React from 'react';
import './css/PianoInfo.css';

const PianoInfo = () => {
    return(
        <>
            <section className="pianoInfo" id="section__pianoInfo">
                <div className="pianoInfo__inner">
                <div className="pianoInfo__title">
                    <img src="/images/which_piano_do_you_want_to_know.png" alt="pianoInfo" />
                    <span>피아노를 클릭하여 정보를 확인해보세요</span>

                </div>
                <div className="pianoInfo__pianos">
                        <a href="/piano/yamaha">
                        <img className="piano" src="/images/grand_yamaha.jpg" alt="yamaha" />
                        </a>
                        <a href="/piano/steinway">
                        <img className="piano" src="/images/grand_steinway3.jpg" alt="steinway" />
                        </a>
                        <a href="/piano/boesendorfer">
                        <img className="piano" src="/images/grand_boesendorfer2.jpg" alt="boesendorfer" />
                        </a>
                </div>
                <div className='pianoInfo__brands'>( 세계 3대 피아노 브랜드, 왼쪽부터 야마하, 스타인웨이, 뵈젠도르퍼 )</div>
                </div>
            </section>
        </>
    )
}

export default PianoInfo;