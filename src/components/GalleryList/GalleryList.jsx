import React, { useEffect, useState } from 'react';
import axios from "axios";
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList() {
  const [galleryList, setGalleryList] = useState([]);

  const fetchItems = () => {
    axios.get("/api/gallery")
      .then((response) => {
        setGalleryList(response.data);
      })
      .catch((error) => {
        console.log("Error on get:", error);
      });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <table>
      {galleryList.map((item) => (
        <tr key={item.id}>
          <GalleryItem item={item} />
        </tr>
      ))}
    </table>
  );
}

export default GalleryList;