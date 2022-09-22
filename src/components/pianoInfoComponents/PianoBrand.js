import React from 'react';

import './css/PianoBrand.css';

const PianoBrand = ({ pianoId }) => {
  // yamaha: 1, steinway: 2, boesendorfer: 3

  return (
    <>
      <section className="memberinfo">
        <div className="memberinfo__inner">
          <div className="memberinfo__img">
            {pianoId === 1 && <img src="/images/grand_yamaha.jpg" alt="YAMAHA" />}
            {pianoId === 2 && <img src="/images/grand_steinway3.jpg" alt="STEINWAY" />}
            {pianoId === 3 && <img src="/images/grand_boesendorfer2.jpg" alt="BOESENDORFER" />}
            
          </div>
          <div className="memberinfo__dsc">
            {pianoId === 1 && (
              <>
                <h2>YAMAHA</h2>
                <p>
                  야마하는 세계 최대의 음향 전문 기업으로, 1887년 이후 피아노를 만들기 시작한 이래로, 스타인웨이, 뵈젠도르퍼와 함께 세계 3대 피아노 중 하나로 꼽히고 있다. 일례로 쇼팽 국제 피아노 콩쿠르에서는 스타인웨이, 야마하, 카와이 중 하나의 그랜드 피아노를 선택할 수 있다. 1969년부터 쭉 피아노 판매량/매출 전세계 1위를 기록하고 있다.
                </p>
              </>
            )}
            {pianoId === 2 && (
              <>
                <h2>STEINWAY</h2>
                <p>
                  미국 뉴욕과 독일 함부르크에 회사를 둔 피아노 제조사이다. 피아니스트들에게는 명기로 손꼽히며 대중적인 인지도도 뵈젠도르퍼나 베히슈타인보다도 더 높다. 후발 주자들인 이탈리아의 파치올리와 일본의 야마하, 카와이 악기 제작소 등의 업체도 나름대로 선전하고 있지만, 아직 스타인웨이의 보급도를 따라잡지는 못하고 있어, 전 세계 97%의 콘서트홀, 오케스트라 피아노 솔리스트가 스타인웨이 피아노를 사용한다.
                </p>
              </>
            )}
            {pianoId === 3 && (
              <>
                <h2>BÖSENDORFER</h2>
                <p>
                  1828년에 오스트리아 비엔나에서 창립한 피아노 제조회사. 여기서 제작되고 있는 피아노의 브랜드 이름이기도 하다. 현재는 야마하에 인수되었다. 세계 3대 피아노 회사로 불리고 있으며, 특유의 어둡고 풍부한 음색으로 인해 베토벤의 곡에 잘 어울린다는 평이 있다. 비엔나에서 개최되는 국제 베토벤 피아노 콩쿠르에 공식 피아노로 사용되고 있다. 
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PianoBrand;
