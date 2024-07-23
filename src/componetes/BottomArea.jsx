import { HotmenuZone } from "./HotmenuZone";
import { AddrZone } from "./AddrZone";

export function BottomArea(){
  return (
    <div id="bottomArea">
      <HotmenuZone/>
      <AddrZone/>    
    </div>
  );
}