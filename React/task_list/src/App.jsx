import React, {Component} from 'react';
import TaskList from './Component/TaskList/TaskList'
import Button from './Component/Button/Button.';
import styles from './App.css';

class App extends Component {

    state = {
        array: [],
        item: '',
    };

    write = (e) => {
        e.preventDefault();

        const writeItem = {
            text: this.state.item,
            id: Date.now()
        };

        if (this.state.item !== '') {
            this.setState(someText => ({
                array: [writeItem, ...someText.array],
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
        const filter = this.state.array.filter(el => el.id !== id);
        this.setState({
            array: filter
        })
    };

    updateItem = (id, word) => {
        const result = this.state.array.map(el => (el.id === id ? {...el, text: word} : el));
        this.setState({
            array: result,
        })
    };

    render() {
        return (
            <div className={styles.main}>
                <h1 className={styles.h1}>ToDo List</h1>
                <form className={styles.form} onSubmit={this.write}>
                    <input
                        type='text'
                        placeholder='New Task'
                        name='item'
                        value={this.state.item}
                        className={styles.input}
                        onChange={this.itemChange}
                    />
                    <Button type='submit' text='Create'/>
                </form>
                <TaskList array={this.state.array} deleteItem={this.deleteItem} update={this.updateItem}/>
            </div>
        );
    }
}

export default App;