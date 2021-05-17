import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ( { plans } ) => {

  const items = plans.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id}><TodoListItem {...itemProps}/></li>
      );
  });

  return (
    <ul>
      { items }
    </ul>
  );
};