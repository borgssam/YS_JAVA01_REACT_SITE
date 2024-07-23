import "../styles/BodyArea.css";
import {LeftmenuZone} from "./LeftmenuZone";
import { ContentsZone } from "./ContentsZone";

export function BodyArea(){
  return (
    <div id="bodyArea">
      <LeftmenuZone/>      
      <ContentsZone/>
    </div>


// <!-- 본문Area시작 -->
// <style>

// </style>

// <div id="bodyArea">
// </div>
// <!-- 본문Area끝 -->


  );
}

