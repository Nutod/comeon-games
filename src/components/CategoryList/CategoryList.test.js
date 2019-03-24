import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CategoryList from "./CategoryList";

describe("<CategoryList /> Snapshot", () => {
  const wrapper = shallow(<CategoryList />);

  it("Should match snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
