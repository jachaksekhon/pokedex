import React from 'react'
import "./Pokecard.css"

function Pokecard({pokemon, loading}) {
  // console.log(pokemon);

  function addZero ({number}) {
    if (number < 100) return "#0" + number;
    else return "#" + number;
  };

  return (
    <>
      {
        loading ? <h1>Loading PokeData...</h1> :
          pokemon.map((item) => {
            return(
              <>
                <div className = "pokecard">
                    <h2>
                      <>
                        {item.id}
                      </>
                    </h2>
                    <img src={item.sprites.front_default} alt="" />
                    <h2>{item.name}</h2>
                </div>
              </>
            )
          })
      }
      
    </>
    
  )
}

export default Pokecard