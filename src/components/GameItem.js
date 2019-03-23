import React from "react";
import GameIcon from "../components/assets/images/game-icon/starburst.jpg";

export default function GameItem() {
  return (
    <div class="game item">
      <div class="ui small image">
        <img src={GameIcon} alt="game-icon" />
      </div>
      <div class="content">
        <div class="header">
          <b class="name">Starburst</b>
        </div>
        <div class="description">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
            eligendi voluptatibus reiciendis consequuntur, ipsa rem alias
            cupiditate accusantium necessitatibus laborum quia unde, id
            distinctio aliquam magnam quae recusandae numquam sapiente!
          </p>
        </div>
        <div class="extra">
          <div class="play ui right floated secondary button inverted">
            Play
            <i class="right chevron icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
