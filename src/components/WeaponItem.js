import React from "react";

export default function WeaponItem(props) {
  // console.log(props);
  const { type, damage } = props.weapon;
  return (
    <div>
      <p>
        <em>Type:</em> {type}
        <br></br>
        <em>Damage</em>: {damage}{" "}
      </p>
    </div>
  );
}
