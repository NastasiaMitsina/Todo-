import React, { Component } from 'react';
import { TodoList } from '../TodoList/TodoList';
import { SearchPanel } from '../SearchPanel/SearchPanel';
import { AppHeader } from '../AppHeader/AppHeader';
import { ItemStatusFilter } from '../ItemStatusFilter/ItemStatusFilter';
import { AddItem } from '../AddItem/AddItem';
import './App.css';


export class App extends Component {
  constructor() {
    super();

    this.maxId = 100;
    this.createTodoItem = (label) => {
      return {
        label,
        important: false,
        done: false,
        id: this.maxId++
      }
    }
    
    this.state = {
      todos: [
        this.createTodoItem('Drink coffee'),
        this.createTodoItem('Build an awesome App'),
        this.createTodoItem('Wash the dishes')
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
    this.onAddToDo = (text) => {
      const newItem = this.createTodoItem(text);

      this.setState(( { todos } ) => {
        const newArray = [
          ...this.state.todos,
          newItem
        ]
        return {
          todos: newArray
        }
      })
    }
    this.onToogleDone = (id) => {
      this.setState(( { todos } ) => {
        const index = todos.findIndex((el) => el.id === id);
        const copyArr = todos[index];
        const newItem = {
          ...copyArr,
          done: !copyArr.done
        }
        const newArr = [
          ...todos.slice(0, index),
          newItem,
          ...todos.slice(index + 1)
        ]
        return {
          todos: newArr
        }
      })
    }
    this.onToogleImportant = (id) => {
      console.log('Important', id)
    }
  }

  render() {
    let countDone = this.state.todos.filter((el) => el.done === true).length;
    let countTodo = this.state.todos.length - countDone;

    return (
      <div className="todo-app">
        <AppHeader toDo={countTodo} done={countDone} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList 
          plans={this.state.todos}
          onDeleted={this.deleteItem}
          onToogleImportant={this.onToogleImportant}
          onToogleDone={this.onToogleDone}
        />
        <AddItem onAddToDo={this.onAddToDo}/>
      </div>
    )
  }
}