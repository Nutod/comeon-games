import React from "react";
import PropTypes from "prop-types";

export default function CategoryItem({ header }) {
  return (
    <div className="category item">
      <div className="content">
        <div className="header">
          <h4>{header.toUpperCase()}</h4>
        </div>
      </div>
    </div>
  );
}

CategoryItem.propTypes = {
  header: PropTypes.string.isRequired
};
