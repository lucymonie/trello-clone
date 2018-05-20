import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

describe("Header", () => {
  it("renders consistently", () => {
    const header = shallow(<Header />);
    expect(header).toMatchSnapshot();
  });

  it("renders a title if this is passed in through props", () => {
    const title = "Title";
    const header = shallow(<Header title={title} />);
    expect(header.text()).toBe("Title");
  });
  
});
