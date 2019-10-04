import React from "react";
import WeaponItem from "./WeaponItem";
import uuid from "uuid";

export default function Hero(props) {
  // console.log("HERO PROPS", props);
  const { name, health, inventory } = props.hero;
  return (
    <div>
      <h1>Our Hero</h1>
      <h2>{name}</h2>
      <h3>Health</h3>
      <p>
        {health}
        <br></br>
        <br></br>
        <button onClick={props.updateHealth}>Rest</button>
      </p>
      <h3>Weapons</h3>
      <button onClick={props.battarang}>Battarang</button>{" "}
      <button onClick={props.stunGrenade}>Stun Grenade</button>
      <h3>Weapons used </h3>
      {inventory.map(weapon => {
        return <WeaponItem key={uuid.v4()} weapon={weapon} />;
      })}
    </div>
  );
}
