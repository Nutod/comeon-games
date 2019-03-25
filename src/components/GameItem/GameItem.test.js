import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import GameItem from "./GameItem";

describe("<GameItem /> Snapshot", () => {
  const wrapper = shallow(<GameItem />);

  it("Should match snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
