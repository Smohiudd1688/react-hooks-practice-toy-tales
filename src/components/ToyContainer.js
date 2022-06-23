import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onToyDelete, onToyLike}) {
  const renderToys = toys.map(toy => {
    return <ToyCard 
              key={toy.id}
              id={toy.id}
              name={toy.name}
              image={toy.image}
              likes={toy.likes}
              onToyDelete={onToyDelete}
              onToyLike={onToyLike}
          />
  });

  return (
    <div id="toy-collection">{renderToys}</div>
  );
}

export default ToyContainer;
