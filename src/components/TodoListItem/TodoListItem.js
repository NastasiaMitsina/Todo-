import React, { Component } from 'react';
import './TodoListItem.css';


export class TodoListItem extends Component {

  constructor() {
    super();

    this.state = {
      done: false,
      important: false
    };

    this.labelOnClick = () => this.setState({ done: true });
    this.markImportant = () => this.setState({ important: true });
  } 

  render() {
    const { label } = this.props;
    const { done, important } = this.state;
    let classNames = "todo-list-item";
    if(done) classNames += ' done';
    if(important) classNames += ' important';
    
    return (
        <span className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={this.labelOnClick}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-end"
              onClick={this.markImportant}>
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-end">
        <i className="fa fa-trash-o" />
      </button>
    </span>
    );
  }
};