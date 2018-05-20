import React from 'react';
import { shallow } from 'enzyme';
import Card from '../components/Card';

describe("Card", () => {
  it("renders consistently", () => {
    const card = shallow(<Card />);
    expect(card).toMatchSnapshot();
  });

  it("renders a task if this is passed in through props", () => {
    const task = "Buy coffee beans";
    const card = shallow(<Card task={task} />);
    expect(card.text()).toBe("Buy coffee beans");
  });

});
