import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(response => response.json())
    .then(toyList => setToys(toyList));
  }, []);

  function handleNewToySubmit(newToy) {
    setToys([...toys, newToy]);
  }

  function handleToyDelete(id) {
    const updatedToys = toys.filter(toy => {
      return toy.id !== id;
    });

    setToys(updatedToys);
  }

  function handleToyLike(updatedToy) {
    const updatedToys = toys.map(toy => {
      if (toy.id === updatedToy.id) {
        return updatedToy;
      } else {
        return toy;
      }
    });

    setToys(updatedToys);
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onNewToySubmit={handleNewToySubmit} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onToyDelete={handleToyDelete} onToyLike={handleToyLike} />
    </>
  );
}

export default App;
