import React from 'react'

export default function PostDataAdd({id,name,hp,str,weak,dmg,img,happiness,DeleteData}) {

    let ArrayImage = [];

    function Addimage(){
      for(let i=0;i<happiness;i++){
        ArrayImage.push(
          <img
              src="./cute.png"
              style={{width: "18%",marginRight:"12"}}
          />,
          );
        }
      return <div>{ArrayImage}</div> 
    }

    return (
        <div className="ConCenter">
            <h1 className="AddData" onClick={() => DeleteData(id,name,hp,str,weak,dmg,img,happiness)}>X</h1>
             <img className="Imageee" src={img} width="37%"/>

             <div className="Detail_Data">
                    <h3 className="name">{name}</h3>
                    <div className="Bar">
                    <h3 className="Hp">{"Hp:"}</h3>
                    <div className="BarHp">
                            <p  className="hpBar"  id="hpB" style={{width:hp+"px"}}></p>
                        </div>
                    <h3 className="Str">{"Str:"}</h3><br/>
                      <div className="BarStr">
                            <div  className="strBar" style={{width:str+"px"}}></div>
                     </div>
                     <h3 className="Weak">{"Weak:"}</h3><br/>
                      <div className="BarWeak" >
                            <div  className="weakBar" style={{width:weak+"px"}}></div>
                     </div>
                    </div>
                    <div className="FlexEmoData">{Addimage()}</div>
                    
             </div>
           </div>
       
    )
}
