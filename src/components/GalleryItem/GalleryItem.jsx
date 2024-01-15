import React, { useState } from 'react';
import axios from 'axios';

const GalleryItem = ({ item }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [showLikes, setAddLikes] = useState(item.likes);

  const toggleDisplay = () => {
    setShowDescription(!showDescription);
  };

  const addLike = () => {
    axios.put(`/api/gallery/like/${item.id}`)
      .then(() => {
        setAddLikes(showLikes + 1);
      })
      .catch(error => {
        console.error('Error updating likes:', error);
      });
  };

  let itemSwitch;
  if (showDescription) {
    itemSwitch = <p data-testid="description">{item.description}</p>;
  } else {
    itemSwitch = <tr><img src={item.url} style={{ width: '300px'}} ></img></tr>;
  }

  return (
    <div data-testid="galleryItem">
      {itemSwitch}
      <h2>Likes: {showLikes}</h2>
      <p>
      <button data-testid="like" onClick={addLike} >Like</button> 
      <button data-testid="toggle" onClick={toggleDisplay}>
        {showDescription ? 'Show Picture' : 'Show Description'}
      </button>
        
      </p>
      </div>
  );
};

export default GalleryItem;

