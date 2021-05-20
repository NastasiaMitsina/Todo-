import React, { Component } from 'react';
import './SearchPanel.css';

export class SearchPanel extends Component {
    constructor() {
        super();

        this.state = {
            currentText: ''
        }

        this.onSearchChange = (event) => {
            const currentText = event.target.value;
            this.setState({ currentText });
            this.props.onSearchChange(currentText);
        }
    }

    render() {
        return <input className="form-control search-input" 
                      placeholder='Tap here to search'
                      value={this.state.currentText}
                      onChange={this.onSearchChange}
                />;
    }
};