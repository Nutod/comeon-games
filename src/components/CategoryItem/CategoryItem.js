import React, { memo } from "react";
import PropTypes from "prop-types";

function CategoryItem({ name }) {
  return (
    <div className="category item">
      <div className="content">
        <div className="header">
          <h4>{name && name}</h4>
        </div>
      </div>
    </div>
  );
}

CategoryItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default memo(CategoryItem);
