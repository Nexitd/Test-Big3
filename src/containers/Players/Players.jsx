import React from "react";
import player from "../../assets/images/Players/illustration 14.06.15.png";
import Empty from "../../components/Empty/Empty";

const Players = () => {
  return (
    <div>
      <Empty text="players" image={player} />
    </div>
  );
};

export default Players;
