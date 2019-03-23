import React from "react";
import styled from "styled-components";

const SearchWrapper = styled.div`
  /* @media only screen and (max-width: 500px) {
    order: -3;
    margin-left: 9rem;
  } */
`;

export default function Search({ searchValue, changed }) {
  return (
    <SearchWrapper className="four wide column">
      <div className="search ui small icon input ">
        <input
          type="text"
          value={searchValue}
          onChange={changed}
          placeholder="Search Game"
        />
        <i className="search icon" />
      </div>
    </SearchWrapper>
  );
}
