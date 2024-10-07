import axios from "axios";
import React, { useState } from "react";

export default function Data() {
  const [champion, setChampion] = useState(""); // State to hold the search term

  function getResponse(response) {
    const data = response.data;
    console.log(data);

    let name = data.champion;
    let title = data.title;
    let abilities = data.abilities;
    let ally_tips = data.ally_tips;
    let enemy_tips = data.enemy_tips;
    let passive = data.passive;
    let story = data.story;
    let lore = data.lore;
    let skins = data.skins;
    let role = data.role;
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
      <h1>{champion}</h1>
    </div>
  );
}
