import '../styles/MenuZone.css';
export function MenuZone({setLeftMenu}){
  return (
    // <!-- 메뉴Zone시작 -->
    <div id="menuZone">
        <ul class="mainmenu">
            <li>
                <a href="#">캠핑장소개</a>
                <ul class="submenu">
                    <li><a href="#"
                     onClick={(event)=>{event.preventDefault(); setLeftMenu(1)} }
                     >인사말</a></li>
                    <li><a href="#" onClick={(event)=>{event.preventDefault(); setLeftMenu(1)} }>시설보기</a></li>
                    <li><a href="#" onClick={(event)=>{event.preventDefault(); setLeftMenu(1)} }>오시는길</a></li>
                </ul>
            </li>
            <li>
                <a href="#">사이트보기</a>
                <ul class="submenu">
                    <li><a href="#"
                     onClick={(event)=>{event.preventDefault(); setLeftMenu(2)} }>시설물보기</a></li>
                </ul>
            </li>
            <li>
                <a href="#">예약안내</a>
                <ul class="submenu">
                    <li><a href="#"
                    
                    onClick={(event)=>{event.preventDefault(); setLeftMenu(3)} }
                    >예약안내</a></li>
                    <li><a href="#" onClick={(event)=>{event.preventDefault(); setLeftMenu(3)} }>실시간예약</a></li>
                </ul>
            </li>
            <li>
                <a href="#">특별함</a>
                <ul class="submenu">
                    <li><a href="#" onClick={(event)=>{event.preventDefault(); setLeftMenu(4)} }>특별함</a></li>
                </ul>
            </li>
            <li>
                <a href="#">인기여행지</a>
                <ul class="submenu">
                    <li><a href="#" onClick={(event)=>{event.preventDefault(); setLeftMenu(5)} }>인근여행지</a></li>
                </ul>
            </li>
            <li>
                <a href="#">커뮤니티</a>
                <ul class="submenu">
                    <li><a href="#" onClick={(event)=>{event.preventDefault(); setLeftMenu(6)} }>공지사항</a></li>
                    <li><a href="#" onClick={(event)=>{event.preventDefault(); setLeftMenu(6)} }>고객문의</a></li>
                    <li><a href="#" onClick={(event)=>{event.preventDefault(); setLeftMenu(6)} }>이용후기</a></li>
                    <li><a href="#" onClick={(event)=>{event.preventDefault(); setLeftMenu(6)} }>포토갤러리</a></li>
                </ul>
            </li>
        </ul>
    </div>
    // <!-- 메뉴Zone끝 -->
  );
}


  