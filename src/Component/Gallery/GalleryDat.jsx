import React from "react";
import "./Gallery.css";

const GalleryDat = ({image}) => {
  const tags = image.tags.split(',')
  return (
    <div className="gallery__dat">
      <div className="img">
        <img
          src={image.webformatURL}
          alt=""
        />
      </div>
      <div className="header">Photo by {image.user}</div>
      <div className="header__con">
        <div className="content">
          views: <span>{image.views}</span>
        </div>
        <div className="content">
          downloads: <span>{image.downloads}</span>
        </div>
        <div className="content">
          likes: <span>{image.likes}</span>
        </div>
      </div>
      <div className="tags">  
         {tags.map((tag, index) => {
             return (
                <button key={index} className="btn">#{tag}</button>
             )
         })}
      </div>
    </div>
  );
};

export default GalleryDat;
