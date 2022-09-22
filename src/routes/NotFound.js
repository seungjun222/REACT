import React from 'react';
import './css/NotFound.css';

const NotFound = () => {
  return (
    <>
      {/* NOT FOUND MAIN PAGE */}
      <div className="notfound">
        <div className="notfound__inner">
          <div className="notfound__img">
            <img src="/images/notfound.jpg" alt="seongjincho" />
          </div>
          <div className="notfound__dsc">
            <span id='not'>페이지를 찾을 수 없습니다.</span>
            <span>입력하신 주소를 다시 한 번 확인해주세요.</span>
            <a href="/">메인페이지 바로가기</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
