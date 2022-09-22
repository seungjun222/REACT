import React, { useEffect, useState } from 'react'
import './css/KakaoShareButton.css';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Modal from 'react-modal';

export function KakaoShareButton(){

    useEffect(() => {
        createKakaoButton();
    }, []);

    // 링크복사를 위한 url 복사
    const url = window.location.href; 

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const modalStyle = {
        overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.45)",
            zIndex: 10,
        },
        content: {
            display: "flex",
            justifyContent: "center",
            background: "black",
            overflow: "auto",
            top: "47vh",
            left: "40vw",
            right: "40vw",
            bottom: "46vh",
            WebkitOverflowScrolling: "touch",
            borderRadius: "14px",
            outline: "solid",
            zIndex: 10,
            color: "#fac92e",
            fontWeight: "bold"
        },
    };

    // 카카오톡 공유하기
    const createKakaoButton = () => {
        if (window.Kakao) {
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) {
            kakao.init('5b89f8f56de5876864101bc85024d9cb');
        }

        window.Kakao.Link.createDefaultButton({
            container: '#create-kakao-link-btn',
            objectType: 'feed',
            content: {
            title: 'PIANO FAIRY',
            description: '작곡가 추천 테스트',
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/7172/7172097.png',
            link: {
                mobileWebUrl: `https://localhost:3000`,
                webUrl: `https://localhost:3000`,
            },
            },
            buttons: [
            {
                title: '매칭 결과 보기',
                link: {
                mobileWebUrl: `https://localhost:3000`,
                webUrl: `https://localhost:3000`,
                },
            },
            ],
        });
        }
    }

    return (
        <div className="sharing__wrapper">
            <div className="sharing__div">
                <a className="sharing__a" id="create-kakao-link-btn" href="#">
                 <img src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" />
                </a>
            </div>
            <CopyToClipboard text={url} className="sharing__div">
                <img src='/images/link.png' onClick={()=> setModalIsOpen(true)}/>
            </CopyToClipboard>
            <Modal isOpen={modalIsOpen} style={modalStyle} onRequestClose={() => setModalIsOpen(false)}>
                링크복사가 완료되었습니다!
            </Modal>
        </div>
      )
      
}
