import React from "react";
import PropTypes from "prop-types";

export default function CategoryItem({ header }) {
  return (
    <div class="category item">
      <div class="content">
        <div class="header">
          <h4>{header.toUpperCase()}</h4>
        </div>
      </div>
    </div>
  );
}

CategoryItem.propTypes = {
  header: PropTypes.string.isRequired
};
