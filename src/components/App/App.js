import React, { Component } from 'react';
import { TodoList } from '../TodoList/TodoList';
import { SearchPanel } from '../SearchPanel/SearchPanel';
import { AppHeader } from '../AppHeader/AppHeader';
import { ItemStatusFilter } from '../ItemStatusFilter/ItemStatusFilter';
import './App.css';


export class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {label: 'Drink coffee', important: false, id: 1},
        {label: 'Build an awesome App', important: true, id: 2},
        {label: 'Wash the dishes', important: false, id: 3},
      ]
    };

    this.deleteItem = (id) => {
      this.setState(( { todos } ) => {
        const index = todos.findIndex((el) => el.id === id)
        const newArray = [
          ...todos.slice(0, index),
          ...todos.slice(index + 1)
        ]
        return {
          todos: newArray
        }
      })
    }
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        
        <TodoList 
          plans={this.state.todos}
          onDeleted={this.deleteItem}
        />
      </div>
    )
  }
}