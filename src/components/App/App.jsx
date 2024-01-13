
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import GalleryList from "../GalleryList/GalleryList";

function App() {

  
  return (
    <div>
       <GalleryList data-testid="galleryList" />
      </div>
    );
}

export default App;
