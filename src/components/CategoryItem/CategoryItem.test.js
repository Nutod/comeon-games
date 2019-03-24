import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CategoryItem from "./CategoryItem";

describe("<CategoryItem /> Snapshot", () => {
  const wrapper = shallow(<CategoryItem />);

  it("Should match snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
