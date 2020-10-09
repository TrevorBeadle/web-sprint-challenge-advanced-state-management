import React from "react";

export const Smurf = props => {
  return (
    <article className="smurf">
      <h4>Name: {props.smurf.name}</h4>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
    </article>
  );
};
