import React, {Component} from 'react';
import axios from 'axios';
import TaskList from './Component/TaskList/TaskList';
import Button from './Component/Button/Button.';
import styles from './App.css';

class App extends Component {

    state = {
        array: [],
        item: '',
    };

    componentDidMount() {
        axios.get('http://localhost:3001/tasks')
            .then(({status, data}) => {
                if (status === 200) {
                    this.setState({
                        array: data,
                    })
                }
            })
    }


    write = (e) => {
        e.preventDefault();

        const task = {text: this.state.item};
        axios.post('http://localhost:3001/tasks', task).then(({data, status}) => {
            if (status === 201) {
                this.setState(prev => ({
                    array: [data, ...prev.array],
                    item: '',
                }))
            }
        })

        // const writeItem = {
        //     text: this.state.item,
        //     id: Date.now()
        // };
        //
        // if (this.state.item !== '') {
        //     this.setState(someText => ({
        //         array: [writeItem, ...someText.array],
        //         item: '',
        //     }))
        // }
    };

    itemChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    };

    deleteItem = (id) => {
        axios.delete(`http://localhost:3001/tasks/${id}`)
            .then(({status}) => {
                if (status === 200) {
                    this.setState({
                        array: this.state.array.filter(el => el.id !== id)
                    })
                }
            })


        // const filter = this.state.array.filter(el => el.id !== id);
        // this.setState({
        //     array: filter
        // })
    };

    updateItem = (id, word) => {
        const task = this.state.array.find(el => el.id === id);
        axios.put(`http://localhost:3001/tasks/${id}`, {...task, text: word})
            .then(({status, data}) => {
                if (status === 200) {
                    this.setState({
                        array: this.state.array.map(el => el.id === id ? data : el)
                    })
                }
            })

        // const result = this.state.array.map(el => (el.id === id ? {...el, text: word} : el));
        // this.setState({
        //     array: result,
        // })
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