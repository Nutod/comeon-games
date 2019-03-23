import React from "react";
import Logo from "../../components/assets/images/logo.svg";

export default function Header() {
  return (
    <div class="ui one column center aligned page grid">
      <div class="column twelve wide">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
}
