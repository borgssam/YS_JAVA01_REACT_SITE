import "../styles/BodyArea.css";
import {LeftmenuZone} from "./LeftmenuZone";
import { ContentsZone } from "./ContentsZone";
import { LeftmenuZone_1 } from "./LeftmenuZone_1";
import { LeftmenuZone_2 } from "./LeftmenuZone_2";
import { LeftmenuZone_3 } from "./LeftmenuZone_3";
import { LeftmenuZone_4 } from "./LeftmenuZone_4";
import { LeftmenuZone_5 } from "./LeftmenuZone_5";
import { LeftmenuZone_6 } from "./LeftmenuZone_6";

export function BodyArea({leftMenu}){
  const leftMenuPage =()=>{
    console.log('leftMenu=> '+leftMenu);
    switch(leftMenu){
      case 1:
        return <LeftmenuZone_1/>;
      case 2:
        return <LeftmenuZone_2/>;
      case 3:
        return <LeftmenuZone_3/>;
      case 4:
        return <LeftmenuZone_4/>;
      case 5:
        return <LeftmenuZone_5/>;
      case 6:
        return <LeftmenuZone_6/>;
      default:
        return <LeftmenuZone_1/>;
    }
  };

  return (
    <div id="bodyArea">
      {/* <LeftmenuZone/>       */}
      {leftMenuPage()}
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

