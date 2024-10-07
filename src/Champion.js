import React from "react";

export default function Champion(props) {
  const { champion } = props; // object destructuring

  if (!champion || !champion.abilities) {
    return <p>Loading champion data...</p>;
  } // prevents the component from rendering if champion or champion.abilities is undefined,

  let abilities = champion.abilities;
  console.log(abilities);
  return (
    <div className="Champion">
      <h1>{champion.name}</h1>
      <h2>{champion.title}</h2>
      {/* <h3>{champion.abilities[0]}</h3> */}
      <ul>
        {abilities.map((ability, index) => (
          <li key={index}>
            <h3>{ability.ability}</h3>
            <p>{ability.description}</p>
            <img src={ability.image} alt={ability.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
