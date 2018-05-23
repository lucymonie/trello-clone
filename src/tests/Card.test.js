import React from 'react';
import { shallow } from 'enzyme';
import Card from '../components/Card';

const task = {
  task: {
    task_text: "Buy coffee beans",
    list_id: 4
  },
  id: 2
}

describe("Card", () => {
  it("renders consistently", () => {
    const card = shallow(<Card task={task} />);
    expect(card).toMatchSnapshot();
  });

  it("renders a task if this is passed in through props and showEditTask prop doesn't match", () => {
    const card = shallow(<Card task={task} showEditTask={null} />);
    expect(card.text()).toBe("Buy coffee beans");
  });

  it("should render taskText in the input field if showEditTask matches task id", () => {
    const card = shallow(<Card task={task} showEditTask={2} taskText="Bake cookies" />);
    const textarea = card.find("textarea");
    expect(textarea.props().value).toBe("Bake cookies");
  });

  describe("when clicking the Card", () => {
    it("triggers the onClick", () => {
      const mockEvent = jest.fn();
      const card = shallow(<Card task={task} editTask={mockEvent} />);
      card.find('div').at(1).simulate("click");
      expect(mockEvent.mock.calls.length).toEqual(1);
    });
  });

  describe("when typing intp the textarea", () => {
    it("triggers the handleTaskText", () => {
      const mockEvent = jest.fn();
      const card = shallow(<Card task={task} showEditTask={2} handleTaskText={mockEvent} taskText="One thing" />);
      const textarea = card.find('.card-input');
      textarea.simulate('change', { target: { value: 'Changed' } });
      expect(mockEvent.mock.calls.length).toEqual(1);
    });
  });

});
