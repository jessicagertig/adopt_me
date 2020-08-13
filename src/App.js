const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

//your code is going to go here
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Teddy",
      animal: "Dog",
      breed: "German Shepherd",
    }),
    React.createElement(Pet, {
      name: "George",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Vashti",
      animal: "Cat",
      breed: "Calico",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
