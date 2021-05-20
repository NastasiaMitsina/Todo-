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
      ],
      searchText: '',
      filter: 'all' // all, active, done
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
    this.onToogleProp = (arr, id, propName) => {
      const index = arr.findIndex((el) => el.id === id);
      const copyArr = arr[index];
      const newItem = {
        ...copyArr,
        [propName]: !copyArr[propName]
      };
      return [
        ...arr.slice(0, index),
        newItem,
        ...arr.slice(index + 1)
      ]
    }; 
    this.onToogleDone = (id) => {
      this.setState(( { todos } ) => {
        return {
          todos: this.onToogleProp(todos, id, 'done')
        }
      })
    }
    this.onToogleImportant = (id) => {
      this.setState(( { todos } ) => {
        return {
          todos: this.onToogleProp(todos, id, 'important')
        }
      })
    }
    this.search = (arr, text) => {
      if(text.length === 0) return arr;
      return arr.filter((todo) => todo.label.toLowerCase().indexOf(text.toLowerCase()) > -1);
    }
    this.onSearchChange = (currentText) => {
      this.setState({ 
        searchText: currentText });
    };
    this.filter = (items, filter) => {

      switch(filter){
        case 'all':
          return items;
        case 'active': 
          return items.filter((item) => !item.done);
        case 'done':
          return items.filter((item) => item.done);
        default: 
          return items;
      }
    }
    this.onFilterChange = (filter) => {
      this.setState({ filter });
    };
  }

  render() {
    const { todos, searchText, filter } = this.state;
    const visibleToDo = this.filter(this.search(todos, searchText), filter);
    let countDone = todos.filter((el) => el.done === true).length;
    let countTodo = todos.length - countDone;

    return (
      <div className="todo-app">
        <AppHeader toDo={countTodo} 
                   done={countDone} 
        />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange}/>
          <ItemStatusFilter filter={filter}
                            onFilterChange={this.onFilterChange} />
        </div>
        <TodoList 
          plans={visibleToDo}
          onDeleted={this.deleteItem}
          onToogleImportant={this.onToogleImportant}
          onToogleDone={this.onToogleDone}
        />
        <AddItem onAddToDo={this.onAddToDo}/>
      </div>
    )
  }
}