import React from "react";
import teams from "../../assets/images/Teams/illustration (1).png";
import Empty from "../../components/Empty/Empty";

const Teams = () => {
  return (
    <div>
      <Empty text="teams" image={teams} />
    </div>
  );
};

export default Teams;
