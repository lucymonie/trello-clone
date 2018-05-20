import React from 'react';
import { shallow } from 'enzyme';
import SaveCancel from '../components/SaveCancel';


describe("SaveCancel", () => {
  it("renders consistently", () => {
    const component = shallow(<SaveCancel />);
    expect(component).toMatchSnapshot();
  });

  describe("when clicking the Save button", () => {
    it("triggers the onClick", () => {
      const mockEvent = jest.fn();
      const component = shallow(<SaveCancel onClickSave={mockEvent} />);
      component.find('button').simulate("click");
      expect(mockEvent.mock.calls.length).toEqual(1);
    });
  });

  describe("when clicking the Cancel button", () => {
    it("triggers the onClick", () => {
      const mockEvent = jest.fn();
      const component = shallow(<SaveCancel onClickCancel={mockEvent} />);
      component.find('span').simulate("click");
      component.find('span').simulate("click");
      expect(mockEvent.mock.calls.length).toEqual(2);
    });
  });
});
