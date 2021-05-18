import React, { Component } from 'react';
import './AddItem.css';

export class AddItem extends Component {
    render(){
        const { onAddToDo } = this.props;
        return (
            <div className='add-item'>
                <button className='btn btn-outline-secondary'
                        onClick={() => onAddToDo('Hello world')}>
                    Add item
                </button>
            </div>
        )
    }
}