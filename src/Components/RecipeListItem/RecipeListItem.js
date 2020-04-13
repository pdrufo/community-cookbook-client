import React from "react";
import { Link } from "react-router-dom";
import "./RecipeListItem.css";

export default function RecipeListItem(props) {
  return (
    <Link to={`/recipes/${props.data.id}`} className="recipe-list-details ">
      <div className="recipe-list-item">
        <h3 className="recipe-list-details">{props.data.title}</h3>
        <h4 className="recipe-list-details">Recipe By: {props.data.source}</h4>
      </div>
    </Link>
  );
}
RecipeListItem.defaultProps = {
  data: {
    id: 1,
    title: "",
    source: "",
  },
};
