import React, {useState} from "react";
import "./Card.css";
import heartOutline from "../../assets/heart-outline.png"; // Tell webpack this JS file uses this image
import heartFill from "../../assets/heart-fill.png"; // Tell webpack this JS file uses this image

export default function Card(props) {
  
  const [isToggled, setIsToggled] = useState(props.recipe.isLiked);
  const [isLikeCount, setIsLikeCount] = useState(props.recipe.likeCount);

  const handleClick = () => {

    setIsToggled(!isToggled);
    
    if (! isToggled) {
      setIsLikeCount(isLikeCount + 1);
    } else {
      setIsLikeCount(isLikeCount - 1);
    }
    
  }

  console.log(isLikeCount);

  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{props.recipe.author[0]}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{props.recipe.title}</h5>
          <div className="card-date">{props.recipe.date}</div>
        </div>
      </div>
      <img className="card-image" src={props.recipe.image} alt="Logo" />
      <div className="card-text">{props.recipe.description}</div>
      <div className="card-like-bar" onClick={handleClick}>
        {isToggled ? (
          <img className="card-like-icon" src={heartFill} alt="Logo" />
        ) : (
          <img className="card-like-icon" src={heartOutline} alt="Logo" />
        )}
        <div className="like-text">
          <b>{isLikeCount}</b> kişi bu tarifi beğendi.
        </div>
      </div>
    </div>
  );
}
