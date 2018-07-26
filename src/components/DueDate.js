import React from 'react';
import { SingleDatePicker } from 'react-dates';

class DueDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    }
  }

  render() {
    const { handleDueDate, date, taskId } = this.props;
    return (
      <div className="due-date">
        <div className="due-date-title">Due date</div>
        <SingleDatePicker
          date={date} // momentPropTypes.momentObj or null
          onDateChange={ date => handleDueDate(date) } // PropTypes.func.isRequired
          focused={this.state.focused} // PropTypes.bool
          onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
          id={taskId} // PropTypes.string.isRequired,
          noBorder={true}
          small={true}
          numberOfMonths={1}
        />
      </div>
    );
  }

}

export default DueDate;
