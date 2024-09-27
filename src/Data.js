import axios from "axios";
import React, { useState } from "react";

export default function Data() {
  const [champion, setChampion] = useState(""); // State to hold the search term

  function getResponse(response) {
    console.log(response.data);
  }

  function searchChampion(event) {
    event.preventDefault(); // Prevent form from submitting in the default way

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
        <button type="submit">🔍</button>
      </form>
    </div>
  );
}
