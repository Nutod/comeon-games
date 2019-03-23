import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";

export default function CategoryList({ categories, filter }) {
  return (
    <div className="four wide column">
      <h3 className="ui dividing header">Categories</h3>
      <div className="ui selection animated list category items">
        {categories ? (
          categories.map(({ id, name }) => (
            <CategoryItem
              key={name}
              name={name}
              click={event => filter(event, id)}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
