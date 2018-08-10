import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const DueDate = ({ date, existingDate, handleDueDate }) => (
  <div className="due-date">
    <div className="due-date-title due-date-inline">Due date:</div>
    <div className="date-picker due-date-inline">
      <DatePicker
        selected={ date ? date : existingDate ? moment(existingDate) : null }
        onChange={ date => handleDueDate(date) }
        placeholderText="Click to select a date"
      />
    </div>
  </div>
);

export default DueDate;
