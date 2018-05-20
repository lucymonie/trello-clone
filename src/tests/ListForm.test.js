import React from 'react';
import { shallow } from 'enzyme';
import ListForm from '../components/ListForm';


describe("ListForm", () => {
  it("renders consistently", () => {
    const component = shallow(<ListForm showSave={false} />);
    expect(component).toMatchSnapshot();
  });

  it("should render textEntered in the input field", () => {
    const component = shallow(<ListForm showSave={false} textEntered="" />);
    const inputField = component.find("input");
    expect(inputField.text()).toBe("");
  });

  it("should render SaveCancel if showSave is true", () => {
    const component = shallow(<ListForm showSave={true} textEntered="" />);
    const saveCancel = component.find("SaveCancel");
    expect(component).toMatchSnapshot();
  });

  describe("when focusing on the input field", () => {
    it("triggers the onFocus", () => {
      const mockEvent = jest.fn();
      const component = shallow(<ListForm showSave={false} textEntered="" onFocus={mockEvent} />);
      const inputField = component.find("input").simulate("focus");
      expect(mockEvent.mock.calls.length).toEqual(1);
    });
  });
});
