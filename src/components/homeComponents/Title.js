import React from "react";
import background from '../../videos/piano_background.mp4'
import './css/Title.css'

const Title = () => {
    return(
        <>
            <section className="title" id="section__title">
                <div className="title__inner">
                    <>
                        <img src="/images/piano_fairy_big2.png" alt="PIANO FAIRY" />
                        <h3>FALL IN LOVE WITH PIANO</h3>
                    </>
                </div>
                <video muted autoPlay loop playsInline id="bg-video">
                    <source src={background} type="video/mp4" />
                </video>
          </section>
        </>
    )
}

export default Title;