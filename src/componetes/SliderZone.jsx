import left_btnImg from '../img/left_btn.png';
import right_btnImg from '../img/right_btn.png';
import slider1 from '../img/1.jpg';
import slider2 from '../img/2.jpg';
import slider3 from '../img/3.jpg';
import "../styles/SliderZone.css"


export function SliderZone(){
  return (

    // <!-- 슬라이더Zone시작 -->
    <div id="sliderZone">
        <div id="sub_photo_bg">
            <ul className="slider_panel">
                <li className="slider_image"><img src={slider1} alt=""/></li>
                <li className="slider_image"><img src={slider2} alt=""/></li>
                <li className="slider_image"><img src={slider3} alt=""/></li> 
            </ul>
            <div className="control_panel">
                <div className="control_btn active"  data-index="0"></div>
                <div className="control_btn" data-index="1"></div>
                <div className="control_btn" data-index="2"></div>
            </div>
            <div className="direct_btn">
                <div className="left_btn"><img src={left_btnImg} alt=""/></div>
                <div className="right_btn"><img src={right_btnImg} alt=""/></div>
            </div>
        </div>
    </div>
    // <!-- 슬라이더Zone끝 --> 
  );
}
