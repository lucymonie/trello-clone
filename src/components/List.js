import React from 'react';
import AddCard from './AddCard';
import Card from './Card';

const List = ({ listTitle, listId, tasks, updateTasks }) => (
<div className="list-wrapper">
  <div className="list indigo lighten-5">
    <div className="list-header"><b>{ listTitle.charAt(0).toUpperCase().concat(listTitle.slice(1)) }</b></div>
    {tasks.map((task, index) => (
      <Card key={index} task={task} />
    ))}
    <AddCard listId={listId} updateTasks={updateTasks} />
  </div>
</div>
)

export default List;
