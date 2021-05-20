import React, { Component } from 'react';
import './ItemStatusFilter.css';

export class ItemStatusFilter extends Component {
  constructor() {
    super();
    this.buttons = [
      {name: 'all', label: 'All'},
      {name: 'active', label: 'Active'},
      {name: 'done', label: 'Done'}
    ]
  }

  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      const clazz = this.props.filter === name ? 'btn-info' : 'btn-outline-secondary'
      return (
        <button type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => this.props.onFilterChange(name)}
        >
                  {label}
        </button>
      )
    })

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
};