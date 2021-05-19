import React, { Component } from 'react';
import './AddItem.css';

export class AddItem extends Component {
    constructor() {
        super();

        this.state = {
            label: ''
        }
        
        this.onLabelChange = (event) => {
            this.setState({
                label: event.target.value
            })
        }
        this.onSubmit = (event) => {
            event.preventDefault();
            this.props.onAddToDo(this.state.label)
        }
    }

    render(){
        return (
            <form className='add-item d-flex' onSubmit={this.onSubmit}>
                <input type='text' 
                       className='form-control' 
                       placeholder='What needs to be done'
                       onChange={this.onLabelChange}
                />
                <button className='btn btn-outline-secondary'
                        onClick={() => this.onSubmit}>
                    Add item
                </button>
            </form>
        )
    }
}