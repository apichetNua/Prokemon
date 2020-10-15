import React,{useState} from "react";
import PropType from "prop-types";
import { connect } from "react-redux";
let index = 0;
let i = 0;

const Post = ({ id, KeyId, name, hp, str, weak, dmg, img,happiness, AddPost }) => {
  let ArrayImage = [];

  function Addimage(){
    for(let i=0;i<happiness;i++){
      ArrayImage.push(
        <img
            src="./cute.png"
            style={{width: "12%",marginRight:"12"}}
        />,
        );
      }
    return <div>{ArrayImage}</div> 
  }
 

    return (
    <div className="Post">
      <h1
        className="Add"
        onClick={() => AddPost(id, name, hp, str, weak, dmg, img,happiness, KeyId)}
      >
        ADD
      </h1>
      <img src={img} width="30%" height="100%" />
      
      <div className="Detail">
        <h3 className="name">{name}</h3>
        <div className="Bar">
                    <h3 className="Hp">{"Hp:"}</h3>
                    <div className="BarHp" style={{width:"30rem"}}>
                            <p  className="hpBar"  id="hpB" style={{width:hp+"%"}}></p>
                        </div>
                    <h3 className="Str">{"Str:"}</h3><br/>
                      <div className="BarStr" style={{width:"30rem"}}>
                            <div  className="strBar" style={{width:str+"%"}}></div>
                     </div>
                     <h3 className="Weak">{"Weak:"}</h3><br/>
                      <div className="BarWeak" style={{width:"30rem"}}>
                            <div  className="weakBar" style={{width:weak+"%"}}></div>
                     </div>
                    </div>
    <div className="FlexEmo">{Addimage()}</div>
                    
                    
      </div>
    </div>
  );
};
Post.PropType = {
  id: PropType.number.isRequired,
  title: PropType.string.isRequired,
  deletePost: PropType.func.isRequired,
};
export default connect()(Post);
