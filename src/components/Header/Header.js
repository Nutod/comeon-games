import React from "react";
import Logo from "../../components/assets/images/logo.svg";

export default function Header() {
  return (
    <div className="ui one column center aligned page grid">
      <div className="column twelve wide">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
}
