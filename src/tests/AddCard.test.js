import React from 'react';
import { shallow } from 'enzyme';
import AddCard from '../components/AddCard';


describe("AddCard", () => {
  it("renders consistently", () => {
    const component = shallow(<AddCard updateTasks={jest.fn()} />);
    expect(component).toMatchSnapshot();
  });

  it("should render 'Add a card...' if showAdd is false", () => {
    const component = shallow(<AddCard updateTasks={jest.fn()} showAdd={false} />);
    const firstDiv = component.find("div").at(0);
    expect(firstDiv.text()).toBe("Add a card...");
  });

  it("should render a textarea if showAdd is true", () => {
    const mockEvent = jest.fn();
    const component = shallow(<AddCard updateTasks={mockEvent} showAdd={true} />);
    const textarea = component.find("textarea");
    expect(textarea).toMatchSnapshot();
  });

  describe("when clicking the Add a card div", () => {
    it("triggers the onClick", () => {
      const mockEvent = jest.fn();
      const component = shallow(<AddCard updateTasks={mockEvent} showAdd={false} />);
      const firstDiv = component.find("div").at(0);
      firstDiv.simulate("click");
      expect(mockEvent.mock.calls.length).toEqual(1);
    });
  });

});
