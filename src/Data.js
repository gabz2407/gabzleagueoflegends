import axios from "axios";
import React, { useState } from "react";
import Champion from "./Champion";

export default function Data() {
  const [champion, setChampion] = useState(""); // State to hold the search term
  const [championData, setChampionData] = useState(null); // State to hold the champion data

  function getResponse(response) {
    const data = response.data;

    let abilities = [];
    for (let i in data.abilities) {
      abilities.push(data.abilities[i]); // Push each ability into the abilities array
    }

    let champion_data = {
      name: data.champion,
      title: data.title,
      abilities: abilities,
      ally_tips: data.ally_tips,
      enemy_tips: data.enemy_tips,
      passive: data.passive,
      story: data.story,
      skins: data.skins,
      role: data.role,
    };
    console.log(champion_data);
    setChampionData(champion_data);
  }

  function searchChampion(event) {
    event.preventDefault();

    const apiUrl = `https://gabzleagueoflegends-apiddragon.onrender.com/champions/${champion}`;
    axios
      .get(apiUrl)
      .then(getResponse)
      .catch((error) => console.error("Error fetching champion data:", error));
  }

  return (
    <div className="Data">
      <form onSubmit={searchChampion}>
        <input
          type="text"
          placeholder="Search your champion"
          value={champion}
          onChange={(e) => setChampion(e.target.value)} // Update state on input change
        />
        <button type="submit">
          <span role="img">🔍</span>
        </button>
      </form>
      {championData && <Champion champion={championData} />}
      {/* render the Champion component only if data is available */}
    </div>
  );
}
