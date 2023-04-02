import React, { useEffect, useState } from 'react'
import Pokecard from './Pokecard'
import "./Pokelist.css"
import axios from "axios";

function Pokelist() {

  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

  const [nextUrl, setNextUrl] = useState();
  const [previousUrl, setPreviousUrl] = useState();


  const getAndSetPokes =  async() => {
    setLoading(true);
    const res = await axios.get(url);
    //console.log(res.data.results);
    // set the next and previous buttons to the new data
    setNextUrl(res.data.next);
    setPreviousUrl(res.data.previous);
    grabPokemon(res.data.results);
    // console.log(pokeData);
    setLoading(false);
  };

  const grabPokemon = async(res) => {
    res.map(async(eachPokemon) => {
      const result = await axios.get(eachPokemon.url);
      // console.log(result.data);
      setPokeData(state=>{
        state=[...state,result.data]
        return state;
      })
    })
  }

  // responsible for updating the list of pokemon
  useState(() => {
    getAndSetPokes();
  }, [url]);

  return (
    <div className = "pokelist">
      <Pokecard pokemon = {pokeData} loading = {loading}/>
      
    </div>
  )
}

export default Pokelist