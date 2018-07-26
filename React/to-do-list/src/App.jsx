/* eslint-disable */

import React, { Component } from 'react';
import ToDoList from './Components/ToDoList/ToDoList';
import Button from './Components/Button/Button';
import styles from './App.css';


class App extends Component {
    state = {
        items: [],
        item: '',
    };

    addItem = (e) => {
        e.preventDefault();

        const task = {
            text: this.state.item,
            id: Date.now()
        };

        if (this.state.item !== '') {
            this.setState(prevState => ({
                items: [task, ...prevState.items],
                item: '',
            }))
        }
    };

    itemChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    };

    deleteItem = (id) => {
        const filter = this.state.items.filter(el => el.id !== id);
        this.setState({
            items: filter
        })
    };

    updateItem = (id, text) => {
        const updateResult = this.state.items.map(el => (el.id === id ? { ...el, text: text } : el))
        this.setState({
            items: updateResult,
        })
    }

    render() {
        return (
            <div className={styles.todoListMain}>
                <div>
                    <form onSubmit={this.addItem}>
                        <input
                            placeholder='enter task'
                            className={styles.input}
                            onChange={this.itemChange}
                            name='item'
                            value={this.state.item}
                            type='text'
                        />
                        <Button type='submit' text='Add' />
                    </form>
                    <ToDoList tasks={this.state.items} deleteItem={this.deleteItem} update={this.updateItem} />
                </div>
            </div>
        );
    }
}

export default App;
