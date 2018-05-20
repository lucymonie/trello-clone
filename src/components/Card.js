import React from 'react';

const Card = ({ task }) => (
  <div className="white card-style">
    <span>{task.task.task_text}</span>
  </div>
)

export default Card;
