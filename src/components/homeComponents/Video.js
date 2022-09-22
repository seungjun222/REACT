import React from 'react';
import yamaha from '../../videos/yamaha.mp4';
import './css/Video.css';

const Video = () => {
    return(
        <>
            <section className="pianoVideo" id="section__pianoVideo">
                <div className="pianoVideo__inner">
                <video controls muted autoPlay loop playsInline>
                    <source src={yamaha} type="video/mp4" />
                </video>
                </div>
            </section>
        </>
    )
}
export default Video;
