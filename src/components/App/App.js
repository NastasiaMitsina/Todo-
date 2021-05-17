import React from 'react';
import { TodoList } from '../TodoList/TodoList';
import { SearchPanel } from '../SearchPanel/SearchPanel';
import { AppHeader } from '../AppHeader/AppHeader';
import { ItemStatusFilter } from '../ItemStatusFilter/ItemStatusFilter';
import './App.css';


export const App = () => {
   const todos = [
     {label: 'Drink coffee', important: false, id: 1},
     {label: 'Build an awesome App', important: true, id: 2},
     {label: 'Wash the dishes', important: false, id: 3},
   ]

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      
      <TodoList plans={todos}/>
    </div>
  )
}