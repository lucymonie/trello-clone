import React from 'react';
import SaveCancel from './SaveCancel';
import DueDate from './DueDate';

const Card = ({
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
}) => (
  <div className="white card-style">
    {showEditTask !== task.id &&
      <div className="hover-style cursor-pointer"
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
)

export default Card;
