import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Navigation.css';

const Navigation = () => {
    const [menu, setMenu] = useState(false); // 햄버거 버튼
    
    const navigate = useNavigate();
    const onMoveMain = () => {
      
      navigate('/');
    };

    return(
        <>
            <header>
                <nav className="inner">
                <a href="/" className="logo">
                    <img src="/images/piano_fairy_color.png" alt="FASHION SCANNER" />
                </a>
                <span
                    className="material-icons"
                    onClick={() => {
                    setMenu(!menu);
                    }}
                >
                    menu
                </span>
                <div className={`link-group ${menu === true ? 'active' : ''}`}>
                    <ul className="link">
                    <li>
                        <a href="#section__introduction" onClick={onMoveMain}>
                        서비스 소개
                        </a>
                    </li>
                    <li>
                        <a href="#section__pianoInfo" onClick={onMoveMain}>
                        피아노 알아보기
                        </a>
                    </li>
                    <li>
                        <a href="#section__composerMatching" onClick={onMoveMain}>
                        테스트하기
                        </a>
                    </li>
                    </ul>
                </div>
                
                </nav>
            </header>
        </>
    )
}

export default Navigation;