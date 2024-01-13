import React, { useState } from 'react';

const GalleryItem = ({ item }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDisplay = () => {
    setShowDescription(!showDescription);
  };

  let clicked;
  if (showDescription) {
    clicked = <p>{item.description}</p>;
  } else {
    clicked = <img src={item.url} />;
  }

  return (
    <div data-testid="galleryItem">
      {clicked}
      <button onClick={toggleDisplay}>
        {showDescription ? 'Show Picture' : 'Show Description'}
      </button>
    </div>
  );
};

export default GalleryItem;
