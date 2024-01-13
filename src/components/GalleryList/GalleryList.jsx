import React from 'react';
import axios from "axios";
import GalleryItem from '../GalleryItem/GalleryItem';
import { useEffect, useState } from "react";

function GalleryList() {
let [galleryList, setGalleryList] = useState([]);
// Function to get the creatures from the server/database
const fetchItems = () => {
  axios
    .get("/api/gallery")
    .then((response) => {
      // The actual array comes from the data attribute on the response
      // Set data into component state
      setGalleryList(response.data);
    })
    .catch(function (error) {
      console.log("Error on get:", error);
    });
};
useEffect(() => {
  fetchItems();
}, []);
return (
<ul>
{galleryList.map((item) => (
  <li  data-testid="galleryItem" key={item.id}>
<GalleryItem data-testid="galleryItem" item={item} />
  </li>
))}
</ul>
)}

export default GalleryList