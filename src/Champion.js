import React from "react";

export default function Champion(props) {
  const { champion } = props; // object destructuring

  if (!champion || !champion.abilities) {
    return <p>Loading champion data...</p>;
  } // prevents the component from rendering if champion or champion.abilities is undefined,

  let abilities = champion.abilities;
  let passive = champion.passive;
  let ally_tips = champion.ally_tips;
  let enemy_tips = champion.enemy_tips;

  return (
    <div className="Champion">
      <h1>{champion.name}</h1>
      <h2>{champion.title}</h2>
      <h3>Passive</h3>
      <ul>
        {passive.map((passive, index) => (
          <li key={index}>
            <h3>{passive.name}</h3>
            <p>{passive.description}</p>
            <img src={passive.image} alt={passive.name} />
          </li>
        ))}
      </ul>
      <h3>Abilities</h3>
      <ul>
        {abilities.map((ability, index) => (
          <li key={index}>
            <h3>{ability.ability}</h3>
            <p>{ability.description}</p>
            <img src={ability.image} alt={ability.id} />
          </li>
        ))}
      </ul>

      <h3>Ally Tips:</h3>
      {ally_tips.map((tips, index) => (
        <li key={index}>{tips}</li>
      ))}

      <h3>Enemy Tips:</h3>
      {enemy_tips.map((tips, index) => (
        <li key={index}>{tips}</li>
      ))}

      <h3>Story</h3>
      <p>{champion.story}</p>

      <h3>Role</h3>
      <p>{champion.role}</p>
    </div>
  );
}
