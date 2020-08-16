import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Teddy",
  //     animal: "Dog",
  //     breed: "German Shepherd",
  //   }),
  //   React.createElement(Pet, {
  //     name: "George",
  //     animal: "Bird",
  //     breed: "Cockatiel",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Vashti",
  //     animal: "Cat",
  //     breed: "Calico",
  //   }),
  // ]);
  return (
    <div>
      <h1 id='something important'>Adopt Me!</h1>
      <Pet name="Teddy" animal="Dog" breed="German Shepherd" />
      <Pet name="George" animal="Bird" breed="Cockatiel" />
      <Pet name="Vashti" animal="Cat" breed="Calico" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
