import React from 'react';
import moment from 'moment';
import SaveCancel from './SaveCancel';
import DueDate from './DueDate';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lateNess: null
    }
  }

  componentDidMount() {
    const { existingDate } = this.props;
    const diff = this.dateCalculator(existingDate);
    if (isNaN(diff) === false) {
      this.setState({ lateNess: diff });
    }

  }

  dateCalculator = (existingDate) => {
    const dueDate = moment(existingDate).format('MM/DD/YYYY');
    const timeNow = moment().format('MM/DD/YYYY');
    return ((new Date(dueDate) - new Date(timeNow)) / (1000 * 3600 * 24));
  }

  render() {
    const {
      task,
      editTask,
      showEditTask,
      handleTaskText,
      handleDueDate,
      date,
      existingDate,
      taskText,
      patchTask,
      onClickCancelTask
    } = this.props;
    const { lateNess } = this.state;

    return (
      <div className="white card-style">
        {showEditTask !== task.id &&
          <div className={`${lateNess <= -3 ? "red-text" : ""} hover-style cursor-pointer`}
            onClick={ () => editTask(task.id, task.task.task_text) }>{task.task.task_text}</div>
        }
        {showEditTask === task.id &&
          <div>
            <textarea className="card-input card-textarea blue-grey lighten-5"
              onChange={(e) => handleTaskText(e.target.value)}
              value={taskText} />
            <DueDate
              handleDueDate={handleDueDate}
              date={date}
              existingDate={existingDate}
             />
            <SaveCancel
              onClickSave={ () => patchTask(task.id, {
                "task_text": taskText,
                "list_id": task.task.list_id,
                "due_date": date
              }) }
              onClickCancel={ () => onClickCancelTask() }
            />
          </div>
        }
      </div>
    );
  }
}

export default Card;
