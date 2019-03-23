import React from "react";

export default function CategoryItem({ header }) {
  return (
    <div class="category item">
      <div class="content">
        <div class="header">
          <h4>{header}</h4>
        </div>
      </div>
    </div>
  );
}
