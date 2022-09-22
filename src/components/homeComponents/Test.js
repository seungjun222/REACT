import React from 'react';
import './css/Test.css';

const Test = () => {
    return(
        <>
            <section className="composerMatching" id="section__composerMatching">
                <div className="composerMatching__inner">
                <div className="composerMatching__contents">
                    <div className="contents__title">
                    <img src="/images/matching_logo1.png" alt="WHO IS THE COMPOSER" />
                    <img src="/images/matching_logo2.png" alt="THAT MATCHES YOU?" />
                    </div>
                    <div className="contents__dsc">
                    <p>
                        테스트를 통해 자신과 가장 어울리는 클래식 작곡가를 추천해드립니다.
                        <br />
                        해당 작곡가 소개, 대표곡, 난이도, 특징들을 알려드립니다.
                    </p>
                    </div>

                    <div className="contents__btn">
                    <a href="/testcontents">바로가기</a>
                    </div>

                </div>
                <div className="composerMatching__img">
                    <img src="/images/rachmaninoff.png" alt="RACHMANINOFF" />
                </div>

                </div>
            </section>
        </>
    )
}

export default Test;