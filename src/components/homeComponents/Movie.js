import React from "react";
import ballade from '../../videos/Chopin Ballade in G Minor Scene- The Pianist.mp4'
import './css/Movie.css'

const Movie = () => {
    return(
        <>
            <section className="movie" id="section__movie">
                <div className="movie__inner">
                <div className="movie__title">
                    <img src="/images/the_pianist_logo.png" alt="pianist logo" />
                </div>
                <div className="movie__info">
                    <div className="movie__video">
                    <video muted loop autoPlay playsInline>
                        <source src={ballade} type="video/mp4" />
                    </video>
                    <p>&lt;영화 '피아니스트'의 한 장면&gt;</p>
                    </div>
                    <div className="movie__dsc">
                        <p>
                        2차 세계 대전이 시작된 1939년 폴란드 바르샤바, 유명한 유대계 피아니스트 스필만은 쇼팽의 녹턴을 연주하다 폭격을 당한다.
                        <br />
                        가족들이 모두 죽고 간신히 목숨을 구한 스필만은 허기와 추위, 고독과 공포 속에서 마지막까지 생존을 지켜나간다.
                        <br />
                        어둠과 추위로 가득한 폐건물 속에서 은신생활 중 스필만은 우연히 순찰을 돌던 독일군 장교에게 발각되고 생에 마지막 연주가 될 지도 모르는 순간, 온 영혼을 손끝에 실어 연주를 시작한다.
                        </p>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Movie;