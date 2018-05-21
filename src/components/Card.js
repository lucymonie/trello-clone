import React from 'react';
import SaveCancel from './SaveCancel';

const Card = ({ task, editTask, showEditTask, handleTaskText, taskText, patchTask, onClickCancelTask }) => (
  <div className="white card-style">
    {showEditTask === task.id &&
    <div>
      <textarea className="card-input"
        onChange={(e) => handleTaskText(e.target.value)}
        value={taskText} />
      <SaveCancel
        onClickSave={ () => patchTask(task.id, { "task_text": taskText, "list_id": task.task.list_id }) }
        onClickCancel={ () => onClickCancelTask() }
      />
    </div>
    }
    {showEditTask !== task.id &&
    <div onClick={ () => editTask(task.id, task.task.task_text) }>{task.task.task_text}</div>
    }
  </div>
)

export default Card;
