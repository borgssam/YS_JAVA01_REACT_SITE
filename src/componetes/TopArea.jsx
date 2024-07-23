import {TitleZone}  from './TitleZone';
import {MenuZone}   from './MenuZone';
import {SliderZone} from './SliderZone';

export function TopArea(){
  return (
    // 상단Area시작
    <div id="topArea">
      <TitleZone/>
      <MenuZone/>
      <SliderZone/>
    </div>
    // 상단Area끝
    

  );
}

// <!-- 상단Area시작 -->
//         <div id="topArea">

//         </div>
//         <!-- 상단Area끝 -->

//             <script>
//                 $(function(){
//                     const $sliderPanel = $('.slider_panel');
//                     const $controlBtns = $('.control_btn');
//                     const $leftBtn     = $('.left_btn img');
//                     const $rightBtn    = $('.right_btn img');

//                     let currentIndex = 0;
//                     function updateSlider(index){
//                         $sliderPanel.css('left', `-${index * 100}%`);
//                         $controlBtns.removeClass('active');
//                         $controlBtns.eq(index).addClass('active');
//                     }

//                     $leftBtn.on('click',function(){
//                         currentIndex--;
//                         if(currentIndex<0){
//                             currentIndex=0;
//                         }
//                         updateSlider(currentIndex);
//                     });
//                     $rightBtn.on('click', function(){
//                         currentIndex++;
//                         if(currentIndex>2){
//                             currentIndex=2;
//                         }
//                         updateSlider(currentIndex);
//                     });

//                     $controlBtns.on('click',function(){
//                         currentIndex = parseInt($(this).data('index'));
//                         updateSlider(currentIndex);

//                     });
//                     setInterval(function(){
//                         currentIndex=(currentIndex+1) % $controlBtns.length;
//                         updateSlider(currentIndex);
//                     }, 3000);
//                 });
//             </script>