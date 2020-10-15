import React,{useState,useEffect} from 'react'
import Navbar from './component/Navbar.js'
import Footer from './component/Footer.js'
import { connect } from "react-redux";
import Post from "./component/Post.js";
import Conteiner from './component/Conteiner.js'
import Actionpopup from './component/actionPopup.js'
import './App.css'
const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}


let id = 1;
let fetc = 0;
let go = 1;
let index = 0;
let ArrayIf1 = 0;
let ArrayIf2 = 0;
let ArrayIf3 = 0;
let ArrayIf4 = 0;
let indexx = 0;
let dataArray = [];
let updatePokemon;
const App = ({  dispatch, counters}) => {
  const [pokemon, setPokemon] = useState([]);
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState([]);

  let Hp = 0;
  let Str = 0;
  let Weak = 0;
  let Atk_A = 0;
  let Atk_B = 0;
  let Damage = 0;
  let name;
  let happiness = 0;
  function* addPost(name, hp, str, weak, damage, img,happiness, id, KeyId) {
    const newPost = { id, name, hp, str, weak, damage, img,happiness, KeyId };
    console.log(newPost)
    yield setPosts((posts) => [...posts, newPost]);
  }

  function AddPost(id, name, hp, str, weak, dmg, img,happiness, KeyId) {
    dataArray = [];
    // console.log("Key : "+KeyId)
    // console.log(typeof(pokemon))
    const updatePosts = posts.filter((post) => post.id !== id);
    if (index >= 1) {
      counters.counters.map((counter) => (
        <Conteiner key={counter.id} counter={counter} />
      ));
      updatePokemon = pokemon.filter((cards) => cards.id !== KeyId);
    } else {
      updatePokemon = pokemon.cards.filter((cards) => cards.id !== KeyId);
    }
    index++;
    const dataSet = {
      id: index,
      name,
      hp,
      str,
      weak,
      dmg,
      img,
      happiness
    };
    dispatch({
      type: "Add",
      dataSet,
    });

    setPokemon(updatePokemon);
    dataArray = updatePosts;
    setPosts(updatePosts);
  }
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "http://localhost:3030/api/cards?limit=20&name&type&fbclid=IwAR3tDn17cB2ZX7OP021jt5nk_aIdbyK6cr8n7syDmV5vI85QCJ-PLs5ZrKY"
      );

      res.json().then((res) => setPokemon(res));
    }
    if (fetc === 0) {
      fetchData();
    }
    fetc++;
  });
  // console.log(pokemon)

  function ShowData() {
    // console.log(dataArray.length);
    for (let i = 0; i < dataArray.length; i++) {
      if (i <= 20) {
        // console.log(dataArray);
        addPostPokedox(dataArray[i]);
      }
    }
  }

  function onKeyDown() {
    const Input = document.querySelector(".Input");
    setPosts((posts) => []);
    id = 1;
    dataArray = [];
    ArrayIf1 = 0;
    ArrayIf2 = 0;
    ArrayIf3 = 0;
    ArrayIf4 = 0;

    if (indexx >= 1 && index >= 1) {
      for (let i = 0; i < Object.keys(pokemon).length; i++) {
        const name = JSON.stringify(pokemon[i].name);
        const type = JSON.stringify(pokemon[i].type);

        if (
          Input.value.toUpperCase() === JSON.parse(name).toUpperCase() ||
          Input.value.toUpperCase() === JSON.parse(type).toUpperCase()
        ) {
          if (ArrayIf1 === 0) {
            dataArray = [];
          }

          const data = pokemon[i];
          dataArray.push(data);
          ArrayIf1++;
        }
        if (ArrayIf1 === 0) {
          if (ArrayIf2 === 0) {
            dataArray = [];
          }
          const data = pokemon[i];
          dataArray.push(data);
          ArrayIf2++;
        }
      }
    } else {
      for (let i = 0; i < Object.keys(pokemon.cards).length; i++) {
        const name = JSON.stringify(pokemon.cards[i].name);
        const type = JSON.stringify(pokemon.cards[i].type);
        if (
          Input.value.toUpperCase() === JSON.parse(name).toUpperCase() ||
          Input.value.toUpperCase() === JSON.parse(type).toUpperCase()
        ) {
          if (ArrayIf3 === 0) {
            dataArray = [];
          }
          const data = pokemon.cards[i];
          dataArray.push(data);
          ArrayIf3++;
        }
        if (ArrayIf3 === 0) {
          if (ArrayIf4 === 0) {
            dataArray = [];
          }
          const data = pokemon.cards[i];
          dataArray.push(data);
          ArrayIf4++;
        }
      }
    }
    indexx++;
    ShowData();
  }

  function addPostPokedox(Data) {
    console.log(Data)
    if (parseInt(Data.hp) > 100) {
      Hp = 100;
    } else {
      Hp = parseInt(Data.hp);
    }
    try {
      if(Object.keys(Data.attacks).length){
        Str = (Object.keys(Data.attacks).length)*50;
        if(Object.keys(Data.attacks).length>1){
          if(Data.attacks[0].damage===""){
            Atk_A = 0;
            Atk_B = parseInt(Data.attacks[1].damage, 10);
          }else{
            Atk_A = parseInt(Data.attacks[0].damage, 10);
            Atk_B = parseInt(Data.attacks[1].damage, 10);
          }
        }
        else{
          if(Data.attacks[0].damage===""){
            Atk_A = 0;
            Atk_B = 0
          }else{
            Atk_A = parseInt(Data.attacks[0].damage, 10);
            Atk_B = 0
          }
        }
      }
      if(Object.keys(Data.weaknesses).length){
        Weak = (Object.keys(Data.weaknesses).length)*100;
        if(Weak>100){
          Weak = 100
        }
      }
    } catch (error) {
      console.log(Data.name)
      console.log(error)
      Weak = 0;
    }
  
     Damage = Atk_A + Atk_B;
    
    
    name = Data.name;
    if(isNaN(Damage)){
      Damage = 0
    }
    console.log(Damage)
    if (Data.subtype === "Item") {
      Hp = 0;
      Str = 0;
      Weak = 0;
      Damage = 0;
      happiness = 2;
    }else{
      happiness = parseInt(((Hp / 10) + (Damage /10 ) + (Weak/10)) / 5);
    }
   

    
    const KeyId = Data.id;
    const dataSet = addPost(
      name,
      Hp,
      Str,
      Weak,
      Damage,
      Data.imageUrl,
      happiness,
      id,
      KeyId
    );
    console.log(dataSet.next().value);
    id += 1;
  }
  const popup = document.querySelector('.popup');
  function showPopup() {
    popup.classList.add('open');
  }
  function hidePopup() {
    popup.classList.remove('open');
  }
    return (
      <div>
        <Navbar />
       <Conteiner />
      
       <div className="popup">
  <div className="blocker" onClick={()=>hidePopup()}></div>
  <div className="contents"><img className="searchImage" src="./search.png" />
        
        <input
          className="Input"
          placeholder="Fine pokemon"
          type="text"
          onInput={() => onKeyDown()}
        />
        <div className="Main">
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              KeyId={post.KeyId}
              name={post.name}
              hp={post.hp}
              str={post.str}
              weak={post.weak}
              dmg={post.damage}
              img={post.img}
              happiness={post.happiness}
              AddPost={AddPost}
              counters={counters}
              
            />
          ))}
    </div>
    </div>
  </div>   
      <button className="btn" onClick={() => showPopup()}>+</button>
      <Footer />
    </div>
       

    )
}

const mapStateToProps = function (state) {
  return {
    counters: state,
  };
};

export default connect(mapStateToProps)(App);

