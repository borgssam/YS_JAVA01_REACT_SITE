import "../styles/LeftmenuZone.css";
export function LeftmenuZone_6(){
  return (
    // <!-- 왼쪽메뉴Zone시작 -->
    <div id="leftmenuZone">
        <div id="left_menu_box">
            <span className="left_menu_title">커뮤니티</span>
            <ul>
            <li className="left_menu"><a href="#">공지사항</a></li>
            <li className="left_menu"><a href="#">고객문의</a></li>
            <li className="left_menu"><a href="#">이용후기</a></li>
            <li className="left_menu"><a href="#">포토갤러리</a></li>
            </ul>
        </div>
        <div id="left_banner_box">
            <span className="left_banner_title">고객센터</span>
            <ul>
                <li className="left_banner">010-1234-1515</li>
                <li className="left_banner">농혐 000-00-00000<br/>홍길동</li>
            </ul>
        </div>
    </div>
    // <!-- 왼쪽메뉴Zone끝 --> 
  );
}
