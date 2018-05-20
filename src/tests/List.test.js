import React from 'react';
import { shallow } from 'enzyme';
import List from '../components/List';


describe("List", () => {
  it("renders consistently", () => {
    const component = shallow(<List updateTasks={jest.fn()} listTitle="" tasks={[]} />);
    expect(component).toMatchSnapshot();
  });

  it("should render the capitalised list title that is passed in", () => {
    const component = shallow(<List updateTasks={jest.fn()} listTitle="learning" tasks={[]} />);
    const titleDiv = component.find("div").at(2);
    expect(titleDiv.text()).toBe("Learning");
  });

});
