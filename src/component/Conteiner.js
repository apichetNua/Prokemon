import React from 'react'
import { connect } from 'react-redux'
import PostData from './PostDataAdd.js'
let keepPokemonSatet ={};
const Conteiner=({counters,dispatch})=> {
    function DeleteData(id) {
        dispatch({
          type: "Delete",
          id
        });
      }

    function PokemonSatet(){
        try {
            keepPokemonSatet =  counters
                
        } catch (error) { 
        }
      }
      PokemonSatet();
      
        return (
        <div className="ConNer">
                {keepPokemonSatet.counters.map((post) => (
          <PostData
            key={post.id}
            id={post.id}
            name={post.name}
            hp={post.hp}
            str={post.str}
            weak={post.weak}
            dmg={post.damage}
            img={post.img}
            happiness={post.happiness}
            DeleteData={DeleteData}
          />
        ))}
            </div>
        )
 }
 const mapStateToProps = function (state) {
    return {
        counters: state,
    };
  };
  
  export default connect(mapStateToProps)(Conteiner);

    
