import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './css/Footer.css';

const Footer = () => {
    return(
        <>
            <footer>
                <div className="inner">
                    <div className="info">
                        <div className="info__contact">
                            <ul>
                                <li>
                                <img src="/images/piano_fairy.png" alt="FASHION SCANNER" />
                                </li>
                                <li>
                                <p>
                                    <span className="material-icons">place</span>
                                    서울특별시 강남구 선릉로 123 xx 아파트 x 층{' '}
                                </p>
                                </li>
                                <li>
                                <p>
                                    <span className="material-icons">phone</span>
                                    010-7366-3903
                                </p>
                                </li>
                                <li>
                                <p>
                                    <span className="material-icons">email</span>
                                    eoseungjun7@naver.com
                                </p>
                                </li>
                            </ul>
                        </div>
                        <div className="info__team">
                            <ul>
                                <li className="team__dev">
                                <ul>
                                    <li>
                                    <a href="/devTeam">조직문화</a>
                                    </li>
                                    <li>
                                    <a href="/faq">자주 묻는 질문</a>
                                    </li>
                                </ul>
                                </li>
                                <li className="team__sns">
                                <ul>
                                    <li>
                                    <h3>GET TO KNOW US</h3>
                                    </li>
                                    <li>
                                    <a href="https://www.facebook.com/facebook" target={'_blank'} rel={'noopener noreferrer'}>
                                        <FontAwesomeIcon icon={faFacebook} className="sns__icon" />
                                    </a>
                                    <a href="https://www.instagram.com/instagram" target={'_blank'} rel={'noopener noreferrer'}>
                                        <FontAwesomeIcon icon={faInstagram} className="sns__icon" />
                                    </a>
                                    <a href='https://twitter.com/twitter' target={'_blank'} rel={'noopener noreferrer'}>
                                    <FontAwesomeIcon icon={faTwitter} className="sns__icon" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>
                        <span className="material-icons">copyright</span>
                        Copyright Piano Fairy. All Rights Reserved, 2022
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;