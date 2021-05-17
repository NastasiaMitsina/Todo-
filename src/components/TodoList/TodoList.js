import React from 'react';
import { TodoListItem } from '../TodoListItem/TodoListItem';
import './TodoList.css';

export const TodoList = ( { plans } ) => {

  const items = plans.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className='list-group-item'><TodoListItem {...itemProps}/></li>
      );
  });

  return (
    <ul className='list-group'>
      { items }
    </ul>
  );
};