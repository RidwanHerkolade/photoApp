import React, { useState, useEffect } from "react";
import "./Gallery.css";
import GalleryDat from "./GalleryDat";
import Form from "../Form/Form";

const Gallery = () => {
  const [isImages, setIsImages] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=40231484-b2d292d01759d768c5f7d6c84&q=${term}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsImages(data.hits);
        setIsloading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="gallery__divs">
       <Form searchInput={(input) => setTerm(input)}/>
      <div className="gallery_div">
        {isImages.map((image) => {
          return <div key={image.id}><GalleryDat image={image}/></div>
        })}
      </div>
    </div>
  );
};

export default Gallery;
