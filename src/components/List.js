import React from 'react';
import AddCard from './AddCard';
import Card from './Card';

const List = ({
  listTitle,
  listId,
  tasks,
  updateTasks,
  editTask,
  handleTaskText,
  handleDueDate,
  date,
  taskText,
  showEditTask,
  patchTask,
  onClickCancelTask
}) => (
<div className="list-wrapper">
  <div className="list blue-grey lighten-4">
    <div className="list-header"><b>{ listTitle.charAt(0).toUpperCase().concat(listTitle.slice(1)) }</b></div>
    {tasks.map((task, index) => (
      <Card
        key={index}
        task={task}
        editTask={editTask}
        handleTaskText={handleTaskText}
        handleDueDate={handleDueDate}
        date={date}
        taskText={taskText}
        showEditTask={showEditTask}
        patchTask={patchTask}
        onClickCancelTask={onClickCancelTask}
      />
    ))}
    <AddCard listId={listId} updateTasks={updateTasks} />
  </div>
</div>
)

export default List;
