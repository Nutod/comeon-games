import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Login from "./Login";

// TODO: Fix smoke test
describe("<Login /> Snapshot", () => {
  const wrapper = shallow(<Login />);

  it("Should match snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
