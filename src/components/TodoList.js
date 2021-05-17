import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ( { plans } ) => {
  const items = plans.map((item) => {
    return <li><TodoListItem {...item}/></li>
  })

  return (
    <ul>
      { items }
    </ul>
  );
};