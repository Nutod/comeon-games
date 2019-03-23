import React from "react";
import GameIcon from "../../components/assets/images/game-icon/starburst.jpg";

export default function GameItem() {
  return (
    <div className="game item">
      <div className="ui small image">
        <img src={GameIcon} alt="game-icon" />
      </div>
      <div className="content">
        <div className="header">
          <b className="name">Starburst</b>
        </div>
        <div className="description">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
            eligendi voluptatibus reiciendis consequuntur, ipsa rem alias
            cupiditate accusantium necessitatibus laborum quia unde, id
            distinctio aliquam magnam quae recusandae numquam sapiente!
          </p>
        </div>
        <div className="extra">
          <div className="play ui right floated secondary button inverted">
            Play
            <i className="right chevron icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
