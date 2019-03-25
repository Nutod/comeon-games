import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Game from "./Game";

describe("<Game /> Snapshot", () => {
  const wrapper = shallow(<Game />);

  it("Should match snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
