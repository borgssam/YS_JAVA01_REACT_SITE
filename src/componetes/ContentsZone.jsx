import "../styles/ContentsZone.css";
import img01 from "../img/album_01.jpg"
export function ContentsZone(){
  const _img02 = "../img/album_02.jpg";
  const items = [
    {img:require("../img/album_01.jpg"), date:"2015-01-01", view_count:121, content:"1.비가 오나 눈이 오나 걱정없는 실내 바비큐장에서 사계절 편안하게 드세요~본 내용은 샘플로 작성되었으며 추후에 관리자가 펜션에 맞게 직접 내용을 등록하실 수 있습니다. 감사합니다."},
    {img:require("../img/album_02.jpg"), date:"2015-02-02", view_count:122, content:"2.비가 오나 눈이 오나 걱정없는 실내 바비큐장에서 사계절 편안하게 드세요~본 내용은 샘플로 작성되었으며 추후에 관리자가 펜션에 맞게 직접 내용을 등록하실 수 있습니다. 감사합니다."},
    {img:require("../img/album_03.jpg"), date:"2015-03-03", view_count:123, content:"3.비가 오나 눈이 오나 걱정없는 실내 바비큐장에서 사계절 편안하게 드세요~본 내용은 샘플로 작성되었으며 추후에 관리자가 펜션에 맞게 직접 내용을 등록하실 수 있습니다. 감사합니다."},
  ];
  return (
//     <!-- 내용Zone시작 -->
    <div id="contentsZone">
        <div className="contents_title">특별함</div>
        <div id="article" className="contents">
            <h3>사계절 낭만이 있는 곳에서 행복한 추억을 많이 만들어 가세요</h3>
            <table className="album" border="0" style={{width: '100%'}}>
                {
                    items.map( (item, index) => (

                    <tr key={index}>
                        <td>
                            <a href="#">
                                <img src={item.img} width="160" alt="12"/>
                            </a>
                        </td>
                        <td>
                            <a href="#">
                                {item.content}
                                <div align="right">
                                  [<font style={{color:'#878787',fontSize:12}}>작성일자 : {item.date}</font>, 
                                  <font  style={{color:'#878787',fontSize:12}}>조회수 : {item.view_count}</font>]
                                </div>                         
                            </a>
                        </td>
                    </tr>
                     ) )
                }
                {/* <tr>
                    <td>
                        <a href="#">
                            <img src="../img/album_01.jpg" width="160" alt=""/>
                        </a>
                    </td>
                    <td>
                        <a href="#">
                            비가 오나 눈이 오나 걱정없는 실내 바비큐장에서 사계절 편안하게 드세요~본 내용은 샘플로 작성되었으며 추후에 관리자가 펜션에 맞게 직접 내용을 등록하실 수 있습니다.  감사합니다.                                    
                            <div align="right">
                              [<font style={{color:'#878787',fontSize:12}}>작성일자 : 2015-12-27</font>, <font style={{color:'#878787',fontSize:12}}>조회수 : 51</font>]
                            </div>                         
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="#">
                            <img src={img01} width="160" alt=""/>
                        </a>
                    </td>
                    <td>
                        <a href="#">
                            비가 오나 눈이 오나 걱정없는 실내 바비큐장에서 사계절 편안하게 드세요~본 내용은 샘플로 작성되었으며 추후에 관리자가 펜션에 맞게 직접 내용을 등록하실 수 있습니다.  감사합니다.                                    
                            <div align="right">
                              [<font style={{color:'#878787',fontSize:12}}>작성일자 : 2015-12-27</font>,
                               <font style={{color:'#878787',fontSize:12}}>조회수 : 51</font>]
                            </div>                         
                        </a>
                    </td>
                </tr> */}
            </table>
        </div>

    </div>
//     <!-- 내용Zone끝 -->
  );
}

