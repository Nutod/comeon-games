import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import GameList from "./GameList";

describe("<GameList /> Snapshot", () => {
  const wrapper = shallow(<GameList />);

  it("Should match snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
