import React from "react";
import GameItem from "../GameItem/GameItem";

export default function GameList({ games }) {
  return (
    <div className="twelve wide column">
      <h3 className="ui dividing header">Games</h3>
      <div className="ui relaxed divided game items links">
        {games ? (
          games.map(({ name, description, icon, code }) => (
            <GameItem
              key={name}
              name={name}
              description={description}
              icon={icon}
              code={code}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
