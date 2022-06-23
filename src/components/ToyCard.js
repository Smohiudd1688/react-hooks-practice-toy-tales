import React from "react";

function ToyCard({id, name, image, likes, onToyDelete, onToyLike}) {
  function handleToyDelete() {
    fetch(`http://localhost:3001/toys/${id}`,{
      method:"DELETE"
    })
    .then(response => response.json())
    .then(() => onToyDelete(id));
  }

  function handleToyLike() {
    fetch(`http://localhost:3001/toys/${id}`,{
      method:"PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: likes + 1
      })
    })
    .then(response => response.json())
    .then(updatedToy => onToyLike(updatedToy))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleToyLike} className="like-btn">Like {"<3"}</button>
      <button onClick={handleToyDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
