import { useState } from "react";

const NewsList = ({ title, description, src, url }) => {
  const [imgError, setImgError] = useState(false);

  const safeTitle = title && title.trim() !== "" ? title : "No Title";
  const safeDescription = description && description.trim() !== "" 
    ? description.slice(0, 90) 
    : "News is getting uploaded, wait for a few moments";
  const safeUrl = url && url.trim() !== "" ? url : "#";
  const placeholderImg = "https://via.placeholder.com/345x180?text=No+Image";

  return (
    <div 
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" 
      style={{ maxWidth: "345px" }}
    >
      <img
        src={imgError || !src ? placeholderImg : src}
        className="card-img-top"
        alt={safeTitle}
        onError={() => setImgError(true)}
      />
      <div className="card-body">
        <h5 className="card-title">{safeTitle}</h5>
        <p className="card-text">{safeDescription}</p>
        <a href={safeUrl} className="card-link" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsList;
