import React, { Component } from 'react';
import './TodoListItem.css';


export class TodoListItem extends Component {
  render() {
    const { label, onDeleted, onToogleImportant, onToogleDone, done, important } = this.props;
    let classNames = "todo-list-item";
    if(done) classNames += ' done';
    if(important) classNames += ' important';
    
    return (
        <span className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={onToogleDone}>
        {label}
      </span>
      <button type="button"
              className="btn btn-outline-success btn-sm float-end"
              onClick={onToogleImportant}>
        <i className="fa fa-exclamation" />
      </button>
      <button type="button"
              className="btn btn-outline-danger btn-sm float-end"
              onClick={onDeleted}>
        <i className="fa fa-trash-o" />
      </button>
    </span>
    );
  }
};