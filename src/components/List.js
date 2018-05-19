import React from 'react';
import AddCard from './AddCard';

const List = ({ listTitle, listId }) => (
<div className="list-wrapper">
  <div className="list indigo lighten-5">
    <div className="list-header"><b>{ listTitle.charAt(0).toUpperCase().concat(listTitle.slice(1)) }</b></div>
    <AddCard listId={listId} />
  </div>
</div>
)

export default List;
